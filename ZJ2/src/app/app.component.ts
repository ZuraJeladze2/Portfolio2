import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
// import { NgxTypedJsComponent } from 'ngx-typed-js';
import { CountUpModule } from 'ngx-countup';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "ZJ";
  id = "tsparticles";
  particlesUrl = '../assets/particles_config.json'





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


  particlesOptions = {
    background: {
      color: {
        value: "#0d074a",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
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
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ff00ff",
      },
      links: {
        color: "#ff007f",
        distance: 200,
        enable: true,
        opacity: .75,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 600,
        },
        value: 80,
      },
      opacity: {
        value: .5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}
}


