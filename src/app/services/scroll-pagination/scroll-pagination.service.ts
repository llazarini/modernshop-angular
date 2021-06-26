import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {AppComponent} from '../../app.component';

@Injectable({
	providedIn: 'root'
})
export class ScrollPaginationService {
	private browser: boolean;

	constructor() {
		this.browser = AppComponent.isBrowser;
	}

	public listener(element: HTMLElement = null, invertScroll?: boolean): Observable<any> {
		const subject = new Subject<any>();
		if (element) {
			element.addEventListener('scroll', () => {
				const scrollTop = element.scrollTop;
				const scrollHeight = element.scrollHeight;
				const offsetHeight = element.offsetHeight;
				const contentHeight = scrollHeight - offsetHeight;
				if ((!invertScroll && scrollTop > contentHeight * .7) || (invertScroll && scrollTop < contentHeight * .3)) {
					subject.next();
				}
			});
		} else if (this.browser) {
			window.addEventListener('scroll', () => {
				const height = document.documentElement.scrollHeight - window.innerHeight;
				if ((!invertScroll && window.scrollY > height * .7) || (invertScroll && window.scrollY > height * .3)) {
					subject.next();
				}
			});
		}
		return subject.asObservable();
	}
}
