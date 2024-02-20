import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  id = "tsparticles";
  particlesUrl = '../assets/particles_config.json'
  particlesSpeed: number = 1
 
  
  //#region 

  // constructor(private elementRef: ElementRef) { }

  // @HostListener('mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   const { clientX, clientY } = event;
  //   const { offsetWidth, offsetHeight } = this.elementRef.nativeElement;
  //   const x = (clientX / offsetWidth - 0.5) * 30;
  //   const y = -(clientY / offsetHeight - 0.5) * 30;
  //   this.elementRef.nativeElement.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
  // }

  // @HostListener('mouseleave')
  // onMouseLeave() {
  //   this.elementRef.nativeElement.style.transform = 'none';
  // }

  //#endregion

  particlesOptions = {
    background: {
      color: {
        value: "#0d102a",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.repulse
        },
        onHover: {
          enable: true,
          mode: HoverMode.attract,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 1,
        },
        repulse: {
          distance: 250,
          duration: .4
        },
        attract: {
          distance: 200,
          duration: .2
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ff007f",
        distance: 200,
        enable: true,
        opacity: .75,
        width: 1,
      },
      move: {
        direction: MoveDirection.top,
        enable: true,
        outModes: {
          default: OutMode.out,
        },
        random: false,
        speed: this.particlesSpeed,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 70,
      },
      opacity: {
        value: .2,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0, max: 0 }
      },
    },
    detectRetina: true,
  };

  async particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
  }

}
