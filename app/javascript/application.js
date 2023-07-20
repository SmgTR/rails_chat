import '@hotwired/turbo-rails';
import 'controllers';
import 'jquery';
import 'semantic-ui-sass';

const semanticUi = () => {
  $('.ui.accordion').accordion();

  $('.ui.dropdown').dropdown();
  $('.ui.menu .item').tab();
  $('.menu .item').tab();
  $('.tiny.menu .item').tab();
  $('.ui.button').on('click', function () {
    // programmatically activating tab
    $.tab('change tab', 'tab-name');
  });
  $('.message .close').on('click', function () {
    $(this).closest('.message').transition('fade');
  });
  scrollBottom();
};

$(document).on('turbo:load', semanticUi);
import 'channels';

window.scrollBottom = () => {
  if ($('.messages').length > 0) {
    $('.messages').scrollTop($('.messages')[0].scrollHeight);
  }
};
