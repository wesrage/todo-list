var React = require('react');

var VisibilityFilters = React.createClass({
  propTypes: {
    onSetFilter: React.PropTypes.func.isRequired
  },
  setFilter: function(text) {
    var onSetFilter = this.props.onSetFilter;
    return function() {
      onSetFilter(text);
    };
  },
  renderButton: function(text) {
    return (
      <button onClick={this.setFilter(text)}>{text}</button>
    );
  },
  render: function() {
    return (
      <div>
        {this.renderButton('All')}
        {this.renderButton('Active')}
        {this.renderButton('Completed')}
      </div>
    );
  }
});

module.exports = VisibilityFilters;
