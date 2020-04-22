import React from 'react';
import { Link } from 'react-router-dom';

const DateBox = ({myDate, myBe, onChangeDate}) => {

  let date = new Date(myDate);

  const options = {    
    year: 'numeric',
    month: 'long',
    day: 'numeric',   
  };
  
  let totalBE = calcTotalBe(myDate, myBe);
  let todayLeft = calcTodayLeft(myDate, myBe);
  let todayAdd = calcTodayAdd(myDate, myBe);;

  function calcTotalBe(myDate, myBe) {
    let sum = 0;
    let a = myBe.filter(item => item.date >= myDate - (24*60*60*1000*60) && item.date <= myDate);
    sum = a.reduce((accumulator, currentValue) => accumulator + currentValue.be, 0);
    return sum.toFixed(2);
  }

  function calcTodayLeft(myDate, myBe) {
    let a = myBe.find(item => item.date === myDate - (24*60*60*1000*60));
    return a.be;
  }

  function calcTodayAdd(myDate, myBe) {
    let a = myBe.find(item => item.date === myDate);
    return a.be;
  }
  
  return (    
    <div className="jumbotron">
      <img className="cirk" src="./radar_3.svg" alt=""/>
      <img className="cirk_2" src="./radar_3.svg" alt=""/>
      <div className="container">
        <h2>60 дней в Evergreenlife:</h2>
        <div className="row">
          <div className="col mb-2">
            <label>Расчет на дату:</label><br/>
            <div className="btn-group btn-group" role="group" aria-label="Basic example">   
              <Link className="btn btn-info mr-1" to="/help-60-days"><i className="fas fa-question"></i></Link>        
              <button type="button" className="btn btn-success mr-1">{date.toLocaleString("ru", options)}</button>
              <button type="button" className="btn btn-dark mr-1"  onClick={onChangeDate}>1 день <i className="fas fa-angle-right"></i></button> 
            </div>  
          </div> 
          <div className="col mb-2">
            <label>60 дней:</label>          
            <p className="font-weight-bold myfont">{totalBE}<span className='myfont2'>БЕ</span></p>
          </div> 
          <div className="col mb-2">
            <label>Сегодня (сгорят, добавятся):</label>
            <p className="font-weight-bold myfont">
            <i className="fas fa-angle-down"></i>
              {todayLeft}<span className='myfont2'>БЕ</span>&nbsp;
              <i className="fas fa-angle-up"></i>
              {todayAdd}<span className='myfont2'>БЕ</span>
            </p>
          </div>                
        </div>          
      </div>    
    </div>
  );
}

export default DateBox;


