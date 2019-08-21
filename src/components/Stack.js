import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from './Card';

export const Stack = ({ stack: { title, cards } }) => {
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
  );
};

const mapStateToProps = (state) => {
  return { stack: state.stack };
};

export default connect(mapStateToProps, null)(Stack);
