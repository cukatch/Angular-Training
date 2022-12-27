import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Client } from '../clients/client';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
   const clients =[{id:2,firstname:'Jane',lastname:'Doe',email:'jane.doe@example.com',telephoneNumber:'0777334455',companyName:'Example inc'},];

   const company =[{id:1,companyName:'Google Inc',address1:'Googleplex',address2:'Mountain View',town:'San Fransisco',city:'San Fransisco',postcode:'SF123',country:'US',contactEmail:'info@google.com',staffCount:4,industry:'Tech'},];

    return {clients, company};
  }
}