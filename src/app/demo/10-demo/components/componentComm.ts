import { afterNextRender, afterRenderEffect,afterEveryRender, Component, effect, ElementRef, input, signal, viewChild } from '@angular/core';

/**
 * 渲染函数
 * afterNextRender: 完成渲染后触发一次[执行一次]
 *  1. earlyRead: 专门用于读取 DOM 属性, 不能写入 DOM
 *  2. write: 专门用来 写入 DOM
 *  3. mixedReadWrite: 同时进行 DOM 的读取和写入
 *  4. read: 专门用来读取 DOM
 * 顺序: earlyRead -> write -> mixedReadWrite -> read
 * 每个函数的返回值,可以作为下个函数的参数传递下去
 * 
 * afterEveryRender: 每次完成渲染后都会触发[频繁]
 * afterRenderEffect: signal 变化的时候触发(跟 effect 有什么差异)
 * 
*/


@Component({
  selector: 'component-comm',
  templateUrl: './html/component-comm.html'
})
export class ComponentComm {
  count = signal(0);
  sourceRef = viewChild<ElementRef<HTMLElement>>('source');
  targetRef = viewChild<ElementRef<HTMLElement>>('target');
  boxRef = viewChild.required<ElementRef<HTMLElement>>('box');
  constructor() {
    afterNextRender({
      earlyRead: () => {
        const width = this.targetRef()?.nativeElement.offsetWidth;
        console.log('earlyRead读取宽度:', width);
        return width;
      },
      write: (width: number | undefined) => {
        console.log('write', width);
        const sourceRef = this.sourceRef()?.nativeElement;
        if (sourceRef) {
          sourceRef.style.width = `${width}px`;
        }
        return '写入已经完成'
      },
      read: (message: string) => {
        console.log('read 收到参数:', message);
        const finalWidth = this.targetRef()?.nativeElement.offsetWidth;
        console.log('read 最终读取目标宽度:',finalWidth);
      }
    });

  }

  add() {
    this.count.update( n => n + 1);
  }
}