import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // sendEmail() {
  //   const subject = 'Code';
  //   const code = '123'
  //   const mimeData = [
  //     'From: from@gmail.com',
  //     'To: to@gmail.com',
  //     'To: to@yahoo.com',
  //     'Subject: =?utf-8?B?" + window.btoa(unescape(encodeURIComponent(subject))) + "?=',
  //     'MIME-Version: 1.0',
  //     'Content-Type: text/plain; charset=UTF-8',
  //     'Content-Transfer-Encoding: 7bit',
  //     '',
  //     'Your code is ' + code].join('\n').trim();

  //   const raw = window.btoa(unescape(encodeURIComponent(mimeData))).replace(/\+/g, '-').replace(/\//g, '_');

  //   gapi.client.gmail.users.messages.send({
  //     'userId': 'me',
  //     'resource': {
  //       'raw': raw
  //     }
  //   }).execute(res => {
  //     console.log('Email sent', res);
  //     // this.snackBar.success('Email has send Successfully')
  //   });
  // }

}
