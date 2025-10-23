import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Study } from '../study';
import { StudentService } from '../student-service';

@Component({
    selector: 'app-student',
    standalone: false,
    templateUrl: './student-component.html',
    styleUrl: './student-component.css'
})
export class StudentComponent implements OnInit {

    students: Study [] = [];
    formGroupStudent: FormGroup;
    isEditing: boolean = false;

    constructor(private formBuilder: FormBuilder, private service: StudentService) {
        this.formGroupStudent = this.formBuilder.group({
            id: [''],
            name: [''],
            email: [''],
            phone: [''],
            turn2: [''],
            registration: [''],
            course: [''],
            database: [false],
            information_system: [false],
            web_elective_i: [false],
            software_engineer: [false],
            information_security: [false]
        });
    }
    ngOnInit(): void {
        this.service.getAllStudent().subscribe({
            next: (json) => this.students = json
        });
    }
    save() {
        this.service.save(this.formGroupStudent.value).subscribe({
            next: (json) => {
                this.students.push(json);
                this.formGroupStudent.reset();
            }
        });
    }

    OnClickUpdate(students: Study) {
            this.formGroupStudent.setValue(students);
        this.isEditing = true;
        }
    OnClickDelete(students: Study) {
            this.service.delete(students).subscribe(
      {
    next: () => {
                this.students = this.students.filter(p => p.id != students.id);
            }
      }
    )
        }

    update() {
        this.service.update(this.formGroupStudent.value).subscribe(
        {
          next: json => {
            let index = this.students.findIndex(p => p.id == json.id);
            this.students[index] = json;
            this.isEditing = false;
            this.formGroupStudent.reset();
          }
        }
      )
      }
}