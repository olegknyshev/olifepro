import React, { Component } from 'react';

import DateBox from 'components/date-box';
import CalendarBox from 'components/calendar-box';



export default class Calc60Days extends Component {  
  
  randomData = () => {
    let myData = [];     
    let firstDate = new Date();    
    firstDate = new Date(firstDate.getFullYear(),firstDate.getMonth()-2, 1, 0 , 0 , 0 , 0);
    let lastDate = new Date(firstDate.getFullYear(),firstDate.getMonth()+4, firstDate.getDate()-1);
    while (firstDate <= lastDate) { 
      let date = firstDate.getTime();
      myData.push({date, be: (Math.random()>.6) ? +(Math.random()*2+.8).toFixed(1) : 0});
      firstDate = new Date(firstDate.getFullYear(),firstDate.getMonth(), firstDate.getDate()+1);
    } 
    return myData;
  };

  state = {
    myDate: new Date().setHours(0, 0, 0, 0),  
    myBe: this.randomData(),
  }; 


  onChangeDate = () => {
    console.log('sdfsds');
    this.setState((state) => {      
      return {          
        myDate: state.myDate + (24*60*60*1000)
      };
    });
  };

  render() {
    return (
      <>
        <DateBox myDate={this.state.myDate} myBe={this.state.myBe} onChangeDate={this.onChangeDate}/>
        <div className="container">
          <CalendarBox myDate={this.state.myDate} myBe={this.state.myBe} />         
        </div>
      </>
    );
  };
}