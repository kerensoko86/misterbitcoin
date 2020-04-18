import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { routes } from './app-routing.module'


import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component'
import { ContactDetailsComponent } from './pages/contact-details-page/contact-details-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component'
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TransferFundComponent } from './components/transfer-fund/transfer-fund.component';
import { MoveListComponent } from './components/move-list/move-list.component';
import { LineChartComponent} from './components/line-chart/line-chart.component';
import { TransactionsChartComponent } from './components/transactions-chart/transactions-chart.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './pages/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    ContactDetailsComponent,
    LineChartComponent,
    HomePageComponent,
    NavBarComponent,
    ContactPageComponent,
    StatisticPageComponent,
    ContactEditPageComponent,
    SignUpComponent,
    TransferFundComponent,
    MoveListComponent,
    TransactionsChartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
