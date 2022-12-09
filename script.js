// Initialize new SpeechSynthesisUtterance object
let textToSpeech = new SpeechSynthesisUtterance();

// Set Speech Language
textToSpeech.lang = "en";

let voices = []; // global array of available voices

window.speechSynthesis.onvoiceschanged = () => {
  // Get List of Voices
  voices = window.speechSynthesis.getVoices();

  // Initially set the First Voice in the Array.
  textToSpeech.voice = voices[0];

 
  
};


var speech = true;
        window.SpeechRecognition = window.SpeechRecognition
                        || window.webkitSpeechRecognition;
  
        const recognition = new SpeechRecognition();
        recognition.interimResults = false;
        const words = document.querySelector('.words');
        words.appendChild(p);
  
        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
  
            document.getElementById("p").innerHTML = transcript;
            document.getElementById("thing").innerHTML = transcript;
            
            if (transcript === "hello") {
                textToSpeech.text = "Hello! How are you?";
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(textToSpeech);
                
            }
            else if (transcript === "what is your name") {
                textToSpeech.text = "My name is SDG BOT!";
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(textToSpeech);
            }
            else if (transcript === "what is our team name") {
                textToSpeech.text = "our team name is swat black ops";
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(textToSpeech);
            }
            else if (transcript === "what is the market share of organic cotton in textile production") {
                textToSpeech.text = "The market share of organic cotton in textile production is less than one percent!"
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(textToSpeech);
            }
            else if (transcript === "for the first time in Europe which country is obliging large companies to respect Human Rights abroad") {
                textToSpeech.text = "That country is France."
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(textToSpeech);
            }
            else if (transcript === "how often do you have to use a cotton bag to make it ecologically worthwhile compared to a plastic bag") {
                textToSpeech.text = "You need to use the cotton bag atleast 50 to 100 times!"
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(textToSpeech);
            }
            else if (transcript === "what is the name of the model of life in which people are content with few material things") {
                textToSpeech.text = "It is the minimalistic model of life."
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(textToSpeech);
            }
            else  if (transcript === "what is SDG goal 12") {
                textToSpeech.text = "Sustainable Development Goal 12 encourages more sustainable consumption and production patterns through various measures, including specific policies and international agreements on the management of materials that are toxic to the environment."
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(textToSpeech);
            }
            else if (transcript === "which innovation increased sales from the middle of the 19th century") {
                textToSpeech.text = "The Litfass Column increased sales!"
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(textToSpeech);
            }
            else if (transcript === "which country is most successful in combating food waste") {
                textToSpeech.text = "That country is Denmark"
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(textToSpeech);
            }
            else  if (transcript === "which country was one of the first in the world to ban plastic bags") {
                textToSpeech.text = "That country is Rwanda!"
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(textToSpeech);
            }
            else  if (transcript === "how many climate refugees estimated will have to leave their country by 2040") {
                textToSpeech.text = "140 million people will have to evacuate."
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(textToSpeech);
            }
            else if (transcript === "which countries are at the leading edge in the implementation of their climate targets") {
                textToSpeech.text = "Those countries are sweden and morocco!"
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(textToSpeech);
            }
            else if (transcript === "what is SDG goal 13") {
                textToSpeech.text = "In 2015, the United Nations came together to adopt a set of 17 Sustainable Development Goals (SDGs) that would guide global development for the next 15 years. Goal number 13 is focused on climate action, and it is crucial for the success of all of the other sustainable development goals.";
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(textToSpeech);
            } 
            else if (transcript === "what do you call it when you make something new out of an old part") {
                textToSpeech.text = "It is called upcycling."
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(textToSpeech);
            }
            
            
        });
          
        if (speech == true) {
            recognition.start();
            recognition.addEventListener('end', recognition.start);
            
        }


