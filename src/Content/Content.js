import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: 'pizda',
      isLoaded: false,
      books_total: [],
      books_A_M: [],
      books_N_Z: [],
      books_others: [],
      message: '',
      list1: '',
      list2: '',
      clickListener: null,
      image: null
    };
  }

  componentWillMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=tech")
      .then(res => res.json())
      .then(
        (result) => {
          let books_list_A_M = [];
          let books_list_N_Z = [];
          let books_list_others = [];
          for (let i = 0; i < result.items.length; i++) {
            let first_char = result.items[i].volumeInfo.title.charAt(0).toUpperCase().charCodeAt(0);
            if (first_char >= 65 && first_char <= 77) {
              books_list_A_M.push(result.items[i])
            } else if (first_char > 77 && first_char <= 90) {
              books_list_N_Z.push(result.items[i])
            } else {
              books_list_others.push(result.items[i])
            }
          }
          this.setState({
            books_total: result.items,
            books_A_M: books_list_A_M,
            books_N_Z: books_list_N_Z,
            books_others: books_list_others,
          })
          console.log(this.state.books_A_M);
          this.arr2String(books_list_A_M, "l1");
          this.arr2String(books_list_N_Z, "l2");
        },
        (error) => {
          this.setState({
            isLoaded: true,
            message: "No books"
          });
        }
      )
  }
  arr2String(arr, target) {
    let result = ''
    for (let e in arr) {
      result += arr[e].volumeInfo.title + ', '
    }
    if (target === "l1") {
      this.setState({
        list1: result
      })
    } else {
      this.setState({
        list2: result
      })
    }
  }

  render() {
    const listOfBooks_A_M = this.state.books_A_M.map(item => (
      <div key={item.id} className="books-list__item">
        <div><img src={item.volumeInfo.imageLinks.smallThumbnail} alt="Book preview"/></div>
        <span>{item.volumeInfo.title}</span>
        <span>By {item.volumeInfo.authors}</span>
      </div>
    ))
    return (
      <div className="content">
        <div className="content__inner-container">
          <h1 className="content__header">Books</h1>
          <div className="books-list">
            <h2 className="books-list__header">Titles A-M</h2>
            {listOfBooks_A_M}
            <button className="btn books-list__show-more">SHOW MORE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
