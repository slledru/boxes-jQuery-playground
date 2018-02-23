$(document).ready(() => {
  let secretBox = $('#secretBox');
  let h1 = $('<h1>secret box!</h1>');
  secretBox.append(h1);
  let row1Children = $('#row1').children();
  row1Children.addClass('boxType3');
  let row4LastChild = $('#row4').children().last();
  row4LastChild.css('display', 'none');
  $('.boxType1').css('background-color', 'white');
  let row2FirstChild = $('#row2').children().first();
  row2FirstChild.attr('class', '');
  let allDivs = $('#container div').not('.row').not('#secretBox');

  for (let i = 0; i < allDivs.length; i++) {
    console.log(allDivs[i]);
    $(allDivs[i]).width('2px');
  }
});
