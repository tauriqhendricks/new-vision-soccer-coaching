import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailMessage } from '../models/email-message.model';

@Injectable({
  providedIn: 'root'
})
export class EmailMessageService {

  constructor(private httpClient: HttpClient) { }

  sendEmail(email: EmailMessage): Observable<EmailMessage> {
    return this.httpClient.post<EmailMessage>('http://api.tzdev.co.za/api/email', email);
  }

}
