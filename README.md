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

## ●ngif與hidden
★ngIf
```
*ngIf="edit"
```
TypeScript用法必須用this.變數才不會出現紅字<br />
★hidden<br />
畫面上看的到，但domain name還是會存在<br />
相較於ngIf相反，把domain name移除<br />

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
上面disabled兩個達到同樣的效果，只是domain name有些不一樣
