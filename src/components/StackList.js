import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import stacks from '../data/stacks.json';
import { setStack } from '../actions'

class StackList extends Component {
  render() {
    const { setStack } = this.props;
    return (
      <div>
        {
          stacks.map((stack) => (
            <Link
              to='/stack'
              key={stack.id}
              onClick={() => setStack(stack)}
            >
              <h4>{stack.title}</h4>
            </Link>
          ))
        }
      </div>
    )
  }
}

export default connect(null, { setStack })(StackList);
