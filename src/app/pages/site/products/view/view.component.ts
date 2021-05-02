import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../services/guest/product/product.service';
import {IProduct} from '../../../../interfaces/IProduct';
import {ActivatedRoute, Router} from '@angular/router';
import {CheckoutService} from '../../../../services/guest/checkout/checkout.service';
import {AlertService} from '../../../../services/alert/alert.service';
import {IOption} from '../../../../interfaces/IOption';

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
    public option: IOption;

    constructor(
        private productService: ProductService,
        private activatedRoute: ActivatedRoute,
        private checkoutService: CheckoutService,
        private router: Router,
        private alertService: AlertService,
    ) {}

    public ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params.id;
        this.shipping = this.checkoutService.shipping;
        this.postalCode = this.checkoutService.postalCode;
        this.show();
    }

    public get price() {
        if (this.option) {
            return this.product?.price + (this.option?.type ? this.option?.price : -this.option?.price);
        }
        return this.product?.price;
    }

    public show() {
        this.loading += 1;
        this.productService
            .show(this.id)
            .subscribe(response => {
                this.product = response;
            })
            .add(() => this.loading -= 1);
    }

    public addChart() {
        if (!this.option) {
            this.alertService.alert('Selecione uma opção do produto', 'Escolha uma opção antes de adicionar');
            return;
        }
        this.product.selected_option = this.option;
        this.checkoutService.add(this.product);
        this.alertService.toast('Produto adicionado no carrinho');
    }

    public buyNow() {
        if (!this.option) {
            this.alertService.alert('Selecione uma opção do produto', 'Escolha uma opção antes de comprar');
            return;
        }
        this.product.selected_option = this.option;
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
        if (!this.option) {
            this.alertService.alert('Selecione uma opção do produto', 'Escolha uma opção antes de calcular o frete.');
            return;
        }
        this.product.selected_option = this.option;
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
}
