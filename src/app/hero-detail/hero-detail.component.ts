import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { pipe } from 'rxjs';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router
  ) { }
  ngOnInit() {
    console.log('branch 1 changes... 1st time');
    this.getHero();
    console.log('changes to both branches via local branch');
  }
  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
    this.heroService.getHero(id)
      .subscribe(hero => { this.hero = hero; console.log(this.hero)});
  }
  goBack(): void {
    console.log('to create pull request');
    // this.location.back();
    // this.router.navigate(['/heroes']);
    // this.router.navigate(['../../heroes',],{relativeTo:this.route})
    this.router.navigate(['../../heroes', { id: this.hero.id }], { relativeTo: this.route });
  }
  save(): void {
    console.log('to check git fetch');
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
