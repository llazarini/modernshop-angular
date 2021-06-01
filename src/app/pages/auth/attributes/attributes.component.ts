import { Component, OnInit } from '@angular/core';
import {AlertService} from '../../../services/alert/alert.service';
import {ICategory} from '../../../interfaces/ICategory';
import {IAttribute} from '../../../interfaces/IAttribute';
import {AttributeService} from '../../../services/auth/attribute/attribute.service';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
    public displayedColumns: Array<string> = ['id', 'name', 'description', 'actions'];
    public loading: boolean = true;
    public dataSource: Array<IAttribute>;
    public page: number = 0;
    public total: number;
    constructor(
        private attributeService: AttributeService,
        private alertService: AlertService,
    ) { }

    ngOnInit(): void {
        this.getAll();
    }

    public getAll() {
        this.loading = true;
        this.attributeService
            .getAll(this.page+1)
            .subscribe((response) => {
                this.dataSource = response.data;
                this.total = response.total;
            })
            .add(() => this.loading = false);
    }

    private delete(row) {
        this.loading = true;
        this.attributeService
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
