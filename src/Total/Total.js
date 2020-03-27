import React, { Component } from 'react';

class Total extends Component {
  render() {

    const total = Object.keys(this.props.itemsSelected)
      .reduce((acc, curr) => acc + this.props.itemsSelected[curr].cost, 0);

    return (
        <div className="summary__total">
            <div className="summary__total__label">Your Price: </div>
            <div className="summary__total__value">
                {
                new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(total) }
            </div>
        </div>

    )
  }
}

export default Total;