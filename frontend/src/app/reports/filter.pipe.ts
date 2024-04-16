import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      // Customize this condition according to your data structure
      return item.notification_number.toLowerCase().includes(searchText) ||
             item.notification_date.toLowerCase().includes(searchText) ||
             item.notification_received_date.toLowerCase().includes(searchText) ||
             item.notificationupdatedtime.toLowerCase().includes(searchText) ||
             item.reception_mode.toLowerCase().includes(searchText) ||
             item.activity_type.toLowerCase().includes(searchText) ||
             item.trainaction.toLowerCase().includes(searchText) ||
             item.effectivefromdate.toLowerCase().includes(searchText) ||
             item.effectivetodate.toLowerCase().includes(searchText) ||
             item.notify_status.toLowerCase().includes(searchText);
    });
  }
}
