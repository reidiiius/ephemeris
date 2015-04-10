
function point() {
  document.getElementById("pnt").style.cursor = "pointer";
}

function goBack() {
  window.history.back();
}

function viewList(qp) {
  document.getElementById(qp).style.visibility = "visible";
}

function hideList(qp) {
  document.getElementById(qp).style.visibility = "hidden";
}

