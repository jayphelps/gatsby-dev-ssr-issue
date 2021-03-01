// .cache/default-html.js
import React from "react";
import PropTypes from "prop-types";
export default function HTML(props) {
  return /*#__PURE__*/React.createElement("html", props.htmlAttributes, /*#__PURE__*/React.createElement("head", null, /*#__PURE__*/React.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/React.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), /*#__PURE__*/React.createElement("body", props.bodyAttributes, props.preBodyComponents, /*#__PURE__*/React.createElement("div", {
    key: `body`,
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};