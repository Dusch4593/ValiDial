function validial() {
  // Good luck!
  let input = document.getElementById("dial_button").value;
  let regex = /^(1( |-)?)?((\([0-9]{3}\))|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/;
  if(regex.test(input)){
    document.getElementById("output").innerHTML = "&#10003; It's Valid!!!";
  }else{
    document.getElementById("output").innerHTML = "&#9747; It's Not Valid!!!";
  }
}