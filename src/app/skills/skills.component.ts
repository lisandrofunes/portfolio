import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  lista = [{name: "HTML", img:"devicon-html5-plain"},
           {name: "CSS", img:"devicon-css3-plain"},
           {name: "BootStrap", img:"devicon-bootstrap-plain"},
           {name: "JavaScript", img:"devicon-javascript-plain"},
           {name: "Angular", img:"devicon-angularjs-plain"},
           {name: "TypeScrip", img:"devicon-typescript-plain"},
           {name: "Java", img:"devicon-java-plain"},
           {name: "Spring Boot", img:"devicon-spring-plain"},
           {name: "MySql", img:"devicon-mysql-plain"},
           {name: "GitHub", img:"devicon-github-plain"}]
}
