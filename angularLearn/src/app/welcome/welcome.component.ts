import { Component , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-welcome',  
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent{
  pageTitle:string = "Welcome";
  imageURL: string = "assets/images/rabbit.png";
  @Input() reviews:number;
  @Output() notify:EventEmitter<string> = new EventEmitter<string>();

  onClick():void{
    this.notify.emit('Message from child');
  }

}
