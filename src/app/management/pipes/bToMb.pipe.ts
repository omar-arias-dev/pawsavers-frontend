import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'BToMb',
  standalone: true,
})
export class BToMbPipe implements PipeTransform {

  transform(byte: number): number {
    return (byte / 1048576);
  }

}
