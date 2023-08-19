import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  lista = [{name: "HTML", img:"devicon-html5-plain", link:"https://developer.mozilla.org/es/docs/Web/HTML"},
           {name: "CSS", img:"devicon-css3-plain", link:"https://developer.mozilla.org/es/docs/Web/CSS"},
           {name: "BootStrap", img:"devicon-bootstrap-plain", link:"https://getbootstrap.com/"},
           {name: "JavaScript", img:"devicon-javascript-plain", link:"https://developer.mozilla.org/es/docs/Web/JavaScript"},
           {name: "Angular", img:"devicon-angularjs-plain", link:"https://angular.io/"},
           {name: "TypeScrip", img:"devicon-typescript-plain", link:"https://www.typescriptlang.org/"},
           {name: "Java", img:"devicon-java-plain", link:"https://www.oracle.com/java/"},
           {name: "Spring Boot", img:"devicon-spring-plain", link:"https://spring.io/projects/spring-boot"},
           {name: "MySql", img:"devicon-mysql-plain", link:"https://www.mysql.com/"},
           {name: "GitHub", img:"devicon-github-plain", link:"https://github.com/"}]
}
