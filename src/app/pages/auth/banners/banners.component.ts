import { Component, OnInit } from '@angular/core';
import {AlertService} from '../../../services/alert/alert.service';
import {ICategory} from '../../../interfaces/ICategory';
import {BannerService} from '../../../services/auth/banner/banner.service';
import {IBannerCategory} from '../../../interfaces/IBanner';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {
    public displayedColumns: Array<string> = ['id', 'name', 'actions'];
    public loading: boolean = true;
    public dataSource: Array<IBannerCategory>;
    public page: number = 0;
    public total: number;
    constructor(
        private bannerService: BannerService,
        private alertService: AlertService,
    ) { }

    ngOnInit(): void {
        this.getAll();
    }

    public getAll() {
        this.loading = true;
        this.bannerService
            .getAll(this.page+1)
            .subscribe((response) => {
                this.dataSource = response.data;
                this.total = response.total;
            })
            .add(() => this.loading = false);
    }

    private delete(row) {
        this.loading = true;
        this.bannerService
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
