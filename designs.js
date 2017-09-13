
// define submit button action
$("#submit").click(makeGrid);

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  // select sizes
  var height = $("#input_height").val();
  var width = $("#input_width").val();

  // draw table
  var i;
  var j;
  var tr = "";
  //create row
  for (i = 0; i < height; i++) {
    tr += "<tr>";
    //create column
    for (j = 0; j < width; j++) {
      tr += "<td>&nbsp;</td>";
    }
    tr += "</tr>";
  }
  $("#pixel_canvas").html(tr);
  // connect function to all td elements
  $("td").click(colorPixel);
}

function colorPixel() {
  // get current value colorpicker 
  var color = $("#colorPicker").val();
  // set background value on clicked td
  this.style.background = color;
}
