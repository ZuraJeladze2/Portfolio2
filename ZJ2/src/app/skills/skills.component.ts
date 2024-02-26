import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  scrollY: number | undefined;
  @ViewChild('testDiv') testDiv!: ElementRef;

  
  @HostListener('window:scroll', ['$event'])
  horizontalScroll(event: any) {
    this.scrollY = window.scrollY

    if (this.testDiv.nativeElement.style.top === 0) {
      console.log('hi');

    }
    console.log(window.getComputedStyle(this.testDiv.nativeElement).getPropertyValue('top'))

    // console.log(this.testDiv);
    // console.log(this.scrollY);
  }
}