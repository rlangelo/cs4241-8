document.getElementById("postMess").addEventListener("click", PostMessage);
document.getElementById("textMess").value = "";
messages();

function PostMessage() {
    var text = document.getElementById("textMess").value;
    console.log(text);
    if (text == "") {
      alert("Your message must at least 1 character");
    }
    else{
    var reqp = new XMLHttpRequest();
    console.log("here");
    reqp.open('POST', '/post');
    reqp.addEventListener("load", handleRes);

    reqp.send();
    return false;
  }
}

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
