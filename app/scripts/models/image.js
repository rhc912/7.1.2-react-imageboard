var Backbone = require('backbone');

var Images = Backbone.Model.extend({
  idAtrributes: '_id',
  defaults: {
  'url': '',
  'caption': ''
}
});

var ImagesCollection = Backbone.Collection.extend({
  model: Images,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/robbed'
});

module.exports = {
  'Images': Images,
  'ImagesCollection': ImagesCollection
};
