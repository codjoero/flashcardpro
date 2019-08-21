import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import stacks from '../data/stacks.json';
import { setStack, loadStacks } from '../actions';

export class StackList extends Component {
  componentDidMount() {
    const { loadStacks, initialStacks } = this.props;
    if (initialStacks.length === 0) {
      loadStacks(stacks);
    }
  }

  render() {
    const { setStack, initialStacks } = this.props;
    return (
      <div>
        {
          initialStacks.map((stack) => (
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
    );
  }
}

const mapStateToProps = (state) => ({
  initialStacks: state.stacks
});

export default connect(mapStateToProps, { setStack, loadStacks })(StackList);
