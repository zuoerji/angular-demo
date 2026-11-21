import { Component, input, signal } from '@angular/core';

/**
 * 生命周期
 * 1. ngOnInit: 初始化
 * 2. ngOnChanges: input 的数据变化触发
 * 3. ngDoCheck: 组件执行变更检测,变更就触发[触发多]
 * 4. ngAfterContentInit: 组件内容投影初始化后
 * 5. ngAfterViewInit: 组件模板和子组件初始化后
 * 6. ngOnDestroy: 组件销毁
 * 
 * ngOnInit: 初始化,执行一次
 * ngOnChanges: 只要一个 input 改动,就会触发,不管有多少 input
 * ngDoCheck: 触发比较多,慎用
 * ngAfterContentInit: 拿到插槽内容
 * ngAfterViewInit: 初始化完成
 * ngAfterContentInit 优先执行与 ngAfterViewInit
 * 
 * 顺序
 * (ngOnChanges > ngInit) -> ngDoCheck -> ngAfterContentInit -> ngAfterViewInit 
 * 父组件的渲染完成,都是基于子组件完成渲染
*/

@Component({
  selector: 'component-child',
  template: `
    <div class="lab">
      <div> 子组件: count: {{ count() }} </div>
      <div> 子组件: name: {{ name() }} </div>
    </div>
  `
})
class ComponentChild {
  count = input(0);
  name = input('');

  ngOnInit() {
    console.log('ngOnInit-child');
  }

  ngOnChanges() {
    console.log('ngOnChanges-child');
  }

  ngDoCheck() {
    console.log('ngDoCheck-child');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit-child');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit-child');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy-child');
  }
}


@Component({
  selector: 'component-comm',
  imports: [ComponentChild],
  templateUrl: './html/component-life.html'
})
export class ComponentComm {
  count = signal(0);
  name = signal('张三');
  active = signal(true);

  ngOnInit() {
    console.log('ngOnInit-father');
  }
  ngDoCheck() {
    console.log('ngDoCheck-father');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit-father');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit-father');
  }

  changeNameAndCount(type:string) {
    if (type === 'name') {
      this.name.set('李四')
    }
    if (type === 'count') {
      this.count.set(2);
    }
  }

  childDisplay(val:boolean) {
    this.active.set(val);
  }
}