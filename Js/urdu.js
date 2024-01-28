const quotes = [
    {
      quote:
        "I promise to stand by you and love you unconditionally.",
    },
    {
      quote:
        "Dear love, I promise to make you feel valued every day no matter what. You are the hope that keeps me going.",
    },
    {
      quote:
        "Welcome back to you! Please accept my sincere support and best wishes for your fast recovery and quick return to the office.",
    },
    {
      quote:
        "Dear Husband, seeing you return home safe and sound makes my worries disappear! Welcome back home, love. We missed you.",
    },
    {
      quote:
        "If you want to succeed, then win over the fear of failure and make your ambition of success deeper and greater than anything else.",
    },
    {
      quote:
        "Don’t think how fast you can be succeeded, as you know the creation of a palace takes a long time. Be patience in a hard time.",
    },
    {
      quote:
        "I will forever chase your bad dreams away and make your life filled with sunshine and watermelons with all the good things. Be happy.",
    },
    {
      quote:
        "Words may fail to express how much I love you but my deeds will never fail to show my love for you. I loved you yesterday, love you today, and will love you until there’s no tomorrow.",
    },
    {
      quote:
        "Hey sweetheart, my morning does not become good until I see your face. Good morning, and I love you a lot.",
    },
    {
      quote:
        "I was missing my boyfriend so badly that now even the nights have become shorter. Now, I can meet you early morning. See you soon, love you.",
    },
    {
      quote:
        "My love story has only one emotion……………. ‘Happy’, because you have never made me sad. And I love you a for that.",
    },
    {
      quote:
        "I love you, and you have no idea how much. More than the water in the sea stars in the sky and hairs on your head. Love you, my sweethear.",
    },
    {
      quote:
        "My heart wants to be locked inside your heart and stay there forever and do the same with your heart. Love you, my sweetheart.",
    },
    {
      quote:
        "Your lovely smile stole my heart the very first day I saw you. And it has not returned it till date. Tell me, what to do.",
    },
    {
      quote:
        "You and I are made for each other. I have understood this, and just want to tell you the same. Love you, thanks.",
    },
    {
      quote:
        "You and I are born to be together, otherwise I have not seen any couple with such lovely chemistry. My love, you are my everything.",
    },
];

let count = 0;

function changeQuote(){
    count++;
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = "\"" + quotes[random].quote + "\"";
    // document.getElementById("author").innerText =  "-" + quotes[random].author;
    if(count % 5 == 0){
      getKaiAd({
        publisher: 'da08737d-861e-4ebe-bbbb-8fb90d004d39',
        app: 'Messages_quotes',
        slot: 'Messages_quotes_slot',
        onerror: err => console.error('Custom catch:', err),
        onready: ad => {
            // Ad is ready to be displayed
            // calling 'display' will display the ad
            ad.call('display')
            ad.on('display', () => document.getElementById("softKeysContainer").style.display = "none")
            ad.on('close', () => {
                document.getElementById("softKeysContainer").style.display = "block";
            })
        }
    })
    }
}

function handleKeyDown(et) {
    switch (et.key) {
        case 'SoftRight':
            changeQuote();
            break;
        case "SoftLeft":
          window.location.href = "index.html";
          break;
        default:
          break;
    }
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("DOMContentLoaded", () => {
    // getKaiAd( config )
    getKaiAd({
        publisher: 'da08737d-861e-4ebe-bbbb-8fb90d004d39',
        app: 'Messagas_quotes',
        slot: 'Messagas_quotes_slot',
        onerror: err => console.error('Custom catch:', err),
        onready: ad => {
            // Ad is ready to be displayed
            // calling 'display' will display the ad
            ad.call('display')
            ad.on('display', () => document.getElementById("softKeysContainer").style.display = "none")
            ad.on('close', () => {
                document.getElementById("softKeysContainer").style.display = "block";
            })
        }
    })
});
