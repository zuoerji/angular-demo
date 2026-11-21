import { Component } from '@angular/core';
import { ComponentComm} from './components/componentComm';

/**
 * 视图/内容查询
 * 1. 需要操作 dom   <div>xxx</div>
 * 2. 需要拿到子组件方法或者访问属性 <custom-component />
 * 3. 拿到插槽里面的元素
 * 
 * viewChild / viewChildren
 * contentChild / contentChildren
*/

@Component({
  selector: 'demo9',
  imports: [ComponentComm],
  template: '<component-comm />'
})
export class Demo9 {}