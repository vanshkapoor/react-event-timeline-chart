"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./timelinegraph.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VerticalTimeline = _ref => {
  let {
    data
  } = _ref;
  return data && /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "timechart"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text-center text-secondary"
  }, "start"), /*#__PURE__*/_react.default.createElement("div", {
    className: "timeline_main timeline_main_start"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "timeline_start_chartbox"
  })), data.timeline.map((data, key) => {
    if (data.subdata == undefined) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "timeline_main"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "timeline_chartbox"
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "timeline_date"
      }, data.time), /*#__PURE__*/_react.default.createElement("h4", {
        className: "timeline_header"
      }, data.title), /*#__PURE__*/_react.default.createElement("p", {
        className: "text-secondary"
      }, data.subtext), data.link.map((link, key) => {
        return /*#__PURE__*/_react.default.createElement("p", {
          className: "p-0 mb-0"
        }, /*#__PURE__*/_react.default.createElement("a", {
          href: "".concat(link.url)
        }, link.urltext));
      })));
    } else {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "timeline_main"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "row timeline_chartbox_left"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "col-9"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "timeline_chartbox"
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "timeline_date"
      }, data.time), /*#__PURE__*/_react.default.createElement("h4", {
        className: "timeline_header"
      }, data.title), /*#__PURE__*/_react.default.createElement("p", {
        className: "text-secondary"
      }, data.subtext), data.link.map((link, key) => {
        return /*#__PURE__*/_react.default.createElement("p", {
          className: "p-0 mb-0"
        }, /*#__PURE__*/_react.default.createElement("a", {
          href: "".concat(link.url)
        }, link.urltext));
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-3 p-0"
      }, data.subdata.map((obj, key) => {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "timeline_sub_chartbox "
        }, /*#__PURE__*/_react.default.createElement("p", {
          className: "mb-0"
        }, obj.text, " "));
      }))));
    }
  }))));
};

var _default = VerticalTimeline;
exports.default = _default;