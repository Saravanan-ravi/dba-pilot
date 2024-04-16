import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SanitizerService {

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  transformPdfUrl(id: string): Observable<SafeResourceUrl> {
    return this.httpClient.get(`/fetchnotify/fetchnotificationID/${id}`, { responseType: 'blob' })
      .pipe(
        map((pdfBlob: Blob) => {
          const pdfRaw = URL.createObjectURL(pdfBlob);
          return this.sanitizer.bypassSecurityTrustResourceUrl(pdfRaw);
        })
      );
  }
}
