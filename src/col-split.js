'use strict';

import React from 'react';
import classNames from 'classnames';
import Col from './col';
import Row from './row';

// splits a column for nested grids
// gives better readability
export default class ColSplit extends React.Component {
  static propTypes: {
    noGutter: React.PropTypes.bool,
    children: React.PropTypes.any
  }

  static defaultProps = {
    noGutter: true
  }

  render() {
    // we pass all probs except noGutter & children
    // the we add the default class no-gutter by default
    const {noGutter, children, ...props} = this.props;
    const gutterClass = classNames(noGutter && 'no-gutter');

    return (
      <Col className='col-split' {...props}>
        <Row className={gutterClass}>{children}</Row>
      </Col>
    );
  }
}
