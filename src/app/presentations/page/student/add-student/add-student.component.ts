import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {BaseService} from '../../../../core/services/base-services/base.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit{
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
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      matricule: new FormControl("", [Validators.required]),
      dateNaissance: new FormControl("", [Validators.required]),
      telephone: new FormControl("", [Validators.required]),
      ville: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required, Validators.minLength(5)])
    });
  }

}{

}
