import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-h',
  templateUrl: './scroll-h.component.html',
  styleUrl: './scroll-h.component.scss'
})
export class ScrollHComponent {
  @ViewChild('sticky') stickySection!: any;
  @ViewChild('sect') scrollSection!: any;
  @HostListener('window:scroll', ['$event'])
  handleScroll(_e: Event){
    this.transform(this.stickySection)
  }
  
  ngAfterViewInit(){
    console.log(this.stickySection);
  }


  
  transform(sect: any){
    // console.log(sect);
    
    const offestTop = sect.nativeElement.parentElement.offsetTop;
    console.log(offestTop);
    const scrollSection = this.scrollSection;
    console.log(scrollSection);
    let percent = ((window.scrollY - offestTop) / window.innerHeight) * 100;
    percent = percent < 0 ? 0 : percent > 400 ? 400 : percent;
    scrollSection.nativeElement.style.transform = `translate3d(${-(percent)}vw, 0, 0)`

    
    
  }
}
