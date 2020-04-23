import { Pipe, PipeTransform } from '@angular/core';

/*
 * Join an array with a separator
 * Usage:
 *   value | arrJoin:separator
 * Example:
 *   {{ ['foo','bar'] | arrJoin:' - ' }}
 *   formats to: 'foo - bar'
*/
@Pipe({
  name: 'arrJoin'
})
export class ArrJoinPipe implements PipeTransform {

  transform(value: Array<string | number>, separator: string = ' • '): string {
    return value.join(separator);
  }

}
