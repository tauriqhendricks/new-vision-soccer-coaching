import { Component, OnInit } from '@angular/core';
import { EmailMessage } from 'src/app/models/email-message.model';
import { AlertifyService } from 'src/app/services/alertify.service';
import { EmailMessageService } from 'src/app/services/email-message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  fullName = '';
  errorFullName = '';

  emailAddress = '';
  errorEmailAddress = '';

  message = '';
  errorMessage = '';

  canSendEmail = true;
  loading = false;

  constructor(private emailMessageService: EmailMessageService, private alertifyService: AlertifyService) { }

  ngOnInit(): void {
  }

  sendEmail(): void {

    this.resetMessages();
    this.parseInfo();

    if (this.canSendEmail === false) {
      return;
    }

    this.loading = true;

    const email: EmailMessage = {
      FullName: this.fullName,
      From: this.emailAddress,
      Body: this.message
    };

    this.fullName = '';
    this.emailAddress =  '';
    this.message = '';

    this.emailMessageService.sendEmail(email).subscribe(
      data => {
        if (data) {
          this.alertifyService.success('Email was sent!!!');
          this.loading = false;
        }
      },
      error => {
        this.alertifyService.error('Email was not sent!!!');
        this.loading = false;
      }
    );

  }

  resetMessages(): void {

    this.errorFullName = '';
    this.errorEmailAddress = '';
    this.errorMessage = '';

  }

  parseInfo(): void {

    this.canSendEmail = true;

    this.fullName = this.fullName.trim();
    this.emailAddress = this.emailAddress.trim();
    this.message = this.message.trim();

    if (this.fullName === '') {
      this.canSendEmail = false;
      this.errorFullName = 'Please enter your full name!';
    }

    if (this.emailAddress === '') {
      this.canSendEmail = false;
      this.errorEmailAddress = 'Please enter your  email address!';
    } else
    if (this.validateEmail() === false) {
      this.canSendEmail = false;
      this.errorEmailAddress = 'Please enter a valid email address!';
    }

    if (this.message === '') {
      this.canSendEmail = false;
      this.errorMessage = 'Please enter your message!';
    }

  }

  validateEmail(): boolean {

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.emailAddress))
    {
      return true;
    }

    this.errorEmailAddress = 'Please enter a valid email address!';
    return false;

  }

}
