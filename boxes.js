$(document).ready(() => {
  // // Exercise #1 and #2
  // // let secretBox = $('#secretBox');
  // // let h1 = $('<h1>secret box!</h1>');
  // // secretBox.css('background-color', 'white');
  // // secretBox.append(h1);
  // $('#secretBox').css('background-color', 'white').append('<h1>secret box!</h1>');
  //
  // // let row1Children = $('#row1').children();
  // // row1Children.addClass('boxType3');
  // // $('#row1').children().addClass('boxType3');
  // $('#row1 > div').addClass('boxType3');
  //
  // // let row4LastChild = $('#row4').children().last();
  // // row4LastChild.css('display', 'none');
  // $('#row4 > div').last().css('display', 'none');
  //
  // $('.boxType1').css('background-color', 'white');
  //
  // // let row2FirstChild = $('#row2').children().first();
  // // row2FirstChild.attr('class', '');
  // // row2FirstChild.next().attr('class', '');
  // $('#row2').children().first().attr('class', '').next().attr('class', '');
  // //
  // // let allDivs = $('#container div').not('.row').not('#secretBox');
  // // for (let i = 0; i < allDivs.length; i++) {
  // //   $(allDivs[i]).width('2px');
  // // }
  // $('#container div').not('.row').not('#secretBox').width('2px');

  // Exercise #3
  // add package console-log
  // $('#container').click((event) => {
  //   event.preventDefault();
  //   console.log(event.screenX, event.screenY);
  // });

  // $('#container').on('click', (event) => {
  //   event.preventDefault();
  //   console.log(event.screenX, event.screenY);
  // });

  // let a = $('<a href="http://www.galvanize.com">Galvanize</a>');
  // $('.boxType1').append(a).click((event) => {
  //   event.preventDefault();
  //   alert('you can never leave the page');
  // });
  $('.box').click((event) => {
    event.preventDefault();
    if ($(event.target).is('img')) {
      $(event.target).remove('img');
    } else {
      let img = $('<img src="images/cute_puppy.jpg" width="150px">');
      $(event.target).append(img);
    }
  });
});
