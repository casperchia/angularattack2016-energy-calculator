import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'costCalculator'})
export class CostCalculatorPipe implements PipeTransform {
  transform(value: number, duration: number): string {
    return this.formatCost(this.roundDecimal(isNaN(value) ? 0 : value*duration));
  }

  roundDecimal(cost: number) : any{
    if (!cost) {
      return '0.00';
    }
    return (Math.round(cost * 100) / 100).toFixed(2);
  }

  formatCost(value: any) : any{
    return "$" + value;
  }
}
