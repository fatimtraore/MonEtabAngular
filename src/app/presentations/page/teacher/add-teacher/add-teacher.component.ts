import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {BaseService} from '../../../../core/services/base-services/base.service';

@Component({
  selector: 'app-add-teacher',
  standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent implements OnInit{
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
      ville: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required])
    });
  }

}{

}
