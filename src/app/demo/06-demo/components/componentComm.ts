import { Component, signal,Injectable, Pipe, PipeTransform, afterNextRender } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
/**
 * AsyncPipe 与 别名
 * 
 * Observable 对象
 * count$ > count$ | async
 * 
*/


@Component({
  selector: 'component-comm',
  imports: [AsyncPipe],
  templateUrl: './html/component-comm.html',
})
export class ComponentComm {
  user1$ = new BehaviorSubject<{name: string}>({name: '张三'});
  user2$ = new Observable<{name: string}>((sub) => {
    return this.user1$.subscribe(sub);
  })
  user3 = toSignal(this.user1$, { initialValue: { name: '' } });
  user4$ = new BehaviorSubject(({name: '' }));
};