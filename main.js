document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let dul = Math.random();
  console.log(dul);
  if (dul < 0.1) {
    document.getElementById("output").innerHTML = "potentially";
  } else if (0.1 < dul < 0.2) {
    document.getElementById("output").innerHTML = "i doubt it";
  } else if (0.2 <= dul < 0.3) {
    document.getElementById("output").innerHTML = "i advise yes";
  } else if (0.3 <= dul < 0.4) {
    document.getElementById("output").innerHTML = "try that";
  } else if (0.4 <= dul < 0.5) {
    document.getElementById("output").innerHTML = "i advise no";
  } else if (0.5 <= dul < 0.6) {
    document.getElementById("output").innerHTML = "Dont do that";
  }
  else if (0.6 <= dul < 0.7) {
    document.getElementById("output").innerHTML = "go ahead";
  }
  else if (0.7 <= dul < 0.8) {
    document.getElementById("output").innerHTML = "thoughts say no";
  }
  else if (0.8 <= dul < 0.9) {
    document.getElementById("output").innerHTML = "if you want to";
  }
  else {
    document.getElementById("output").innerHTML = "i guess so";
  }
}
