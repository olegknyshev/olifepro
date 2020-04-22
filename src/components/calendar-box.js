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

  const monthItem = (numberMonth) => {
    let a = myBe.filter(item => item.date.getMonth() === date[numberMonth].getMonth());
    const elements = a.map((item) => { 
      const { date, be } = item;
      let dateItem = new Date(date);  
      let cell = (<div key={date} className="col cell-calendar"><p className='cellDate'>{dateItem.toLocaleString("ru", options)}</p><p className='cellBe'>{be}<span className='myfont2'>БЕ</span></p></div>);
      return cell;
    }); 
    return elements;
  }
 
  return (
  <div className="row">
    <div className="col-sm-6">
      <div className="row">
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
    <div className="row">
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
    <div className="row">
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
    <div className="row">
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