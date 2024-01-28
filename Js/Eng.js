const quotes = [
    {
        quote:
            "When two people are arguing and one person says “You know what…” , that argument is about to get awesome!",
    },

    {
        quote:
            "Practice makes perfect but then nobody is perfect so what’s the point of practicing?😂😂😂.",
    },
    {
        quote:
            "My love for you is like diarrhea, I just can't hold it in..",
    },
    {
        quote:
            "My love for you is like a fart that can’t be contained. Bursting out aloud in all its glory and fragrance..",
    },
    {
        quote:
            "I know why you work out every day. You want to look as hot as me, don’t you?",
    },
    {
        quote:
            "I’m so happy for you, that you’ve got the most good-looking boyfriend ever..",
    },
    {
        quote:
            "I love it when we kiss. Because you can’t kiss and talk at the same time..",
    },
    {
        quote:
            "I feel for you and totally understand if you get jealous all the time. I’d feel the same way if I had such a hot boyfriend..",
    },
    {
        quote:
            "Hey I’m not jealous. I just think you’re too hot for other guys to be talking to. The last thing I’d want is for them to feel bad about being turned down..",
    },
    {
        quote:
            "I believe in gender equality. So on our next date, I’m going to split the bill with you..",
    },
    {
        quote:
            "In your wildest dreams, did you ever, ever imagine you’d have a boyfriend as hot as me? Aren’t you lucky! Just sayin.",
    },
    {
        quote:
            "Did you know that kissing burns calories? Want to work out?.",
    },
    {
        quote:
            "My love for you is like pooping. I’d be dead without it..",
    },
    {
        quote:
            "Did you know that men and women poop differently? Yes, according to science, it’s easier for men to poop than women. I feel for you babe..",
    },
    {
        quote:
            "You’re like my old car. It used to drive me crazy. I Love You!",
    },
    {
        quote:
            "I have to say babe, your choices are the best! You chose me, didn’t you?",
    },
    {
        quote:
            "Our relationship is based on two simple rules. Number one, you do everything I say. Number two, never forget number one.",
    },
    {
        quote:
            "When it comes to our relationship, I want you to be stress-free all the time. Just keep calm and do as I say.",
    },
    {
        quote:
            "Whenever we’re fighting, always remember that every minute spent arguing could’ve been spent cuddling.",
    },
    {
        quote:
            "You are every girl’s dream come true. But never ever take that for granted, else I’ll be your worst nightmare.",
    },
    {
        quote:
            "You can disagree with me all you want, because at the end of the day, we’re two individuals. I cannot force you to be right.",
    },
    {
        quote:
            "I know sometimes I can be a demanding girlfriend. But that’s why you’ve got 24 hours a day to hustle.",
    },
    {
        quote:
            "My love for you is like diarrhea, I just can't hold it in.",
    },
    {
        quote:
            "My love for you is like a fart that can’t be contained. Bursting out aloud in all its glory and fragrance.",
    },
    {
        quote:
            "I know why you work out every day. You want to look as hot as me, don’t you",
    },
    {
        quote:
            "I’m so happy for you, that you’ve got the most good-looking boyfriend ever.",
    },
    {
        quote:
            "Was your father a thief? ‘Cause someone stole the stars from the sky and put them in your eyes.",
    },
    {
        quote:
            "Do you have a pencil? Cause I want to erase your past and write our future.",
    },
    {
        quote:
            "I must be in a museum, because you truly are a work of art.",
    },
    {
        quote:
            "Are you my phone charger? Because without you, I’d die.",
    },
    {
        quote:
            "Behind every great man is a woman rolling her eyes.",
    },
    {
        quote:
            "We all have that one skinny friend that eats more than fat person.",
    },
];

let count = 0;

function changeQuote() {
    count++;
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = "\"" + quotes[random].quote + "\"";
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
    })
});
