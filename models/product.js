var mongoose = require('mongoose'),
    mongoosePaginate = require('mongoose-paginate'),
    Schema = mongoose.Schema;

var schema = new Schema({
  seller: { type: Schema.Types.ObjectId, ref: 'User' },
  category: {type: Schema.Types.ObjectId, ref: 'Categoty'},
  title: {type: String, trim: true, required: true},
  content: {type: String, required: true},
  img: {type: String},
  numComments: {type: Number, default: 0},
  numReads: {type: Number, default: 0},
  createdAt: {type: Date, default: Date.now},
  totalStarPoint: {type: Number, default: 0},
  requireTime: {type: Date},
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
schema.plugin(mongoosePaginate);
var Product = mongoose.model('Product', schema);

module.exports = Product;