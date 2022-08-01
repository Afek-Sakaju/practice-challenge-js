function generateQuestion(topic) {
    let catagory;
    switch (topic) {
        case 'animals':
            catagory = quizTopics.animals;
            break;
        case 'stocks':
            catagory = quizTopics.stocks;
            break;
    }

    function generateRand(max) {
        return Math.floor(Math.random() * max);
        //function generates number from 1 - quiz topics amount
    }

    let rand = generateRand(Object.keys(quizTopics).length);
    let i = 0;
    for (const [mainKey, mainValue] of Object.entries(catagory)) {
        if (i === rand) {
            i = 0;
            rand = generateRand(Object.keys(mainKey).length);
            for (const [key, value] of Object.entries(mainValue)) {
                if (i === rand) {
                    if (typeof value === 'string') {
                        console.log(`what/who is the ${key} of ${mainKey} ?`);
                        //todo: finish 'questionMake' and put it here
                        return;
                    }
                    if (typeof value === 'boolean') {
                        console.log(`does ${mainKey} ${key} ? `);
                        //todo: finish 'questionMake' and put it here
                        return;
                    }
                } else i++;
            }
        } else i++;
    }
}

function questionMake(question, answer) {
    /* ask question than await for user's answer
    and compare the user's answer with 'answer'
    return true if same, else false*/
}

const quizTopics = {
    animals: {
        lion: {
            livingEnvirnoment: 'desert',
            hunter: true,
            eatVegtables: false,
            eatMeat: true,
        },
        monkey: {
            livingEnvirnoment: 'forest',
            hunter: false,
            eatVegtables: true,
            eatMeat: true,
        },
        squirrel: {
            livingEnvirnoment: 'forest',
            hunter: false,
            eatVegtables: true,
            eatMeat: false,
        },
        shark: {
            livingEnvirnoment: 'ocean',
            hunter: true,
            eatVegtables: false,
            eatMeat: true,
        },
        wolf: {
            livingEnvirnoment: 'mountains',
            hunter: true,
            eatVegtables: false,
            eatMeat: true,
        },
        eagle: {
            livingEnvirnoment: 'mountains',
            hunter: false,
            eatVegtables: false,
            eatMeat: true,
        },
    },
    stocks: {
        apple: {
            creator: 'Steve Jobs',
            currentPrice: '161$',
            ceo: 'Tim Cook',
        },
        tesla: {
            creator: 'Elon Musk',
            currentPrice: '860$',
            ceo: 'Elon Musk',
        },
    },
};
generateQuestion('animals');
