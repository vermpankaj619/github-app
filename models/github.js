var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var apiSchema = new Schema({
    node_id:  String,
    name: String,
    body:   String,
    open_issues: String,
    full_name: String,
    date: { type: Date},
    created_at:{ type: Date},
    updated_at: { type: Date},
    pushed_at: { type: Date}
        
  });
   let api = module.exports = mongoose.model('api', apiSchema)