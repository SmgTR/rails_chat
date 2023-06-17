import '@hotwired/turbo-rails';
import 'controllers';
import 'jquery';
import 'semantic-ui-sass';

$(function () {
  $('.ui.accordion').accordion();

  $('.ui.dropdown').dropdown();
  $('.ui.menu .item').tab();
  $('.menu .item').tab();
  $('.tiny.menu .item').tab();
});
$('.ui.button').on('click', function () {
  // programmatically activating tab
  $.tab('change tab', 'tab-name');
});
