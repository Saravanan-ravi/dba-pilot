import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as xlsx from 'xlsx';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor(private httpClient: HttpClient) { }

  // convertToJSON(binaryData: string): Observable<any> {
  //   return new Observable((observer) => {

  //     const workbook = xlsx.read(binaryData, { type: 'binary', cellText: false, cellDates: true });
  //     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  //     // const worksheet = workbook.Sheets['DATA CORE'];
  //     const range = xlsx.utils.decode_range(worksheet['!ref']);
  //     const headers = [];
  //     for (let i = range.s.c; i <= range.e.c; i++) {
  //       headers.push('column' + (i + 1));
  //     }
  //     const json = xlsx.utils.sheet_to_json(worksheet, { header: headers, range: 1, raw: false, dateNF: 'yyyy-mm-ddTHH:mm:ss.000+00:00' });
  //     observer.next(json);
  //     observer.complete();
  //     console.log(json.length)
  //   });
  // }

  convertToJSON(binaryData: string): Observable<any> {
    return new Observable((observer) => {
      const workbook = xlsx.read(binaryData, { type: 'binary', cellText: true, cellDates: true });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const range = xlsx.utils.decode_range(worksheet['!ref']);
      const headers = [];
      for (let i = range.s.c; i <= range.e.c; i++) {
        headers.push('column' + (i + 1));
      }
      const json = xlsx.utils.sheet_to_json(worksheet, { header: headers, range: 1, raw: true }); // Setting raw: true to preserve the original format
      observer.next(json);
      observer.complete();
      console.log(json.length);
    });
  }
}


