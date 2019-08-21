import React, { Component } from 'react';

class Card extends Component {
  state = {
    reveal: false
  }

  render() {
    const { reveal } = this.state;
    const { card: { prompt, answer } } = this.props;
    return (
      <div className="card" onClick={() => this.setState({ reveal: true })}>
        <div className="card-prompt">
          <h4>{prompt}</h4>
        </div>
        <div className="card-answer">
          <h4 className={reveal ? 'text-revealed' : 'text-hidden'}>
            {answer}
          </h4>
        </div>
      </div>
    );
  }
}

export default Card;
