function makeGrid(){

  var canvas = $('#pixelCanvas');
  var height = $('#inputHeight').val();
	var width = $('#inputWidth').val();

  canvas.children().remove();

  for (x = 0; x < height; x++) {
	canvas.append('<tr></tr>');
	}

	var rows = $('tr');

	for (y = 0; y < width; y++) {
	rows.append('<td></td>');
	}

  var cell = canvas.find('td');

  cell.click(function() {
		var color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
}

var submit = $('input[type="submit"]');
submit.click(function(event) {
  event.preventDefault();
  makeGrid();
});
