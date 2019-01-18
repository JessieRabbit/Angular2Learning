import { BookService } from './../book/book.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../Shared/Shared.module';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MockData } from './mock-data';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let count = 0;
  const VALUE = true;
  let val = 0;

  beforeEach(async(() => {
    // TestBed
    TestBed.configureTestingModule({
      // 需要引入template用到的module
      imports: [
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      declarations: [
        HomeComponent,
      ],
      providers: [
        BookService
      ]
    })
      .compileComponents();
  }));

  // 每跑一次案例之前會先做此函式，通常共用都會放在這裡
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    count += 1;
    val = 1;
  });

  // 在所有it之前執行一次
  beforeAll(() => {
    // it('should init start', () => {
    //   expect(component.ngOnInit()).toEqual('init start');
    // });
  });

  afterEach(() => {
  });

  // 在所有it之後執行一次
  afterAll(() => {
  });

  it('should be get book list (async)', fakeAsync(() => {
    // fixture.whenStable().then(() => {
    //   fixture.detectChanges();
    //   expect(true).toBe(true);
    // });
    tick();
    fixture.detectChanges();
    expect(true).toBe(true);
  }));

  it('should be true', () => {
    // expect(true).toBe(true);
    expect(VALUE).toBe(VALUE);
  });

  it('should val be true', () => {
    expect(val).toBe(1);
  });

  it('should val be false', () => {
    expect(val).not.toBe(0);
  });

  /*it('should val be false', () => {
    expect(val).toBe(-1);
  });*/

  // home comp 是否有建立起來
  it('should create the home', () => {
    expect(component).toBeTruthy();
  });

  // 檢查屬性title是否有出現
  it('should have as title `TestAngular`', () => {
    // expect預期檢查，toEqual吐出來結果是否符合預期
    expect(component.title).toEqual('TestAngular');
  });

  // title有無渲染到h1 ta
  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('welcome to TestAngular');
  });

  // hi func 預期是否回傳Hello,Jessie
  it('should hi return `Hello,Jessie`', () => {
    expect(component.hi('Jessie')).toEqual('Hello,Jessie');
  });

  /*it('count = 5', () => {
    expect(count).toEqual(5);
  });*/

  // 巢狀式
  /*describe('By Wayne', () => {
    beforeEach(() => {
      count += 1;
    });
    it('should hi return `Hello,Wayne`', () => {
      expect(component.hi('Wayne')).toEqual('Hello,Wayne');
    });

    // it('count = 7', () => {
    //   expect(count).toEqual(7);
    // });

    it('count = 9', () => {
      expect(count).toEqual(9);
    });
  });*/

  // 先驗證資料是否render h3 tag
  it('拿到api所回傳資料，驗證正確與否', () => {
    // spyon屏除外在因素
    spyOn(component, 'getData').and.returnValue(MockData);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(MockData.response.data);
  });


  // ********spy相關jasmine練習***********
  // 驗證測試getTitle是否在html binding 正確
  it('should use `getTitle()` method', () => {
    const spy = spyOn(component, 'getTitle');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  // 驗證測試title Property是否在html binding 正確
  // 解決過不了問題？
  /*it('should use testvalue in HTML', () => {
    const spy = spyOnProperty(component, 'testvalue', 'get');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });*/

  // 建立假 function 的假 error
  it('should throw error on `getToddos()` method ', () => {
    spyOn(component, 'getToddos').and.throwError('my error');

    expect(() => { component.getToddos(); }).toThrowError('my error');
  });

  it('should use getTitle()', () => {
    const spy = spyOn(component, 'getTitle');
    fixture.detectChanges();
    expect(spy.calls.any()).toBeTruthy();
  });

  // 建立無此函式的時候，建立假的函式（整合測試）土法煉鋼方法
  it('should use getAngular() in HTML', () => {
    // 模擬假裝回傳fake字串
    component.getAngular = () => 'test';
    // 因修改class資料，必須呼叫detectChanges反應到html上面
    fixture.detectChanges();
    const htmlElement = fixture.debugElement.query(By.css('h5')).nativeElement;
    expect(htmlElement.textContent).toContain('test');
  });

  // 利用spyon方法
  it('should use getAngular() in HTML spyon', () => {
    spyOn(component, 'getAngular').and.callFake(() => 'sss');
    fixture.detectChanges();
    const htmlElement = fixture.debugElement.query(By.css('h5')).nativeElement;
    expect(htmlElement.textContent).toContain('sss');
  });
});
