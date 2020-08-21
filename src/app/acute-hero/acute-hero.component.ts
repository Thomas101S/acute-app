import { Hero } from "../Acute-hero";
import { HEROES } from "./mock-heroes"
import { Component, OnInit } from '@angular/core';
import { HeroService } from "../hero.service";

/*The imports import modules from files specified in the url. If you follow
the paths you will see the modules in the files. It is not possible to have .ts at the end of a filepath btw.*/

@Component({
  selector: 'app-acute-hero',
  templateUrl: './acute-hero.component.html',
  styleUrls: ['./acute-hero.component.css']
})
export class AcuteHeroComponent implements OnInit {       /*classes must be exported in order to be used elsewhere
This class is generated on initialization of the code/upon compilation/
*/

  heroes : Hero [];        /*Creates a reference in this file to the HEROES list in mock heroes*/

  constructor(private heroService: HeroService) { }

  ngOnInit(): void { 
  /* this is where you would put anything you would like to be initialized after initialization/compilation ex: console.log("component works") or if you want to send a super secret message or run a task only when the component is initialized.*/

    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
    /* uses subscribe to assign value to heroes from the observable getHeroes function. This way the UI will wait for the server to provide data before displaying it */
  }

  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
  }
  
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
