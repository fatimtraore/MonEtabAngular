import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {BaseService} from '../../../../core/services/base-services/base.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit{
  forms!:FormGroup

  constructor(private baseService: BaseService ) {
  }

  isInvalidate(input: FormControl){
    return input.invalid;
  }

  saveData() {

  }

  isInvalidateInput(control: AbstractControl): boolean {
    return control.invalid && (control.touched || control.dirty);
  }



  ngOnInit() {
    console.log("mon log est :", {name:'test'});
    this.forms = new FormGroup({
      pseudo: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      addPassword: new FormControl("", [Validators.required])
    });
  }

}{

}
