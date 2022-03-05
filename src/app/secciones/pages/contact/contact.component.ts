import { Component } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';






@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  nombre = new FormControl('');
  email = new FormControl('',[Validators.required, Validators.email,]);


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email requerido ';
    }

    return this.email.hasError('email') ? 'Email no valido ' : '';
  }

  success(){
    Swal.fire({
      icon: 'success',
      title: 'Enviado con Exito',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }



  constructor() { }

 
}
