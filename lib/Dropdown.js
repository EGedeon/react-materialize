'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _idgen = require('./idgen');

var _idgen2 = _interopRequireDefault(_idgen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.renderTrigger = _this.renderTrigger.bind(_this);
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var options = this.props.options || {};

      $(this._trigger).dropdown(options);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      $(this._trigger).off();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;

      var props = _objectWithoutProperties(_props, ['children']);

      this.idx = 'dropdown_' + (0, _idgen2.default)();

      return _react2.default.createElement(
        'span',
        null,
        this.renderTrigger(),
        _react2.default.createElement(
          'ul',
          _extends({}, props, { className: 'dropdown-content', id: this.idx }),
          children
        )
      );
    }
  }, {
    key: 'renderTrigger',
    value: function renderTrigger() {
      var _this2 = this;

      var trigger = this.props.trigger;


      return _react2.default.cloneElement(trigger, {
        ref: function ref(t) {
          return _this2._trigger = t;
        },
        className: 'dropdown-button',
        'data-activates': this.idx
      });
    }
  }]);

  return Dropdown;
}(_react.Component);

Dropdown.propTypes = {
  /**
   * The button to trigger the dropdown
   */
  trigger: _react.PropTypes.node.isRequired,
  children: _react.PropTypes.node,
  /**
   * Options hash for the dropdown
   * more info: http://materializecss.com/dropdown.html#options
   */
  options: _react.PropTypes.shape({
    inDuration: _react.PropTypes.number,
    outDuration: _react.PropTypes.number,
    constrain_width: _react.PropTypes.bool,
    hover: _react.PropTypes.bool,
    gutter: _react.PropTypes.number,
    belowOrigin: _react.PropTypes.bool,
    alignment: _react.PropTypes.oneOf(['left', 'right'])
  })
};

exports.default = Dropdown;