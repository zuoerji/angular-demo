import { Component } from '@angular/core';

/**
 * ng-container -> 不渲染 dom
 * ngProjectAs -> 具名插槽
 * 1. 定义  
 *    select="[插槽名称]"
 * 2. 使用 
 *    <ng-container ngProjectAs="[插槽名称]">
*/

@Component({
  selector: 'custom-card',
  template: `
    <div class="lab">
      <div class="lab-title"> 标题: <ng-content select="[card-header]" /> </div>
      <p>内容是: <ng-content select="[card-content]" /> </p>
      <div>正文是: <ng-content /> </div>
    </div>
  `
})
class CustomCard {} 

@Component({
  selector: 'component-comm',
  imports: [CustomCard],
  templateUrl: './html/component-comm.html'
})
export class ComponentComm {}