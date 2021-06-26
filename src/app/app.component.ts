import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    static isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: any) {
        AppComponent.isBrowser = isPlatformBrowser(platformId);
    }
}
