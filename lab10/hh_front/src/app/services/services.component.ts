import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, Vacancy } from '../models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})

@Injectable({
  providedIn: 'root'
})


export class ServicesComponent {

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('http://127.0.0.1:8000/api/companies');
  }

  getCompanyById(companyId: number): Observable<Company> {
    const url = `http://127.0.0.1:8000/api/companies/${companyId}`;
    return this.http.get<Company>(url);
  }

  getVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>('http://127.0.0.1:8000/api/vacancies');
  }

  getVacancyyById(vacancyId: number): Observable<Vacancy> {
    const url = `http://127.0.0.1:8000/api/vacancies/${vacancyId}`;
    return this.http.get<Vacancy>(url);
  }

}
