import React from 'react';
import PropTypes from 'prop-types';

const defaultStyles = { display: 'inline-block', verticalAlign: 'middle' };

const Icon = ({ size, children, className, onClick, viewBox }) => {
  const styles = { ...defaultStyles };
  return (
    <div onClick={onClick}>
      <svg
        className={className}
        style={styles}
        viewBox={viewBox}
        width={`${size}px`}
        height={`${size}px`}
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        {children}
      </svg>
    </div>
    
  );
};

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Icon;