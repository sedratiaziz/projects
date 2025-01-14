const data = {
  tech: {
    easy: [
      {
        question: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "HyperTransfer Machine Language",
        ],
        answer: "HyperText Markup Language",
      },
      {
        question: "Which company created the iPhone?",
        options: ["Apple", "Microsoft", "Google"],
        answer: "Apple",
      },
      {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Personal Utility", "Central Program Utility"],
        answer: "Central Processing Unit",
        },
        {
        question: "Which of these is NOT a web browser?",
        options: ["Chrome", "Excel", "Firefox"],
        answer: "Excel",
        },
        {
        question: "What does WiFi allow you to do?",
        options: ["Connect to the internet wirelessly", "Cook food", "Print documents"],
        answer: "Connect to the internet wirelessly",
        },
        {
        question: "What is the primary function of a firewall?",
        options: ["Protect a computer network from unauthorized access", "Start a computer", "Create documents"],
        answer: "Protect a computer network from unauthorized access",
        },
        {
        question: "USB stands for:",
        options: ["Universal Serial Bus", "United System Bridge", "Universal System Bridge"],
        answer: "Universal Serial Bus",
        },
        {
        question: "Which company developed the Android operating system?",
        options: ["Google", "Microsoft", "Apple"],
        answer: "Google",
        },
        {
        question: "What does RAM mean?",
        options: ["Random Access Memory", "Read Advanced Memory", "Random Advanced Measurement"],
        answer: "Random Access Memory",
        },
        {
        question: "Which of these is a programming language?",
        options: ["Python", "Instagram", "Spotify"],
        answer: "Python",
        },        
    ],
    medium: [
      {
        question: "Who is known as the father of computer science?",
        options: ["Alan Turing", "Bill Gates", "Charles Babbage"],
        answer: "Alan Turing",
      },
      {
        question:
          "What is the main programming language used for Android development?",
        options: ["Java", "Swift", "C#"],
        answer: "Java",
      },
      {
        question: "What is the primary purpose of a VPN?",
        options: ["To increase computer processing speed", "To encrypt network traffic and provide online privacy", "To store backup files"],
        answer: "To encrypt network traffic and provide online privacy",
        },
        {
        question: "Which protocol is typically used for secure web browsing?",
        options: ["FTP", "SMTP", "HTTPS"],
        answer: "HTTPS",
        },
        {
        question: "What does the term 'cloud computing' primarily refer to?",
        options: ["Weather prediction technology", "Delivering computing services over the internet", "A type of computer hardware"],
        answer: "Delivering computing services over the internet",
        },
        {
        question: "What is a distributed ledger technology used by many cryptocurrencies?",
        options: ["XML", "HTTP", "Blockchain"],
        answer: "Blockchain",
        },
        {
        question: "Which programming paradigm focuses on objects that contain data and code?",
        options: ["Procedural Programming", "Object-Oriented Programming", "Functional Programming"],
        answer: "Object-Oriented Programming",
        },
        {
        question: "What does the term 'API' stand for in software development?",
        options: ["Advanced Program Integration", "Application Programming Interface", "Automated Programming Instruction"],
        answer: "Application Programming Interface",
        },
        {
        question: "Which cybersecurity technique creates a copy of sensitive data in a separate location?",
        options: ["Encryption", "Data Mirroring", "Firewall"],
        answer: "Data Mirroring",
        },
        {
        question: "What is the primary function of a 'cache' in computing?",
        options: ["To permanently delete old files", "To store temporary data for quick retrieval", "To compress large files"],
        answer: "To store temporary data for quick retrieval",
        },
    ],
    hard: [
      {
        question: "What does the 'git' command `rebase` do?",
        options: [
          "Combines commits",
          "Changes base commits",
          "Deletes branches",
        ],
        answer: "Changes base commits",
      },
      {
        question: "In computer networks, what does TCP stand for?",
        options: [
          "Transfer Control Protocol",
          "Transmission Control Protocol",
          "Telecommunication Protocol",
        ],
        answer: "Transmission Control Protocol",
      },
      {
        question: "What is the primary difference between symmetric and asymmetric encryption?",
        options: ["Processing speed", "Key management approach", "Encryption algorithm complexity"],
        answer: "Key management approach",
        },
        {
        question: "In machine learning, what does the term 'vanishing gradient problem' primarily describe?",
        options: ["A data storage issue", "Challenges in training deep neural networks", "Memory allocation error"],
        answer: "Challenges in training deep neural networks",
        },
        {
        question: "What is the fundamental concept behind quantum computing's computational advantage?",
        options: ["Parallel processing", "Superposition and quantum entanglement", "Advanced cooling techniques"],
        answer: "Superposition and quantum entanglement",
        },
        {
        question: "Which networking concept describes the technique of splitting network traffic across multiple paths?",
        options: ["Load balancing", "Network segmentation", "Packet switching"],
        answer: "Load balancing",
        },
        {
        question: "What does the CAP theorem state about distributed computer systems?",
        options: ["Network scalability limitations", "Impossibility of simultaneously guaranteeing consistency, availability, and partition tolerance", "Data replication strategies"],
        answer: "Impossibility of simultaneously guaranteeing consistency, availability, and partition tolerance",
        },
        {
        question: "In cryptography, what is a zero-knowledge proof?",
        options: ["A method to prove knowledge without revealing the actual information", "An encryption technique", "A data verification process"],
        answer: "A method to prove knowledge without revealing the actual information",
        },
        {
        question: "What does the term 'microservices architecture' primarily refer to?",
        options: ["Miniature server design", "Developing software as a collection of small, independent services", "Microscopic computing components"],
        answer: "Developing software as a collection of small, independent services",
        },
        {
        question: "What is the primary challenge in implementing homomorphic encryption?",
        options: ["High computational complexity", "Limited cryptographic algorithms", "Network bandwidth constraints"],
        answer: "High computational complexity",
        },
    ],
  },
  geography: {
    easy: [
      {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid"],
        answer: "Paris",
      },
      {
        question: "Which continent is the Sahara Desert in?",
        options: ["Asia", "Africa", "Australia"],
        answer: "Africa",
      },
      {
        question: "What is the largest continent in the world?",
        options: ["Asia", "Africa", "North America"],
        answer: "Asia"
    },
    {
        question: "Which country is the largest exporter of sardines?",
        options: ["Spain", "Morocco", "The U.S."],
        answer: "Morocco"
    },
    {
        question: "Which ocean is the largest?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga"],
        answer: "Mount Everest"
    },
    {
        question: "What is the longest river in the world?",
        options: ["Nile River", "Amazon River", "Yangtze River"],
        answer: "Nile River"
    },
    {
        question: "In which country is the Great Wall of China located?",
        options: ["China", "India", "Japan"],
        answer: "China"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Canberra", "Sydney", "Melbourne"],
        answer: "Canberra"
    },
    {
        question: "Which continent is home to the Amazon Rainforest?",
        options: ["South America", "North America", "Africa"],
        answer: "South America"
    },
    ],
    medium: [
      {
        "question": "Which river is the longest in South America?",
        "options": ["Amazon River", "Orinoco River", "Paraná River"],
        "answer": "Amazon River"
      },
      {
        "question": "What is the capital city of Kazakhstan?",
        "options": ["Almaty", "Nur-Sultan (Astana)", "Shymkent"],
        "answer": "Nur-Sultan (Astana)"
      },
      {
        "question": "Which of these countries does NOT border Brazil?",
        "options": ["Peru", "Ecuador", "Chile"],
        "answer": "Chile"
      },
      {
        "question": "The Atacama Desert is primarily located in which country?",
        "options": ["Peru", "Chile", "Bolivia"],
        "answer": "Chile"
      },
      {
        "question": "What is the highest mountain in North America?",
        "options": ["Mount McKinley (Denali)", "Mount Logan", "Mount Saint Elias"],
        "answer": "Mount McKinley (Denali)"
      },
      {
        "question": "Which African country is known as the \"Rainbow Nation\"?",
        "options": ["Kenya", "Nigeria", "South Africa"],
        "answer": "South Africa"
      },
      {
        "question": "The Mekong River flows through how many countries?",
        "options": ["4", "5", "6"],
        "answer": "5"
      },
      {
        "question": "Which of these is the smallest independent country in the world?",
        "options": ["Monaco", "Vatican City", "San Marino"],
        "answer": "Vatican City"
      },
      {
        "question": "The Andes mountain range runs through how many countries?",
        "options": ["5", "6", "7"],
        "answer": "7"
      },
      {
        "question": "Which sea is located between Europe and Africa?",
        "options": ["Aegean Sea", "Mediterranean Sea", "Black Sea"],
        "answer": "Mediterranean Sea"
      },
    ],
    hard: [
      {
        "question": "What is the longest river in Asia?",
        "options": ["Mekong", "Yangtze", "Ganges"],
        "answer": "Yangtze"
      },
      {
        "question": "Which of the following countries is not part of the African Union?",
        "options": ["Morocco", "Egypt", "South Africa"],
        "answer": "Morocco"
      },
      {
        "question": "Which country has the highest number of islands in the world?",
        "options": ["Sweden", "Finland", "Indonesia"],
        "answer": "Sweden"
      },
      {
        "question": "Which of these cities is the capital of Morocco?",
        "options": ["Casablanca", "Marrakech", "Rabat"],
        "answer": "Rabat"
      },
      {
        "question": "Which desert is the largest in the world by area?",
        "options": ["Arabian Desert", "Sahara Desert", "Antarctic Desert"],
        "answer": "Antarctic Desert"
      },
      {
        "question": "Which of these islands is located in the Pacific Ocean and is a territory of the United States?",
        "options": ["Guam", "Tahiti", "Easter Island"],
        "answer": "Guam"
      },
      {
        "question": "The city of Timbuktu is located in which country?",
        "options": ["Mali", "Chad", "Niger"],
        "answer": "Mali"
      },
      {
        "question": "What is the smallest country in South America by land area?",
        "options": ["Suriname", "Guyana", "French Guiana"],
        "answer": "Suriname"
      },
      {
        "question": "Mount Vinson, the highest peak in Antarctica, is located in which mountain range?",
        "options": ["Ellsworth Mountains", "Transantarctic Mountains", "Antarctic Peninsula Mountains"],
        "answer": "Ellsworth Mountains"
      },
      {
        "question": "Which body of water separates Saudi Arabia and Egypt?",
        "options": ["Arabian Gulf", "Red Sea", "Gulf of Oman"],
        "answer": "Red Sea"
      }
    ],
  },
  science: {
    easy: [
      {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2"],
        answer: "H2O",
      },
      {
        question: "What planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter"],
        answer: "Mars",
      },
      {
        question: "What is the boiling point of water in Celsius?",
        options: ["50 degrees", "100 degrees", "75 degrees"],
        answer: "100 degrees",
        },
        {
        question: "Which of these is an example of a simple machine?",
        options: ["Computer", "Lever", "Smartphone"],
        answer: "Lever",
        },
        {
        question: "What gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Hydrogen", "Carbon Dioxide"],
        answer: "Carbon Dioxide",
        },
        {
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Neptune"],
        answer: "Jupiter",
        },
        {
        question: "What is the process by which water changes from liquid to gas?",
        options: ["Melting", "Freezing", "Evaporation"],
        answer: "Evaporation",
        },
        {
        question: "What is the closest star to Earth?",
        options: ["Proxima Centauri", "The Sun", "Alpha Centauri"],
        answer: "The Sun",
        },
        {
        question: "What is the main function of the human heart?",
        options: ["To digest food", "To pump blood", "To produce hormones"],
        answer: "To pump blood",
        },
        {
        question: "Which of these is NOT a state of matter?",
        options: ["Solid", "Liquid", "Energy"],
        answer: "Energy",
        },
    ],
    medium: [
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome"],
        answer: "Mitochondria",
      },
      {
        question: "What element has the atomic number 1?",
        options: ["Hydrogen", "Helium", "Carbon"],
        answer: "Hydrogen",
      },
      {
        question: "What is the process by which a star converts hydrogen into helium?",
        options: ["Nuclear fission", "Nuclear fusion", "Chemical reaction"],
        answer: "Nuclear fusion",
        },
        {
        question: "Which part of the human brain is responsible for balance and coordination?",
        options: ["Cerebrum", "Cerebellum", "Brain stem"],
        answer: "Cerebellum",
        },
        {
        question: "Why the human skin turns red after long exposure to the sun?",
        options: ["Protection from cancer development", "Skin cells want to look cool", "Skin cells are shy"],
        answer: "Protection from cancer development",
        },
        {
        question: "What phenomenon causes the Earth's seasons?",
        options: ["Distance from the Sun", "Earth's axial tilt", "Lunar cycles"],
        answer: "Earth's axial tilt",
        },
        {
        question: "What is the process of genetic material transfer between bacteria?",
        options: ["Photosynthesis", "Conjugation", "Respiration"],
        answer: "Conjugation",
        },
        {
        question: "Which of these is considered a greenhouse gas?",
        options: ["Nitrogen", "Carbon dioxide", "Oxygen"],
        answer: "Carbon dioxide",
        },
        {
        question: "What is the main function of RNA in a cell?",
        options: ["Energy storage", "Genetic information transfer", "Protein synthesis"],
        answer: "Protein synthesis",
        },
        {
        question: "What is the primary method of heat transfer in the Earth's mantle?",
        options: ["Conduction", "Radiation", "Convection"],
        answer: "Convection",
        },
    ],
    hard: [
      {
        question: "What is the second law of thermodynamics?",
        options: [
          "Energy cannot be created or destroyed",
          "Entropy of a system always increases",
          "Every action has an equal and opposite reaction",
        ],
        answer: "Entropy of a system always increases",
      },
      {
        question: "What is the term for the splitting of an atomic nucleus?",
        options: ["Fusion", "Fission", "Radioactivity"],
        answer: "Fission",
      },
      {
        question: "What is the proposed mechanism behind quantum entanglement in particle physics?",
        options: ["Quantum decoherence", "Non-local hidden variable theory", "Quantum superposition"],
        answer: "Non-local hidden variable theory",
        },
        {
        question: "What describes the quantum mechanical phenomenon where particles can tunnel through potential barriers?",
        options: ["Wave-particle duality", "Quantum tunneling effect", "Heisenberg uncertainty principle"],
        answer: "Quantum tunneling effect",
        },
        {
        question: "What is the primary challenge in developing a unified theory of quantum mechanics and general relativity?",
        options: ["Incompatible mathematical frameworks", "Quantum gravity problem", "Measurement inconsistencies"],
        answer: "Quantum gravity problem",
        },
        {
        question: "Which neurological process is believed to be fundamental in forming long-term memories?",
        options: ["Synaptic plasticity", "Neural network reconfiguration", "Protein synthesis"],
        answer: "Synaptic plasticity",
        },
        {
        question: "What mechanism explains the origin of chirality in biological molecules?",
        options: ["Spontaneous molecular symmetry breaking", "Quantum spin effects", "Thermodynamic equilibrium"],
        answer: "Spontaneous molecular symmetry breaking",
        },
        {
        question: "What is the proposed explanation for dark matter's gravitational effects?",
        options: ["Weakly interacting massive particles", "Modified gravitational theories", "Quantum field fluctuations"],
        answer: "Weakly interacting massive particles",
        },
        {
        question: "What describes the complex interactions between genetic and environmental factors in trait expression?",
        options: ["Epigenetic inheritance", "Gene-environment interaction", "Phenotypic plasticity"],
        answer: "Gene-environment interaction",
        },
        {
        question: "What theoretical concept explains the potential multiverse in cosmological models?",
        options: ["Inflationary universe theory", "Quantum multiverse hypothesis", "String theory landscape"],
        answer: "String theory landscape",
        },
    ],
  },
};

/*-------------- Constants -------------*/
const audioFiles = {
  correct: new Audio(`${window.location.origin}/quiz-game/assets/audio/correct-sound.mp3`),
  incorrect: new Audio(`${window.location.origin}/quiz-game/assets/audio/incorrect-sound.mp3`),
  gamestart: new Audio(`${window.location.origin}/quiz-game/assets/audio/game-start.mp3`),
};

const onePoint = document.createElement("span");
    onePoint.innerHTML='+1pt';
    
const threePoint = document.createElement("span");
    threePoint.innerHTML='+3pt';
    
const fivePoint = document.createElement("span");
    fivePoint.innerHTML='+5pt';
    
/*---------- Variables (state) ---------*/
let score;
let grandScore;
let message;
let correctChoice;
let currentCategory; 
let currentDifficulty;
let currentQuestionIndex;
let correctChoiceCount;



const playAudio = (type)=>{
  try {
    
    audioFiles[type].pause();
    audioFiles[type].currentTime = 0;
    
    audioFiles[type].play().catch(error => {
      console.error('Audio Playing runned through a failure: ', error);
    });

  } catch (error) {
    console.error('Error occured while trying to play audio: ', error)
  }
}

/*----- Cached Element References  -----*/

const questions = document.querySelectorAll(".question");
const choices = document.querySelectorAll(".btn");
const cardTitles = document.querySelectorAll(".card-title");

/*-------------- Functions -------------*/
const init = () => {
  score = 0;
  grandScore = 0;
  message = "";
  correctChoice = 10;
  correctChoiceCount = 0;
  currentQuestionIndex = 0;
};
init();

const renderQuestions = () => {
  

  //************  Geography ***************

  if (window.location.href.includes("geo_easy")) {

      questions.forEach((question, index) => {
        question.textContent = data.geography.easy[index].question;
  

        const choices = data.geography.easy[index].options;
        cardTitles.forEach((title, choiceIndex) => {
        title.textContent = choices[choiceIndex];
          
      });

      playAudio('gamestart')
    });
    
    currentCategory = "geography"; 
    currentDifficulty = "easy";


  } else if (window.location.href.includes("geo_mid")) {
    
    questions.forEach((question, index) => {
      question.textContent = data.geography.medium[index].question;


      const choices = data.geography.medium[index].options;
      cardTitles.forEach((title, choiceIndex) => {
      title.textContent = choices[choiceIndex];

    });
    playAudio('gamestart')
  });

    currentCategory = "geography"; 
    currentDifficulty = "medium";


  } else if (window.location.href.includes("geo_hard")) {
    questions.forEach((question, index) => {
      question.textContent = data.geography.hard[index].question;


      const choices = data.geography.hard[index].options;
      cardTitles.forEach((title, choiceIndex) => {
      title.textContent = choices[choiceIndex];

    });
    playAudio('gamestart')
  });

    currentCategory = "geography"; 
    currentDifficulty = "hard";
  } 
  
  
  
  // ***************  Tech  *******************

  else if (window.location.href.includes("tech_easy")) {
    questions.forEach((question, index) => {
      question.textContent = data.tech.easy[index].question;


      const choices = data.tech.easy[index].options;
      cardTitles.forEach((title, choiceIndex) => {
      title.textContent = choices[choiceIndex];

    });
    playAudio('gamestart')
  });

    currentCategory = "tech"; 
    currentDifficulty = "easy";

  } 
  else if (window.location.href.includes("tech_mid")) {
    questions.forEach((question, index) => {
      question.textContent = data.tech.medium[index].question;


      const choices = data.tech.medium[index].options;
      cardTitles.forEach((title, choiceIndex) => {
      title.textContent = choices[choiceIndex];

    });
    playAudio('gamestart')
  });

    currentCategory = "tech"; 
    currentDifficulty = "medium";

  } 
  else if (window.location.href.includes("tech_hard")) {
    questions.forEach((question, index) => {
      question.textContent = data.tech.hard[index].question;


      const choices = data.tech.hard[index].options;
      cardTitles.forEach((title, choiceIndex) => {
      title.textContent = choices[choiceIndex];

    });
    playAudio('gamestart')
  });

    currentCategory = "tech"; 
    currentDifficulty = "hard";

  } 
  
  
  
  // ***************  Science  *******************

  else if (window.location.href.includes("sci_easy")) {
    questions.forEach((question, index) => {
      question.textContent = data.science.easy[index].question;


      const choices = data.science.easy[index].options;
      cardTitles.forEach((title, choiceIndex) => {
      title.textContent = choices[choiceIndex];

    });
    playAudio('gamestart')
  });

    currentCategory = "science"; 
    currentDifficulty = "easy";

  } 
  else if (window.location.href.includes("sci_mid")) {
    questions.forEach((question, index) => {
      question.textContent = data.science.medium[index].question;


      const choices = data.science.medium[index].options;
      cardTitles.forEach((title, choiceIndex) => {
      title.textContent = choices[choiceIndex];

    });
    playAudio('gamestart')
  });

    currentCategory = "science"; 
    currentDifficulty = "medium";

  } 
  else if (window.location.href.includes("sci_hard")) {
    questions.forEach((question, index) => {
      question.textContent = data.science.hard[index].question;


      const choices = data.science.hard[index].options;
      cardTitles.forEach((title, choiceIndex) => {
      title.textContent = choices[choiceIndex];

    });
    playAudio('gamestart')
  });

    currentCategory = "science"; 
    currentDifficulty = "hard";

  } 




};

renderQuestions();





const checkCorrectChoice = (event) => {
  const playerChoice = event.target.closest(".card-body").querySelector(".card-title").textContent; 
  const questionText = document.querySelector(".question").textContent; 
  const correctChoice = data[currentCategory][currentDifficulty].find(q => q.question === questionText).answer;
  

  // ******* GEOGRAPHY  *********
  if (playerChoice === correctChoice && window.location.href.includes("geo_easy")) {
    score += 1;
    playAudio('correct')
    alertEasyCorrect();        

  } else if (playerChoice === correctChoice && window.location.href.includes("geo_mid")) {
    score += 3;
    playAudio('correct')
    alertMediumCorrect();        

  } else if (playerChoice === correctChoice && window.location.href.includes("geo_hard")) {
    score += 5;
    playAudio('correct')
    alertHardCorrect();    
    
  } 
  

  // ******* TECH  *********
  else if (playerChoice === correctChoice && window.location.href.includes("tech_easy")) {
    score += 1;
    playAudio('correct')       
    alertEasyCorrect();
  } else if (playerChoice === correctChoice && window.location.href.includes("tech_mid")) {
    score += 3;
    playAudio('correct')           
    alertMediumCorrect();
    
  } else if (playerChoice === correctChoice && window.location.href.includes("tech_hard")) {
    score += 5;
    playAudio('correct')  
    alertHardCorrect();      
    
  } 
  
  // ******* SCIENCE  *********
  else if (playerChoice === correctChoice && window.location.href.includes("sci_easy")) {
    score += 1;
    playAudio('correct')  
    alertEasyCorrect();     
    
  } else if (playerChoice === correctChoice && window.location.href.includes("sci_mid")) {
    score += 3;
    playAudio('correct')  
    alertMediumCorrect();         
    
  } else if (playerChoice === correctChoice && window.location.href.includes("sci_hard")) {
    score += 5;
    playAudio('correct')  
    alertHardCorrect();      
    
  }  
  


  else {
    playAudio('incorrect')
    alertInCorrect();      
  }
  

  //This is used later in stats.html to show the x/10 player score
if (playerChoice === correctChoice) {
  correctChoiceCount++;  
}

localStorage.setItem('correctCount', correctChoiceCount)

  currentQuestionIndex++;
};




const updateQuestions = ()=>{

    const numOfQuestions = data[currentCategory][currentDifficulty].length;
    if (currentQuestionIndex >= numOfQuestions) {    
      stopQuestions();
      return;
    }


    const currentQuestion = data[currentCategory][currentDifficulty][currentQuestionIndex];
    questions.forEach((question)=>{
      question.textContent = data[currentCategory][currentDifficulty][currentQuestionIndex].question
    })

    cardTitles.forEach((cardTitle, index) => {
      cardTitle.textContent = currentQuestion.options[index];
    });


}


//Sweet Alert

const alertEasyCorrect = ()=>{
  
  swal({      
      title: "Correct!",
      content: onePoint,
      icon: "success",
      button: "Next Question !",
  });
  } 
const alertMediumCorrect = ()=>{
  swal({      
      title: "Correct!",
      content: threePoint,
      icon: "success",
      button: "Next Question !",
  });
  } 
const alertHardCorrect = ()=>{
  swal({      
      title: "Correct!",
      content: fivePoint,
      icon: "success",
      button: "Next Question !",
  });
  } 
const alertInCorrect = ()=>{
  swal({      
      title: "Incorrect!",          
      icon: "error",
      button: "Next Question !",
  });
  } 


  

const stopQuestions = ()=>{

  localStorage.setItem('quiz_score', score)
  localStorage.setItem('diff', currentDifficulty)

  window.location.href = `${window.location.origin}/quiz-game/assets/stats.html`  
}



      

    

/*----------- Event Listeners ----------*/
const handlePlayerChoice = (event) => {
  checkCorrectChoice(event);
  updateQuestions();    
};

choices.forEach((element) => {
  element.addEventListener("click", handlePlayerChoice);
});
