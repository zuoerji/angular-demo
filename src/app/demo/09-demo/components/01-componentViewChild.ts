import { afterNextRender, Component, contentChild, contentChildren, ElementRef, input, signal, viewChild, viewChildren } from '@angular/core';

/**
 * viewChild / viewChildren
 * 拿到 dom | 组件
 * 
 * afterNextRender: 在 angular 完成下一次渲染之后,执行一次性回调
*/

@Component({
  selector: 'custom-box',
  template: '<div>custom-box</div>'
})
class CustomBox {}

@Component({
  selector: 'custom-item',
  template: '<p>custom-item</p>'
})
class CustomItem {}


@Component({
  selector: 'component-comm',
  imports: [CustomBox, CustomItem],
  templateUrl: './html/component-view-child.html'
})
export class ComponentComm {
  box = viewChild<ElementRef<HTMLElement>>('box');
  items = viewChildren<ElementRef<HTMLElement>>('item');
  customBox = viewChild<CustomBox>('customBox');
  customItems = viewChildren<CustomItem>('customItem')
  list = signal([1,2,3,4,5,6]);

  constructor() {
    afterNextRender(()=> {
      console.log(this.box(),'===box===');
      console.log(this.items(),'===items===');
      console.log('-----------------------------------')
      console.log(this.customBox(),'===customBox===');
      console.log(this.customItems(),'===customItems===');
    })
  }
}