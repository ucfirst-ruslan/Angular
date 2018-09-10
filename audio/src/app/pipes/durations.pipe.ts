import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'durations'
})
export class DurationsPipe implements PipeTransform {

    transform(value: any, args?: any): any {

        return (new Date(value*1000).toUTCString().split(/ /)[4]);
    }

}
