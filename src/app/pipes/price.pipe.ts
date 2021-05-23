import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
    public transform(value: number): string {
        const symbol = 'R$';
        if (!value || isNaN(value)) {
            return symbol + ' 0,00';
        }
        return symbol + ' ' + ((+value).toFixed(2)).toString().replace('.', ',');
    }
}
