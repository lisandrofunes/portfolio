import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private toastr: ToastrService){}

  // toastTrigger = document.getElementById('liveToastBtn')
  // toast = document.getElementById('liveToast')

  sendEmail() {
    this.toastr.success('Email enviado con éxito', 'Notificación', {
      closeButton: true,
      easeTime: 500
    })

  }

  

}
