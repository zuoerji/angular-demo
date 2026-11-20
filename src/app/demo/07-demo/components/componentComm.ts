import { Attribute, Component, Directive, ElementRef, input, Renderer2, signal } from '@angular/core';

/**
 * @Directive + hostDirectives
 * 
 * hostDirectives: 
 * 不需要在模板中写任何选择器, 
 * 在创建组件过程中,会自动把指令挂载到当前的组件元素上,
 * 强制生效
 * 
*/

@Directive({
  selector: '[highligh]',
  host: {
    '[attr.data-user]' : 'text()'
  }
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
  text = input('普通');
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
  selector: 'custom-button',
  hostDirectives: [
    { directive: HighlightDirective, inputs: ['text'] },
    ToggleDirective
  ],
  template: '<span>自定义按钮</span>'
})
class CustomButton {}


@Component({
  selector: 'component-comm',
  imports: [CustomButton],
  templateUrl: './html/component-comm.html'
})
export class ComponentComm {}