import { Component, OnInit } from '@angular/core';
import {AlertService} from '../../../services/alert/alert.service';
import {ProductService} from '../../../services/auth/product/product.service';
import {IProduct} from '../../../interfaces/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    public displayedColumns: Array<string> = ['id', 'name', 'sku', 'price', 'price_cost', 'actions'];
    public loading: boolean = true;
    public dataSource: Array<IProduct>;
    public page: number = 0;
    public total: number;
    constructor(
        private productService: ProductService,
        private alertService: AlertService,
    ) { }

    ngOnInit(): void {
        this.getAll();
    }

    public getAll() {
        this.loading = true;
        this.productService
            .getAll(this.page+1)
            .subscribe((response) => {
                this.dataSource = response.data;
                this.total = response.total;
            })
            .add(() => this.loading = false);
    }

    private delete(row) {
        this.loading = true;
        this.productService
            .delete(row.id)
            .subscribe((response) => {
                this.getAll();
                this.alertService.toast(response.message);
            })
            .add(() => this.loading = false);
    }

    public pageChange(event: any) {
        this.page = event.pageIndex;
        this.getAll();
    }

    public deleteConfirm(row: IProduct) {
        this.alertService.confirm("Deseja remover o registro?", "Remover")
          .subscribe((response) => {
              if(response) {
                  this.delete(row);
              }
          })
    }
}
