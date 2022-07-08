/* I had session of daily learning with my teacher Hadriel
and at each session we had to say hello in some way...
i noticed that i was repeating the same phrase a lot, 
so i decided to build function "eveningPhrase"
that generates random phrase from list of words,
each word sorted by its kind, to make perfect phrases 
(its in hebrew due to the learning sessions language) */

function eveningPhrase() {
    const dictionary = {
        greetings: ['ערב-טוב', 'ברוכים-הבאים', 'שלום-וברכה', 'ברוכים-השבים'],
        questions: ['מה נשמע', 'מה קורה', 'מה מצב', 'איך המרגש'],
        nicknames: [
            'חברים',
            'אנשים',
            'צופים יקרים',
            'חברים יקרים',
            'צופים וצופות',
            'אנשים יקרים',
        ],
    };

    let g =
        dictionary.greetings[~~(Math.random() * dictionary.greetings.length)];
    let q =
        dictionary.questions[~~(Math.random() * dictionary.questions.length)];
    let n =
        dictionary.nicknames[~~(Math.random() * dictionary.nicknames.length)];

    let i = ~~(Math.random() * (4 - 1) + 1);

    let phrase;

    switch (i) {
        case 1:
            phrase = g + ' ' + n;
            break;
        case 2:
            phrase = q + ' ' + n;
            break;
        case 3:
            phrase = g + ' ' + q + ' ' + n;
            break;
    }

    console.log(`${phrase}`);
}

eveningPhrase();
