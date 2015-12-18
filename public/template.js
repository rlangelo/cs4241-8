var messageTemplate = _.template(
  "<div class='post'>" +
  "<p><%= Message %></p>" +
  "<a>Posted By: </a>" +
  "<a><%= ID %></a>" +
  "<a> on </a>" +
  "<a><%= Time %></a>" +
  "</div>"
);
