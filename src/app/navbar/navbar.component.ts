import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import { TokenService } from '../Service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  preferedColorScheme:any = window.matchMedia('(prefers-color-scheme: light-theme').matches ? 'light-theme' : 'dark-theme';
  theme:any = localStorage.getItem('theme') || this.preferedColorScheme;

  isLogged = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    // private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    var element = <HTMLInputElement> document.getElementById("checktheme");

    // if(this.tokenService.getToken()){
    //   this.isLogged = true;
    // } else {
    //   this.isLogged = false;
    // }

    if (localStorage.getItem('theme') === 'dark-theme'){
      element.checked = false;
      console.log("check")
    } 
    else{
      element.checked = true;
      console.log("uncheck")
    }
    this.initializeTheme();
    
  }


  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      localStorage.getItem('theme') === 'dark-theme' ? (this.theme = 'light-theme'): (this.theme = 'dark-theme')
      // this.theme === 'light-theme'
      //   ? (this.theme = 'dark-theme')
      //   : (this.theme = 'light-theme')
    );
    this.setTheme();
  }

  initializeTheme = (): void =>
    this.renderer.addClass(this.document.body, this.theme);
    

  setTheme(){
    localStorage.setItem('theme', this.theme)
    console.log("theme: " + this.theme);
    
  }


  // toPortfolio(){
  //   this.document.getElementById("portfolio")?.scrollIntoView({behavior:"smooth"})
  // }

  // toSkills(){
  //   this.document.getElementById("skills")?.scrollIntoView({behavior:"smooth"})

  // }

}



// export type Theme = 'light-theme' | 'dark-theme';

