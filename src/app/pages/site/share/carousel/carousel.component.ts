import {AfterViewInit, Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {AnimationType, fadeIn, fadeOut, flipIn, flipOut, jackIn, jackOut, scaleIn, scaleOut} from './carousel.animations';

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),

      /* flip */
      transition("void => flip", [
        useAnimation(flipIn, { params: { time: "500ms" } })
      ]),
      transition("flip => void", [
        useAnimation(flipOut, { params: { time: "500ms" } })
      ]),

      /* JackInTheBox */
      transition("void => jackInTheBox", [
        useAnimation(jackIn, { params: { time: "700ms" } })
      ]),
      transition("jackInTheBox => void", [
        useAnimation(jackOut, { params: { time: "700ms" } })
      ])
    ])
  ]
})
export class CarouselComponent implements AfterViewInit, OnInit {
    @Input()
    public slides: Array<any> = [];
    @Input()
    public animationType = AnimationType.Scale;
    @Input()
    public width: any;
    @Input()
    public height: any;
    @Input()
    public arrows: boolean = false;
    @ViewChild('carousel')
    public carousel;
    public currentSlide = 0;
    public windowWidth: number = 0;
    public windowHeight: number = 0;

    constructor() {}

    public onPreviousClick() {
        const previous = this.currentSlide - 1;
        this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    }

    public onNextClick() {
        const next = this.currentSlide + 1;
        this.currentSlide = next === this.slides.length ? 0 : next;
    }

    public ngOnInit() {
        this.detectScreenSize();
    }

    @HostListener("window:resize", [])
    public onResize() {
        this.detectScreenSize();
    }

    public ngAfterViewInit() {
        this.detectScreenSize();
    }

    private detectScreenSize() {
        this.windowHeight = this.carousel?.nativeElement.offsetHeight;
        this.windowWidth = this.carousel?.nativeElement.offsetWidth;
    }

    public getUrl(slide: any) {
        return slide.file?.url ? slide.file?.url : slide.url;
    }

    public sliderWidth(): number {
        return this.width > this.windowWidth ? this.windowWidth : this.width;
    }

    public sliderHeight(): number {
        return (this.height * this.windowWidth) / this.width;
    }
}
