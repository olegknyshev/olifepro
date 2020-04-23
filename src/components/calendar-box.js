import React from 'react';

const CalendarBox = ({myBe, myDate}) => {

  let date = [];
  date[0] = new Date(myDate-(24*60*60*1000*58));  
  date[1] = new Date(myDate-(24*60*60*1000*25));
  date[2] = new Date(myDate-(24*60*60*1000));
  date[3] = new Date(myDate+(24*60*60*1000*32));

  const options = {    
    // year: 'numeric',
    // month: 'numeric',
    day: 'numeric',   
  };

  myBe = myBe.map((item) => {
    item.classN = '';
    if (item.date >= myDate - (24*60*60*1000*60) && item.date <= myDate ) item.classN = 'myperiod';
    if (item.date === myDate - (24*60*60*1000*60)) item.classN = 'lastday';
    if (item.date === myDate) item.classN = 'today';    
    return item;
  }); 

  const monthItem = (numberMonth) => {
    let a = myBe.filter(item => {let d = new Date(item.date); return d.getMonth() === date[numberMonth].getMonth()});    
    const elements = a.map((item, index,array) => { 
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
    <div className="col-sm-6">
      <div className="row p-2">
      <div className="col">{date[0].toLocaleString("ru", {month: 'long'}).toUpperCase()}</div>
        <div className="w-100"></div>
        <div className="col">Пн</div>
        <div className="col">Вт</div>
        <div className="col">Ср</div>
        <div className="col">Чт</div>
        <div className="col">Пт</div>
        <div className="col">Сб</div>
        <div className="col">Вс</div>
        <div className="w-100"></div>
        {monthItem(0)}
      </div>
    </div>
    <div className="col-sm-6">
    <div className="row p-2">
      <div className="col">{date[1].toLocaleString("ru", {month: 'long'}).toUpperCase()}</div>
        <div className="w-100"></div>
        <div className="col">Пн</div>
        <div className="col">Вт</div>
        <div className="col">Ср</div>
        <div className="col">Чт</div>
        <div className="col">Пт</div>
        <div className="col">Сб</div>
        <div className="col">Вс</div>
        <div className="w-100"></div>
        {monthItem(1)}
      </div>
    </div>
    <div className="col-sm-6">
    <div className="row p-2">
      <div className="col">{date[2].toLocaleString("ru", {month: 'long'}).toUpperCase()}</div>
        <div className="w-100"></div>
        <div className="col">Пн</div>
        <div className="col">Вт</div>
        <div className="col">Ср</div>
        <div className="col">Чт</div>
        <div className="col">Пт</div>
        <div className="col">Сб</div>
        <div className="col">Вс</div>
        <div className="w-100"></div>
        {monthItem(2)}
      </div>
    </div>
    <div className="col-sm-6">
    <div className="row p-2">
      <div className="col">{date[3].toLocaleString("ru", {month: 'long'}).toUpperCase()}</div>
        <div className="w-100"></div>
        <div className="col">Пн</div>
        <div className="col">Вт</div>
        <div className="col">Ср</div>
        <div className="col">Чт</div>
        <div className="col">Пт</div>
        <div className="col">Сб</div>
        <div className="col">Вс</div>
        <div className="w-100"></div>
        {monthItem(3)}
      </div>
    </div>
  </div>
    
  );
}

export default CalendarBox;