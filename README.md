# Angular2 學習之路筆記<br />
參考教學:<br />
https://angular.cn/guide/architecture<br />
https://www.youtube.com/watch?v=te5agERE-JY&list=PLneJIGUTIItvda1H2PtArRwhjWvM1D7da<br />
https://www.codeschool.com/courses/shaping-up-with-angular-js<br />
```
ng g c test2 
```
※創造一個名為test2的compone，關於創建官方有很多指令<br />
※建造comp會存放在src/app/下<br />
※一個comp有獨立的css，所以在以外抓取此comp的css是沒有反應<br />
※spec.ts檔是用來做測試用，但教學說沒有用到，若不想生成一些檔案<br />
※可以到.angualr-cli.jason最下面有個defaults裡的comp輸入
```
{"spec":false} 
```
重新建立此檔案就不會被生成<br />

*****

## ●綁定
★單向綁定
```
{{ ... }}
```
★雙向綁定
同步改變輸入的東西 
```
[(ngModel)] = "name"
```

*****

## ●click事件與函式呼叫
```
<button (click)="Call();">click Me!!</button>
```
函式裡面可以寫參數，但必須要給變數
```
 Call(money:string){
    alert("success!" + money);
  }
 ```

*****

## ●ngif與hidden
★ngIf
```
*ngIf="edit"
```
TypeScript用法必須用this.變數才不會出現紅字<br />
★hidden<br />
畫面上看的到，但domain name還是會存在<br />
相較於ngIf相反，把domain name移除<br />

*****

## ●屬性綁定
```
[id]="id"
<div _ngcontent-c0="" id="abc">
      12/12
</div>
```
若是attrbuit屬性他跟property雖然兩個都是屬性，但本質是不一樣的<br />
綁定attr屬性在前面增加attr.XX，"colspan是attr屬性"<br />
```
[attr.colspan]="2"
```
另外有的是property也是attr，所以可以增加attr.<br />
```
[disabled]
[attr.disabled]
```
上面disabled兩個達到同樣的效果，只是domain name有些不一樣<br />

*****

## ●事件綁定
(事件名稱)
```
<div (mouseover) = "message='進來'" (mouseleave)="message='離開'" style="height:300px; width:300px;background-color:orange;">
</div>
{{ message }}     
```
事件名稱參考網址<br />
https://developer.mozilla.org/en-US/docs/Web/Events<br />

*****

## ●#var與模板引用變量
取得dom的元素與操作<br />
#自定義變數，抓取input的元素<input type="text"/><br />
cc(_pp:類別){...}<br />

*****

## ●[style]與[ngStyle]
[style]與屬性綁定是一樣，一開始
```
[style]="css"
```
ts檔寫上```css="color:red";```
但會有XSS的不安全問題，另一個作法更改成
```
[style.color]="css"
css="red";
```
但是會不知道怎麼使用，就要用[ngStyle]的綁定
```
<div [ngStyle]="css2">
    哈囉
</div>
```
ts檔寫上(類似寫json格式)
```
css2={
    color:"red",
    "background-color":"black"
  }
 ```
*當遇上有"-"的時候，因json不吃，用雙引號括起來,另外可以寫成backgroundColor，Color一定要大寫且雙引號不括起，因ngStyle會自動幫忙轉成你要的屬性
```
backgroundColor:"black"
```
*****

## ●[class]與[ngClass]
[class]與屬性綁定是一樣，也可以利用bool控管
```
<div [class.rabbit1] = "rabbit">
兔子
</div>
<button (click) = "rabbit1()">true</button>
<button (click) = "rabbit2()">false</button>
 ```
ts檔寫上
```
rabbit=true;

rabbit1(){
 this.rabbit = true;
}

rabbit2(){
  this.rabbit = false;
}
```
css檔寫上
```
.rabbit1{
  color:red;
}

.rabbit2{
  background-color: green;
}
```
但是不太好寫，就要用[ngClass]的綁定，宣告一個變數，把class
作集中管理，抓取的時候
```
this.變數.class
```
