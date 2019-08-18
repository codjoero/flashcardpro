import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from './Card';

class Stack extends Component {
  render() {
    const { stack: { title, cards } } = this.props;
    return (
      <div>
        <Link to='/' className="link-home">
          <h4>Home</h4>
        </Link>
        <h3>{title}</h3>
        <br />
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('Stack state', state)
  return { stack: state.stack }
}

export default connect(mapStateToProps, null)(Stack);
