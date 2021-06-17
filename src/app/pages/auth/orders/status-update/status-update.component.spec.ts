import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StatusUpdateComponent } from './confirm.component';

describe('ConfirmComponent', () => {
	let component: StatusUpdateComponent;
	let fixture: ComponentFixture<StatusUpdateComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [ StatusUpdateComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(StatusUpdateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
