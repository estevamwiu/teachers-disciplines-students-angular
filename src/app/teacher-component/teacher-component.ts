import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeacherService } from '../teacher-service';
import { Teach } from '../teach';

@Component({
    selector: 'app-teacher',
    standalone: false,
    templateUrl: './teacher-component.html',
    styleUrl: './teacher-component.css'
})
export class TeacherComponent implements OnInit {

    teachers: Teach [] = [];
    formGroupTeacher: FormGroup;

    constructor(private formBuilder: FormBuilder, private service: TeacherService) {
        this.formGroupTeacher = this.formBuilder.group({
            id: [''],
            name: [''],
            speciality: [''],
            email: [''],
            phone: ['']
        });
    }

    ngOnInit(): void {
        this.service.getAllTeachers().subscribe({
            next: (json) => this.teachers = json
        });
    }
    save() {
        this.service.saveTeacher(this.formGroupTeacher.value).subscribe({
            next: (json) => {
                this.teachers.push(json);
                this.formGroupTeacher.reset();
            }
        });
    }
}
