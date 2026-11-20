import { Component } from '@angular/core';
import { ComponentComm} from './components/componentComm';

/**
 * 内容投影
 * 插槽
 * 1. ng-content -> 插槽
 * 2. select -> 具名插槽
 * 
 * 3. ng-container -> 不渲染真实 DOM
 * 4. ngProjectAs -> 具名插槽
*/

@Component({
  selector: 'demo8',
  imports: [ComponentComm],
  template: '<component-comm />'
})
export class Demo8 {}