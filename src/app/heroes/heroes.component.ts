import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  public selectedId;

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.getHeroes();
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'), 0);
      this.selectedId = id;
    });
  }

  isSelected(hero) {
    return this.selectedId === hero.id;
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => { this.heroes = heroes; });

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
    console.log('delete, checking diff');
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }


}
