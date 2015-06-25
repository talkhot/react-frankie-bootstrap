import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Col extends React.Component {
  static propTypes: {
    xs: React.PropTypes.number,
    sm: React.PropTypes.number,
    md: React.PropTypes.number,
    lg: React.PropTypes.number,
    xsOffset: React.PropTypes.number,
    smOffset: React.PropTypes.number,
    mdOffset: React.PropTypes.number,
    lgOffset: React.PropTypes.number,
    xsPush: React.PropTypes.number,
    smPush: React.PropTypes.number,
    mdPush: React.PropTypes.number,
    lgPush: React.PropTypes.number,
    xsPull: React.PropTypes.number,
    smPull: React.PropTypes.number,
    mdPull: React.PropTypes.number,
    lgPull: React.PropTypes.number
  }

  render() {
    const {className, ...props} = this.props;

    const sizes = {
      'large': 'lg',
      'medium': 'md',
      'small': 'sm',
      'xsmall': 'xs'
    };

    let classes = {};
    Object.keys(sizes).forEach(function (key) {
      let size = sizes[key];
      let prop = size;
      let classPart = size + '-';

      if (props[prop]) {
        classes['col-' + classPart + props[prop]] = true;
      }

      prop = size + 'Offset';
      classPart = size + '-offset-';
      if (props[prop] >= 0) {
        classes['col-' + classPart + props[prop]] = true;
      }

      prop = size + 'Push';
      classPart = size + '-push-';
      if (props[prop] >= 0) {
        classes['col-' + classPart + props[prop]] = true;
      }

      prop = size + 'Pull';
      classPart = size + '-pull-';
      if (props[prop] >= 0) {
        classes['col-' + classPart + props[prop]] = true;
      }
    }, this);

    const cls = classNames(this.props.className, classes);

    return (
      <div className={cls} {...props}/>
    );
  }
}
