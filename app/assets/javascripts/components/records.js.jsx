var Records = React.createClass({

 getInitialState : function(){
	return { records:this.props.data };
},

 getDefaultProps : function(){
	return { records:[] };
},

 addRecord : function(record){
	var records = this.state.records.slice();
	records.push(record);
	this.setState({records:records});
},

 deleteRecord : function(id){
	var newRecords=this.state.records.filter((record) => {
		return record.id != id;
	})
	this.setState({records:newRecords});
},

 updateRecord : function(data){
        var newRecords = this.state.records.filter((i) => { 
		return i.id != data.id;
	})
        newRecords.push(data);
	this.setState({records:newRecords});
},

  credits: function() {
    var credits = this.state.records.filter(function(val) {
      return val.amount >= 0
    });
    return credits.reduce(function(prev, curr) {
      return prev + parseFloat(curr.amount);
    }, 0)
  },

  debits: function() {
    var debits = this.state.records.filter(function(val) {
      return val.amount < 0
    });
    return debits.reduce(function(prev, curr) {
      return prev + parseFloat(curr.amount)
    }, 0)
  },

  balance: function() {
    return this.debits() + this.credits();
  },

  render: function() {
    return (
	<div>
		<h3>Expense Report</h3>
		 <div className="row">
			  <AmountBox type='success' amount={this.credits()} text='Credit' />
			  <AmountBox type='danger' amount={this.debits()} text='Debit' />
			  <AmountBox type='info' amount={this.balance()} text='Balance' />
		</div>
		<RecordForm handleNewRecord={this.addRecord}/><br/>
		<div className="table-responsive">
		<table className="table table-bordered table-hover table-striped table-reflow">
			<thead>
			<tr className="table-active">
				<th>Date</th>
				<th>Title</th>
				<th>Amount</th>
				<th>Actions</th>
			</tr>
			</thead>
			<tbody>
			 {this.state.records.map(function(record){
				return < Record key={record.id} record={record} handleDeleteRecord={this.deleteRecord} 
					handleUpdateRecord={this.updateRecord} />	
			}.bind(this))}
			</tbody>
		</table>
		</div>
	</div>
	);
  }
});
