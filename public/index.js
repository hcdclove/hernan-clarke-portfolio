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
