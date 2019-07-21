// tutorial
// routes array to store JSON data
var routesArray = [];

// on DOM ready
$(document).ready(function() {
  showRoutes();
});

//show routes
function showRoutes() {
  var tableContent = "";

  //get JSON
  $.getJSON('/users/routes', function(data) {
    routesArray = data;
    console.log(data);
    $.each(data, function(index) {
      console.log(this);
      console.log(this._id);
      //TODO get json to function or write email
      //TODO work on post and on rest of assignment
      //console.log(this.features[0].geometry.coordinates[3]);
      tableContent += '<tr>';
      tableContent += '<td>' + index + '</td>';
      tableContent += '<td>' + this.name + '</td>';
      tableContent += '<td>' + this.date + '</td>';
      tableContent += '<td>' + this.desc + '</td>';
      tableContent += '<td><a href="#" class="linkdeleteroute" rel="' + this._id + '">delete</a></td>';
      tableContent += '</tr>';
    });

    //put into html
    $('#routeTable').html(tableContent);
    $('#routeTable').on('click', 'td a.linkdeleteroute', deleteRoute);
  });
}

function deleteRoute(event) {
  event.preventDefault();

    $.ajax({
      type: 'DELETE',
      url: '/users/deleteroute/' + $(this).attr('rel')
    }).done(function(response) {
      if(response.msg === '') {
        alert('done!');
      }
      else {
        //alert('Error: ' + response.msg);
      }

      //update
      showRoutes();
    });
}
