import { Call } from '@angular/compiler';
import { Component } from '@angular/core';

/**
 * ng-content -> 插槽
 * select 
 * 1. <ng-content> -> 默认插槽
 * 2. 具名插槽
 *  1) 定义 :<ng-content select="[名字]">
 *  2) 使用: <span 名字></span>
*/

@Component({
  selector: 'custom-card',
  template: `
    <div class="lab">
      <div class="lab-title"> 标题: <ng-content select="[card-title]" /> </div>
      <p>内容是: {{ inner }} </p>
      <div>正文是: <ng-content /> </div>
    </div>
  `
})
class CustomCard {
  private inner = 'Card 内部 inner';
} 

@Component({
  selector: 'component-comm',
  imports: [CustomCard],
  templateUrl: './html/component-ng-content.html'
})
export class ComponentComm {}