import { Component, OnInit } from '@angular/core';
import {AlertService} from '../../../services/alert/alert.service';
import {ICategory} from '../../../interfaces/ICategory';
import {OrderService} from '../../../services/auth/order/order.service';
import {IPaymentStatus} from '../../../interfaces/IOrder';
import {ConfirmComponent} from '../share/alert/confirm.component';
import {StatusUpdateComponent} from './status-update/status-update.component';
import {MatLegacyDialog as MatDialog} from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
    public displayedColumns: Array<string> = ['id', 'payment_type', 'shipment', 'details', 'amount', 'payment_type', 'payment_status', 'actions'];
    public loading: number = 0;
    public dataSource: Array<ICategory>;
    public page: number = 0;
    public total: number;
	public status: string;
    public paymentStatuses: Array<IPaymentStatus>;

    constructor(
        private orderService: OrderService,
        private alertService: AlertService,
        private matDialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.getAll();
        this.dataprovider();
    }

    public getAll(reset?: boolean) {
        if (reset) {
            this.dataSource = [];
        }
        this.loading += 1;
        this.orderService
            .getAll(this.page+1)
            .subscribe((response) => {
                this.dataSource = response.data;
                this.total = response.total;
            })
            .add(() => this.loading -= 1);
    }

    public dataprovider() {
        this.loading += 1;
        this.orderService
            .dataprovider()
            .subscribe((response) => {
                this.paymentStatuses = response.payment_statuses;
                console.log(response);
            })
            .add(() => this.loading -= 1);
    }

    public pageChange(event: any) {
        this.page = event.pageIndex;
        this.getAll();
    }

    public updateStatus(row, status: string) {
        const dialog = this.matDialog.open(StatusUpdateComponent, {
            minWidth: '300px',
            maxWidth: '700px',
            data: { status },
        });
        return dialog
            .afterClosed()
            .subscribe(response => {
                if(!response || !response.update) {
                    return;
                }
                this.changeStatus(row, status, response.trackingCode)
            });
    }

    private changeStatus(row, status: string, trackingCode?: string) {
        this.loading += 1;
        this.orderService
            .changeStatus(row.id, status, trackingCode)
            .subscribe((response) => {
                this.getAll(true);
                this.alertService.toast(response.message);
            })
            .add(() => this.loading -= 1);
    }

    public haveSomeStatus(slug: string) {
        return slug === 'waiting_payment' || slug === 'paid';
    }
}
