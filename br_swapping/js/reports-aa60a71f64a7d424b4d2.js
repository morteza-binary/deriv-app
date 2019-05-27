(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports"],{

/***/ "./src/javascript/app/App/Components/Animations/fade-wrapper.jsx":
/*!***********************************************************************!*\
  !*** ./src/javascript/app/App/Components/Animations/fade-wrapper.jsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FadeWrapper = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactPose = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");

var _reactPose2 = _interopRequireDefault(_reactPose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FadeInFromTopDiv = _reactPose2.default.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 300,
        transition: {
            default: { duration: 250 }
        }
    },
    exit: {
        y: -50,
        opacity: 0,
        transition: { duration: 250 }
    }
});

var FadeInFromBottomDiv = _reactPose2.default.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 300,
        transition: {
            default: { duration: 250 }
        }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 250 }
    }
});

var FadeInOnlyDiv = _reactPose2.default.div({
    enter: {

        opacity: 1,
        transition: { duration: 300 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 300 }
    }
});

var FadeWrapper = function FadeWrapper(_ref) {
    var children = _ref.children,
        className = _ref.className,
        keyname = _ref.keyname,
        is_visible = _ref.is_visible,
        type = _ref.type;

    if (type === 'top') {
        return _react2.default.createElement(
            _reactPose.PoseGroup,
            null,
            is_visible && _react2.default.createElement(
                FadeInFromTopDiv,
                { className: className, key: keyname },
                children
            )
        );
    }
    if (type === 'bottom') {
        return _react2.default.createElement(
            _reactPose.PoseGroup,
            null,
            is_visible && _react2.default.createElement(
                FadeInFromBottomDiv,
                { className: className, key: keyname },
                children
            )
        );
    }
    return _react2.default.createElement(
        _reactPose.PoseGroup,
        null,
        is_visible && _react2.default.createElement(
            FadeInOnlyDiv,
            { className: className, key: keyname },
            children
        )
    );
};

FadeWrapper.propTypes = {
    children: _propTypes2.default.node,
    is_visible: _propTypes2.default.bool,
    keyname: _propTypes2.default.string,
    type: _propTypes2.default.string
};

exports.FadeWrapper = FadeWrapper;

/***/ }),

/***/ "./src/javascript/app/App/Components/Animations/index.js":
/*!***************************************************************!*\
  !*** ./src/javascript/app/App/Components/Animations/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fadeWrapper = __webpack_require__(/*! ./fade-wrapper.jsx */ "./src/javascript/app/App/Components/Animations/fade-wrapper.jsx");

Object.keys(_fadeWrapper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fadeWrapper[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app/Modules/Reports/Containers/reports.jsx":
/*!*******************************************************************!*\
  !*** ./src/javascript/app/Modules/Reports/Containers/reports.jsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app/Stores/connect.js");

var _Animations = __webpack_require__(/*! ../../../App/Components/Animations */ "./src/javascript/app/App/Components/Animations/index.js");

var _verticalTab = __webpack_require__(/*! ../../../App/Components/Elements/VerticalTabs/vertical-tab.jsx */ "./src/javascript/app/App/Components/Elements/VerticalTabs/vertical-tab.jsx");

var _verticalTab2 = _interopRequireDefault(_verticalTab);

var _Settings = __webpack_require__(/*! ../../../Assets/Settings */ "./src/javascript/app/Assets/Settings/index.js");

var _routes = __webpack_require__(/*! ../../../Constants/routes */ "./src/javascript/app/Constants/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reports = function (_React$Component) {
    _inherits(Reports, _React$Component);

    function Reports() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Reports);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Reports.__proto__ || Object.getPrototypeOf(Reports)).call.apply(_ref, [this].concat(args))), _this), _this.state = { is_visible: false }, _this.setWrapperRef = function (node) {
            _this.wrapper_ref = node;
        }, _this.handleClickOutside = function (event) {
            if (_this.wrapper_ref && !_this.wrapper_ref.contains(event.target)) {
                _this.props.history.push(_routes2.default.trade);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Reports, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.showBlur();
            document.addEventListener('mousedown', this.handleClickOutside);
            this.setState({ is_visible: true });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.setState({ is_visible: false });
            this.props.hideBlur();
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var menu_options = function menu_options() {
                var options = [];

                _this2.props.routes.forEach(function (route) {
                    options.push({
                        default: route.default,
                        icon: route.icon_component,
                        label: route.title,
                        value: route.component,
                        path: route.path
                    });
                });

                return options;
            };

            var action_bar_items = [{
                onClick: function onClick() {
                    _this2.props.history.push(_routes2.default.trade);
                    _this2.setState({ is_visible: false });
                },
                icon: _Settings.IconClose,
                title: (0, _localize.localize)('Close')
            }];
            return _react2.default.createElement(
                _Animations.FadeWrapper,
                {
                    is_visible: this.state.is_visible,
                    className: 'reports-page-wrapper',
                    keyname: 'reports-page-wrapper'
                },
                _react2.default.createElement(
                    'div',
                    { className: 'reports', ref: this.setWrapperRef },
                    _react2.default.createElement(_verticalTab2.default, {
                        header_title: (0, _localize.localize)('Reports'),
                        action_bar: action_bar_items,
                        alignment: 'center',
                        classNameHeader: 'reports__tab-header',
                        current_path: this.props.location.pathname,
                        is_routed: true,
                        is_full_width: true,
                        list: menu_options()
                    })
                )
            );
        }
    }]);

    return Reports;
}(_react2.default.Component);

Reports.propTypes = {
    hideBlur: _propTypes2.default.func,
    history: _propTypes2.default.object,
    location: _propTypes2.default.object,
    routes: _propTypes2.default.arrayOf(_propTypes2.default.object),
    showBlur: _propTypes2.default.func
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var ui = _ref2.ui;
    return {
        hideBlur: ui.hideRouteBlur,
        showBlur: ui.showRouteBlur
    };
})((0, _reactRouterDom.withRouter)(Reports));

/***/ }),

/***/ "./src/javascript/app/Modules/Reports/index.js":
/*!*****************************************************!*\
  !*** ./src/javascript/app/Modules/Reports/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _reports = __webpack_require__(/*! ./Containers/reports.jsx */ "./src/javascript/app/Modules/Reports/Containers/reports.jsx");

var _reports2 = _interopRequireDefault(_reports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _reports2.default;

/***/ })

}]);