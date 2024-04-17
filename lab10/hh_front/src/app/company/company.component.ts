import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Company, Vacancy } from '../models';
import { ServicesComponent } from '../services/services.component';
import { VacancyComponent } from "../vacancy/vacancy.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-company',
    standalone: true,
    templateUrl: './company.component.html',
    styleUrl: './company.component.css',
    imports: [CommonModule, RouterLink, VacancyComponent]
})

export class CompanyComponent implements OnInit{

  company! : Company;
  loaded: boolean = false;
  vacancies!: Vacancy[];

  constructor(
    private route: ActivatedRoute,
    private companiesService: ServicesComponent){}


  ngOnInit(){
    this.route.paramMap.subscribe((params) =>{
      if(params.get('id')){
        const companyId = Number(params.get('id'));
        this.loaded = false;

        this.companiesService.getCompanyById(companyId).subscribe((company)=>{
          this.company = company;
          this.loaded = true;
        });

        this.companiesService.getVacancies(companyId).subscribe((vacancies)=>{
          this.vacancies = vacancies;
          this.loaded = true;
        })
      }
    });
  }

}
