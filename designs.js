function makeGrid(){

  let canvas = $('#pixelCanvas');
  const height = $('#inputHeight').val();
	const width = $('#inputWidth').val();

// clears the grid incase there's one existing there before...
  canvas.children().remove();

  for (x = 0; x < height; x++) {
	canvas.append('<tr></tr>');
	}

	let rows = $('tr');

	for (y = 0; y < width; y++) {
	rows.append('<td></td>');
	}

  let cell = canvas.find('td');

// This function applies the selected color to the cells
  cell.click(function() {
		const color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
}

let submit = $('input[type="submit"]');
submit.click(function(event) {
  event.preventDefault();
  makeGrid();
});
