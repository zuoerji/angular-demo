import { Component } from '@angular/core';
import { ComponentComm} from './components/componentComm';

/**
 * Pipe 的使用
 * 就是过滤器 {{ 变量 | 过滤器的名字 }}
 * 1. 自定义 Pipe
 * 2. 内置 Pipe
 * 3. AsyncPipe 与 别名
*/

@Component({
  selector: 'demo6',
  imports: [ComponentComm],
  template: '<component-comm />'
})
export class Demo6 {}