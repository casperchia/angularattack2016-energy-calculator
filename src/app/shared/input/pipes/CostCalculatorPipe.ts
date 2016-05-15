import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'costCalculator'})
export class CostCalculatorPipe implements PipeTransform {
  transform(value: number, duration: number): number {
    return value, isNaN(value) ? 0 : value*duration;
  }
}
