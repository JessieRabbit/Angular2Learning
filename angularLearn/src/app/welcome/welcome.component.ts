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

  //input output 再度練習
  _number = 0;
  @Input() 
  set number(_input:any)
  {
    if(isNaN(_input))
    {
        this._number=0;
        this.onMessage.emit("要數字");
    }
    else
    {
        this._number = _input;
        this.onMessage.emit("美好星期五");
    }

  };

  @Output() onMessage=new EventEmitter<string>();


  right(){
    this._number=this._number+1;
  }

  left(){
    this._number=this._number-1;
  }
}
