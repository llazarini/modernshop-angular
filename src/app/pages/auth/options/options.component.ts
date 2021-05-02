import { Component, OnInit } from '@angular/core';
import {AlertService} from '../../../services/alert/alert.service';
import {ICategory} from '../../../interfaces/ICategory';
import {OptionService} from '../../../services/auth/option/option.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
    public displayedColumns: Array<string> = ['id', 'name', 'price', 'weight', 'size', 'actions'];
    public loading: boolean = true;
    public dataSource: Array<ICategory>;
    public page: number = 0;
    public total: number;
    constructor(
        private optionService: OptionService,
        private alertService: AlertService,
    ) { }

    ngOnInit(): void {
        this.getAll();
    }

    public getAll() {
        this.loading = true;
        this.optionService
            .getAll(this.page+1)
            .subscribe((response) => {
                this.dataSource = response.data;
                this.total = response.total;
            })
            .add(() => this.loading = false);
    }

    private delete(row) {
        this.loading = true;
        this.optionService
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
