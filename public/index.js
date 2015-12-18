messages();

function messages() {
    var reqp = new XMLHttpRequest();

    reqp.open('GET', '/messages');

    reqp.addEventListener("load", handleRes);

    reqp.send();
    return false;
}

function handleRes() {
  if (this.readyState !== XMLHttpRequest.DONE) {
    return;
  }

  if (this.status = 200) {
    sendMessages(this);
  }
}

function sendMessages(req) {
  document.getElementById("posts").innerHTML = "";
  var response = req.responseText;
  var json = JSON.parse(response);
  var str = "";
  console.log(json);

  json.forEach(function(p, i) {
    str = messageTemplate(json[i]);
    document.getElementById("posts").innerHTML += str;
  });
}
