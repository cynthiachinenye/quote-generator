// create variables

const btn = document.querySelector('#new-qoute');

const qoute = document.querySelector('.qoute');

const person = document.querySelector('.person');

const qoutes = [{
    
    qoute:'The best way to find yourself is to lose yourself in the service of others',
    person:'Mahatma Gandhi',
},
{
    qoute:'if you want to live a happy life, tie it toa goal, not to people or things',
    person:'albert einstein'
},

{
    qoute:'At his best, man is the nobiest of all animals, separated from law and justice he is the worst',
    person:'Aristotle',
},
{
    qoute:'your time is limited, so do not waste it living someone elses life',
    person:'steve jobs'
},
{
    qoute:'tell me and i forget, teach me and i remember, involve me and i learn',
    person:'Benjamin franklin'

},
{
    qoute:'if you look at what you have in life, you will always have more, if you look at what you donot have in life , you will never have enough',
    person:'oprah wimfrey'
},

{
    qoute:'it does not matter how slowly you go as long as you do not stop',
    person:'confucius',
},
{
    qoute:'our lives begin to end the day we become silent about things that matter',
    person:'martin lurther king jr'

},
{
    qoute:'Remember that not getting what you want is sometimes a wonderful stroke of luck',
    person:'dalai lama',
},
{
    qoute:'the journey of a thousand miles begins with one step',
    person:'lao tzu'
},
]

btn.addEventListener('click', function(){
    
    let data = Math.floor(Math.random()* qoutes.length);
   
    qoute.innerText = qoutes[data].qoute;

    person.innerText =qoutes[data].person;
    
})