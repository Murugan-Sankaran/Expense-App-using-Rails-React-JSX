var RecordForm = React.createClass({

 getInitialState : function(){
	return { title : '',
		 date : '',
		 amount : '' }
},

 handleChange : function(e){
	var name=e.target.name;
	var obj={};
	obj[name]=e.target.value;
	this.setState(obj);
},

 valid:function(){
	return (this.state.title && this.state.date && this.state.amount);
},

 handleSubmit : function(e){
	e.preventDefault();
	$.post('',
		{record:this.state},
		function(data){
			this.props.handleNewRecord(data);
			this.setState(this.getInitialState());
		}.bind(this),
		'JSON'
	);
},
 
_onFocus: function(e){
    e.currentTarget.type = "date";
},

_onBlur: function(e){
    e.currentTarget.type = "text";
    e.currentTarget.placeholder = "Enter a Date";
},

  render: function() {
    return (
	<form className="form-inline" onSubmit={this.handleSubmit}>
		<div className="form-group">
		<input placeholder="Date" className="form-control" name='date' type="text" onFocus = {this._onFocus} onBlur={this._onBlur} id="date" value={this.state.date} onChange={this.handleChange}/></div>
		<div className="form-group"><input className="form-control" name='title' type="text" placeholder='Title' value={this.state.title} onChange={this.handleChange}/></div>
		<div className="form-group"><input className="form-control" name='amount' type="amount" placeholder='Amount' value={this.state.amount} onChange={this.handleChange}/></div>
		<div className="form-group"><input type='submit' value="Add" className="btn btn-success" disabled={!this.valid()}></input></div>
	</form>
	);
  }
});
