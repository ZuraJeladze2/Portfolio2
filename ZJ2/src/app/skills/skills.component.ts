import { Component, HostListener } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  doc: Window = window;

  @HostListener( 'window:scroll', ['$event']) onScroll(event: Event): void {
    if(window.scrollY > window.innerHeight) {
      console.log(window.scrollY);
      
    }  
  }
  
  ngAfterViewInit(){
    const mySwiper = new Swiper('.swiper', {
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      mousewheel: {releaseOnEdges: true},
    })


    
  }
}
