import { Component, OnInit } from '@angular/core';
import {AlertService} from '../../../services/alert/alert.service';
import {ICategory} from '../../../interfaces/ICategory';
import {OrderService} from '../../../services/auth/order/order.service';
import {IPaymentStatus} from '../../../interfaces/IOrder';

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
        this.alertService.confirm("Deseja mesmo atualizar o status para " + status, "Atualizar status do pedido " + row.id)
            .subscribe((response) => {
                if(!response) {
                    return;
                }
                this.changeStatus(row, status)
            })
    }

    private changeStatus(row, status: string) {
        this.loading += 1;
        this.orderService
            .changeStatus(row.id, status)
            .subscribe((response) => {
                this.getAll(true);
                this.alertService.toast(response.message);
            })
            .add(() => this.loading -= 1);
    }
}
