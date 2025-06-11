class WalletHelper {
  constructor() {
      this.trigger = document.getElementById("wallet-helper-trigger");
      this.modal = document.getElementById("wallet-helper-modal");
      this.closeBtn = document.querySelector(".close-button");
      this.body = document.getElementById("wallet-helper-body");
      this.progressBar = document.getElementById("wallet-progress-bar");
      this.stepIndicator = document.getElementById("step-indicator");
      
      this.step = 0;
      this.answers = [];
      
      this.questions = [
          {
              question: "👋 Are you new to cryptocurrency?",
              options: ["Yes, I'm completely new", "No, I have some experience"]
          },
          {
              question: "💰 What's your primary goal?",
              options: ["Trading & NFTs", "Long-term storage", "Daily transactions"]
          },
          {
              question: "📱 Which device do you prefer?",
              options: ["Mobile phone", "Desktop computer", "Both equally"]
          },
          {
              question: "🔒 How important is security to you?",
              options: ["Maximum security", "Convenience over security", "Balanced approach"]
          }
      ];
      
      this.results = {
          "Yes, I'm completely new|Trading & NFTs|Mobile phone|Convenience over security": {
              name: "MetaMask Mobile",
              url: "https://metamask.io/download/",
              description: "Perfect for beginners with easy setup"
          },
          "Yes, I'm completely new|Trading & NFTs|Desktop computer|Convenience over security": {
              name: "MetaMask Browser",
              url: "https://metamask.io",
              description: "Most popular browser wallet for beginners"
          },
          "Yes, I'm completely new|Long-term storage|Mobile phone|Maximum security": {
              name: "Trust Wallet",
              url: "https://trustwallet.com",
              description: "Secure mobile wallet for beginners"
          },
          "Yes, I'm completely new|Long-term storage|Desktop computer|Maximum security": {
              name: "Exodus",
              url: "https://www.exodus.com",
              description: "Beautiful desktop wallet with great support"
          },
          "No, I have some experience|Trading & NFTs|Mobile phone|Balanced approach": {
              name: "Rainbow Wallet",
              url: "https://rainbow.me",
              description: "Advanced mobile wallet for DeFi"
          },
          "No, I have some experience|Long-term storage|Desktop computer|Maximum security": {
              name: "Ledger Hardware Wallet",
              url: "https://www.ledger.com",
              description: "Ultimate security for serious holders"
          }
      };
      
      this.init();
  }
  
  init() {
      this.createStepIndicator();
      this.bindEvents();
  }
  
  createStepIndicator() {
      this.stepIndicator.innerHTML = '';
      for (let i = 0; i < this.questions.length; i++) {
          const dot = document.createElement('div');
          dot.className = 'step-dot';
          if (i === this.step) dot.classList.add('active');
          this.stepIndicator.appendChild(dot);
      }
  }
  
  updateStepIndicator() {
      const dots = this.stepIndicator.querySelectorAll('.step-dot');
      dots.forEach((dot, index) => {
          dot.classList.toggle('active', index <= this.step);
      });
  }
  
  showStep() {
      this.progressBar.style.width = `${(this.step / this.questions.length) * 100}%`;
      this.updateStepIndicator();
      
      if (this.step < this.questions.length) {
          const q = this.questions[this.step];
          this.body.innerHTML = `
              <h3>${q.question}</h3>
              ${q.options.map(opt => 
                  `<div class="wallet-helper-option" data-option="${opt}">${opt}</div>`
              ).join('')}
          `;
          
          this.body.querySelectorAll('.wallet-helper-option').forEach(option => {
              option.addEventListener('click', () => {
                  this.selectOption(option.dataset.option);
              });
          });
      } else {
          this.showResult();
      }
  }
  
  showResult() {
      const key = this.answers.join('|');
      const result = this.results[key] || this.getDefaultRecommendation();
      
      this.body.innerHTML = `
          <div class="result-container">
              <h3>✅ Perfect Match Found!</h3>
              <h2 style="color: #667eea; margin: 20px 0;">${result.name}</h2>
              <p style="margin-bottom: 20px; color: #666;">${result.description}</p>
              <a href="${result.url}" target="_blank" class="wallet-link">
                  🔗 Visit ${result.name}
              </a>
              <div class="wallet-helper-option restart-btn" data-restart="true">
                  🔄 Take Quiz Again
              </div>
          </div>
      `;
      
      this.progressBar.style.width = '100%';
      
      this.body.querySelector('[data-restart]').addEventListener('click', () => {
          this.restartQuiz();
      });
  }
  
  getDefaultRecommendation() {
      return {
          name: "MetaMask",
          url: "https://metamask.io",
          description: "Most popular and beginner-friendly wallet"
      };
  }
  
  selectOption(option) {
      this.answers.push(option);
      this.step++;
      
      setTimeout(() => {
          this.showStep();
      }, 150);
  }
  
  restartQuiz() {
      this.step = 0;
      this.answers = [];
      this.createStepIndicator();
      this.showStep();
  }
  
  bindEvents() {
      this.trigger.addEventListener('click', () => {
          this.modal.classList.remove('hidden');
          this.restartQuiz();
      });
      
      this.closeBtn.addEventListener('click', () => {
          this.modal.classList.add('hidden');
      });
      
      this.modal.addEventListener('click', (e) => {
          if (e.target === this.modal) {
              this.modal.classList.add('hidden');
          }
      });
      
      document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
              this.modal.classList.add('hidden');
          }
      });
  }
}

// Initialize the wallet helper when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new WalletHelper();
});