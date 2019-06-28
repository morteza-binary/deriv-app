(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contract"],{

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

var FadeDiv = _reactPose2.default.div({
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
        is_visible = _ref.is_visible;
    return _react2.default.createElement(
        _reactPose.PoseGroup,
        null,
        is_visible && _react2.default.createElement(
            FadeDiv,
            { className: className, key: keyname },
            children
        )
    );
};

FadeWrapper.propTypes = {
    children: _propTypes2.default.node,
    is_visible: _propTypes2.default.bool,
    keyname: _propTypes2.default.string
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

/***/ "./src/javascript/app/App/Components/Elements/ContractDrawer/contract-card-body.jsx":
/*!******************************************************************************************!*\
  !*** ./src/javascript/app/App/Components/Elements/ContractDrawer/contract-card-body.jsx ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractCardBody = function ContractCardBody(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'contract-card__body' },
        children
    );
};

ContractCardBody.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};

exports.default = ContractCardBody;

/***/ }),

/***/ "./src/javascript/app/App/Components/Elements/ContractDrawer/contract-card-footer.jsx":
/*!********************************************************************************************!*\
  !*** ./src/javascript/app/App/Components/Elements/ContractDrawer/contract-card-footer.jsx ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractCardFooter = function ContractCardFooter(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'contract-card__footer' },
        children
    );
};

ContractCardFooter.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array])
};

exports.default = ContractCardFooter;

/***/ }),

/***/ "./src/javascript/app/App/Components/Elements/ContractDrawer/contract-card-header.jsx":
/*!********************************************************************************************!*\
  !*** ./src/javascript/app/App/Components/Elements/ContractDrawer/contract-card-header.jsx ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractCardHeader = function ContractCardHeader(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'contract-card__header' },
        children
    );
};

ContractCardHeader.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};

exports.default = ContractCardHeader;

/***/ }),

/***/ "./src/javascript/app/App/Components/Elements/ContractDrawer/contract-card.jsx":
/*!*************************************************************************************!*\
  !*** ./src/javascript/app/App/Components/Elements/ContractDrawer/contract-card.jsx ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractCard = function ContractCard(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'contract-card' },
        children
    );
};

ContractCard.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array])
};

exports.default = ContractCard;

/***/ }),

/***/ "./src/javascript/app/App/Components/Elements/ContractDrawer/contract-drawer.jsx":
/*!***************************************************************************************!*\
  !*** ./src/javascript/app/App/Components/Elements/ContractDrawer/contract-drawer.jsx ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _Common = __webpack_require__(/*! ../../../../Assets/Common */ "./src/javascript/app/Assets/Common/index.js");

var _localize = __webpack_require__(/*! ../localize.jsx */ "./src/javascript/app/App/Components/Elements/localize.jsx");

var _localize2 = _interopRequireDefault(_localize);

var _underlyingIcon = __webpack_require__(/*! ../underlying-icon.jsx */ "./src/javascript/app/App/Components/Elements/underlying-icon.jsx");

var _resultDetails = __webpack_require__(/*! ../PositionsDrawer/result-details.jsx */ "./src/javascript/app/App/Components/Elements/PositionsDrawer/result-details.jsx");

var _resultDetails2 = _interopRequireDefault(_resultDetails);

var _contractTypeCell = __webpack_require__(/*! ../PositionsDrawer/contract-type-cell.jsx */ "./src/javascript/app/App/Components/Elements/PositionsDrawer/contract-type-cell.jsx");

var _contractTypeCell2 = _interopRequireDefault(_contractTypeCell);

var _profitLossCardContent = __webpack_require__(/*! ../../../../Modules/Reports/Components/profit-loss-card-content.jsx */ "./src/javascript/app/Modules/Reports/Components/profit-loss-card-content.jsx");

var _profitLossCardContent2 = _interopRequireDefault(_profitLossCardContent);

var _contractCardBody = __webpack_require__(/*! ./contract-card-body.jsx */ "./src/javascript/app/App/Components/Elements/ContractDrawer/contract-card-body.jsx");

var _contractCardBody2 = _interopRequireDefault(_contractCardBody);

var _contractCardFooter = __webpack_require__(/*! ./contract-card-footer.jsx */ "./src/javascript/app/App/Components/Elements/ContractDrawer/contract-card-footer.jsx");

var _contractCardFooter2 = _interopRequireDefault(_contractCardFooter);

var _contractCardHeader = __webpack_require__(/*! ./contract-card-header.jsx */ "./src/javascript/app/App/Components/Elements/ContractDrawer/contract-card-header.jsx");

var _contractCardHeader2 = _interopRequireDefault(_contractCardHeader);

var _contractCard = __webpack_require__(/*! ./contract-card.jsx */ "./src/javascript/app/App/Components/Elements/ContractDrawer/contract-card.jsx");

var _contractCard2 = _interopRequireDefault(_contractCard);

var _details = __webpack_require__(/*! ../../../../Stores/Modules/Portfolio/Helpers/details */ "./src/javascript/app/Stores/Modules/Portfolio/Helpers/details.js");

var _logic = __webpack_require__(/*! ../../../../Stores/Modules/Contract/Helpers/logic */ "./src/javascript/app/Stores/Modules/Contract/Helpers/logic.js");

var _money = __webpack_require__(/*! ../money.jsx */ "./src/javascript/app/App/Components/Elements/money.jsx");

var _money2 = _interopRequireDefault(_money);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContractDrawer = function (_Component) {
    _inherits(ContractDrawer, _Component);

    function ContractDrawer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ContractDrawer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContractDrawer.__proto__ || Object.getPrototypeOf(ContractDrawer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            is_shade_on: false
        }, _this.handleShade = function (shade) {
            _this.setState({ is_shade_on: shade });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ContractDrawer, [{
        key: 'getBodyContent',
        value: function getBodyContent() {
            var _props$contract_info = this.props.contract_info,
                buy_price = _props$contract_info.buy_price,
                currency = _props$contract_info.currency,
                exit_tick = _props$contract_info.exit_tick,
                is_sold = _props$contract_info.is_sold,
                profit = _props$contract_info.profit,
                sell_price = _props$contract_info.sell_price;
            var contract_info = this.props.contract_info;

            var exit_spot = (0, _logic.isUserSold)(contract_info) ? '-' : exit_tick;
            return _react2.default.createElement(
                _contractCard2.default,
                { contract_info: contract_info },
                _react2.default.createElement(
                    _contractCardHeader2.default,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)('contract-card__grid', 'contract-card__grid-underlying-trade')
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'contract-card__underlying-name' },
                            _react2.default.createElement(_underlyingIcon.UnderlyingIcon, { market: contract_info.underlying }),
                            _react2.default.createElement(
                                'span',
                                { className: 'contract-card__symbol' },
                                contract_info.display_name
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'contract-card__type' },
                            _react2.default.createElement(_contractTypeCell2.default, { type: contract_info.contract_type })
                        )
                    )
                ),
                _react2.default.createElement(
                    _contractCardBody2.default,
                    null,
                    _react2.default.createElement(_profitLossCardContent2.default, {
                        pl_value: +profit,
                        payout: +sell_price,
                        currency: currency
                    })
                ),
                _react2.default.createElement(
                    _contractCardFooter2.default,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'purchase-price-container' },
                        _react2.default.createElement(_localize2.default, { str: 'Purchase Price:' }),
                        '\xA0',
                        _react2.default.createElement(
                            'span',
                            { className: 'purchase-price' },
                            _react2.default.createElement(_money2.default, {
                                currency: currency,
                                amount: buy_price
                            })
                        )
                    ),
                    _react2.default.createElement(_resultDetails2.default, {
                        contract_info: contract_info,
                        contract_end_time: (0, _logic.getEndTime)(contract_info),
                        is_open: true,
                        is_shade_visible: this.handleShade,
                        duration: (0, _details.getDurationTime)(contract_info),
                        duration_unit: (0, _details.getDurationUnitText)((0, _details.getDurationPeriod)(contract_info)),
                        exit_spot: exit_spot,
                        has_result: !!is_sold
                    })
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (!this.props.contract_info) return null;
            var body_content = this.getBodyContent();
            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('contract-drawer', {}) },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'contract-drawer__heading',
                        onClick: function onClick() {
                            return _this2.props.history.goBack();
                        }
                    },
                    _react2.default.createElement(_Common.Icon, { icon: _Common.IconBack }),
                    _react2.default.createElement(
                        'h2',
                        null,
                        _react2.default.createElement(_localize2.default, { str: this.props.heading || 'Contract' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'contract-drawer__body' },
                    body_content
                )
            );
        }
    }]);

    return ContractDrawer;
}(_react.Component);

ContractDrawer.propTypes = {
    contract_info: _propTypes2.default.object,
    heading: _propTypes2.default.string
};

exports.default = (0, _reactRouter.withRouter)(ContractDrawer);

/***/ }),

/***/ "./src/javascript/app/App/Components/Elements/ContractDrawer/index.js":
/*!****************************************************************************!*\
  !*** ./src/javascript/app/App/Components/Elements/ContractDrawer/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContractCard = exports.default = undefined;

var _contractDrawer = __webpack_require__(/*! ./contract-drawer.jsx */ "./src/javascript/app/App/Components/Elements/ContractDrawer/contract-drawer.jsx");

var _contractDrawer2 = _interopRequireDefault(_contractDrawer);

var _contractCard = __webpack_require__(/*! ./contract-card.jsx */ "./src/javascript/app/App/Components/Elements/ContractDrawer/contract-card.jsx");

var _contractCard2 = _interopRequireDefault(_contractCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contractDrawer2.default;
exports.ContractCard = _contractCard2.default;

/***/ }),

/***/ "./src/javascript/app/Modules/Contract/Containers/contract-replay.jsx":
/*!****************************************************************************!*\
  !*** ./src/javascript/app/Modules/Contract/Containers/contract-replay.jsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _Animations = __webpack_require__(/*! ../../../App/Components/Animations */ "./src/javascript/app/App/Components/Animations/index.js");

var _chartLoader = __webpack_require__(/*! ../../../App/Components/Elements/chart-loader.jsx */ "./src/javascript/app/App/Components/Elements/chart-loader.jsx");

var _chartLoader2 = _interopRequireDefault(_chartLoader);

var _ContractDrawer = __webpack_require__(/*! ../../../App/Components/Elements/ContractDrawer */ "./src/javascript/app/App/Components/Elements/ContractDrawer/index.js");

var _ContractDrawer2 = _interopRequireDefault(_ContractDrawer);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app/Stores/connect.js");

var _Common = __webpack_require__(/*! ../../../Assets/Common */ "./src/javascript/app/Assets/Common/index.js");

var _Settings = __webpack_require__(/*! ../../../Assets/Settings */ "./src/javascript/app/Assets/Settings/index.js");

var _routes = __webpack_require__(/*! ../../../Constants/routes */ "./src/javascript/app/Constants/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _infoBox = __webpack_require__(/*! ./info-box.jsx */ "./src/javascript/app/Modules/Contract/Containers/info-box.jsx");

var _infoBox2 = _interopRequireDefault(_infoBox);

var _digits = __webpack_require__(/*! ./digits.jsx */ "./src/javascript/app/Modules/Contract/Containers/digits.jsx");

var _digits2 = _interopRequireDefault(_digits);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContractReplay = function (_React$Component) {
    _inherits(ContractReplay, _React$Component);

    function ContractReplay() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ContractReplay);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContractReplay.__proto__ || Object.getPrototypeOf(ContractReplay)).call.apply(_ref, [this].concat(args))), _this), _this.setWrapperRef = function (node) {
            _this.wrapper_ref = node;
        }, _this.handleClickOutside = function (event) {
            if (_this.wrapper_ref && !_this.wrapper_ref.contains(event.target)) {
                _this.props.history.push(_routes2.default.trade);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ContractReplay, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.hidePositions();
            this.props.setChartLoader(true);
            this.props.showBlur();
            var url_contract_id = /[^/]*$/.exec(location.pathname)[0];
            this.props.onMount(this.props.contract_id || url_contract_id);
            document.addEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.hideBlur();
            this.props.onUnmount();
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var SmartChart = _react2.default.lazy(function () {
                return Promise.all(/*! import() | smart_chart */[__webpack_require__.e("vendors~smart_chart"), __webpack_require__.e("smart_chart")]).then(__webpack_require__.t.bind(null, /*! ../../SmartChart */ "./src/javascript/app/Modules/SmartChart/index.js", 7));
            });

            var action_bar_items = [{
                onClick: function onClick() {
                    return _this2.props.history.push(_routes2.default.trade);
                },
                icon: _Settings.IconClose,
                title: (0, _localize.localize)('Close')
            }];

            var _props = this.props,
                config = _props.config,
                contract_info = _props.contract_info,
                chart_id = _props.chart_id,
                is_chart_loading = _props.is_chart_loading;


            return _react2.default.createElement(
                'div',
                { className: 'trade-container__replay', ref: this.setWrapperRef },
                _react2.default.createElement(
                    _Animations.FadeWrapper,
                    {
                        className: 'contract-drawer-wrapper',
                        is_visible: !!contract_info.status,
                        keyname: 'contract-drawer-wrapper'
                    },
                    _react2.default.createElement(_ContractDrawer2.default, {
                        contract_info: contract_info,
                        heading: 'Reports'
                    })
                ),
                _react2.default.createElement(
                    _react2.default.Suspense,
                    { fallback: _react2.default.createElement('div', null) },
                    _react2.default.createElement(
                        'div',
                        { className: 'replay-chart__container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'vertical-tab__action-bar' },
                            action_bar_items.map(function (_ref2) {
                                var icon = _ref2.icon,
                                    onClick = _ref2.onClick,
                                    title = _ref2.title;
                                return _react2.default.createElement(_Common.Icon, {
                                    className: 'vertical-tab__action-bar--icon',
                                    key: title,
                                    icon: icon,
                                    onClick: onClick
                                });
                            })
                        ),
                        _react2.default.createElement(_chartLoader2.default, { is_visible: is_chart_loading && !!config }),
                        config && config.symbol && _react2.default.createElement(SmartChart, _extends({
                            chart_id: chart_id,
                            chartControlsWidgets: null,
                            Digits: _react2.default.createElement(_digits2.default, null),
                            InfoBox: _react2.default.createElement(_infoBox2.default, null),
                            should_show_last_digit_stats: false
                        }, config))
                    )
                )
            );
        }
    }]);

    return ContractReplay;
}(_react2.default.Component);

ContractReplay.propTypes = {
    chart_id: _propTypes2.default.string,
    config: _propTypes2.default.object,
    contract_id: _propTypes2.default.string,
    contract_info: _propTypes2.default.object,
    hideBlur: _propTypes2.default.func,
    hidePositions: _propTypes2.default.func,
    history: _propTypes2.default.object,
    is_chart_loading: _propTypes2.default.bool,
    location: _propTypes2.default.object,
    onMount: _propTypes2.default.func,
    onUnmount: _propTypes2.default.func,
    routes: _propTypes2.default.arrayOf(_propTypes2.default.object),
    setChartLoader: _propTypes2.default.func,
    showBlur: _propTypes2.default.func
};

exports.default = (0, _reactRouter.withRouter)((0, _connect.connect)(function (_ref3) {
    var modules = _ref3.modules,
        ui = _ref3.ui;
    return {
        chart_id: modules.smart_chart.replay_id,
        config: modules.contract.replay_config,
        onMount: modules.contract.onMountReplay,
        onUnmount: modules.contract.onUnmountReplay,
        contract_info: modules.contract.replay_info,
        setChartLoader: modules.smart_chart.setIsChartLoading,
        is_chart_loading: modules.smart_chart.is_chart_loading,
        hidePositions: ui.hidePositionsFooterToggle,
        hideBlur: ui.hideRouteBlur,
        showBlur: ui.showRouteBlur

    };
})(ContractReplay));

/***/ }),

/***/ "./src/javascript/app/Modules/Contract/Containers/contract.jsx":
/*!*********************************************************************!*\
  !*** ./src/javascript/app/Modules/Contract/Containers/contract.jsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _Errors = __webpack_require__(/*! ../../../App/Components/Elements/Errors */ "./src/javascript/app/App/Components/Elements/Errors/index.js");

var _Errors2 = _interopRequireDefault(_Errors);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app/Stores/connect.js");

var _contractReplay = __webpack_require__(/*! ./contract-replay.jsx */ "./src/javascript/app/Modules/Contract/Containers/contract-replay.jsx");

var _contractReplay2 = _interopRequireDefault(_contractReplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contract = function Contract(_ref) {
    var error_message = _ref.error_message,
        has_error = _ref.has_error,
        match = _ref.match;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        has_error ? _react2.default.createElement(_Errors2.default, { message: error_message }) : _react2.default.createElement(
            _reactTransitionGroup.CSSTransition,
            {
                'in': !has_error,
                timeout: 400,
                classNames: {
                    enter: 'contract--enter',
                    enterDone: 'contract--enter-done',
                    exit: 'contract--exit'
                },
                unmountOnExit: true
            },
            _react2.default.createElement(_contractReplay2.default, {
                contract_id: match.params.contract_id,
                key: match.params.contract_id
            })
        )
    );
};

Contract.propTypes = {
    error_message: _propTypes2.default.string,
    has_error: _propTypes2.default.bool,
    is_mobile: _propTypes2.default.bool,
    match: _propTypes2.default.object,
    symbol: _propTypes2.default.string
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var modules = _ref2.modules,
        ui = _ref2.ui;
    return {
        error_message: modules.contract.error_message,
        has_error: modules.contract.has_error,
        is_mobile: ui.is_mobile,
        symbol: modules.contract.contract_info.underlying
    };
})(Contract);

/***/ }),

/***/ "./src/javascript/app/Modules/Contract/index.js":
/*!******************************************************!*\
  !*** ./src/javascript/app/Modules/Contract/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _contract = __webpack_require__(/*! ./Containers/contract.jsx */ "./src/javascript/app/Modules/Contract/Containers/contract.jsx");

var _contract2 = _interopRequireDefault(_contract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contract2.default;

/***/ }),

/***/ "./src/javascript/app/Modules/Reports/Components/profit-loss-card-content.jsx":
/*!************************************************************************************!*\
  !*** ./src/javascript/app/Modules/Reports/Components/profit-loss-card-content.jsx ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../App/Components/Elements/localize.jsx */ "./src/javascript/app/App/Components/Elements/localize.jsx");

var _localize2 = _interopRequireDefault(_localize);

var _money = __webpack_require__(/*! ../../../App/Components/Elements/money.jsx */ "./src/javascript/app/App/Components/Elements/money.jsx");

var _money2 = _interopRequireDefault(_money);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfitLossCardContent = function ProfitLossCardContent(_ref) {
    var currency = _ref.currency,
        pl_value = _ref.pl_value,
        payout = _ref.payout;
    return _react2.default.createElement(
        'div',
        { className: 'pl-card' },
        _react2.default.createElement(
            'div',
            { className: 'pl-card__item' },
            _react2.default.createElement(
                'div',
                { className: 'pl-card__item__header' },
                _react2.default.createElement(_localize2.default, { str: 'P/L:' })
            ),
            _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('pl-card__item__body', {
                        'pl-card__item__body--loss': +pl_value < 0,
                        'pl-card__item__body--profit': +pl_value > 0
                    })
                },
                _react2.default.createElement(_money2.default, { currency: currency, amount: pl_value })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'pl-card__item' },
            _react2.default.createElement(
                'div',
                { className: 'pl-card__item__header' },
                _react2.default.createElement(_localize2.default, { str: 'Payout:' })
            ),
            _react2.default.createElement(
                'div',
                { className: 'pl-card__item__body' },
                _react2.default.createElement(_money2.default, { currency: currency, amount: payout })
            )
        )
    );
};

ProfitLossCardContent.propTypes = {
    currency: _propTypes2.default.string,
    payout: _propTypes2.default.number,
    pl_value: _propTypes2.default.number
};
exports.default = ProfitLossCardContent;

/***/ })

}]);