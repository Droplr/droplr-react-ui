import React from "react";
import PropTypes from "prop-types";
import * as icons from "./icons/icons_extended";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

const IconRefs = Object.keys(icons).map((key) => { return {k: key, v: icons[key]}});

const Icon = ({ size, color, icon, className, style, viewBox }) => {
  const styles = { ...defaultStyles, ...style };

  const getPaths = (paths) => {
    return (
      paths.map(
        (data, i) => {
          return (
            <path stroke={color}

              d={data}
              key={i}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          )
        }
      )
    );
  }
  return (
    <svg
      className={className}
      style={styles}
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
    >
      {getPaths(IconRefs.find(ref => ref.k === icon).v)}
    </svg>
  );
};

Icon.defaultProps = {
  size: 32,
  color: "#000000",
  viewBox: "0 0 24 24",
  style: {},
  className: "",
};

Icon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  style: PropTypes.shape(PropTypes.object),
  className: PropTypes.string,
};

export default Icon;