import React from 'react';
import { Link } from 'react-router-dom';

const Help60Days = () => {
  return (
    <div className="container mt-4 mb-4">
      <div className="help">
        <h3>Как высчитываются 60 дней в EVERGREENLIFE:</h3>        
        <p>Чтобы стимулировать активное ведение бизнеса, Ваши баллы накапливаются за предыдущие 60 дней сотрудничества.</p>
        <p>Например: <em>вы начали работу 10 сентября. Тогда баллы будут накапливаться в период до 8 ноября (60 дней). 
          Позднее, 60-дневный период смещается каждый день на -1 день, а набранные 61 день назад баллы уже не учитываются.</em>
        </p>
        <img src="/60days.jpg" alt="60 дней в Evergreenlife" />
      </div> 
      <Link className="btn btn-success" to="/60-days">К калькулятору</Link>
    </div>
  );
}

export default Help60Days;