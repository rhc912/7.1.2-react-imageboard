var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
//var ReactDOM = require('react-dom');
//
var Feed = React.createClass({
  render: function(){

  var images =  this.props.collection.map(function(image){
    return( <div>

          <li key={image.cid}><img className="images col-xs-10 col-xs-offset-1" src={image.get('url')}/></li>
            <div className="caption-con col-xs-10 col-xs-offset-1">
              <p>{image.get('title')}</p>
            </div>
          </div>
        )
  });
    return (
    <div>
      <div className="well">
        <button className="btn add-btn btn-primary"><i className="fa fa-plus" aria-hidden="true"></i></button>

      </div>

      <div className="row text-center">
        {images}
      </div>
      </div>
    )
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
  'Feed': Feed
}
