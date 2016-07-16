var AmountBox = React.createClass({



  render: function() {
    return(
      <div className='col-md-3'>
        <div className={'panel panel-' + this.props.type}>
          <div className='panel-heading'>
            {this.props.text}
          </div>
          <div className='panel-body'>
		&#8360;. {this.props.amount}
          </div>
        </div>
      </div>
    );
  }
});
