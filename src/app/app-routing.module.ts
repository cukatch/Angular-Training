import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { ClientModule } from './clients/client.module';
import { CompanyModule } from './company/company.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'clients/new',
    loadChildren:  () => import('./clients/client.module').then(x => x.ClientModule)
  },
  {
    path: 'clients/edit/:id',
    loadChildren: () => import('./clients/client.module').then(x => x.ClientModule)
  },

  {
    path: 'clients/search',
    loadChildren: () => import('./clients/client.module').then(x => x.ClientModule)
  },
  {
    path: 'clients/details/:id',
    loadChildren: () => import('./clients/client.module').then(x => x.ClientModule)
  },
  {
    path: 'company/new',
    loadChildren: () => import('./company/company.module').then(x => x.CompanyModule)
  },
  {
    path: 'company/search',
    loadChildren: () => import('./company/company.module').then(x => x.CompanyModule)
  },
  {
    path: 'company/details/:id',
    loadChildren: () => import('./company/company.module').then(x => x.CompanyModule)
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '',
    redirectTo: '/clients/search',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ClientModule, CompanyModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
