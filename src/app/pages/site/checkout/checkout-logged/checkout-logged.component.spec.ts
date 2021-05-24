import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutLoggedComponent } from './checkout-logged.component';

describe('CheckoutLoggedComponent', () => {
    let component: CheckoutLoggedComponent;
    let fixture: ComponentFixture<CheckoutLoggedComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [ CheckoutLoggedComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckoutLoggedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
