import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  public startDate = new Date();
  public items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  states = [
    { name: 'Alabama', capital: 'Montgomery' },
    { name: 'Alaska', capital: 'Juneau' },
    { name: 'Arizona', capital: 'Phoenix' },
    { name: 'Arkansas', capital: 'Little Rock' },
    { name: 'California', capital: 'Sacramento' },
    { name: 'Colorado', capital: 'Denver' },
    { name: 'Connecticut', capital: 'Hartford' },
    { name: 'Delaware', capital: 'Dover' },
    { name: 'Florida', capital: 'Tallahassee' },
    { name: 'Georgia', capital: 'Atlanta' },
    { name: 'Hawaii', capital: 'Honolulu' },
    { name: 'Idaho', capital: 'Boise' },
    { name: 'Illinois', capital: 'Springfield' },
    { name: 'Indiana', capital: 'Indianapolis' },
    { name: 'Iowa', capital: 'Des Moines' },
    { name: 'Kansas', capital: 'Topeka' },
    { name: 'Kentucky', capital: 'Frankfort' },
    { name: 'Louisiana', capital: 'Baton Rouge' },
    { name: 'Maine', capital: 'Augusta' },
    { name: 'Maryland', capital: 'Annapolis' },
    { name: 'Massachusetts', capital: 'Boston' },
    { name: 'Michigan', capital: 'Lansing' },
    { name: 'Minnesota', capital: 'St. Paul' },
    { name: 'Mississippi', capital: 'Jackson' },
    { name: 'Missouri', capital: 'Jefferson City' },
    { name: 'Montana', capital: 'Helena' },
    { name: 'Nebraska', capital: 'Lincoln' },
    { name: 'Nevada', capital: 'Carson City' },
    { name: 'New Hampshire', capital: 'Concord' },
    { name: 'New Jersey', capital: 'Trenton' },
    { name: 'New Mexico', capital: 'Santa Fe' },
    { name: 'New York', capital: 'Albany' },
    { name: 'North Carolina', capital: 'Raleigh' },
    { name: 'North Dakota', capital: 'Bismarck' },
    { name: 'Ohio', capital: 'Columbus' },
    { name: 'Oklahoma', capital: 'Oklahoma City' },
    { name: 'Oregon', capital: 'Salem' },
    { name: 'Pennsylvania', capital: 'Harrisburg' },
    { name: 'Rhode Island', capital: 'Providence' },
    { name: 'South Carolina', capital: 'Columbia' },
    { name: 'South Dakota', capital: 'Pierre' },
    { name: 'Tennessee', capital: 'Nashville' },
    { name: 'Texas', capital: 'Austin' },
    { name: 'Utah', capital: 'Salt Lake City' },
    { name: 'Vermont', capital: 'Montpelier' },
    { name: 'Virginia', capital: 'Richmond' },
    { name: 'Washington', capital: 'Olympia' },
    { name: 'West Virginia', capital: 'Charleston' },
    { name: 'Wisconsin', capital: 'Madison' },
    { name: 'Wyoming', capital: 'Cheyenne' },
  ];

  // 單元testing
  title = 'TestAngular';
  public testvalue = 0;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { }

  // 單元testing
  hi(name: string): string {
    return `Hello,${name}`;
  }

  getData(): any {
    return {
      success: false,
      errorCode: 99999,
      response: {
        data: null
      }
    };
  }

  getTitle(): string {
    return 'love wayne';
  }

  getToddos(): string {
    return '哀哀';
  }

  getAngular(): string {
    return 'test';
  }

  ngOnInit() {
    console.log(this.startDate);
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/angular_whiteTransparent.svg')
    );

    // this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
