// Estrutura HTML requerida para funcionar (exemplo em PHP):
// <body data-controller="<?php echo current_controller(); ?>" data-action="<?php echo current_action(); ?>">

// Exemplo de importação de código de outro arquivo
import storesIndex from '../stores/index.js';

var APP = {
  common: {
    init: function () {
      // application-wide code
    }
  },

  // EXEMPLO
  stores: {
    index: storesIndex(),

    show: function () {
      // stores/show code
    }
  }
}

window.UTIL = {
  exec: function (controller, action = 'init') {
    var namespace = APP

    if (controller !== '' && namespace[controller] && typeof namespace[controller][action] === 'function') {
      namespace[controller][action]()
    }
  },

  init: function () {
    var controller = document.body.getAttribute('data-controller')
    var action = document.body.getAttribute('data-action')

    window.UTIL.exec('common')
    window.UTIL.exec(controller)
    window.UTIL.exec(controller, action)
  }
}

window.addEventListener('load', function () {
  window.UTIL.init()
})
