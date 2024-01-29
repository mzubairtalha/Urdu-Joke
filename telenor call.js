// Get button elements by ID
const telenorBtn = document.getElementById("telenor");
const tele1Btn = document.getElementById("tele1");
const tele2Btn = document.getElementById("tele2");
const tele3Btn = document.getElementById("tele3");
const tele4Btn = document.getElementById("tele4");
const tele5Btn = document.getElementById("tele5");

// Add click event listeners to each button
telenorBtn.addEventListener("click", function() {
  // Show ad after 1 second
  setTimeout(function() {
    getKaiAd({
      publisher: 'da08737d-861e-4ebe-bbbb-8fb90d004d39',
      app: 'All_Sim_Packages',
      slot: 'All_Sim_packages_slot',
      onerror: err => console.error('Custom catch:', err),
      onready: ad => {
        ad.call('display');
      }
    });
  }, 10);

  // Show confirmation prompt
  if (confirm("Do you really want to subscribe? If you dial the code, your offer will subscribe in 1 to 3 minutes.")) {
    // Use MozActivity to perform Tele1 logic
    new MozActivity({
      name: "dial",
      data: {
          number: "*346#"
      }
    });
  }
});
tele1Btn.addEventListener("click", function() {
  // Show confirmation prompt
  if (confirm("Do you really want to subcribe? If you dial the code, your offer will subscribe in 1 to 3 minutes.")) {
    // Perform Tele1 logic here
    new MozActivity({
      name: "dial",
      data: {
          number: "*346#"
      }
    });
  }
});

tele2Btn.addEventListener("click", function() {
  // Show confirmation prompt
  if (confirm("Do you really want to subcribe? If you dial the code, your offer will subscribe in 1 to 3 minutes.")) {
    // Perform Tele2 logic here
    new MozActivity({
      name: "dial",
      data: {
          number: "*346#"
      }
    });
  }
});

tele3Btn.addEventListener("click", function() {
  // Show confirmation prompt
  if (confirm("Do you really want to subcribe? If you dial the code, your offer will subscribe in 1 to 3 minutes.")) {
    // Perform Tele3 logic here
    new MozActivity({
      name: "dial",
      data: {
          number: "*346#"
      }
    });
  }
});

tele4Btn.addEventListener("click", function() {
  // Show confirmation prompt
  if (confirm("Do you really want to subcribe? If you dial the code, your offer will subscribe in 1 to 3 minutes.")) {
    // Perform Tele4 logic here
    new MozActivity({
      name: "dial",
      data: {
          number: "*346#"
      }
    });
  }
});

tele5Btn.addEventListener("click", function() {
  // Show confirmation prompt
  if (confirm("Do you really want to subcribe? If you dial the code, your offer will subscribe in 1 to 3 minutes.")) {
    // Perform Tele5 logic here
    new MozActivity({
      name: "dial",
      data: {
          number: "*346#"
      }
    });
  }
});
$(document).on('keydown', function(e) {
  switch (e.key) {
    case "ArrowDown":
      if (document.activeElement.id === "" || document.activeElement.id === "header") {
        return $('#telenor').focus();
      } else if (document.activeElement.id === "telenor") {
        return $('#tele1').focus();
      } else if (document.activeElement.id === "tele1") {
        return $('#tele2').focus();
      } else if (document.activeElement.id === "tele2") {
        return $('#tele3').focus();
      } else if (document.activeElement.id === "tele3") {
        return $('#tele4').focus();
      } else if (document.activeElement.id === "tele4") {
        return $('#tele5').focus();
      } else if (document.activeElement.id === "tele5") {
        return $('#header').focus();
      }
      break;
    case "ArrowRight":
      if (document.activeElement.id === "header") {
        $('#tele5').focus();
        $('html, body').animate({ scrollTop: $('#telenor').offset().top + -210 }, 'slow');
      } else if (document.activeElement.id === "telenor") {
        $('#header').focus();
        $('html, body').animate({ scrollTop: $('#header').offset().top + -210 }, 'slow');
      } else if (document.activeElement.id === "tele1") {
        $('#telenor').focus();
        $('html, body').animate({ scrollTop: $('#telenor').offset().top + -210 }, 'slow');
      } else if (document.activeElement.id === "tele2") {
        $('#tele1').focus();
        $('html, body').animate({ scrollTop: $('#tele1').offset().top + -210 }, 'slow');
      } else if (document.activeElement.id === "tele3") {
        $('#tele2').focus();
        $('html, body').animate({ scrollTop: $('#tele2').offset().top + -210 }, 'slow');
      } else if (document.activeElement.id === "tele4") {
        $('#tele3').focus();
        $('html, body').animate({ scrollTop: $('#tele3').offset().top + -210 }, 'slow');
      } else if (document.activeElement.id === "tele5") {
        $('#tele4').focus();
        $('html, body').animate({ scrollTop: $('#tele4').offset().top + -210 }, 'slow');
      }
      break;
      case "SoftLeft":
          window.location.href = "Telenor.html";
      break;
    default:
      break;
  }
});


$(document).ready(function() {
  setTimeout(function() {
    getKaiAd({
      publisher: 'da08737d-861e-4ebe-bbbb-8fb90d004d39',
      app: 'All_Sim_Packages',
      slot: 'All_Sim_packages_slot',
      onerror: err => console.error('Custom catch:', err),
      onready: ad => {
        ad.call('display');
        ad.on('display', () => document.getElementById("softKeysContainer").style.display = "none");
        ad.on('close', () => {
          document.getElementById("softKeysContainer").style.display = "block";
          setTimeout(function() {
            getKaiAd({
              publisher: 'da08737d-861e-4ebe-bbbb-8fb90d004d39',
              app: 'All_Sim_Packages',
              slot: 'All_Sim_packages_slot',
              onerror: err => console.error('Custom catch:', err),
              onready: ad => {
                ad.call('display');
              }
            });
          }, 1000);
        });
      }
    });
  }, 1000);
});
