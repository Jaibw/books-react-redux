import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {

  render() {
    console.log(this.props.activeBook);
    let book_title = "NA";
    if (!this.props.activeBook) {
      return <div>Too Early ...</div>
    }

    return (
      <div>
       <h3>Book Detail </h3>
       Book Title: {this.props.activeBook.title} <br/>
       Pages: {this.props.activeBook.pages}
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  };
}


export default connect(mapStateToProps)(BookDetail);
