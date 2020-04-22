import React from 'react';

import ListItem from 'components/table-items';

const TableBox = ({items, alert}) => {  

  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <tr key={id}>
        <ListItem { ...itemProps } />
      </tr>
    );
  }); 

  const elementsAlert = alert.map((item, index) => {    
    return (
      <div key={index} className="alert alert-success" role="alert"><i className="fas fa-info-circle"></i> {item}</div>      
    );
  }); 

  if (items.length === 0) return (
    <div>
      {elementsAlert}
      <h5>Очень ждем от Вас первой продажи...</h5>
     </div>
  );
  else return (
    <>
    {elementsAlert}    
    <div className="table-responsive-sm">
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>          
            <th scope="col" className="th1">Кто</th>
            <th scope="col" className="th1">Что</th>
            <th scope="col">Цена</th>
            <th scope="col" className="th2">Кол-во</th>
            <th scope="col">Сумма</th>
            <th scope="col" className="th2">Баллы</th>
            <th scope="col" className="th2">%</th>
            <th scope="col">Зарплата</th>           
          </tr>
        </thead>
        <tbody> 
          { elements }          
        </tbody>
      </table>      
    </div>
    <div className="d-block d-sm-none"><p className="little3"><em>Таблицу можно двигать вправо/влево...</em></p></div>     
    </>
  );
}

export default TableBox;