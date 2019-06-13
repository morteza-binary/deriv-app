(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./src/javascript/app/Assets/Trading/Categories/icon-trade-categories.jsx":
/*!********************************************************************************!*\
  !*** ./src/javascript/app/Assets/Trading/Categories/icon-trade-categories.jsx ***!
  \********************************************************************************/
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

var _iconTradeTypes = __webpack_require__(/*! ../Types/icon-trade-types.jsx */ "./src/javascript/app/Assets/Trading/Types/icon-trade-types.jsx");

var _iconTradeTypes2 = _interopRequireDefault(_iconTradeTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconTradeCategory = function IconTradeCategory(_ref) {
    var category = _ref.category,
        className = _ref.className;

    var IconCategory = void 0;
    if (category) {
        switch (category) {
            case 'rise_fall':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'call'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'put'
                        })
                    )
                );
                break;
            case 'rise_fall_equal':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'calle'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {

                            className: 'category-type',
                            type: 'pute'
                        })
                    )
                );
                break;
            case 'high_low':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'call_barrier'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'put_barrier'
                        })
                    )
                );
                break;
            case 'end':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'expirymiss'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'expiryrange'
                        })
                    )
                );
                break;
            case 'stay':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'range'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'upordown'
                        })
                    )
                );
                break;
            case 'match_diff':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'digitmatch'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'digitdiff'
                        })
                    )
                );
                break;
            case 'even_odd':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'digiteven'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'digitodd'
                        })
                    )
                );
                break;
            case 'over_under':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'digitover'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'digitunder'
                        })
                    )
                );
                break;
            case 'touch':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'onetouch'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'notouch'
                        })
                    )
                );
                break;
            case 'asian':
                IconCategory = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'asianu'
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'category-wrapper' },
                        _react2.default.createElement(_iconTradeTypes2.default, {
                            className: 'category-type',
                            type: 'asiand'
                        })
                    )
                );
                break;
            case 'lb_call':
                IconCategory = _react2.default.createElement(
                    'div',
                    { className: 'category-wrapper' },
                    _react2.default.createElement(_iconTradeTypes2.default, {
                        className: 'category-type',
                        type: 'lbfloatcall'
                    })
                );
                break;
            case 'lb_put':
                IconCategory = _react2.default.createElement(
                    'div',
                    { className: 'category-wrapper' },
                    _react2.default.createElement(_iconTradeTypes2.default, {
                        className: 'category-type',
                        type: 'lbfloatput'
                    })
                );
                break;
            case 'lb_high_low':
                IconCategory = _react2.default.createElement(
                    'div',
                    { className: 'category-wrapper' },
                    _react2.default.createElement(_iconTradeTypes2.default, {
                        className: 'category-type',
                        type: 'lbhighlow'
                    })
                );
                break;
            default:
                IconCategory = _react2.default.createElement(
                    'div',
                    { className: 'category-wrapper' },
                    _react2.default.createElement(_iconTradeTypes2.default, {
                        className: 'category-type',
                        type: 'unknown'
                    })
                );
                break;
        }
    }
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('categories-container', className) },
        IconCategory
    );
};

IconTradeCategory.propTypes = {
    category: _propTypes2.default.string,
    className: _propTypes2.default.string
};

exports.default = IconTradeCategory;

/***/ })

}]);