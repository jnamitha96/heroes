import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService:HeroService) { }

  ngOnInit() {
    console.log('changes in master');
    console.log(' changes in lbranch1');
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0,4));
<<<<<<< HEAD
      console.log('hello');
=======


      
>>>>>>> hello
  }

}
