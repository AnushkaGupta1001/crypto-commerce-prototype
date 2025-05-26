const QUIZ_QUESTIONS = [
  {
    question: "What is a blockchain?",
    options: [
      "A type of cryptocurrency",
      "A decentralized digital ledger",
      "A crypto wallet",
      "A mining algorithm"
    ],
    answer: 1
  },
  {
    question: "What does NFT stand for?",
    options: [
      "Non-Fungible Token",
      "New Financial Technology",
      "Network File Transfer",
      "Next Future Token"
    ],
    answer: 0
  },
  {
    question: "Which of these is a consensus mechanism?",
    options: [
      "Proof of Work",
      "Cold Wallet",
      "Smart Contract",
      "Gas Fees"
    ],
    answer: 0
  },
  {
    question: "What is a crypto wallet used for?",
    options: [
      "Mining coins",
      "Storing private and public keys",
      "Creating NFTs",
      "Paying gas fees"
    ],
    answer: 1
  },
  {
    question: "Which is a popular NFT marketplace?",
    options: [
      "OpenSea",
      "Coinbase",
      "Binance",
      "Metamask"
    ],
    answer: 0
  },
  {
    question: "What is 'Hodl' in crypto slang?",
    options: [
      "A type of token",
      "A strategy to hold assets",
      "A mining tool",
      "A blockchain fork"
    ],
    answer: 1
  },
  {
    question: "What is a smart contract?",
    options: [
      "A legal document",
      "A self-executing blockchain program",
      "A crypto exchange",
      "A wallet address"
    ],
    answer: 1
  },
  {
    question: "What is a gas fee?",
    options: [
      "A fee for storing NFTs",
      "A payment for blockchain transactions",
      "A wallet maintenance fee",
      "A type of token"
    ],
    answer: 1
  },
  {
    question: "Which is a cold wallet?",
    options: [
      "A hardware wallet",
      "A mobile app",
      "A browser extension",
      "A smart contract"
    ],
    answer: 0
  },
  {
    question: "What is a public key?",
    options: [
      "A password",
      "A cryptographic address to receive funds",
      "A mining tool",
      "A blockchain fork"
    ],
    answer: 1
  },
  {
    question: "What is Bitcoin primarily known as?",
    options: [
      "A stablecoin",
      "A decentralized digital currency",
      "A smart contract platform",
      "A layer-2 solution"
    ],
    answer: 1
  },
  {
    question: "What is the purpose of an airdrop in crypto?",
    options: [
      "To distribute free tokens for promotion",
      "To secure a blockchain",
      "To mine new coins",
      "To create smart contracts"
    ],
    answer: 0
  },
  {
    question: "Which cryptocurrency is associated with smart contracts?",
    options: [
      "Litecoin",
      "Ripple",
      "Bitcoin",
      "Ethereum"
    ],
    answer: 3
  },
  {
    question: "What does a private key do?",
    options: [
      "Receives cryptocurrency",
      "Creates tokens",
      "Mines new blocks",
      "Authorizes transactions"
    ],
    answer: 3
  },
  {
    question: "What is an altcoin?",
    options: [
      "Any cryptocurrency other than Bitcoin",
      "A type of Bitcoin",
      "A mining algorithm",
      "A stablecoin"
    ],
    answer: 0
  },
  {
    question: "What is the main feature of a stablecoin?",
    options: [
      "Used only for NFTs",
      "Requires mining",
      "Pegged to a stable asset",
      "High volatility"
    ],
    answer: 2
  },
  {
    question: "What does DeFi stand for?",
    options: [
      "Dynamic Financials",
      "Distributed Funding",
      "Decentralized Finance",
      "Digital Finance"
    ],
    answer: 2
  },
  {
    question: "What is a fork in blockchain technology?",
    options: [
      "A type of wallet",
      "A mining reward",
      "A new cryptocurrency",
      "A change in blockchain protocol"
    ],
    answer: 3
  },
  {
    question: "What is the purpose of mining in proof-of-work blockchains?",
    options: [
      "To validate transactions",
      "To store private keys",
      "To trade NFTs",
      "To create smart contracts"
    ],
    answer: 0
  },
  {
    question: "What is a liquidity pool used for?",
    options: [
      "Storing NFTs",
      "Facilitating trading on DEXs",
      "Paying gas fees",
      "Mining cryptocurrencies"
    ],
    answer: 1
  },
  {
    question: "What is a halving event in Bitcoin?",
    options: [
      "A new blockchain fork",
      "A type of airdrop",
      "A reduction of block rewards by half",
      "A doubling of block rewards"
    ],
    answer: 2
  },
  {
    question: "What does a hash function ensure in a blockchain?",
    options: [
      "Token creation",
      "Data integrity",
      "Faster transactions",
      "Wallet security"
    ],
    answer: 1
  },
  {
    question: "What is the main benefit of a decentralized exchange (DEX)?",
    options: [
      "Centralized authority",
      "Slower trades",
      "User control of funds",
      "Higher transaction fees"
    ],
    answer: 2
  },
  {
    question: "What is a token in cryptocurrency?",
    options: [
      "A digital asset on an existing blockchain",
      "A blockchain protocol",
      "A type of mining hardware",
      "A stablecoin"
    ],
    answer: 0
  },
  {
    question: "What is Proof of Stake (PoS)?",
    options: [
      "A type of wallet",
      "A smart contract platform",
      "A consensus mechanism using staked crypto",
      "A mining algorithm"
    ],
    answer: 2
  },
  {
    question: "What is yield farming in DeFi?",
    options: [
      "Creating NFTs",
      "Earning returns by lending or staking crypto",
      "Paying gas fees",
      "Mining new coins"
    ],
    answer: 1
  },
  {
    question: "What is a layer-2 solution designed to improve?",
    options: [
      "Blockchain scalability",
      "Wallet security",
      "Token issuance",
      "Mining rewards"
    ],
    answer: 0
  },
  {
    question: "What is market capitalization in crypto?",
    options: [
      "The cost of mining",
      "The total value of a cryptocurrency",
      "The price of a wallet",
      "The total number of coins"
    ],
    answer: 1
  },
  {
    question: "What is an Initial Coin Offering (ICO)?",
    options: [
      "A consensus mechanism",
      "A blockchain fork",
      "A type of stablecoin",
      "A fundraising method for crypto projects"
    ],
    answer: 3
  },
  {
    question: "What is an atomic swap?",
    options: [
      "A wallet security feature",
      "A DeFi protocol",
      "A type of mining",
      "A cross-blockchain crypto exchange"
    ],
    answer: 3
  }
];

// State
let quizState = {
  started: false,
  finished: false,
  questions: [],
  current: 0,
  answers: [],
};

const quizBtn = document.getElementById('quiz-btn');
const quizModal = document.getElementById('quiz-modal');
const quizRoot = document.getElementById('quiz-root');
const quizCloseBtn = document.querySelector('.quiz-close-btn');

function shuffle(arr) {
  return arr.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1]);
}

function openQuizModal() {
  quizModal.classList.add('active');
  document.body.classList.add('quiz-blur');
  resetQuiz();
  renderQuizIntro();
}

function closeQuizModal() {
  quizModal.classList.remove('active');
  document.body.classList.remove('quiz-blur');
  resetQuiz();
}

function resetQuiz() {
  quizState = {
    started: false,
    finished: false,
    questions: shuffle(QUIZ_QUESTIONS).slice(0, 7),
    current: 0,
    answers: [],
  };
}

function fadeIn(el) {
  el.style.opacity = 0;
  el.style.transition = 'opacity 0.5s';
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
}

function fadeOut(el, cb) {
  el.style.opacity = 1;
  el.style.transition = 'opacity 0.5s';
  el.style.opacity = 0;
  setTimeout(cb, 500);
}

function renderQuizIntro() {
  quizRoot.innerHTML = `
    <div class="quiz-fadein" style="text-align:center;">
      <h1 style="font-size:2.5rem;font-weight:800;margin-bottom:0.5em;">Essential Quiz</h1>
      <p style="font-size:1.2rem;margin-bottom:2em;">Test your crypto knowledge!<br>You'll get 7 random questions. Ready?</p>
      <button id="quiz-start-btn" class="quiz-main-btn">Ready to Go!</button>
    </div>
  `;
  fadeIn(quizRoot.firstElementChild);
  document.getElementById('quiz-start-btn').onclick = () => {
    fadeOut(quizRoot.firstElementChild, () => {
      quizState.started = true;
      renderQuizQuestion();
    });
  };
}

function renderQuizQuestion() {
  const q = quizState.questions[quizState.current];
  quizRoot.innerHTML = `
    <div class="quiz-fadein">
      <div style="display:flex;align-items:center;gap:1em;margin-bottom:1.5em;">
        <span style="font-size:1.3rem;">Question ${quizState.current+1} / ${quizState.questions.length}</span>
        <div style="flex:1;height:8px;background:#eee;border-radius:6px;overflow:hidden;">
          <div style="width:${((quizState.current)/quizState.questions.length)*100}%;height:100%;background:#7c4dff;transition:width 0.5s;"></div>
        </div>
      </div>
      <h2 style="font-size:1.5rem;font-weight:700;margin:1em 0 0.5em 0;">${q.question}</h2>
      <form id="quiz-form" autocomplete="off">
        ${q.options.map((opt,i) => `
          <label class="quiz-option-card">
            <input type="radio" name="quiz-option" value="${i}" required>
            <span>${opt}</span>
          </label>
        `).join('')}
        <button type="submit" class="quiz-main-btn" style="float:right;">${quizState.current === quizState.questions.length-1 ? 'Finish' : 'Next'}</button>
      </form>
    </div>
  `;
  fadeIn(quizRoot.firstElementChild);
  // Option card interactivity
  document.querySelectorAll('.quiz-option-card').forEach(card => {
    const input = card.querySelector('input');
    input.addEventListener('focus', () => card.classList.add('focused'));
    input.addEventListener('blur', () => card.classList.remove('focused'));
    input.addEventListener('change', () => {
      document.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
      if(input.checked) card.classList.add('selected');
    });
    card.addEventListener('mouseenter', () => card.classList.add('hovered'));
    card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
  });
  document.getElementById('quiz-form').onsubmit = function(e) {
    e.preventDefault();
    const val = parseInt(document.querySelector('input[name="quiz-option"]:checked').value);
    quizState.answers[quizState.current] = val;
    fadeOut(quizRoot.firstElementChild, () => {
      if (quizState.current < quizState.questions.length-1) {
        quizState.current++;
        renderQuizQuestion();
      } else {
        quizState.finished = true;
        renderQuizResults();
      }
    });
  };
}

function renderQuizResults() {
  let correct = 0;
  quizState.questions.forEach((q, i) => {
    if (quizState.answers[i] === q.answer) correct++;
  });
  quizRoot.innerHTML = `
    <div class="quiz-fadein" style="text-align:center;">
      <h1 style="font-size:2.5rem;font-weight:800;margin-bottom:0.5em;">Results</h1>
      <div style="margin-bottom:1.5em;">
        <div style="height:10px;background:#eee;border-radius:6px;overflow:hidden;width:80%;margin:0 auto 1em auto;">
          <div style="width:100%;height:100%;background:#7c4dff;"></div>
        </div>
        <span style="font-size:1.2rem;">${quizState.questions.length} of ${quizState.questions.length} answers</span>
      </div>
      <div class="quiz-result-row quiz-result-grid">
        <div class="quiz-result-btn quiz-result-correct">
          <span style="font-size:1.3rem;">&#10003;</span> ${correct} correct<br><span style="font-size:0.95rem;">${Math.round((correct/quizState.questions.length)*100)}%</span>
        </div>
        <div class="quiz-result-btn quiz-result-incorrect">
          <span style="font-size:1.3rem;">&#10007;</span> ${quizState.questions.length-correct} incorrect<br><span style="font-size:0.95rem;">${Math.round(((quizState.questions.length-correct)/quizState.questions.length)*100)}%</span>
        </div>
        <button id="quiz-restart-btn" class="quiz-main-btn quiz-result-btn">Try Again</button>
        <a href="pages/glossary.html" class="quiz-main-btn quiz-link-btn quiz-result-btn" style="text-decoration:none;">Learn More</a>
      </div>
    </div>
  `;
  fadeIn(quizRoot.firstElementChild);
  document.getElementById('quiz-restart-btn').onclick = () => {
    fadeOut(quizRoot.firstElementChild, () => {
      resetQuiz();
      renderQuizIntro();
    });
  };
}

quizBtn.addEventListener('click', openQuizModal);
quizCloseBtn.addEventListener('click', closeQuizModal);
window.addEventListener('click', (e) => {
  if (e.target === quizModal) closeQuizModal();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeQuizModal();
});
// Reset quiz on refresh
window.addEventListener('beforeunload', resetQuiz);

// Add quiz option card styles dynamically
(function addQuizStyles() {
  const style = document.createElement('style');
  style.innerHTML = `
    .quiz-option-card {
      display: flex;
      align-items: center;
      background: #f7f8fa;
      border: 2px solid #e0e0e0;
      border-radius: 12px;
      padding: 1.1em 1.2em;
      margin-bottom: 1.1em;
      font-size: 1.13rem;
      font-weight: 500;
      cursor: pointer;
      transition: border 0.22s, box-shadow 0.22s, background 0.22s;
      box-shadow: 0 2px 8px rgba(44, 62, 80, 0.04);
      position: relative;
    }
    .quiz-option-card input[type="radio"] {
      accent-color: #5560ff;
      margin-right: 1.1em;
      width: 1.2em;
      height: 1.2em;
      cursor: pointer;
    }
    .quiz-option-card.selected {
      border: 2.5px solid #5560ff;
      background: #f0f3ff;
      box-shadow: 0 4px 16px rgba(85, 96, 255, 0.08);
    }
    .quiz-option-card.focused {
      border: 2.5px solid #7c4dff;
      background: #f7f8fa;
    }
    .quiz-option-card.hovered:not(.selected):not(.focused) {
      border: 2px solid #bdbfff;
      background: #f7faff;
    }
    .quiz-main-btn {
      background: #5560ff;
      color: #fff;
      font-size: 1.13rem;
      padding: 0.8em 2.5em;
      border: none;
      border-radius: 10px;
      font-weight: 500;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(85, 96, 255, 0.08);
      transition: background 0.18s, color 0.18s, box-shadow 0.18s;
    }
    .quiz-main-btn:hover, .quiz-main-btn:focus {
      background: #7c4dff;
      color: #fff;
      box-shadow: 0 4px 16px rgba(124, 77, 255, 0.10);
    }
    .quiz-link-btn {
      background: #fff;
      color: #5560ff;
      border: 2px solid #5560ff;
      font-weight: 500;
      transition: background 0.18s, color 0.18s, border 0.18s;
    }
    .quiz-link-btn:hover, .quiz-link-btn:focus {
      background: #5560ff;
      color: #fff;
      border: 2px solid #5560ff;
    }
    .quiz-fadein {
      opacity: 0;
      animation: quizFadeIn 0.5s forwards;
    }
    @keyframes quizFadeIn {
      from { opacity: 0; transform: translateY(30px) scale(0.98); }
      to { opacity: 1; transform: none; }
    }
    .quiz-result-row.quiz-result-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 1.1em;
      justify-items: center;
      align-items: center;
      margin-bottom: 2em;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }
    .quiz-result-row.quiz-result-grid .quiz-result-btn {
      width: 100%;
      min-width: 140px;
      min-height: 56px;
      max-width: 180px;
      font-size: 1.08rem;
      font-weight: 500;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(44, 62, 80, 0.04);
      padding: 0.7em 0.5em;
      transition: background 0.18s, color 0.18s, border 0.18s;
      text-align: center;
    }
    @media (max-width: 600px) {
      .quiz-result-row.quiz-result-grid {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 1fr);
        gap: 0.7em;
        max-width: 100%;
      }
      .quiz-result-row.quiz-result-grid .quiz-result-btn {
        min-width: 100%;
        max-width: 100%;
      }
    }
  `;
  document.head.appendChild(style);
})(); 