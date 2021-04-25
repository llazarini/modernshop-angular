import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponent } from './checkout.component';

describe('CheckoutComponent', () => {
    let component: BasicComponent;
    let fixture: ComponentFixture<BasicComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [ BasicComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BasicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
