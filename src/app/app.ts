import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AboutMe} from './about-me/about-me';
import {Home} from './home/home';
import {Projects} from './projects/projects';
import {Resume} from './resume/resume';
import {Contact} from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutMe, Home, Projects, Resume, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth'});
    }
  }
}
