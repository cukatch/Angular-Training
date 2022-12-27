import { Component, OnInit } from "@angular/core";
import { CompanyService } from "../company.service";
import { Router } from "@angular/router";
import { Company } from "../company";

@Component({
    selector: 'app-company-page',
    templateUrl: './company-page.component.html',
    styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {
    companyList: any[] | undefined;

    constructor(private companyService: CompanyService, private router: Router) { }

    ngOnInit() {
        this.companyService.getCompanyList().subscribe((res: any[]) => {
            this.companyList = res;
        })
    }

    saveCompany(companyDetails: Company) {
        this.companyService.save(companyDetails).subscribe((company: any) => {
            this.companyList?.push(company);
            this.router.navigateByUrl('/company/search');

        })
    }
}
