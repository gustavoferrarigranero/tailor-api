'use strict';
module.exports = function (app) {
  var controller = require('../controllers/controller');

  // todoList Routes
  app.route('/lists')
    .get(controller.list_all_lists)
    .post(controller.create_a_list);


  app.route('/lists/:listId')
    .get(controller.read_a_list)
    .put(controller.update_a_list)
    .delete(controller.delete_a_list);


  app.route('/lists/:listId/cards')
    .get(controller.read_a_list_cards)
    .post(controller.create_a_list_card);


  app.route('/cards/:cardId')
    .put(controller.update_a_card)
    .delete(controller.delete_a_card);
};
