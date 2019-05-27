import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-forms',
  templateUrl: './hero-forms.component.html',
  styleUrls: ['./hero-forms.component.css']
})
export class HeroFormsComponent implements OnInit {
  public powers = ['jessie', 'wayne', 'coco'];
  public model = new Hero(26, 'Dr IQ', this.powers[0], 'never give up');
  public submitted = false;
  constructor() { }

  public onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  public newHero() {
    this.model = new Hero(42, '', '');
  }

  ngOnInit() {
  }

}
