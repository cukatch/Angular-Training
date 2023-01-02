import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';

@Component({
  selector: 'app-company-search-page',
  templateUrl: './company-search-page.component.html',
  styleUrls: ['./company-search-page.component.scss']
})
export class CompanySearchPageComponent implements OnInit {
  companyList: Company[] | any;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadCompanyList();
  }

  searchCompanyHandler(term : any): void {
    if (term) {
      this.searchCompany(term);
    } else {
      this.loadCompanyList();
    }
  }

  private loadCompanyList(): void {
    this.companyService.getCompanyList().subscribe((result: Company[] | any) => {
      this.companyList = result;
    });
  }

  private searchCompany(term : any): void {
    this.companyService.search(term).subscribe((results: Company[] | any) => {
      this.companyList = results;
    });
  }
}
