import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


import axios from 'axios'
@Injectable({
    providedIn: 'root'
})
export class BitcoinService {
    async getRate() {
        var rate = JSON.parse(localStorage.getItem('rate'));
        if (rate) {
            var res = JSON.stringify(rate)
            return res;
        }
        rate = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1&cors=true')
        localStorage.setItem('rate', JSON.stringify(rate.data));
        return rate.data;
    }
    async getMarketPrice() {
        var marketPrice = JSON.parse(localStorage.getItem('marketPrice'));
        if (marketPrice) return marketPrice;
        else {
            marketPrice = await axios.get('https://api.blockchain.info/charts/market-price?timespan=3months&format=json&cors=true')
            localStorage.setItem('marketPrice', JSON.stringify(marketPrice.data.values));
            return marketPrice.data.values;
        }
    }


    async getConfirmedTransactions() {
        var transactionsPerDay = JSON.parse(localStorage.getItem('transactionsPerDay'));
        if (transactionsPerDay) {
            var res = Object.values(transactionsPerDay)
            return res;

        }
        var PrmRes = await axios.get('https://api.blockchain.info/charts/n-transactions?timespan=3months&format=json&cors=true', {
            headers: {
                // 'Access-Control-Allow-Origin': '*',
            },
            proxy: {
                port: 4200,
                host: 'http://localhost:4200'
            }
        }).then(transactionsPerDay => {
            localStorage.setItem('transactionsPerDay', JSON.stringify(transactionsPerDay.data.values));
            var newTransactions = Object.values(transactionsPerDay.data.values);
            return newTransactions;
        })
        return PrmRes;
    }


    constructor() { }
}
