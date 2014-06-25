  $(function () {
    $( "#tabs" ).tabs();
  });

  $(document).ready(function() {
    var list={"1":"uk-news","2":"football","3":"travel"};
    $.each(list, function(key, value) {
      $.ajax({
        url: "http://content.guardianapis.com/search?section=" + value + "&show-fields=trailText",
        dataType: "jsonp",
        success: function(data) {
          $.each(data.response.results, function () {
            $( "#" + value ).append('<a href="' + this['webUrl'] + '"><h5>' + this['webTitle'] + '<h5></a>');
            $( "#" + value ).append("<ul>" + this['fields'].trailText + "</ul>");
          });
        }});
    });
  });
