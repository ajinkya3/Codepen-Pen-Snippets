$('.bold').on('click', function() {
  document.execCommand('bold', false, null);
});
$('.italics').on('click', function() {
  document.execCommand('italic', false, null);
});

$('.underline').on('click', function() {
  document.execCommand('underline', false, null);
});
$('.link a').click(function() {
  {
url = prompt('Enter the link here: ', 'http://');
document.execCommand($(this).data('command'), false, url);
  }
});

$('.color').spectrum({
  color: '#000000',
  showPalette: true,
  showInput: true,
  showInitial: true,
  showInput: true,
  preferredFormat: "hex",
  showButtons: false,
  change: function(color) {
    color = color.toHexString();
    document.execCommand('foreColor', false, color);
  }
});

$('.size1').on('change', function() {
   var size = $(this).val();
   $('.texteditor').css('fontSize', size + 'px');
});

/* Scrollbar */
$('.texteditor').perfectScrollbar();