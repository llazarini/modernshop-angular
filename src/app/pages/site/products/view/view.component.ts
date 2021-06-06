import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../services/guest/product/product.service';
import {IProduct} from '../../../../interfaces/IProduct';
import {ActivatedRoute, Router} from '@angular/router';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {AlertService} from '../../../../services/alert/alert.service';
import {IOption} from '../../../../interfaces/IOption';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
    public loading: number = 0;
    public product: IProduct;
    private id: number;
    public postalCode: string;
    public shipping: Array<any>;
    public options: Array<IOption> = [];

    constructor(
        private productService: ProductService,
        private activatedRoute: ActivatedRoute,
        private checkoutService: CheckoutService,
        private router: Router,
        private alertService: AlertService,
        private titleService: Title,
        private metaService: Meta
    ) {}

    public ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;
        this.shipping = this.checkoutService.shipping;
        this.postalCode = this.checkoutService.postalCode;
        this.show();
    }

    public get price() {
        if (this.options) {
            let price = this.product?.price;
            this.options.forEach(option => {
                price += (option?.type ? option?.price : -option?.price);
            })
            return price;
        }
        return this.product?.price;
    }

    public show() {
        this.loading += 1;
        this.productService
            .show(this.id)
            .subscribe(response => {
                this.product = response;
                this.metaService.addTags([
                    { name: 'title', content: this.product?.meta_title ? this.product?.meta_title : this.product?.name },
                    { name: 'description', content: this.product?.meta_description ? this.product?.meta_description : this.product?.description },
                ]);
                this.titleService.setTitle(this.product?.meta_title ? this.product?.meta_title : this.product?.name);
            })
            .add(() => this.loading -= 1);
    }

    public addChart() {
        if (!this.optionsNotSelected()) {
            this.alertService.alert('Selecione todas as opções do produto antes de adicionar ao carrinho.', 'Escolha todas as opções');
            return;
        }
        this.product.selected_options = this.selectedOptions();
        this.checkoutService.add(this.product);
        this.alertService.toast('Produto adicionado no carrinho');
    }

    public buyNow() {
        if (!this.optionsNotSelected()) {
            this.alertService.alert('Selecione todas as opções do produto antes de comprar o produto.', 'Escolha todas as opções');
            return;
        }
        this.product.selected_options = this.selectedOptions();
        this.checkoutService.add(this.product);
        this.router.navigate(['checkout'])
	}

	public optionChanged() {
        this.shipment();
    }

    public shipment() {
        if (this.loading > 0 || this.postalCode.length < 8) {
            return;
        }
        if (!this.optionsNotSelected()) {
            this.alertService.alert('Escolha uma opção antes de calcular o frete.', 'Escolha todas as opções');
            return;
        }
        this.product.selected_options = this.selectedOptions();
        this.loading += 1;
        this.checkoutService
            .shipment(this.postalCode, [this.product])
            .subscribe((shippings) => {
                shippings = shippings.filter(shipping => !shipping.error);
                this.shipping = shippings;
                this.checkoutService.postalCode = this.postalCode;
                this.checkoutService.shipping = this.shipping;
            },
            error => this.alertService.treatError(error))
            .add(() => this.loading -= 1);
    }

    public get bestShipping() {
        let time = -1;
        let price = -1;
        this.shipping.forEach(shipping => {
            if (shipping.delivery_time < time || time == -1) {
                time = shipping.delivery_time;
            }
            if (+shipping.price < price || price == -1) {
                price = +shipping.price;
            }
        })
        return { time, price }
    }

	public optionValue(option: IOption) {
		if (!this.product) {
		    return 0;
        }
        return this.product.price + (option.type ? +option.price : -option.price);
	}

	public selectOption(attribute, option) {
        attribute.options.forEach(item => item.selected = false);
        option.selected = true;
        this.options = this.selectedOptions();
	}

    private selectedOptions() {
        const options = [];
        this.product.attributes.forEach(attribute => {
            attribute.options.forEach(option => {
                if (option.selected) {
                    options.push(option);
                }
            })
        });
        return options;
    }

    public optionsNotSelected() {
        return !this.product?.attributes?.some(attribute => {
            return !attribute.options?.some(option => option.selected);
        });
    }

    public recalculate() {
        this.shipping = null;
        this.checkoutService.shipping = null;
    }
}
