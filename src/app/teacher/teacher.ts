import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-teacher',
  standalone: false,
  templateUrl: './teacher.html',
  styleUrl: './teacher.css'
})
export class Teacher {

    teachers: Teacher [] = [];
    formGroupTeacher: FormGroup;
name: any;
id: any;
speciality: any;
email: any;
phone: any;

    constructor (private formBuilder: FormBuilder) {
        this.formGroupTeacher = this.formBuilder.group({
            id : [''],
            name: [''],
            speciality: [''],
            email: [''],
            phone: ['']
        })
    }

    save() {
    this.teachers.push(this.formGroupTeacher.value);
    this.formGroupTeacher.reset();
  }
    }
