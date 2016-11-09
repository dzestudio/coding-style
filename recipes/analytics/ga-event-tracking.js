// GA Event Tracker
ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);


// Exemplo de aplicação em evento de click utilizando jQuery
$('.js-chat-btn').on('click', function (e) {
  e.preventDefault;

  ga('send', 'event', 'Contato', 'Clique no botão', 'Chat');
});
