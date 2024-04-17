import { Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyComponent } from './company/company.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Observable } from 'rxjs';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: CompaniesComponent, title: 'home' },
    { path: 'company', component: CompanyComponent, title: 'company' },
    { path: 'vacancy', component: VacancyComponent, title: 'vacancy' },
    { path: 'company/:id', component: CompanyComponent },
    { path: 'company/:id/photos', component: CompanyComponent },
    { path: 'vacancy/:id', component: VacancyComponent },
    { path: 'vacancy/:id/photos', component: VacancyComponent },
    {path: '**', component: NotFoundComponent, title: '404 Not Found'}
  ];
  

  const locations = new Observable((observer) => {
  
  });