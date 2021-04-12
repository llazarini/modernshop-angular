import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../../../interfaces/IProduct';
import {ChartService} from '../../../../services/guest/chart/chart.service';
import {Router} from '@angular/router';
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
    @Input()
    public product: IProduct;

    constructor(private chartService: ChartService, private router: Router) {
    }

    public ngOnInit() {
    }

	public addChart() {
		this.chartService.add(this.product)
	}

	open() {
		this.router.navigate(['/', 'product', 'view', this.product.id]);
	}
}
