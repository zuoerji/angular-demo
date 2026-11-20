import { Attribute, Component, Directive, ElementRef, Renderer2 } from '@angular/core';

/**
 * 基础的使用
 * @Directive
 * 使用自定义指令,一行高亮(样式)
 * 
 * 参数:
 *  1. el: DOM 元素
 *  2. renderer: 内部渲染函数(设置 dom 的 api)
 *  3. Attribute: 拿到 Dom 元素自定义属性
 * 
 * 注意: 
 * Renderer 被废弃了
 * 
 * 
 * <div highlight></div>
*/

@Directive({
  selector: '[highligh]'
})
class HighlightDirective {
  constructor(
    el: ElementRef<HTMLElement>,
    renderer: Renderer2,
    @Attribute('data-id') dataId: string | null
  ) {
    console.log('data-id', dataId);
    console.log(renderer, '====renderer===');
    renderer.setAttribute(el.nativeElement, 'data-name','张三');
    renderer.setStyle(el.nativeElement, 'backgroundColor', '#fff6d8');
    renderer.setStyle(el.nativeElement, 'borderLeft', '4px solid #d99b00');
    renderer.setStyle(el.nativeElement, 'padding', '8px 12px');
  }
}

@Component({
  selector: 'component-comm',
  imports: [HighlightDirective],
  templateUrl: './html/component-basic.html'
})
export class ComponentComm {}