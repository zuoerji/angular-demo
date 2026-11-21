import { afterNextRender, Component, contentChild, contentChildren, ElementRef, input, signal, viewChild, viewChildren } from '@angular/core';

/**
 * contentChild / contentChildren
 * <ng-content /> -> 插槽
 * 作用: 拿到插槽里面的内容(dom|组件)
 * 1. 可以拿到 真实 DOM, 可以操作 dom 的 api
 * 2. 可以组件,可以拿到组件的数据,已经操作组件的方法
*/

@Component({
  selector: 'custom-box',
  template: `
    <div class="lab">
      list: <ng-content />
    </div>
  `
})
class CustomBox {
  // item = contentChild(CustomItem);
  // items = contentChildren(CustomItem);

  item = contentChild<ElementRef<HTMLElement>>('box');
  constructor() {
    afterNextRender(()=> {
      console.log(this.item(), '====item====');
      // console.log(this.items(), '====items====');
      // console.log(this.item()?.label(), '=====item.label====');
      // this.item()?.onClick();
    })
  }
}

@Component({
  selector: 'custom-item',
  template: `
    <div class="note" (click)="onClick()">
      Item: {{ label() }} - <ng-content />
    </div>
  `
})
class CustomItem {
  label = input('');

  onClick() {
    console.log(`点击:${this.label()}`);
  }
}


@Component({
  selector: 'component-comm',
  imports: [CustomBox, CustomItem],
  templateUrl: './html/component-comm.html'
})
export class ComponentComm {}