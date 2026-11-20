import { Attribute, Component, Directive, ElementRef, Renderer2, signal } from '@angular/core';

/**
 * @Directive + host 绑定
 * 
 * 1. selector: 选择
 * 2. exportAs: 对外暴露的别名
 * 3. host: 绑定
 * 
 * 点击切换按钮,在切换过程中会有一些样式变化
 * 
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
    renderer.setAttribute(el.nativeElement, 'data-name','张三');
    renderer.setStyle(el.nativeElement, 'backgroundColor', '#fff6d8');
    renderer.setStyle(el.nativeElement, 'borderLeft', '4px solid #d99b00');
    renderer.setStyle(el.nativeElement, 'padding', '8px 12px');
  }
}

@Directive({
  selector: '[appToggle]',
  exportAs: 'appToggle1',
  host: {
    '(click)': 'toggle()',
    '[style.background]': 'on() ? "#1a7f4b" : "#fff"',
    '[style.color]': 'on() ? "#fff" : "#1b1f24"',
    '(mouseenter)': 'onEnter()'
  }
})
class ToggleDirective {
  on = signal(false);

  toggle() {
    console.log('点击');
    this.on.update( v => !v);
  }
  onEnter() {
    console.log('鼠标进入');
  }
}

@Component({
  selector: 'component-comm',
  imports: [HighlightDirective, ToggleDirective],
  templateUrl: './html/component-host.html'
})
export class ComponentComm {}