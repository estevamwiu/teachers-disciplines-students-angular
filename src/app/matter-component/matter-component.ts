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
    isEditing: boolean = false;

    constructor (private formBuilder: FormBuilder, private service: MaService) {
        this.formGroupMatter = this.formBuilder.group({
          id: [''],
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
     OnClickDelete(ma: Matter) {
        this.service.delete(ma).subscribe(
      {
            next: () => {
                this.matters = this.matters.filter(p => p.id != ma.id);
        }
      }
    )
}
        OnClickUpdate (ma: Matter) {
            this.formGroupMatter.setValue(ma);
            this.isEditing = true;
      }
        update() {
            this.service.update(this.formGroupMatter.value).subscribe(
            {
              next: json => {
                let index = this.matters.findIndex(p => p.id == json.id);
                this.matters[index] = json;
                this.isEditing = false;
                this.formGroupMatter.reset();
              }
            }
          )
      }
    }
