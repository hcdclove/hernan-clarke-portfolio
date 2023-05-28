// alert('Hello');

// $(document).ready(function () {
//   $('[data-toggle="popover"]').popover();
// });

// $('#exampleModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget);
//   alert('One');
//   // Button that triggered the modal var recipient =
//   button.data('whatever');
//   // Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback). // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead. var modal = $(this)
//   modal.find('.modal-title').text('New message to ' + recipient);
//   modal.find('.modal-body input').val(recipient);
// });

document.getElementById('execmng').value = 'execmng';
document.getElementById('projmng').value = 'projmng';
document.getElementById('sixsigma').value = 'sixsigma';
document.getElementById('enterprisepm').value = 'enterprisepm';
document.getElementById('schedulingpatent').value = 'schedulingpatent';
document.getElementById('enterprisewide').value = 'enterprisewide';

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

function handleClick(x) {
  var isChecked = x.checked;
  alert(isChecked);
  if (isChecked) {
    // alert($('main').css);
    $('div:not(#movingbutton)').css('filter', 'invert(100%)');
    $('img').css('filter', 'invert(100%)');
    $('*').css('filter', 'invert(100%)');
    $('main').css('filter', 'invert(100%)');
    $('div').css('filter', 'invert(100%)');
    $('nav').css('filter', 'invert(100%)');
    $('h1').css('filter', 'invert(100%)');
    $('p').css('filter', 'invert(100%)');
  } else {
    alert('else');
    $('div:not(#movingbutton)').css('filter', 'invert(0%)');
    $('img').css('filter', 'invert(0%)');
    $('*').css('filter', 'invert(0%)');
    $('main').css('filter', 'invert(0%)');
    $('div').css('filter', 'invert(0%)');
    $('nav').css('filter', 'invert(0%)');
    $('h1').css('filter', 'invert(0%)');
    $('p').css('filter', 'invert(0%)');
  }
}
//   if (isChecked) changeBackgroundColor('black');
//   else changeBackgroundColor('white');
