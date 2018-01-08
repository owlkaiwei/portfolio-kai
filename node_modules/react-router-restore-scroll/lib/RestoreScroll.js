'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RestoreScroll = _react2.default.createClass({
  displayName: 'RestoreScroll',


  contextTypes: {
    router: _react2.default.PropTypes.object.isRequired
  },

  propTypes: {
    scrollKey: _react2.default.PropTypes.string.isRequired
  },

  componentDidMount: function componentDidMount() {
    var registerScroller = this.context.router.restoreScroll.registerScroller;

    registerScroller(this.props.scrollKey, (0, _reactDom.findDOMNode)(this));
  },
  componentWillUnmount: function componentWillUnmount() {
    var unregisterScroller = this.context.router.restoreScroll.unregisterScroller;

    unregisterScroller(this.props.scrollKey);
  },
  render: function render() {
    return _react2.default.Children.only(this.props.children);
  }
});

exports.default = RestoreScroll;