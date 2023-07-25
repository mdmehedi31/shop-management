import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { AddDailyCostComponent } from './pages/add-daily-cost/add-daily-cost.component';
import { AddMonthlyCostComponent } from './pages/add-monthly-cost/add-monthly-cost.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { AddBrandComponent } from './pages/add-brand/add-brand.component';
import { StockinComponent } from './pages/stockin/stockin.component';
import { WastedProductComponent } from './pages/wasted-product/wasted-product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdateCategoryComponent } from './pages/update/update-category/update-category.component';
import { UpdateDailyCostComponent } from './pages/update/update-daily-cost/update-daily-cost.component';
import { UpdateMonthlyCostComponent } from './pages/update/update-monthly-cost/update-monthly-cost.component';



const routes: Routes = [
  {
    path:'add-category',
    component:AddCategoryComponent,
    pathMatch:'full'
  },
  {
    path:'add-daily-cost',
    component:AddDailyCostComponent,
    pathMatch:'full'
  },
  {
    path: 'add-monthly-cost',
    component: AddMonthlyCostComponent,
    pathMatch:'full'
  },
  {
    path:'add-customer',
    component: AddCustomerComponent,
    pathMatch:'full'
  },
  {
    path:'add-brand',
    component: AddBrandComponent,
    pathMatch: 'full'
  },
  {
    path:'stock-in',
    component:StockinComponent,
    pathMatch:'full'
  },
  {
    path:'wasted-product',
    component:WastedProductComponent,
    pathMatch:'full'
  },
  {
    path:'dash-board',
    component:DashboardComponent,
    pathMatch:'full'
  },
  {
    path:'category-update/:catId',
    component:UpdateCategoryComponent,
    pathMatch:'full'
  },
  {
    path:'daily-cost-update/:dcId',
    component:UpdateDailyCostComponent,
    pathMatch:'full'
  },
  {
    path:'monthly-cost-update/:mcId',
    component:UpdateMonthlyCostComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }