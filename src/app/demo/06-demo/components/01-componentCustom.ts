import { Component, signal,Injectable, Pipe, PipeTransform, afterNextRender } from '@angular/core';
/**
 * 自定义 Pipe
 *   {{ 变量 | Pipe名字 }}
 * 1. pure: 
 *  1. true -> 简单数据类型,改值就会触发,复杂数据类型,只要不改地址,就不会触发[改属性,不会触发]
 *  2. false -> 只要组件发生变更检测,都会触发,不管是不是你的值
 * 2. transform: 转换的函数
 * 
 * 注意:
 *  1. pipe 可以使用多个 用 (|) 进行区分 比如 {{ 变量 | pipe名字 | pipe名字 }}
 *  2. 在transform 函数可以传递多个参数使用 {{ 变量 | pipe名称:参数2:参数3 }}
 *      参数1: 变量的数据
 * 
 *    
*/

@Injectable()
class PipeCalls {
  pure = 0;
  impure = 0;
}

// 自定义 Pipe
@Pipe({ name: 'pipe1', pure: true })
class Pipe1 implements PipeTransform {
  constructor(private calls: PipeCalls) {}
  transform(value: string, limit: number, str: string) {
    // console.log(value, '===pipe1-value');
    // console.log(limit, '===pipe1-limit');
    // console.log(str, '===pipe1-str');
    // console.log(this.calls, '=pipe1=calls=');
    console.log(this.calls,'===pipe1===calls');
    this.calls.pure += 1;
    return value + '1';
  }
}

@Pipe({ name: 'pipe2', pure: false })
class Pipe2 implements PipeTransform {
  constructor(private calls: PipeCalls) {}
  transform(value: string) {
    console.log(this.calls,'===pipe2===calls');
    this.calls.impure += 1;
    return value + '2';
  }
}

@Pipe({ name: 'pipe3', pure: true })
class Pipe3 implements PipeTransform {
  constructor(private calls: PipeCalls) {}
  transform(value: { name: string; age: number }) {
    this.calls.pure += 1;
    return JSON.stringify(value);
  }
}


@Component({
  selector: 'component-comm',
  imports: [Pipe1, Pipe2, Pipe3],
  providers: [PipeCalls],
  templateUrl: './html/component-custom.html',
})
export class ComponentComm {
  text1 = signal('angular1');
  text2 = signal('angular2');
  shot = signal('默认');
  count = signal(0);
  user = signal({name: '张三',age: 34});
  constructor(private calls: PipeCalls) {
    this.readCalls();
  }

  add() {
    this.count.update(n => n + 1);
    this.readCalls();
  }

  changeText1() {
    this.text1.set('修改后的文字1');
    this.readCalls();
  }

  changeText2() {
    this.text2.set('修改后的文字2');
    this.readCalls();
  }

  changeObject() {
    // 修改地址 -> 触发 | 不修改地址 -> 不触发
    // this.user.update( u => {
    //   u.name = '李四-原地址'
    //   return u;
    // });
    this.user.update(u => ({...u, name: '李四-新地址'}));
    this.readCalls();
  }

  readCalls() {
    setTimeout(()=>{
      this.shot.set(`pure=${this.calls.pure} / impure=${this.calls.impure}`)
    },500)
  }
};