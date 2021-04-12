import { Component, OnInit } from '@angular/core';
import {AlertService} from '../../../services/alert/alert.service';
import {ICategory} from '../../../interfaces/ICategory';
import {CategoryService} from '../../../services/auth/category/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
    public displayedColumns: Array<string> = ['id', 'name', 'slug', 'actions'];
    public loading: boolean = true;
    public dataSource: Array<ICategory>;
    public page: number = 0;
    public total: number;
    constructor(
        private categoryService: CategoryService,
        private alertService: AlertService,
    ) { }

    ngOnInit(): void {
        this.getAll();
    }

    public getAll() {
        this.loading = true;
        this.categoryService
            .getAll(this.page+1)
            .subscribe((response) => {
                this.dataSource = response.data;
                this.total = response.total;
            })
            .add(() => this.loading = false);
    }

    private delete(row) {
        this.loading = true;
        this.categoryService
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

    public deleteConfirm(row: ICategory) {
        this.alertService.confirm("Deseja remover o registro?", "Remover")
          .subscribe((response) => {
              if(response) {
                  this.delete(row);
              }
          })
    }
}
