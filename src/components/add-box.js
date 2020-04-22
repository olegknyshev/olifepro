import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {sellerList, priceList} from 'data';

export default class AddBox extends Component {  
  
  state = {
    seller: 0,
    product: 0,
    count: 2
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.myNP !== prevProps.myNP && this.props.myNP === -1) {
      this.setState({
        seller: 0,
        product: 0,
        count: 2
      });    
    } 

    if (this.props.myNP !== prevProps.myNP && this.props.myNP !== -1) {
      this.setState({
        seller: 1,
        product: 0,
        count: 2
      });    
    } 
  } 

  onSellerChange = (e) => {
    this.setState({
      seller: +e.target.value,
      product: 0,
      count: 2
    })
  };

  onProductChange = (e) => {   
    let count = 1; 
    if (+e.target.value === 0) count = 2;
    this.setState({
      product: +e.target.value,
      count
    })
  };

  onCountChange = (e) => {
    this.setState({
      count: +e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { seller, product, count } = this.state;

    if (this.props.myNP === -1) this.setState({ seller: 0, product: 0, count: 2 });    
    else this.setState({ seller: 1, product: 0, count: 2 });  
    this.props.onItemAdded(seller, product, count);
  };

  onReset = () => {
    this.setState({ seller: 0, product: 0, count: 2 });
    this.props.onReset();
  };

  render() { 
    
    const countList = [
      {id: 1, text: 1},
      {id: 2, text: 2},
      {id: 3, text: 3},
      {id: 4, text: 4},      
      {id: 5, text: 5},
      {id: 6, text: 6},
      {id: 7, text: 7},
      {id: 8, text: 8},
      {id: 9, text: 9},
      {id: 10, text: 10},
    ];

    const sellerListActive = sellerList.map((item) => {
      const { id, discount, text } = item;
      if (this.props.myNP === -1 && id !== 0) return null;  //только я без скидки    
      if (this.props.myNP < discount && this.props.myNP !== -1) return null; //только не выше
      if (id === 0 && this.props.myNP !== -1) return null; //только не без скидки
      return (
        <option key={id} value={id}>
          {text}
        </option>
      );
    });

    const productListActive = priceList.map((item) => {
      const { id, text } = item;   
      if (this.state.seller === 1 && id > 0 && this.props.myNP !== -1) return null;
      return (
        <option key={id} value={id}>
          {text}
        </option>
      );
    });

    const countListActive = countList.map((item) => {
      const { id, text } = item;   
      if (this.state.product === 0 && id%2 !== 0) return null;
      if (this.state.product !== 0 && this.props.myNP === -1 && id > 1) return null;
      return (
        <option key={id} value={id}>
          {text}
        </option>
      );
    });

    return (
      <div className='border border-success mt-4 mb-4 p-3 rounded'>
          <form onSubmit={this.onSubmit}>
            <div className="form-row">
              <div className="form-group col-sm-5">
                <label>Кто совершил продажу:</label>
                <select className="form-control" onChange={this.onSellerChange}  value={this.state.seller}>
                  {sellerListActive}
                </select>
              </div>
              <div className="form-group col-sm-5">
                <label>Что продано:</label>
                <select className="form-control" onChange={this.onProductChange} value={this.state.product}>
                  {productListActive}             
                </select>
              </div>
              <div className="form-group col-sm-2">
                <label>Кол-во:</label>
                <select className="custom-select" onChange={this.onCountChange} value={this.state.count}>
                  {countListActive}
                </select>
              </div>          
            </div>
            <button type="submit" className="btn btn-success mr-2 mb-2">Добавить</button> 
            <button type="button" className="btn btn-outline-secondary mr-2 mb-2" onClick={this.onReset} disabled={!this.props.dis}>Сбросить</button>
            <Link className="btn btn-info pl-3 pr-3 mb-2" to="/help-salary"><i className="fas fa-question"></i></Link>   
          </form>
        </div>
    );
  }
}
