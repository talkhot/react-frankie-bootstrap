import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Row extends React.Component {
  render() {
    const {className, ...props} = this.props;
    const cls = classNames(this.props.className, 'row');

    return (
      <div className={cls} {...props}/>
    );
  }
}
