import React from 'react';
import PropTypes from 'prop-types';
import {Button as BaseButton} from 'antd';
import classNames from 'classnames';

import './Button.scss';


function Button(props) {
  return (
    <BaseButton className={classNames('button', props.className, {'button__large': props.size == 'large',})} {...props}/>
  )
}

Button.propTypes = {
    className: PropTypes.string,

}

export default Button