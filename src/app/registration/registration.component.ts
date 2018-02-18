import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Registration} from './registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input()  formRegistration = new  Registration();
  constructor() {
    this.formRegistration.login = '';
    this.formRegistration.password = '';
  }
  ngOnInit(): void {}
  registration() {

    alert(this.formRegistration.login +  this.formRegistration.password );
  }
}
