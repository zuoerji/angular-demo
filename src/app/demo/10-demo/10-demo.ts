import { Component } from '@angular/core';
import { ComponentComm} from './components/componentComm';

/**
 * 生命周期
 * 1. ngOnInit: 初始化
 * 2. ngOnChanges: input 的数据变化触发
 * 3. ngDoCheck: 组件执行变更检测,变更就触发[触发多]
 * 4. ngAfterContentInit: 组件内容投影初始化后
 * 5. ngAfterViewInit: 组件模板和子组件初始化后
 * 
 * 渲染:
 * afterNextRender: 完成渲染后触发一次
 * afterEveryRender: 每次完成渲染后都会触发
 * afterRenderEffect: signal 变化的时候触发(跟 effect 有什么差异)
 * 
*/

@Component({
  selector: 'demo10',
  imports: [ComponentComm],
  template: '<component-comm />'
})
export class Demo10 {}