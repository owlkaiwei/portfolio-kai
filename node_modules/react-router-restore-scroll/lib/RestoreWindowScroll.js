'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RestoreWindowScroll = _react2.default.createClass({
  displayName: 'RestoreWindowScroll',


  propTypes: {
    restoreWindow: _react2.default.PropTypes.func.isRequired,
    location: _react2.default.PropTypes.object.isRequired
  },

  componentDidMount: function componentDidMount() {
    this.props.restoreWindow(this.props.location);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) this.props.restoreWindow(this.props.location);
  },
  render: function render() {
    return _react2.default.Children.only(this.props.children);
  }
});

exports.default = RestoreWindowScroll;