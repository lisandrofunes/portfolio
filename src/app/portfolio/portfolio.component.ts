import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="bi bi-arrow-left-circle-fill"></i>', '<i class="bi bi-arrow-right-circle-fill"></i>'],
    center: false, // most important for this example
    margin: 16, // margen izquierdo de la diapositiva 
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      },
      1200: {
        items: 4
      }
    },
    nav: true
  }

  // @ViewChildren('portfolio') portfolios!: QueryList<ElementRef>;

  portfolios = [{name: "Calculadora", 
                 img:"../../assets/calculadora.png", 
                 description:"Uno de mis primeros proyectos aplicando lo aprendido en una calculadora para operaciones básicas.", 
                 url:"https://lisandrofunes.github.io/calculadora", 
                 skills:[{id:"devicon-html5-plain"},{id:"devicon-css3-plain"},{id:"devicon-bootstrap-plain"},{id:"devicon-javascript-plain"}]
                },
                {name: "Pomodoro", 
                 img:"../../assets/pomodoro.png", 
                 description:'Consiste en aplicar la técnica "Pomodoro" para mejorar la administración del tiempo dedicado a una actividad.', 
                 url:"https://lisandrofunes.github.io/pomodoro", 
                 skills:[{id:"devicon-html5-plain"},{id:"devicon-css3-plain"},{id:"devicon-bootstrap-plain"},{id:"devicon-javascript-plain"}]
                },
                {name: "Tecnobyte", 
                 img:"../../assets/tecnobyte.png", 
                 description:"Página web desarrollada para un emprendimiento dedicado a la reparación y mantenimiento de computadoras.", 
                 url:"https://tecnobytebv.web.app/", 
                 skills:[{id:"devicon-html5-plain"},{id:"devicon-css3-plain"},{id:"devicon-bootstrap-plain"},{id:"devicon-angularjs-plain"}, {id:"devicon-typescript-plain"}]
                },
                {name: "Grábalo", 
                 img:"../../assets/grabalo.png", 
                 description:"Permite a los usuarios la grabación de un audio y a los administradores poder escucharlos y descargarlos.", 
                 url:"https://grabalo-app.web.app/", 
                 skills:[{id:"devicon-html5-plain"},{id:"devicon-css3-plain"},{id:"devicon-bootstrap-plain"},{id:"devicon-angularjs-plain"}, {id:"devicon-typescript-plain"},{id:"devicon-java-plain"}, {id:"devicon-mysql-plain"}]
                },
                {name: "QR Code", 
                 img:"../../assets/qrcode.png", 
                 description:"Permite escanear y generar códigos QR, con la posibilidad de descargar y compartir los códigos generados.", 
                 url:"https://lisandrofunes.github.io/qrcode/", 
                 skills:[{id:"devicon-html5-plain"},{id:"devicon-css3-plain"},{id:"devicon-bootstrap-plain"},{id:"devicon-javascript-plain"}]
                }]

  slideDirection = 0
  isAnimating = false;

  async slide(direction: number) {
    const length = this.portfolios.length;
    // this.slideDirection = direction;

    if (direction < 0) {
      this.portfolios.push(this.portfolios[0]); // Agregarlo al final
      this.slideDirection = direction;
      await this.delay(1000);
      this.portfolios.shift(); // Remover el primer elemento

    } else if (direction > 0) {
      const poppedCard = this.portfolios.pop(); // Remover el último elemento
      this.portfolios.unshift(poppedCard!); // Agregarlo al principio
    }

  }

  // async slide(direction: number) {
  //   if (this.isAnimating) {
  //     return;
  //   }
  
  //   this.isAnimating = true;
  
  //   this.slideDirection = direction;
  //   await this.delay(300); // Espera la duración de la animación
  
  //   this.slideDirection = 0;
  
  //   // Realizar la animación antes de añadir el nuevo elemento
  //   this.isAnimating = true;
  //   await this.delay(300); // Espera la duración de la animación
  //   this.isAnimating = false;
  
  //   if (direction < 0) {
  //     const shiftedCard = this.portfolios.shift(); // Remover el primer elemento
  //     this.portfolios.push(shiftedCard!); // Agregarlo al final
  //   } else if (direction > 0) {
  //     const poppedCard = this.portfolios.pop(); // Remover el último elemento
  //     this.portfolios.unshift(poppedCard!); // Agregarlo al principio
  //   }
  
  //   this.isAnimating = false;
  // }
  
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

  
}
