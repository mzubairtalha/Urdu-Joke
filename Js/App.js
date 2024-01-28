const quotes = [
  {
    quote:
      "I miss everything about you. I am still thinking if breaking up with you were the right thing to do.",
  },
  {
    quote:
      "Hate is like acid. It damages the vessel in which it is stored and destroys the vessel in which it is poured.",
  },
  {
    quote:
      "True love does not have a happy ending, because true love doesn’t end.",
  },
  {
    quote:
      "You never love someone because they’re beautiful, they are beautiful because you love them.",
  },
  {
    quote:
      "Don’t cry for the person who doesn’t know the value of your tears.",
  },
  {
    quote:
      "I may smile and I may laugh. But deep down my heart is a pain you’ll never guess.",
  },
  {
    quote:
      "Surrounded by many people who love me, but yet I’m so alone. Why is that? Is it because you're the only one not there?",
  },
  {
    quote:
      "Life is just a dream, to some it's a sweet dream, to others, a nightmare. But whatever it is, it's always short and dissipates quickly.",
  },
  {
    quote:
      "Crying alone does not show that you are weak but it shows that you are strong.",
  },
  {
    quote:
      "I understand why you left. But what I don't understand is why I'm still waiting for you?",
  },
  {
    quote:
      "I hate seeing you because you bring back the feelings I tried so hard to forget.",
  },
  {
    quote:
      "I Am Not Alone, I Am Lonely Without You.",
  },
  {
    quote:
      "Every time you ignore me, I regret every text message that I have ever sent you.",
  },
  {
    quote:
      "One day you’ll find someone who doesn’t care about your past because they want to be your future.",
  },
  {
    quote:
      "But better die than live mechanically a life that is a repetition of repetitions.",
  },
  {
    quote:
      "Sadness does not come from bad circumstances. It comes from bad thoughts.",
  },
  {
    quote:
      "My last words for you, I HATE YOU.",
  },
  {
    quote:
      "Breaking up with you is the least that I can do. We cannot just fix what is broken to us. It is better to leave it all behind and move on with our lives.",
  },
  {
    quote:
      "I love you at my best. I love you with all my heart. But you choose to break my heart. And I hate you for that.",
  },
  {
    quote:
      "It took me a while to realize that I stopped loving you. I'm sorry but I know you deserve someone better than me.",
  },
  {
    quote:
      "There will be no more late-night conversations and anniversaries for us. I thought this would last, but I was wrong. I was wrong to believe that you will never break my heart.",
  },
  {
    quote:
      "Have I told you lately how much I am in love with you??? No?? Think about it, have a great life.",
  },
  {
    quote:
      "I miss the laughs I used to get from you, I miss the talks we used to have. And above all, I just miss you!",
  },
  {
    quote:
      "If you're in a dark room, you find blood everywhere and the walls are shaking - don't worry friend, you're at the safest place, you're in my heart.",
  },
  {
    quote:
      "Little keys can open big locks, simple words can express great thoughts. A text from you never fails to make me smile the whole day through.",
  },
  {
    quote:
      "The worst way to miss someone is when they are right beside you and yet you know you can never have them..",
  },
  {
    quote:
      "Sometimes it is not the person you miss. It is the feeling you had when you were with him/her.",
  },
  {
    quote:
      "Don't be upset because you miss something from your past, there is always a reason why it didn't make it into your future..",
  },
  {
    quote:
      "Everyone is busy but you shouldn't make her/him feel that you don't have time. A simple text or a one-minute-call will let her/him know that you are thinking of her/him too..",
  },
  {
    quote:
      "I miss your voice near my ears, I miss your staring eyes, I miss your kisses oh so sweet, the way we used to greet, I miss you so much my hubby dear, please come back to me and near!.",
  },
  {
    quote:
      "Every heart has a pain. Only the way of expression is different. Some hide it in eyes while some hide it in their smile.",
  },
  {
    quote:
      "Worst feeling is not being lonely. It's being forgotten by someone you could not forget.",
  },
];

let count = 0;

function changeQuote() {
  count++;
  let random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = `"${quotes[random].quote}"`;
  if (count % 5 == 0) {
    getKaiAd({
      publisher: 'da08737d-861e-4ebe-bbbb-8fb90d004d39',
      app: 'Messages_quotes',
      slot: 'Messages_quotes_slot',
      onerror: err => console.error('Custom catch:', err),
      onready: ad => {
        ad.call('display');
        ad.on('display', () => document.getElementById("softKeysContainer").style.display = "none");
        ad.on('close', () => {
          document.getElementById("softKeysContainer").style.display = "block";
        });
      }
    });
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
  getKaiAd({
    publisher: 'da08737d-861e-4ebe-bbbb-8fb90d004d39',
    app: 'Messages_quotes',
    slot: 'Messages_quotes_slot',
    onerror: err => console.error('Custom catch:', err),
    onready: ad => {
      ad.call('display');
      ad.on('display', () => document.getElementById("softKeysContainer").style.display = "none");
      ad.on('close', () => {
        document.getElementById("softKeysContainer").style.display = "block";
      });
    }
  });
});
