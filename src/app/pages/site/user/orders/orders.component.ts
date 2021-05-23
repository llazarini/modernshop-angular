import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../../services/guest/order/order.service';
import {ActivatedRoute} from '@angular/router';
import {IOrder} from '../../../../interfaces/IOrder';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
    public loading: number = 0;
    private id: number;
    public orders: Array<IOrder>;

    constructor(
        private orderService: OrderService,
        private activatedRoute: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.loading += 1;
        this.id = this.activatedRoute.snapshot.params.id;
        this.orderService
            .user()
            .subscribe((response) => {
                this.orders = response.data;
            })
            .add(() => this.loading -= 1);
    }
}
