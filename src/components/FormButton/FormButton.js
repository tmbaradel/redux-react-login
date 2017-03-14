import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './formButton.scss';

const FormButton = (props) =>
  <button
    className={ props.className }
    type={(props.type === 'submit') ? 'submit' : 'button'}
    onClick={ (event) => { event.preventDefault(); props.onClickButton(event); }}
    disabled={ props.disabled }
    id={props.id}
    name={props.name}>
    { props.children }
  </button>;

FormButton.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.any,
  onClickButton: PropTypes.func,
  target: PropTypes.any,
  id: PropTypes.any,
  name: PropTypes.any
};

export default cssModules(FormButton, styles);
