import { Component, OnInit } from '@angular/core';
import { Company, Vacancy } from '../models';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VacancyComponent } from '../vacancy/vacancy.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [RouterModule, CommonModule, VacancyComponent],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent implements OnInit{

  companies!: Company[];
  loaded: boolean = false;
  vacancies !: Vacancy[];

  constructor(
    private companysService: ServicesComponent) {}

  ngOnInit(): void {
    this.loaded = false;
    this.companysService.getCompanies().subscribe((companies) => {
      this.companies = companies;
      this.loaded = true;
  })
}
}