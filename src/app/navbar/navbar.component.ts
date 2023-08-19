import { Component, OnInit, Inject, Renderer2, HostListener, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import { TokenService } from '../Service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  preferedColorScheme: any = window.matchMedia('(prefers-color-scheme: light-theme').matches ? 'dark-theme' : 'light-theme';
  theme: any = localStorage.getItem('theme') || this.preferedColorScheme;

  isLogged = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    var element = <HTMLInputElement>document.getElementById("checktheme");

    if (localStorage.getItem('theme') === 'dark-theme') {
      element.checked = false;
      console.log("check")
    }
    else {
      element.checked = true;
      console.log("uncheck")
    }
    this.initializeTheme();

  }

  @ViewChildren('navLink') navLinks!: QueryList<ElementRef>;
  switchSection(id: number){
    this.navLinks.forEach(navLink => {
      const link = navLink.nativeElement;
      link.classList.remove('active')
    })

    this.navLinks.toArray()[id].nativeElement.classList.add('active');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = this.elementRef.nativeElement.querySelector('.navbar');
    if (window.pageYOffset > navbar.offsetTop) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }


switchTheme() {
  this.document.body.classList.replace(
    this.theme,
    localStorage.getItem('theme') === 'dark-theme' ? (this.theme = 'light-theme') : (this.theme = 'dark-theme')
  );
  this.setTheme();
}

initializeTheme = (): void =>
  this.renderer.addClass(this.document.body, this.theme);


setTheme(){
  localStorage.setItem('theme', this.theme)
  console.log("theme: " + this.theme);

}

isRouteActive(route: string): boolean {
  return this.router.isActive(route, true);
}


  // toPortfolio(){
  //   this.document.getElementById("portfolio")?.scrollIntoView({behavior:"smooth"})
  // }

  // toSkills(){
  //   this.document.getElementById("skills")?.scrollIntoView({behavior:"smooth"})

  // }

}



// export type Theme = 'light-theme' | 'dark-theme';

