import React from 'react';

import {statusList} from 'data';

const InfoBox = ({ stateProps, onSelectStatus, onSelectIP }) => {

  const { myNP, isIP, isActive, total, myTotal, totalSalary, mySalary, beTotal } = stateProps;

  const elements = statusList.map((item) => {
    const { id, text } = item;
    return (
      <option key={id} value={id}>{text}</option>      
    );
  }); 

  return (
    <div className="jumbotron">
      <img className="cirk" src="./radar_3.svg" alt=""/>
      <img className="cirk_2" src="./radar_3.svg" alt=""/>
      <div className="container">
        <h2>Как начисляется зарплата в EVERGREENLIFE (Demo):</h2>
        <div className="row">
          <div className="col-sm-8 mb-2">
            <label>Ваш статус:</label>
            <select className="form-control" onChange={onSelectStatus}  value={myNP}>
              {elements}
            </select>
          </div>
          <div className="col-sm-4 mb-2">
            <label>Форма НП:</label>
            <select className="form-control" onChange={onSelectIP}  value={+isIP}>
              <option value='0'>Физ. лицо</option>
              <option value='1'>ИП</option>        
            </select>
          </div>        
        </div> 
        <div className="row mt-3">
          <div className="col-4">
            <label>Оборот (команда):</label>
            <p className="font-weight-bold myfont">{total}<span className='myfont2'>руб.</span></p>
          </div>
          <div className="col-4">
            <label>Личные продажи:</label>
            <p className="font-weight-bold myfont">{myTotal}<span className='myfont2'>руб.</span></p>
          </div>
          <div className="col-4">
            <label>Статус "Активен":</label>
            <p className="font-weight-bold myfont"><span className='myfont2'>{isActive ? <i className="fas fa-check-circle fa-2x"></i> : <i className="fas fa-times-circle fa-2x"></i>}</span></p>
          </div>
        </div>
        <div className="row mt-0">
          <div className="col-4">
            <label>Зарплата:</label>
            <p className="font-weight-bold myfont">{totalSalary.toFixed(0)}<span className='myfont2'>руб.</span></p>
          </div>
          <div className="col-4">
            <label>Выплата:</label>
            <p className="font-weight-bold myfont">{mySalary.toFixed(0)}<span className='myfont2'>руб.</span></p>
          </div>
          <div className="col-4">
            <label>Баллы:</label>
            <p className="font-weight-bold myfont">{beTotal.toFixed(2)}<span className='myfont2'>БE</span></p>
          </div>
        </div>      
      </div>    
    </div>
  );
}

export default InfoBox;
