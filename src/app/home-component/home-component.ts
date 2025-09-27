import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

   constructor() { }

  ngOnInit(): void {
  }

  getImagePath(imageName: string): string {
    return `assets/images/carrossel/${imageName}`;
  }
}
