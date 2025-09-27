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
            phone: [''],
            database: [false],
            information_system: [false],
            web_elective_i: [false],
            software_engineer: [false],
            information_security: [false]
        });
    }
    ngOnInit(): void {
        this.service.getAllTeachers().subscribe({
            next: (json) => this.teachers = json
        });
    }
    
    getSubjects(teachers: Teach): string {
        const subjects = [];
        if (teachers.database) subjects.push('Banco de Dados');
        if (teachers.information_system) subjects.push('Segurança da Informação');
        if (teachers.web_elective_i) subjects.push('Eletiva Web I');
        if (teachers.software_engineer) subjects.push('Engenharia de Software');
        if (teachers.information_security) subjects.push('Segurança da Informação');
        return subjects.join(', ') || 'Nenhuma';
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