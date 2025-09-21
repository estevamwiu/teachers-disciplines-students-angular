import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Matter } from '../matter';
import { MaService } from '../ma-service';

@Component({
  selector: 'app-matter',
  standalone: false,
  templateUrl: './matter-component.html',
  styleUrl: './matter-component.css'
})
export class MatterComponent implements OnInit {

    matters: Matter [] = [];
    formGroupMatter: FormGroup;

    constructor (private formBuilder: FormBuilder, private service: MaService) {
        this.formGroupMatter = this.formBuilder.group({
          name2: [''],
          workload: [''],
          semester: [''],
          turn: ['']
        })
    }
    ngOnInit(): void {
        this.service.getAllMatter().subscribe({
            next: (json) => this.matters = json
        });
    }
    save() {
        this.service.saveMatter(this.formGroupMatter.value).subscribe({
            next: (json) => {
                this.matters.push(json);
                this.formGroupMatter.reset();
            }
        });
    }
}
