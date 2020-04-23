import { Pipe, PipeTransform } from '@angular/core';

/*
 * Maps an array of objects to a key
 * Usage:
 *   value | arrMap:key
 * Example:
 *   {{ [{foo: '1', bar: '2'}',{foo: '1', bar: '2'}] | arrMap:'foo' }}
 *   formats to: '['1','1']'
*/
@Pipe({
  name: 'arrMap'
})
export class ArrMapPipe implements PipeTransform {

  transform<T>(value: Array<T>, key: string): Array<T[keyof T]> {
    return value.map((v) => v[key]);
  }
}
