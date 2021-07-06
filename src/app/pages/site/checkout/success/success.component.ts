import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../../services/auth/order/order.service';
import {ActivatedRoute} from '@angular/router';
import {IOrder} from '../../../../interfaces/IOrder';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {
    public loading: number = 0;
    private id: number;
    public order: IOrder;

    constructor(
        private orderService: OrderService,
        private activatedRoute: ActivatedRoute,
        private analyticsService: GoogleAnalyticsService
    ) {}


    public ngOnInit(): void {
        this.analyticsService.event('purchase', 'success', 'Compra efetuada!');
        this.loading += 1;
        this.id = this.activatedRoute.snapshot.params.id;
        this.orderService
            .show(this.id)
            .subscribe((response) => {
                this.order = response;
            })
            .add(() => this.loading -= 1);
    }
}
