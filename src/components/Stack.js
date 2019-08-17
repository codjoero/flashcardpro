import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Stack extends Component {
  render() {
    const { stack: { title, cards } } = this.props;
    return (
      <div>
        <Link to='/'>Home</Link>
        <h3>{title}</h3>
        <br />
        {cards.map((card) => (
          <div key={card.id}>
            {card.prompt}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { stack: state }
}

export default connect(mapStateToProps, null)(Stack);
