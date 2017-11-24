'use strict';

var mongoose = require('mongoose'),
  List = mongoose.model('List'),
  Card = mongoose.model('Card');

exports.list_all_lists = function(req, res) {
  List.find({}, function(err, list) {
    if (err)
      res.send(err);
    res.json(list);
  });
};


exports.create_a_list = function(req, res) {
  var new_list = new List(req.body);
  new_list.save(function(err, list) {
    if (err)
      res.send(err);
    res.json(list);
  });
};


exports.read_a_list = function(req, res) {
  List.findById(req.params.listId, function(err, list) {
    if (err)
      res.send(err);
    res.json(list);
  });
};


exports.update_a_list = function(req, res) {
  List.findOneAndUpdate({_id: req.params.listId}, req.body, 
    {new: true}, function(err, list) {
    if (err)
      res.send(err);
    res.json(list);
  });
};


exports.delete_a_list = function(req, res) {
  List.remove({
    _id: req.params.listId
  }, function(err, list) {
    if (err)
      res.send(err);
    res.json({ message: 'List successfully deleted' });
  });
};


exports.read_a_list_cards = function(req, res) {
  Card.find({'list_id': req.params.listId}, function(err, cards) {
    if (err)
      res.send(err);
    res.json(cards);
  });
};


exports.create_a_list_card = function(req, res) {
  var new_card = new Card(req.body);
  new_card.list_id = req.params.listId;
  new_card.save(function(err, card) {
    if (err)
      res.send(err);
    res.json(card);
  });
};


exports.update_a_card = function(req, res) {
  Card.findOneAndUpdate({_id: req.params.cardId}, req.body, 
    {new: true}, function(err, card) {
    if (err)
      res.send(err);
    res.json(card);
  });
};


exports.delete_a_card = function(req, res) {
  Card.remove({
    _id: req.params.cardId
  }, function(err, card) {
    if (err)
      res.send(err);
    res.json({ message: 'Card successfully deleted' });
  });
};