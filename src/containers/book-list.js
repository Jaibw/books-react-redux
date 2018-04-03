import React, {Component} from 'react';

import {connect} from 'react-redux';
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux';


class BookList extends Component {
  renderList() {
      return this.props.books.map( (book) => {

        return (
          <li
              key={book.title}
              onClick={ () => this.props.selectBook(book) }
              className="list-group-item">
              {book.title}
          </li>
        );
      } );
  };

  render() {
    console.log(this.props.asdf);
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  };
}

function mapStateToProps(state) {
  return {
    asdf: '123',
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  let rdata = bindActionCreators({selectBook: selectBook}, dispatch);
  console.log('rdata>', rdata);
 
  return rdata;
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
