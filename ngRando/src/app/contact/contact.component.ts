import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor(private _contactService: ContactService) {

   }
   sendMsg(form: NgForm) {
    this._contactService.postContactForm(form);
  }
  ngOnInit() {
  }

}
