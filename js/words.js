var x = function () {
    var _wordList = [{
        'word': 'the',
        'definition': 'specifies, or makes particular'
    },
    {
        'word': 'and',
        'definition': 'added condition or stipulation'
    },
    {
        'word': 'for',
        'definition': 'directed to someone or something'
    },
    {
        'word': 'are',
        'definition': 'present tense of the word be, or a metric unit',
        'sentences': [{id:1, text:'Who are you?'},{id:2, text:'Where are you?'},{id:3, text:'Are you going to school today?'}]

    },
    {
        'word': 'but',
        'definition': 'on the contrary'
    },
    {
        'word': 'not',
        'definition': 'no way'
    },
    {
        'word': 'you',
        'definition': 'a person or someone being addressed'
    },
    {
        'word': 'all',
        'definition': 'everything'
    },
    {
        'word': 'any',
        'definition': 'one'
    },
    {
        'word': 'can',
        'definition': 'a container '
    },
    {
        'word': 'her',
        'definition': 'a case of the pronoun she'
    },
    {
        'word': 'was',
        'definition': 'to have actuality, a form of the word be'
    },
    {
        'word': 'one',
        'definition': 'a number'
    },
    {
        'word': 'our',
        'definition': 'a possessive form of the pronoun we'
    },
    {
        'word': 'out',
        'definition': 'to be revealed of something or go outdoors or go beyond expectations'
    },
    {
        'word': 'day',
        'definition': 'between sunrise and sunset'
    },
    {
        'word': 'get',
        'definition': 'to come into possession of something'
    },
    {
        'word': 'has',
        'definition': 'wealthy person, a form of had'
    },
    {
        'word': 'him',
        'definition': 'a male human being'
    },
    {
        'word': 'his',
        'definition': 'the possessive form of he'
    },
    {
        'word': 'how',
        'definition': 'a way of doing something'
    },
    {
        'word': 'man',
        'definition': 'an adult male'
    },
    {
        'word': 'new',
        'definition': 'never used before, modern'
    },
    {
        'word': 'now',
        'definition': 'right at this very moment, the present time'
    },
    {
        'word': 'old',
        'definition': 'having or being for a very long time'
    },
    {
        'word': 'see',
        'definition': 'to look or perceive with one\'s eyes'
    },
    {
        'word': 'two',
        'definition': 'the number'
    },
    {
        'word': 'way',
        'definition': 'a method of doing something'
    },
    {
        'word': 'who',
        'definition': 'a person or persons'
    },
    {
        'word': 'boy',
        'definition': 'a young person who is of male gender'
    },
    {
        'word': 'did',
        'definition': 'part of the musical scale'
    },
    {
        'word': 'its',
        'definition': 'the possessive form of it'
    },
    {
        'word': 'let',
        'definition': 'giving permission to'
    },
    {
        'word': 'put',
        'definition': 'to place something in a spot of your choice'
    },
    {
        'word': 'say',
        'definition': 'speak words from one’s mouth'
    },
    {
        'word': 'she',
        'definition': 'a female human being'
    },
    {
        'word': 'too',
        'definition': 'in addition'
    },
    {
        'word': 'use',
        'definition': 'put into service'
    },
    {
        'word': 'dad',
        'definition': 'father'
    },
    {
        'word': 'mom',
        'definition': 'mother'
    },
    {
        'word': 'act',
        'definition': 'to do something'
    },
    {
        'word': 'bar',
        'definition': 'to shut out, to not let in'
    },
    {
        'word': 'car',
        'definition': 'a vehicle in which you drive'
    },
    {
        'word': 'dew',
        'definition': 'condensed moisture'
    },
    {
        'word': 'eat',
        'definition': 'to consume food'
    },
    {
        'word': 'far',
        'definition': 'a great distance'
    },
    {
        'word': 'gym',
        'definition': 'a room for athletics'
    },
    {
        'word': 'hey',
        'definition': 'something one says to get attention'
    },
    {
        'word': 'ink',
        'definition': 'liquid in a pen in which you write with'
    },
    {
        'word': 'jet',
        'definition': 'a stream of water'
    },
    {
        'word': 'key',
        'definition': 'open a door or starts a vehicle'
    },
    {
        'word': 'log',
        'definition': 'a tree that is cut down'
    },
    {
        'word': 'mad',
        'definition': 'not well mentally'
    },
    {
        'word': 'nap',
        'definition': 'to sleep for a brief moment'
    },
    {
        'word': 'odd',
        'definition': 'not common'
    },
    {
        'word': 'pal',
        'definition': 'a friend'
    },
    {
        'word': 'ram',
        'definition': 'to hit or strike with force'
    },
    {
        'word': 'saw',
        'definition': 'a tool to cut or divide'
    },
    {
        'word': 'tan',
        'definition': 'to turn golden brown from the sun'
    },
    {
        'word': 'urn',
        'definition': 'a decorative container'
    },
    {
        'word': 'vet',
        'definition': 'a doctor who treats animals'
    },
    {
        'word': 'wed',
        'definition': 'marriage'
    },
    {
        'word': 'yap',
        'definition': 'a shrill bark'
    },
    {
        'word': 'zoo',
        'definition': 'a place where animals are housed for people to come and see'
    },
    ]

    // var sightWords = {
    //     'prek': [{
    //             word: 'a'
    //         }, {
    //             word: 'and'
    //         }
    //         , away, big, blue, can, come, down, find,
    //         for, funny, go, help, here, I, in , is, it, jump, little, look, make, me, my, not, one, play, red, run, said, see, the, three, to, two, up, we, where, yellow, you

    //     ]


    // }

    getRandomArbitrary = function (min, max) {
        return Math.random() * (max - min) + min;
    };

    _wordCount = function () {
        return _wordList.length;
    }
    _randomWord = function () {
        var i = 0;
        var v = parseInt(getRandomArbitrary(1, _wordCount()))
        //console.log(v);
        //return wordList(3);
        return _wordList[v];
    }
    return {
        wordCount: function () {
            return _wordCount()
        },
        wordList: _wordList,
        currentWord: null,
        getRandomWord: function () {
            return _randomWord()
        },
        // sort: function (a, b) {
        //     //return a.word - b.word;
        //     var x = a.word.toLowerCase();
        //     var y = b.word.toLowerCase();
        //     if (x < y) { return -1; }
        //     if (x > y) { return 1; }
        //     return 0;
        // },
        // sortRandomly: function (a, b) {
        //     //return a.word - b.word;
        //     var x = a.word.toLowerCase();
        //     var y = b.word.toLowerCase();
        //     if (x < y) { return -1; }
        //     if (x > y) { return 1; }
        //     return 0;
        // },
        init: function () {
            this.currentWord = this.getRandomWord();
            this.wordList.forEach(function (item) {

                if (!item.displayed) {
                    item.displayed = 0;
                }
                if (!item.assisted) {
                    item.assisted = 0;
                }
                if (!item.defined) {
                    item.defined = 0;
                }

                if (!item.attempted) {
                    item.attempted = 0;
                }

                if (!item.correct) {
                    item.correct = 0;
                }

                if (!item.incorrect) {
                    item.incorrect = 0;
                }
            });
            // sort
            this.wordList.sort(function (a, b) {
                //return a.word - b.word;
                var x = a.word.toLowerCase();
                var y = b.word.toLowerCase();
                if (x < y) { return -1; }
                if (x > y) { return 1; }
                return 0;
            });
        }
    }
}();
