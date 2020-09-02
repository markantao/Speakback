const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//
const greetings = [
    'I am fine thank you.',
    'Fine thank you. How about you?',
    'you must be so happy: You are talking to a robot.',
    'Whats it to you?'
];

const hello = [
    'Good morning Mark, how are you today',
    'Good evening Mark, what did you have for lunch',
    'Good night Mark, Have a good sleep',
    'Good day Mark, how are you'
];

const SpeechRecognition = 
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Your voice is ready. You may speak now');
};

recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

// Adding a listener to the button from speak.html

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I do not understand'

    if(message.includes('how are you')) {
        const finalText = 
        greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('good morning')) {
        const textmorning = 
        hello[0];
        speech.text = textmorning;
    }

    if(message.includes('good evening')) {
        const textevening = 
        hello[1]
        speech.text = textevening;
    }

    if(message.includes('goodnight')) {
        const speaknight = 
        hello[2]
        speech.text = speaknight;
    }

    if(message.includes('goodday')) {
        const textday = 
        hello[3]
        speech.text.text = textday;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}