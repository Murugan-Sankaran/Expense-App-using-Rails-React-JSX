var Record = React.createClass({

  getInitialState : function(){
	return { editable:false };
},

  handleCancel : function(e){
	e.preventDefault();
	this.setState({editable:!this.state.editable});
},

  handleDelete : function(e){
	$.ajax({
		method: 'DELETE',
		url: '/records/' + this.props.record.id,
		dataType: 'JSON',
		success: function(record){
			this.props.handleDeleteRecord(this.props.record.id)
		}.bind(this)
	});
},

 handleUpdate : function(e){
	e.preventDefault();
	this.setState({editable:true});
	if(this.state.editable){
		var date=this.refs.date.value;
		var title=this.refs.title.value;
		var amount=this.refs.amount.value;
		var data={date:date, title:title, amount:amount};
	$.ajax({
		method: 'PUT',
		dataType: 'JSON',
		url: '/records/' + this.props.record.id,
		data: {record: data},
		success: function(data){
			this.props.handleUpdateRecord(data);		
			this.setState({editable:!this.state.editable});
		}.bind(this)
	});
	}
},

  render: function() {
			 	         
	var title=this.state.editable ? <input className="form-control" type="text" ref='title' defaultValue={this.props.record.title}/> : 			<p>{this.props.record.title}</p> ;
	var amount=this.state.editable ? <input className="form-control" type="number" ref='amount' defaultValue={this.props.record.amount}/> : 			<p>{this.props.record.amount}</p> ;
	var date=this.state.editable ? <input className="form-control" type="date" ref='date' defaultValue={this.props.record.date}/> : <p>{this.props.record.date}</p>
	var button= this.state.editable ? <button onClick={this.handleCancel} className="btn btn-danger btn-group">Cancel</button> : <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>

    return (
	<tr>
		<td className="col-md-2">{date}</td>
		<td className="col-md-4">{title}</td>
		<td className="col-md-2">{amount}</td>
		<td className="col-md-3">
		<button className="btn btn-success btn-group" onClick={this.handleUpdate}>{this.state.editable ? 'Submit' : 'Update' }</button>{button}</td>
	</tr>
	);
  }
});
