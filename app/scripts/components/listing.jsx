var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
//var ReactDOM = require('react-dom');
//
var Feed = React.createClass({
  getInitialState: function(){
    return {showForm: false};
  },
  handleClick: function(event){
    event.preventDefault();
    var currentDisplay = this.state.showForm;
    this.setState({showForm: !currentDisplay})


  },
  render: function(){
    var textComponent = this.state.showForm;
    var images =  this.props.collection.map(function(image){
      return(
          <li className="col-xs-10 col-xs-offset-1" key={image.cid}>
            <img className="images" src={image.get('url')}/>
            <div className="picture-tile caption-con">
              <p>{image.get('title')}</p>
            </div>
          </li>
        )
    });

    var imageForm = this.state.showForm ? <ImageForm  /> : '';

    return (
      <div>
        <div className="well">
          <button onClick={this.handleClick} className="btn add-btn btn-primary"><i className="fa fa-plus" aria-hidden="true"></i></button>

        </div>

        {imageForm}

        <div className="row text-center">
          {images}
        </div>
      </div>
    );

  }
});
var ImageForm = React.createClass({
  render: function(){
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="image-item">Add Image</label>
          <input
            onChange={this.props.handleChange}
            type="text"
            className="form-control"
            id="image-item"
            value={this.props.inputText}
            placeholder="Add URL" />
        </div>
        <input type="submit" className="btn btn-success" value="Add"/>
      </form>
    );
  }
});
var Navigation = React.createClass({
  render: function (){
    return (
      <div>
        <div className="container">

        </div>

      </div>
    );
  }
});

module.exports = {
  'Navigation': Navigation,
  'Feed': Feed,
  'ImageForm': ImageForm
}
