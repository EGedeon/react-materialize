'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollectionItem = function (_React$Component) {
  _inherits(CollectionItem, _React$Component);

  function CollectionItem(props) {
    _classCallCheck(this, CollectionItem);

    var _this = _possibleConstructorReturn(this, (CollectionItem.__proto__ || Object.getPrototypeOf(CollectionItem)).call(this, props));

    _this.isAnchor = _this.isAnchor.bind(_this);
    return _this;
  }

  _createClass(CollectionItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var active = _props.active;
      var className = _props.className;


      var classes = {
        'collection-item': true,
        active: active
      };

      if (this.isAnchor()) {
        return _react2.default.createElement(
          'a',
          { className: (0, _classnames2.default)(className, classes), href: this.props.href },
          this.props.children
        );
      }

      return _react2.default.createElement(
        'li',
        { className: (0, _classnames2.default)(className, classes) },
        this.props.children
      );
    }
  }, {
    key: 'isAnchor',
    value: function isAnchor() {
      return typeof this.props.href !== 'undefined';
    }
  }]);

  return CollectionItem;
}(_react2.default.Component);

CollectionItem.propTypes = {
  active: _react2.default.PropTypes.bool,
  href: _react2.default.PropTypes.string
};

exports.default = CollectionItem;