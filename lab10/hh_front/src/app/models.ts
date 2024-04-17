export interface Company{
    companyId: number;
    name: string;
    description: Text;
    city: string;
    address: string;
}

export interface Vacancy{
    vacancyId: number;
    name: string;
    salary: number;
    description: Text;
    company: Company["name"];
}