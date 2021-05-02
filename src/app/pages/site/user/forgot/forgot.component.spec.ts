import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotComponent } from './login.component';

describe('LoginComponent', () => {
    let component: ForgotComponent;
    let fixture: ComponentFixture<ForgotComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [ ForgotComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ForgotComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
