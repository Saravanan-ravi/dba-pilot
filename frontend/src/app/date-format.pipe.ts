import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
    transform(dateString: string): string {
        if (!dateString) return '';
    
        const date = new Date(dateString);
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = date.getUTCFullYear();
    
        return `${day}/${month}/${year}`;
      }
}