import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-search-page',
  templateUrl: './company-search-page.component.html',
  styleUrls: ['./company-search-page.component.scss']
})
export class CompanySearchPageComponent implements OnInit {
  companyList: any;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadCompanyList();
  }

  searchCompanyHandler(term: any): void {
    console.log(term);
    if (term) {
      this.searchCompany(term);
    } else {
      this.loadCompanyList();
    }
  }

  private loadCompanyList(): void {
    this.companyService.getCompanyList().subscribe((result: any) => {
      this.companyList = result;
    });
  }

  private searchCompany(term: any): void {
    this.companyService.search(term).subscribe((results: any) => {
      this.companyList = results;
    });
  }
}

