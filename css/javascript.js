  $(function () {
    $( "#tabs" ).tabs();
  });

  $.ajax({
    url: "http://content.guardianapis.com/search?section=news&show-fields=trailText",
    dataType: "jsonp",
    success: function(data) {
      $.each(data.response.results, function () {
        $( "#news" ).append('<a href="' + this['webUrl'] + '"><h5>' + this['webTitle'] + '<h5></a>');
        $( "#news" ).append("<ul>" + this['fields'].trailText + "</ul>");
      });
    }});

  $.ajax({
    url: "http://content.guardianapis.com/search?section=football&show-fields=trailText",
    dataType: "jsonp",
    success: function(data) {
      $.each(data.response.results, function () {
        $( "#football" ).append('<a href="' + this['webUrl'] + '"><h5>' + this['webTitle'] + '<h5></a>');
        $( "#football" ).append("<ul>" + this['fields'].trailText + "</ul>");
      });
    }});

  $.ajax({
    url: "http://content.guardianapis.com/search?section=travel&show-fields=trailText",
    dataType: "jsonp",
    success: function(data) {
      $.each(data.response.results, function () {
        $( "#travel" ).append('<a href="' + this['webUrl'] + '"><h5>' + this['webTitle'] + '<h5></a>');
        $( "#travel" ).append("<ul>" + this['fields'].trailText + "</ul>");
      });
    }});
