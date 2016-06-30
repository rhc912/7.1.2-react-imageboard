var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
//local
var model = require('./models/image');
var AddForm = require('./components/form.jsx');
var Feed = require('./components/listing.jsx').Feed;

//var images = new model.ImagesCollection();
var ImageItems = Feed.ImageItems;

var images = new model.ImagesCollection();
// images.add([
//   {'title': 'Kingdom of Clouds', 'url': 'http://cdn.c.photoshelter.com/img-get2/I0000cFuR.qeh0L8/fit=1000/' },
//   {'title': 'Olympic National Park', 'url': 'http://exotichikes.com/wp-content/uploads/2014/04/GOPR1281-Medium.jpg'},
//   {'title': 'Yellowstone', 'url': 'http://feel-planet.com/wp-content/uploads/2015/05/yellowstone-national-park-usa.jpg'}
// ]);

  ReactDOM.render(
    React.createElement(Feed, {collection: images}),
    document.getElementById('container')

  );
images.fetch();
