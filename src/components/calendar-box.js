import React from 'react';

const CalendarBox = ({myBe, myDate}) => {  

  const options = {    
    // year: 'numeric',
    month: 'short',
    day: 'numeric',   
  };

  myBe = myBe.map((item) => {
    item.classN = '';
    if (item.date >= myDate - (24*60*60*1000*60) && item.date <= myDate ) item.classN = 'myperiod';
    if (item.date === myDate - (24*60*60*1000*60)) item.classN = 'lastday';
    if (item.date === myDate) item.classN = 'today';    
    return item;
  }); 

  const monthItem = () => {  
    const elements = myBe.map((item, index,array) => { 
      const { date, be, classN } = item;
      let dateItem = new Date(date);    
      let classNames = 'col cell-calendar'; 
      if (classN) classNames = classNames + ' ' + classN;
      let cell = (<>
                    {(index === 0) && (dateItem.getDay() === 2) && <div className="col  cell-calendar-d"></div>}
                    {(index === 0) && (dateItem.getDay() === 3) && <><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div></>}
                    {(index === 0) && (dateItem.getDay() === 4) && <><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div></>}
                    {(index === 0) && (dateItem.getDay() === 5) && <><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div></>}
                    {(index === 0) && (dateItem.getDay() === 6) && <><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div></>}
                    {(index === 0) && (dateItem.getDay() === 0) && <><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div></>}
                    <div key={date} className={classNames}>
                    <p className='cellDate'>{dateItem.toLocaleString("ru", options)}</p>
                    {be ? (<p className='cellBe'>{be}<span>БЕ</span></p>) : null}                    
                    </div>
                    { dateItem.getDay() === 0 && <div className="w-100"></div> }
                    {(index === array.length-1) && (dateItem.getDay() === 6) && <div className="col  cell-calendar-d"></div>}
                    {(index === array.length-1) && (dateItem.getDay() === 5) && <><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div></>}
                    {(index === array.length-1) && (dateItem.getDay() === 4) && <><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div></>}
                    {(index === array.length-1) && (dateItem.getDay() === 3) && <><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div></>}
                    {(index === array.length-1) && (dateItem.getDay() === 2) && <><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div></>}
                    {(index === array.length-1) && (dateItem.getDay() === 1) && <><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div><div className="col  cell-calendar-d"></div></>}
                    
                  </>                  
                );      
      return cell;
    }); 
    return elements;
  }
 
  return (
  <div className="row mb-5">
    <div className="col">60 дней</div>
    <div className="col">сегодня</div>
    <div className="col">Последний день</div> 
    <div className="w-100"></div>
    <div className="col">Пн</div>
    <div className="col">Вт</div>
    <div className="col">Ср</div>
    <div className="col">Чт</div>
    <div className="col">Пт</div>
    <div className="col">Сб</div>
    <div className="col">Вс</div>
    <div className="w-100"></div>
    {monthItem()}
      </div>    
  );
}

export default CalendarBox;