import { afterNextRender, afterRenderEffect,afterEveryRender, Component, effect, ElementRef, input, signal, viewChild } from '@angular/core';

/**
 * 渲染函数
 * afterNextRender: 完成渲染后触发一次[执行一次]
 * afterEveryRender: 每次完成渲染后都会触发[频繁]
 * afterRenderEffect: signal 变化的时候触发(跟 effect 有什么差异)
 * 
 * effect: 
 *  1. 收集依赖 (signal对象)
 *  2. 一旦依赖发生变化,会触发 effect 的回调
 * 
 * effect 优先于 afterRenderEffect 的执行
 * afterRenderEffect : 是在 dom 渲染之后执行,能拿到最新的 dom
 * effect: 是数据变化后执行,不一定能拿到最新的 dom
 * 
 * viewChild 和 viewChild.require 的区别
 * viewChild.require: 不包含 undefined
 * viewChild: 包含 undefined
*/


@Component({
  selector: 'component-comm',
  templateUrl: './html/component-render.html'
})
export class ComponentComm {
  count = signal(0);
  sourceRef = viewChild<ElementRef<HTMLElement>>('source');
  targetRef = viewChild<ElementRef<HTMLElement>>('target');
  boxRef = viewChild.required<ElementRef<HTMLElement>>('box');
  constructor() {
    afterNextRender(() => {
      console.log('===afterNextRender==');
      // console.log(this.sourceRef(), '==sourceRef==');
      // console.log(this.targetRef(), '==targetRef==');
    });

    afterEveryRender(() => {
      console.log('==afterEveryRender===');
    })
    afterRenderEffect(() => {
      this.count();
      console.log(this.boxRef().nativeElement.innerHTML,'===afterRenderEffect===');
    })
    effect(() => {
      this.count();
      console.log(this.boxRef().nativeElement.innerHTML,'===effect===')
    })
  }

  add() {
    this.count.update( n => n + 1);
  }
}