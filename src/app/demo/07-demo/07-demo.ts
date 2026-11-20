import { Component } from '@angular/core';
import { ComponentComm} from './components/componentComm';

/**
 * 指令 @Directive
 * <div [xxx]></div>
 * 1. 基础的使用
 * 2. host
 * 3. hostDirectives
 * 
*/

@Component({
  selector: 'demo7',
  imports: [ComponentComm],
  template: '<component-comm />'
})
export class Demo7 {}