import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BitcoinService } from '../../services/bitcoin.service'

@Component({
  selector: 'app-transactions-chart',
  templateUrl: './transactions-chart.component.html',
  styleUrls: ['./transactions-chart.component.css']
})
export class TransactionsChartComponent implements OnInit {

transactions: any;
  days: any[] = null;
  prices: any[] = null;

  lineChartData = [{ data: this.prices, label: 'Transactions' }]
  lineChartLabels = this.days;

  lineChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'pink',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private bitcoinService: BitcoinService) {

  }
  time(ts) {
    // convert unix timestamp to milliseconds
    var ts_ms = ts * 1000;
    // initialize new Date object
    var date_ob = new Date(ts_ms);
    var year = date_ob.getFullYear();
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var date = ("0" + date_ob.getDate()).slice(-2);
    return year + "-" + month + "-" + date;
  }

  async getPrice() {
    this.transactions = await this.bitcoinService.getConfirmedTransactions();
    //x
    const dates = this.transactions.map(params => JSON.stringify(params.x))
    this.days = dates.map(date => this.time(date))
    //y
    this.prices = this.transactions.map(params => +(JSON.stringify(params.y)))
    console.log(this.prices);
    this.lineChartData = [{ data: this.prices, label: 'Transactions Per Day' }]
    this.lineChartLabels = this.days;

  }
  ngOnInit(): void {
    this.getPrice()
  }

}


