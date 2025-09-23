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
    isEditing: boolean = false;

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
    OnClickDelete(teachers: Teach) {
        this.service.delete(teachers).subscribe(
      {
            next: () => {
                this.teachers = this.teachers.filter(p => p.id != teachers.id);
            }
      }
    )
  }
    OnClickUpdate (teachers: Teach) {
        this.formGroupTeacher.setValue(teachers);
        this.isEditing = true;
  }
    update() {
        this.service.update(this.formGroupTeacher.value).subscribe(
        {
          next: json => {
            let index = this.teachers.findIndex(p => p.id == json.id);
            this.teachers[index] = json;
            this.isEditing = false;
            this.formGroupTeacher.reset();
          }
        }
      )
  }
}
