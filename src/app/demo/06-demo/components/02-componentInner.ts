import { Component, signal,Injectable, Pipe, PipeTransform, afterNextRender } from '@angular/core';
import { 
  UpperCasePipe,
  LowerCasePipe,
  TitleCasePipe,
  SlicePipe,
  DatePipe,
  DecimalPipe,
  PercentPipe,
  CurrencyPipe,
  JsonPipe,
  KeyValuePipe,
} from '@angular/common';
/**
 * 内置 Pipe
 * 
 * number:'1.2-3'
 * 1: 整数部分最少显示 1 位
 * 2-3: 小数位最少显示 2 位, 最多显示 3 位
 *  
 * percent: '1.1-2
 * 1: 整数部分至少显示 1 位
 * 1-2: 小数位最少显示 1 位, 最多显示 2 位
 * 
 * currency: "CNY"
 * 1. 人民币: CNY
 * 2. 美元: USD
 * 3. 欧元: EUR
 * 4. 日元: JPY
*/


@Component({
  selector: 'component-comm',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    SlicePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    JsonPipe,
    KeyValuePipe,
  ],
  templateUrl: './html/component-inner.html',
})
export class ComponentComm {
  private obj = { name: 'Angular', ver: 22 };  
};