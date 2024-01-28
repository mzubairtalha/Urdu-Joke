$(document).ready(function() {
  $('#next').focus();
});

var currentIndex = 1; 

$("#jeazz").click(function() {
  window.location.href = "./jazz.html";
});

$("#telenor").click(function() {
  if(currentIndex == 3) {
    window.location.href = "./pages/Telenor.html";
  }
  $('.First.page_root .first.page_item:nth-child('+ currentIndex +')').addClass('d-none');
  $('.first.page_root .first.page_item:nth-child('+ currentIndex +')').removeClass('d-none');
});

$(document).on('keydown', function(e) {
  switch (e.key) {
    case "ArrowDown":
      if (document.activeElement.id === "") {
        return $('#english').focus();
      } else if (document.activeElement.id === "english") {
        return $('#urdu').focus();
      } else if (document.activeElement.id === "urdu") {
        return $('#bengali').focus();
      } else {
        return;
      }
    case "ArrowUp":
      if (document.activeElement.id === "bengali") {
        return $('#urdu').focus();
      } else if (document.activeElement.id === "urdu") {
        return $('#english').focus();
      } else {
        return;
      }
    case "SoftUp":
      window.location.href = "pages/help.html";
      break;
    default:
      return;
  }
});

$("#bengali").click(function() {
  window.location.href = "./index0.html";
});

$("#english").click(function() {
  window.location.href = "./index1.html";
});

$("#urdu").click(function() {
  window.location.href = "./index2.html";
});
