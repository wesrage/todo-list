import React, { Component, PropTypes } from 'react';

class VisibilityFilters extends Component {
  setFilter = (text) => () => this.props.onSetFilter(text);

  renderButton = (text) => (
     <button onClick={this.setFilter(text)}>{text}</button>
  )

  render() {
    return (
      <div>
        {this.renderButton('All')}
        {this.renderButton('Active')}
        {this.renderButton('Completed')}
      </div>
    );
  }
}

VisibilityFilters.propTypes = {
  onSetFilter: PropTypes.func.isRequired,
};

export default VisibilityFilters;
