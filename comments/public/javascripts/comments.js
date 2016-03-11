$(document).ready(function(){
    $("#serialize").click(function(){
      event.preventDefault();
      var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val()};
      jobj = JSON.stringify(myobj);
      $("#json").html("JSON Object Created: " + jobj);

      var url = "comment";

  		$.ajax({
  		  url:url,
  		  type: "POST",
  		  data: jobj,
  		  contentType: "application/json; charset=utf-8",
  		  success: function(data,textStatus) {
  		      $("#done").html("Status: " + textStatus);
  		  }
  		});

    });

    $("#getThem").click(function() {
      $.getJSON('comment', function(data) {
        console.log(data);
        var everything = "<div class='list-group'>";
        for(var comment in data) {
          com = data[comment];
          everything += "<a href='#' class='list-group-item'><p class='list-group-item-text'>\"" + com.Name + "\" Said:</p><h4 class='list-group-item-heading'>\"" + com.Comment + "\"</h4></a>";
        }
        everything += "</div>";
        $("#comments").html(everything);
      })
    })


});


