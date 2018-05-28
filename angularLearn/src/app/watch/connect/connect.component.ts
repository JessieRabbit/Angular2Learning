import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit, OnDestroy {
  id: string;
  ss: Subscription;
  num: number;
  constructor(private routePar: ActivatedRoute) { }

  ngOnInit() {
    this.ss = this.routePar.params.subscribe(par => {
      this.id = par[' connect'];
      // this.num = parseInt(par['connect']);;
    });
  }

  ngOnDestroy() {
    this.ss.unsubscribe();
  }
}
