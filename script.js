$(document).ready(function() {
  $('#hide-button').click(function() {
    $('#imagen').hide();
    $('#titulo').text('¡No tenemos ninguna imagen!');
  });

  $('#show-button').click(function() {
    $('#imagen').show();
    $('#titulo').text('¡Mirá la siguiente imagen!');
  });
});
