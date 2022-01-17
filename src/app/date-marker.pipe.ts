import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateMarker'
})
export class DateMarkerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
