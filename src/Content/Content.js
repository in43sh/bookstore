import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  constructor (props) {
    super(props);

    this.state = {
      books_total: [],
      books_A_M: [],
      books_N_Z: [],
      books_others: [],
      list1: '',
      list2: '',
    };
}
  render() {
    return (
      <div className="content">
        <div className="content__inner-container">
          <h1 className="content__header">Books</h1>
          <div className="books-list">
            <h2 className="books-list__header">Titles A-M</h2>
            <div className="books-list__item"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
