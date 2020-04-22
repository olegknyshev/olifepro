import React, { Component } from 'react';

import InfoBox from 'components/info-box';
import TableBox from 'components/table-box';
import AddBox from 'components/add-box';

import {sellerList, statusList, priceList} from 'data';

export default class Calc extends Component {

  maxId = 0; 
  activeSum = 3900; 

  state = {     
    myNP: -1,
    isIP: false,
    isActive: false, 
    total: 0,
    myTotal: 0,
    totalSalary: 0,
    mySalary: 0,
    beTotal: 0,  
    items: [],
    alert:[], 
  };

  componentDidMount() {
    let data = this.FromLocalStorage();
    this.setState((state) => {                       
        return data;
    });        
  }

  FromLocalStorage = () => { 
    if (localStorage.getItem('state')) {
      let data = localStorage.getItem('state');
      data = JSON.parse(data);
      return data;
    } 
    else return null;
}

  componentWillUnmount() {        
    localStorage.setItem('state', JSON.stringify(this.state));
  } 

  onReset = () => {    
    this.setState((state) => {      
      return {          
        myNP: -1,
        isIP: false,
        isActive: false, 
        total: 0,
        myTotal: 0,
        totalSalary: 0,
        mySalary: 0,
        beTotal: 0,  
        items: [],
        alert:[], 
      };
    });
  };

  onItemAdded = (seller, product, count) => {
    
    let productItem = priceList.find((item) => (item.id === product));
    let sellerItem = sellerList.find((item) => (item.id === seller));
    let statusItem = statusList.find((item) => (item.id === this.state.myNP));

    let price = productItem.price;
    let sum = price * count;    
    let be=0;
    if (this.state.myNP === -1 && productItem.id === 0) be=0; else be = productItem.be*count;
    let salary = Math.floor(this.getSalary(sellerItem, sum, this.state.myNP));  
    let percent = this.state.myNP - sellerItem.discount;

    this.setState((state) => {
      
      const item = {
        id: ++this.maxId,
        seller,
        product,
        price,
        count,
        sum, 
        be,
        percent,
        salary,     
      };

      let newTotal = state.total;
      if (this.state.myNP > -1) newTotal = state.total + sum;
      if (this.state.myNP === -1 && product > 0) newTotal = state.total + sum; 
      let newMyTotal = state.myTotal;
      if (this.state.myNP > -1 && seller < 3 && product === 0) newMyTotal = state.myTotal + sum;
      if (this.state.myNP === -1 && product > 0) newMyTotal = state.myTotal + sum;  
      let isActive = state.isActive;
      if (newMyTotal > this.activeSum) isActive = true;
      let beTotal = state.beTotal+be;
      let totalSalary = state.totalSalary+salary;   
      let mySalary = state.isIP ? totalSalary : totalSalary*0.87;
      mySalary = isActive ? mySalary : 0;
      let alertItem = [];
      let myNP = state.myNP;    
      
            
        if (this.state.myNP === -1 && product > 0) {
          let statusNextItem = statusList.find((item) => (item.id === productItem.discount));
          myNP=statusNextItem.id;  
        alertItem.push(`Поздравляю! Вы стали партнером Evergreenlife и ваша скидка(статус): сейчас ${statusNextItem.text}.`);
        }
      if (this.state.myNP === -1 && product === 0) alertItem.push(`Вы пока покупаете OLIFE без скидки.`);
      
      if (beTotal >= statusItem.forNext && this.state.myNP !== -1) {
        let statusNextItem = statusList.find((item) => (item.id === statusItem.nextID));
        myNP=statusNextItem.id;
        alertItem.push(`Поздравляю! Вы набрали ${statusItem.forNext} БЕ и теперь ваша скидка(статус): ${statusNextItem.text}.`);
      }

      if (isActive !== state.isActive) alertItem.push(`Поздравляю! Вы сможете получить зарплату, так как вы совершили личную продажу на сумму более ${this.activeSum} руб.`);
      
      

      return { items: [...state.items, item], alert: alertItem, total: newTotal, myTotal: newMyTotal, isActive, beTotal, totalSalary, mySalary, myNP, percent};
    })
  };

  getSalary(sellerItem, sum, myNP) {
    if (myNP < 15) return 0;
    if (sellerItem.id === 1) return 0;
    return ((sum*100)/120)*((myNP-sellerItem.discount)/100);
  };

  onSelectStatus(e) {    
    this.setState({
      myNP: +e.target.value, 
      isActive: false,
      total: 0,
      myTotal: 0,
      salary: 0,
      mySalary: 0,
      beTotal: 0,  
      items: [],
      alert:[], 
    });
  };

  onSelectIP(e) {     
    let mySalary = Boolean(+e.target.value) ? this.state.totalSalary : this.state.totalSalary*0.87; 
    let alert = [];
      if (Boolean(+e.target.value) !== this.state.isIP)
      alert.push(Boolean(+e.target.value) 
        ? `Теперь вы индивидуальный предприниматель и будете платить налоги с зарплаты самостоятельно.`
        : `Теперь вы физ.лицо и будете получать зарплату за минусом 13% (удерживается налог с дохода физ.лиц ).`);        
    this.setState({
      isIP: Boolean(+e.target.value),
      mySalary,
      alert
    });
  };

  render() {
    const { items, alert, ...stateProps } = this.state;
    return (
      <>
        <InfoBox stateProps={stateProps} onSelectStatus={(e) => this.onSelectStatus(e)} onSelectIP={(e) => this.onSelectIP(e)}/>
        <div className="container">
          <TableBox items={items} alert={alert}/>
          <AddBox onItemAdded={this.onItemAdded} onReset={this.onReset} myNP={this.state.myNP} dis={Boolean(items.length)}/>
        </div>
      </>
    );
  };
}