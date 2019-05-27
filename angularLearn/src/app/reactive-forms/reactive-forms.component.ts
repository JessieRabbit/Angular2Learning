import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
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
    ], { updateOn: 'blur' }) // 這樣就可以做新增移除
  });

  constructor(
    private fb: FormBuilder
  ) {
    this.learnForm.get('name').valueChanges.subscribe(console.log);
  }

  // public learnForm2 = this.fb.group({
  //   items: this.fb.array([
  //   ],{ updateOn: 'blur'})
  // });

  // 主要是簡化template的寫法
  get itemBtn(): FormArray {
    return this.learnForm.get('items') as FormArray;
  }

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

  public clear() {
    while (this.itemBtn.length > 1) {
      this.itemBtn.removeAt(1);
    }
  }

  public reset() {
    this.itemBtn.reset([{ address: '111' }]);
  }

  ngOnInit() {
    this.itemBtn.reset({ name: 1 });
  }

}
