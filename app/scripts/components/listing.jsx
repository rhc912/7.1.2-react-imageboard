var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
//var ReactDOM = require('react-dom');
//
var Feed = React.createClass({
  getInitialState: function(){
    return {showForm: false, url: '', caption: ''};
  },
  componentWillMount: function(){
    this.props.collection.on('add', this.update);
  },
  update: function(){
    this.forceUpdate();
  },
  handleClick: function(event){
    event.preventDefault();
    var currentDisplay = this.state.showForm;
    this.setState({showForm: !currentDisplay})


  },
  handleNewImage: function (e){
    e.preventDefault();
    console.log(this.state.caption);
    this.props.collection.create({
      'url': this.state.url,
      'caption': this.state.caption
    });
  },
  changeUrl: function(e){
    this.setState({url: e.target.value})
  },
  changeCaption: function(e){
    this.setState({caption: e.target.value})
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

    var imageForm = this.state.showForm ? <ImageForm handleSubmit={this.handleNewImage} changeCaption={this.changeCaption} changeUrl={this.changeUrl} /> : '';

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
            <input  onChange={this.props.changeCaption}
              type="text"
              className="form-control"
              id="image-item"
              value={this.props.inputText}
              placeholder="Add Title" />
            <input
              onChange={this.props.changeUrl}
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
