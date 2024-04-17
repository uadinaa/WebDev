import { Component, Input } from '@angular/core';
import { Vacancy } from '../models';

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent {
  @Input() vacancy!: Vacancy

}
