# Angular2 學習之路筆記<br />
參考教學:<br />
https://angular.cn/guide/architecture<br />
https://www.youtube.com/watch?v=te5agERE-JY&list=PLneJIGUTIItvda1H2PtArRwhjWvM1D7da<br />
https://www.codeschool.com/courses/shaping-up-with-angular-js<br />
★Ng速查表(注入 裝飾器 指令)<br />
https://angular.cn/guide/cheatsheet<br />
★angular cli 指令<br />
https://github.com/angular/angular-cli<br />
★angular js codeStyle<br />
https://github.com/pixnet/frontend-guideline/wiki/AngularJS-Style
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
★ngIf`
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

*****

## ●重複顯示與ngfor
*常見列表顯示，產生出重複的結構，for迴圈（想要重複)<br />
*新增和刪除<br />
```
*ngFor="let item of cpu"
```
item自由命名<br />
★push新增
```
this.cpu.push({ name:this.name,price:this.price,rank:this.rank  });
```
ngFor有提供內建 let i=index 第一筆index就為0..以此類推<br />
★splice js內建的splice切割
```
delete(i:number){
    this.cpu.splice(i,1);
}
```

*****

## ●ngSwitch
簡單來說就像switch...case程式<br />

*****

## ●管道與pipe
某種東西需要格式化ＥＸ：日期<br />
內建管道api參考網址：<br />
https://angular.io/api?type=pipe
```
{{ items.date | date | lowercase}}
```
很多管道可以無限加下去
```
date_expression | date[:format[:timezone[:locale]]]
```
format為“date：‘....’”
```
{{ (items.date | date:'y')-1911}}{{ items.date | date:'-MM-dd' | lowercase}}
```

*****

## ●自定義管道
Pipe與comp不一樣位置，所以一開始在html抓取pipe會有錯誤，為了讓兩個可以互相有聯繫 ，必須到inport新增剛新增的
Pipe檔
```
transform(value: any, args?: any): any {
    return null;
  }
```
將items.date丟進date:'-MM-dd’管道，跑進transform裡面的value 做一些判斷...等(以下程式敘述)
```
{{ items.date | date:'-MM-dd’}}
```
另外args?: any為參數接收位置 ＥＸ：```{{ (items.date | date:'y')-1911}}```
裡面的date:'y' 後面可以接參數 ＥＸ：```date: choose``` choose在ts有宣告 ，transform裡面可以更改變數型態(以下程式敘述)
```
transform(value: number, args: string): any {
    return null;
  }
```
## 管道相當好用，可以用於篩選資料或者類別篩選

★附录：没有FilterPipe或者OrderByPipe 參考此頁的最後
https://angular.cn/guide/pipes

*****

## ●表單驗證(Templete -  driven forms)
通常用於防呆或者給使用者提示<br />
Templete driven<br />
ngForm提供很多表單驗證
```
<form #myForm="ngForm">
``` 
在想要的欄位，增加ngModel這樣ng就會知道此欄位要做驗證，另外要注意增加的時候還必須加上name
``` 
<input type="text" class="form-control" ngModel name="acc">
```
錯誤訊息
```
If ngModel is used within a form tag, either the name attribute must be set or the form
```
增加Ｈ5 required 驗證判斷(以下程式敘述)
```
<input type="text" class="form-control" ngModel name="acc" required>
```
利用屬性（ [disabled] = "myForm.invalid"）或者其他綁定，做出防呆功能(以下程式敘述)
```
<button type="button" class="btn btn-success" [disabled] = "myForm.invalid">送出</button>
```

*****

## ●Router路由與SPA網站
Router主要設定spa單一頁面網站，讓使用者更好體驗且頁面切換更順暢<br />
在ts檔裡看到url很長或者要改上很多路徑，可以增加moduleId:module.id，讓他默認相同目錄或層級<br />
路徑就不用打很長~<br />
```
templateUrl: 'home.component.html',
styleUrls: ['home.component.css']
```

Router.ts 專門控管路由相關連結，雖然可以增加在app.module.ts，但為了避免複雜分開管理會比較好<br />
```{path:'home',component:HomeComponent},```  形成一個套件<br />

完成router.ts後，到app.module.ts引入routerModule<br />
在html寫進ng2專屬路徑 "['/watch’]”等於自己設定router path<br />
```
<a [routerLink] = "['/watch']">觀看</a>
```
按下滑鼠的連接，把設定好的comp丟進<router-outlet>裡面<br />
```
<div>
  <router-outlet></router-outlet>
</div>
```

另外回到”主要的html”(EX:index.html)在前面增加<base href="/"> 讓router有基本宣告，詳細原因見Angular 2 __ 實戰_進階開發篇.pdf<br />

目前有遇到一個問題，在增加routerModule的時候，會出現錯誤，目前解決辦法是關掉重新npm start，但試了幾次才會沒有錯誤＠＠<br />

npm run build  與 ng build 有差異  詳細請見指令<br />
1.Npm後面可以加參數<br />
2.另外再執行 npm run build 有發現insert()不能用，錯誤訊息用，cmd+c滑鼠點擊，會到錯誤的程式碼<br />
3.npm run build ， 在指令有紀錄build出來的js和css，代表會執行這些<br />

*****

## ●子路由與路由參數
```
{path:'**',component:WatchComponent}
```
“**” 兩個星星為所有網址匹配，一般都套用404頁面...等<br />
另外注意！！！ 這邊網址都是有“順序性”的，像是進來網址會先匹配第一個
```
{path:'', redirectTo:'/home', pathMatch:'full'}, 
```
若把```{path:'**',component:HomeComponent}```搬到前面第一個，就會造成無限迴圈，亂打網址還是有東西，所以（”**”）萬用路由一定要放在最後一個，(“ ”)預設路由盡量放在第一個<br />

子路由主要是想要自己的子路由，裡面有個選單或分頁的功能<br />
先指定第一層是哪個資料夾，將第二層children寫在底下 ，在path後面逗號，增加
```
children:[
            {path:'back',component:BackComponent},
            {path:'connect',component:ConnectComponent},
         ]
```
告訴此路由有子路由 <br />
然後要注意在寫路徑的時候，因為我們是在第二層，第一層路徑必須加上去<br />
```
<a [routerLink]=“[‘/watch/back’]”>第一個選單</a>
```

＃＃討論區文章，每個文章用參數去綁定
 ```
{path:':connect',component:ConnectComponent},
```
Path裡面加一個“：”變成參數型態 <br />

```this.id = par["connect"];``` 裡面的connect為```{path:':connect',component:ConnectComponent},```
裡面的connect，所以在更改名稱，兩個要一起改<br /> 
接受過來就是this.id =0，0就是路徑給參數<br />

```
{path:'', redirectTo:'/home', pathMatch:'full'},
```
redirectTo指定要導向哪一個，pathMatch屬性伴隨著redirectTo<br />

增加routerLinkActive，讓路由連接套用active樣式<br />
```
<a [routerLink] = "['/home']" routerLinkActive="active">首頁</a>
```

Router路由包含參數及routerLinkActive...等詳細解說,
### 可以查看Angular 2 __ 實戰_進階開發篇.pdf 

*****

## ●表單驗證(reactive forms)
把驗證邏輯寫在ts，好處比較好測試，因為ts可以知道程式碼有沒有錯誤，另外好處動態驗證表單容易<br />
acc:['',[Validators.required]],  第一參數要不要放初始值，第二參數放驗證<br />

<form [formGroup]="form">裡面的form 在ts已建立變數做成綁定<br />
```<input type="text" class="form-control" formControlName="acc"> ```利用formControlName屬性做綁定，裡面的acc就是在ts已宣告

★動態驗證表單
各自的form有各自的驗證<br />
```
<div *ngFor="let item of form.controls; let i=index " [formGroupName]= "i"> 
```
[formGroupName]將一個表單變成一組<br />

*****

## ●angular cli 與打包
angular cli 指令:<br />
https://github.com/angular/angular-cli<br />
在angular cli裡面看到outdid，裡面dist可以寫進你想打包的位置<br />
```
"outDir": "dist", ====>
"outDir": "../Test/vu",
```
打包的檔案丟進伺服器或者apach，輸入localhost/AAA 就可以了<br />
在angular cli裡面assets可以放進想要打包的檔案<br />

*****

## ●http& proxy
下面有串接api範例視頻：<br />
https://www.youtube.com/watch?v=TH7NDIjYktU&index=33&list=PLneJIGUTIItvda1H2PtArRwhjWvM1D7da<br />
```
import { Http } from '@angular/http';
import 'rxjs/Rx'

data: any;
   constructor(private http: Http){

   }

 ngOnInit() {
   this.http.get('api/xxx/xxx').map(res=>res.json()).subscribe(
     data =>{
      this.data=data;
      console.log("http來的");
     })
 }
```
★Proxy json創造以及ng serve 去pugin代理後端網址<br />
https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md

*****

## ●input與output 和 父與子comp溝通<br />
input與output建立窗口，讓父與子comp做溝通<br />
應用output的時候，也必須impot EventEmitter<br />
```
this.onMessage.emit("");
```
Emit為彈射<br />
```
(onMessage)="outMessage=$event"
```
觸發子物件onMessage事件，父物件outMessage接入$event事件<br />

★如何父物件呼叫子物件函式（ＨＴＭＬ）
```
<app-welcome [number]="toChild" (onMessage)="outMessage=$event" #ch></app-welcome>
```
將父物件的tag裡宣告部分變數#ch
```
<button (click)="ch.right()">增加</button>
```
然好再針對宣告變數直接“.”抓取子物件裡面的函式<br />

★如何父物件呼叫子物件函式（ＴＳ）
在父物件 Import viewchild<br />
```@ViewChild(WelcomeComponent)``` 關聯起來，若沒有這個，留下面的code並沒有關連起來<br />
```
 private ch_ts:WelcomeComponent;
```
主要應付大部分父與子相互呼叫與抓值...等<br />

*****

## ●Service與服務
把一些服務邏輯放在Service，而ts單純寫程式邏輯ＥＸ：怎麼取資料<br />
非同步取資料<br />
像是有些共用service可以提出來，comp大家都可以取用共用的service<br />
想要把程式更精簡或者訂閱不想放在ts可以在html dom加上async的pipe，要注意加上這個前面的data一定要是Obserable物件，此data|async做訂閱管理，這樣<br />就不用寫上subscribe函式(參考影片教學)<br />
```
<tr *ngFor=“let item of data|async”>
```

## ●Route&Resolve與預先載入 (影片23後 都是遇到才會用得到的功能，前面都是ng必備不可或缺的)<br />
預先載入：為在按下按鈕的前一刻，把資料載完或是將非同步的的東西載入進來後，才會顯示頁面（讓使用者有更好的體驗）

# Rxjs 學習網<br />
●rxjs 官網<br />
http://reactivex.io/<br />
●rxjs operator sample<br />
https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35<br />
●rxjs 針對不同情境下的使用狀況範例說明<br />
http://reactive.how/<br />
●https://blog.techbridge.cc/2017/12/08/rxjs/<br />
●30天<br />
https://ithelp.ithome.com.tw/users/20103367/ironman/1199<br />
●rxjs operator 常用（簡）<br />
https://hao5743.github.io/2017/03/07/RxJs%E5%B8%B8%E7%94%A8Operator%E8%AE%B0%E5%BD%95/<br />
●rxjs Marble diagrams<br />
http://rxmarbles.com/<br />


# angular 效能 <br />
Use trackBy option for *ngFor directive<br />
如果有使用 ngFor 的時候要加上 trackBy: 通常是用 ID 或是 Key<br />
不然的話他會用整個物件去判斷<br />
https://github.com/mgechev/angular-performance-checklist#use-trackby-option-for-ngfor-directive<br />
中文解說<br />
https://dotblogs.com.tw/explooosion/2017/04/29/035512<br />

*****

## ●Reactive Forms 、 Template-driven Forms
*差異在Reactive Forms為同步, Template-driven Forms為非同步<br />
AbstractControl 為下面3大類的基本抽象類別<br />
1.FormGroup：一個表單為一個群組<br />
2.FormControl : 用於檢查與驗證(ex: input、select)<br />
3.FormArray：多個表單驗證狀態====>在Reactive Forms多一個class<br />
●Template-driven Forms: 情境用於表單很簡單驗證以及不需要額外的互動，若有增加連動驗證維護性低(非同步<br />
https://angular.cn/guide/forms<br />
https://www.youtube.com/watch?v=BME5p3_coyA<br />
https://ithelp.ithome.com.tw/articles/10195280<br />
必須引入formsModule<br />

＊使用到[(ngModel)]，必須加入”name”屬性，未加入會報錯，可取代加入[ngModelOptions]="{standalone: true}"<br />
＊如果使用驗證條件，在input上面加入html或加入自訂驗證規則（但以 Template-driven Forms會比較雜）<br />
在form tag宣告一個變數#heroForm="ngForm”，去控制帶有ngModel指令和name屬性<br />
所以angular會創建formControl並註冊到ngForm指令，註冊每個formControl時，使用name屬性作為鍵值<br />
所以每個input都有name，angular表單用來註冊控件<br />
Kevin這邊講到ngForm也可以視為FormGroup<br />
＊ngModel除了控制，還有控制css這個表單是否被點選或者有變化...等<br />
詳細表格見https://angular.cn/guide/forms  Track control state and validity with ngModel 標題<br />
所以css 可以自定義看要做什麼顯示<br />
應用ng-invalid 顯示提示框，也就是宣告一個變數裝入ngModel屬性，去抓取vaild...等屬性控制<br />
為什麼是ngModel賦值給一個變數？主要是因為”exportAs”屬性設置成”ngModel”<br />
除了click提交也可以用ngSubmit提交，必須在button type加上submit，<form>加入(ngSubmit)＝＝＝> 限定只用於Template-driven Forms <br />

若select..option 加上ngValue，select必須加上compareWith，傳進去的值跟選單的值驗證<br />
延伸下去用disable的時候處理欄位，詳細見網址<br />


●Reactive Forms（同步）<br />
https://www.youtube.com/watch?v=-0xwlICnq4w<br />
必須引入ReactiveFormsModule<br />
最大的差異不需要在input裡面多name屬性與ngModel綁定，而是用每個你想控制的加上formControlName<br />
以及在<form>加上formGroup === Template-driven Forms的ngForm 直接設定<br />
```
@@@template
<form [formGroup]="learnForm">
  <label>Name</label>
  <input type="text" formControlName="name" />
</form>

{{ learnForm.value | json }}
@@@comp
  public learnForm = new FormGroup({
    name: new FormControl()
  });
```


以上learnForm.value顯示出來，可見不用綁定ng-model，就可以控制<br />
FormArray可以放多組FormControl和FormGroup<br />
```
**多個FormControl
@@@template
<form [formGroup]="learnForm">
  <label>Name</label>
  <input type="text" formControlName="name" />
  <div formArrayName="items">
    <div *ngFor="let item of itemBtn.controls; let i = index;">
      <!-- [formControlName]="i" 做input binding -->
      <input type="text" [formControlName]="i" />
    </div>
  </div>
</form>

{{ learnForm.value | json }}
@@@comp
  public learnForm = new FormGroup({
    name: new FormControl(),
    items: new FormArray([
      new FormControl(),
      new FormControl(),
      new FormControl(),
    ]) // 這樣就可以做新增移除
  });
  constructor() { }

  // 主要是簡化template的寫法
  get itemBtn(): FormArray {
    return this.learnForm.get('items') as FormArray;
  }
```
**多個FormGroup
```
<!-- formArray多個formGroup -->
@@@template
<form [formGroup]="learnForm">
  <label>Name</label>
  <input type="text" formControlName="name" />
  <div formArrayName="items">
    <div *ngFor="let item of itemBtn.controls; let i = index;" [formGroupName]="i">
      <!-- [formControlName]="i" 做input binding -->
      <input type="text" formControlName="address" />
    </div>
  </div>
</form>

{{ learnForm.value | json }}
@@@comp
  public learnForm = new FormGroup({
    name: new FormControl(),
    items: new FormArray([
      new FormGroup(
        {
          address: new FormControl()
        }
      ),
      new FormGroup({
        address: new FormControl()
      }),
      new FormGroup({
        address: new FormControl()
      }),
    ]) // 這樣就可以做新增移除
  });
  constructor() { }

  // 主要是簡化template的寫法
  get itemBtn(): FormArray {
    return this.learnForm.get('items') as FormArray;
  }
```

新增移除插入
```
<!-- formArray多個formGroup -->
@@@template
<form [formGroup]="learnForm">
  <label>Name</label>
  <input type="text" formControlName="name" />
  <div formArrayName="items">
    <div *ngFor="let item of itemBtn.controls; let i = index;" [formGroupName]="i">
      <!-- [formControlName]="i" 做input binding -->
      <input type="text" formControlName="address" />
      <button (click)="remove(i);">X</button>
      <button (click)="insert(i);">+</button>
    </div>
    <button (click)="add();">ADD</button>
  </div>
</form>

{{ learnForm.value | json }}

@@@comp
  public remove(i: number) {
    this.itemBtn.removeAt(i);
  }

  public add() {
    this.itemBtn.push(new FormGroup(
      {
        address: new FormControl('增加')
      }));
  }

  public insert(i: number, ) {
    this.itemBtn.insert(i + 1, new FormGroup(
      {
        address: new FormControl('插入')
      }));
  }
```

官方最後結論希望remove、push、insert這3種操作
```
// 特殊按鈕
  public clear() {
    while (this.itemBtn.length > 1) {
      this.itemBtn.removeAt(1);
    }
  }
 ```

減少modelChange的頻率用rxjs，所以用reactive form 避免不了用rxjs<br />
用formBuilder建構物件array<br />
```
  constructor(
    private fb: FormBuilder
  ) { }

  public learnForm2 = this.fb.group({
    items: this.fb.array([
    ],{ updateOn: 'blur'})
  });
```
valuechange可以偵測輸入的值
```
  constructor(
    private fb: FormBuilder
  ) {
    this.learnForm.get('name').valueChanges.subscribe(console.log);
  }

  ngOnInit() {
    this.itemBtn.reset({ name: 1 });
  }
```
