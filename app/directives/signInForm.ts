import {Component, ViewEncapsulation, EventEmitter, Output} from "angular2/core";
import { FORM_DIRECTIVES } from 'angular2/common';
import {AuthProvider} from '../services/auth';

@Component({
  selector: "signInForm",
  templateUrl: "app/directives/signInForm.html",
  directives: [FORM_DIRECTIVES],
  encapsulation: ViewEncapsulation.Native
})
export class SignInFormView {
  constructor(private authProvider: AuthProvider) {
  }
     
  errorString: string;
  
  @Output() success: EventEmitter<any> = new EventEmitter();
  @Output() error: EventEmitter<any> = new EventEmitter();
  
  signIn(data){
    return this.authProvider.signIn(data)
    .then(()=>{
      this.success.emit(null);
    }, (err)=>{
      this.errorString = err.message || err;
      this.error.emit(null);
    });
  }
 }