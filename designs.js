// define constants
const height = $("#input_height");
const width = $("#input_width");

// define submit button action
$("#sizePicker").submit(function(event){
  event.preventDefault();
  makeGrid();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  // select sizes
  let h = height.val();
  let w = width.val();

  // draw table
  let tr = "";
  //create row
  for (i = 0; i < h; i++) {
    tr += "<tr>";
    //create column
    for (j = 0; j < w; j++) {
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
  let color = $("#colorPicker").val();
  // set background value on clicked td
  this.style.background = color;
}
