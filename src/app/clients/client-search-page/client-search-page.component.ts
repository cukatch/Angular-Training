import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-search-page',
  templateUrl: './client-search-page.component.html',
  styleUrls: ['./client-search-page.component.scss']
})
export class ClientSearchPageComponent implements OnInit {
  clientList: any;

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.loadClientList();
  }

  searchEventHandler(searchTerm: any): void {
    if (searchTerm) {
      this.searchClients(searchTerm);
    } else {
      this.loadClientList();
    }
  }

  private loadClientList(): void {
    this.clientService.getClients().subscribe((result: any) => {
      this.clientList = result;
    });
  }

  private searchClients(searchTerm: string): void {
    this.clientService.search(searchTerm).subscribe((res: any) => {
      this.clientList = res;
    });
  }
}

