import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_components/navbar/navbar.component";



import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { Comment } from '@angular/compiler';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, BaseUiComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';

}
