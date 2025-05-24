// Full glossary data
const glossaryData = [
  {
    term: 'Address',
    summary: 'A crypto address is a unique string of characters used to send or receive cryptocurrency on a blockchain.',
    full: `A cryptocurrency address is a public identifier, derived from a public key, that acts like a bank account number for sending or receiving digital assets on a blockchain. Each address is unique to a user's wallet and specific to a blockchain (e.g., Bitcoin or Ethereum). Funds sent to an address can only be accessed with the corresponding private key. Users must verify addresses carefully, as transactions are irreversible, and sending to an incorrect address results in permanent loss.`
  },
  {
    term: 'Airdrop',
    summary: 'An airdrop is a distribution of free cryptocurrency or tokens to promote a project or reward users.',
    full: `Airdrops involve sending free tokens or cryptocurrencies to wallet addresses, often as a marketing strategy to increase project awareness or reward community members. They're commonly used by new blockchain projects to attract users or distribute tokens after an ICO. Recipients may need to hold specific tokens or perform tasks like social media promotion. While appealing, airdrops carry risks of scams or low-value tokens, requiring caution and verification.`
  },
  {
    term: 'Altcoin',
    summary: 'Altcoins are cryptocurrencies other than Bitcoin, often offering unique features or use cases.',
    full: `Altcoin, short for "alternative coin," refers to any cryptocurrency except Bitcoin. Examples include Ethereum, Ripple (XRP), and Cardano (ADA). Altcoins may differ in consensus mechanisms, use cases (e.g., smart contracts or privacy), or improvements over Bitcoin, like faster transactions or lower fees. While some altcoins gain significant adoption, many are speculative, with high volatility and risks, requiring thorough research before investment.`
  },
  {
    term: 'Atomic Swap',
    summary: 'An atomic swap is a trustless, peer-to-peer exchange of cryptocurrencies across different blockchains without intermediaries.',
    full: `Atomic swaps enable direct trading of cryptocurrencies (e.g., Bitcoin for Litecoin) across separate blockchains using smart contracts, specifically hash time-locked contracts (HTLCs). These ensure both parties fulfill the trade or it's canceled, eliminating counterparty risk. Atomic swaps enhance decentralization but are technically complex and require compatible blockchains, limiting widespread adoption. They're a step toward cross-chain interoperability.`
  },
  {
    term: 'Bitcoin',
    summary: 'Bitcoin is the first and most well-known cryptocurrency, operating as a decentralized digital currency without a central authority.',
    full: `Created in 2009 by Satoshi Nakamoto, Bitcoin is a peer-to-peer digital currency running on a decentralized blockchain. It enables global, intermediary-free transactions with a capped supply of 21 million coins, making it a deflationary asset. Often called "digital gold," Bitcoin is primarily a store of value and the largest cryptocurrency by market cap. Its price volatility and energy-intensive mining process remain key discussion points.`
  },
  {
    term: 'Block Reward',
    summary: 'A block reward is the cryptocurrency given to miners or validators for successfully adding a block to a blockchain.',
    full: `In proof-of-work systems like Bitcoin, miners receive a block reward, consisting of newly minted coins and transaction fees, for solving cryptographic puzzles to validate a block. In proof-of-stake systems, validators earn similar rewards. Block rewards incentivize network security but often decrease over time (e.g., Bitcoin's halving), impacting miner profitability and influencing long-term token economics.`
  },
  {
    term: 'Blockchain',
    summary: 'A blockchain is a decentralized, secure digital ledger that records cryptocurrency transactions across a network of computers.',
    full: `A blockchain is a distributed database of records, or blocks, linked and secured by cryptography. Each block contains transactions, a timestamp, and a reference to the previous block, ensuring immutability and transparency. Used in cryptocurrencies like Bitcoin and Ethereum, it eliminates intermediaries, enabling trustless transactions. Beyond crypto, blockchain supports applications like supply chain tracking and smart contracts, valued for its tamper-resistant nature.`
  },
  {
    term: 'Cold Wallet',
    summary: 'A cold wallet is an offline storage method for cryptocurrencies, offering high security against hacks.',
    full: `A cold wallet stores private keys offline, disconnected from the internet, to protect cryptocurrencies from hacking or phishing attacks. Common forms include hardware wallets (e.g., Ledger, Trezor) or paper wallets with printed keys. Cold wallets are ideal for long-term storage but less convenient for frequent trading. While highly secure, users must safeguard the physical device or paper to avoid loss of access.`
  },
  {
    term: 'Consensus Mechanism',
    summary: 'A consensus mechanism is a protocol that ensures agreement on a blockchain\'s state among distributed nodes.',
    full: `Consensus mechanisms enable decentralized networks to agree on valid transactions and maintain a single, tamper-resistant ledger. Common types include Proof of Work (PoW), used by Bitcoin, and Proof of Stake (PoS), used by Ethereum 2.0. Each balances security, scalability, and energy efficiency differently. Emerging mechanisms like Delegated Proof of Stake (DPoS) aim to improve efficiency but may introduce centralization risks.`
  },
  {
    term: 'Crypto Exchange',
    summary: 'A crypto exchange is a platform where users can buy, sell, or trade cryptocurrencies for other assets or fiat.',
    full: `Crypto exchanges, like Coinbase or Binance, facilitate trading of cryptocurrencies for fiat or other digital assets. Centralized exchanges (CEXs) offer user-friendly interfaces and high liquidity but require trust in the platform, which holds user funds. Decentralized exchanges (DEXs) prioritize user control but may have lower liquidity. Exchanges are key to market access but pose risks like hacks or regulatory issues.`
  },
  {
    term: 'Cryptocurrency',
    summary: 'Cryptocurrency is a digital or virtual currency secured by cryptography, operating on decentralized blockchain networks.',
    full: `Cryptocurrencies are decentralized digital assets used for transactions, investments, or as a store of value, with Bitcoin and Ethereum as prominent examples. They rely on blockchain technology for security and transparency, bypassing traditional financial intermediaries. Cryptocurrencies offer benefits like global accessibility but face challenges like regulatory uncertainty, volatility, and scalability issues, making education critical for users.`
  },
  {
    term: 'Decentralized Exchange (DEX)',
    summary: 'A DEX is a blockchain-based platform that allows users to trade cryptocurrencies directly without a central authority.',
    full: `Decentralized exchanges facilitate peer-to-peer crypto trading via smart contracts, with users retaining control of their funds through private keys. Examples include Uniswap and PancakeSwap. DEXs provide privacy and censorship resistance but may have lower liquidity, higher fees during network congestion, and a learning curve compared to centralized exchanges like Binance. They're integral to DeFi ecosystems.`
  },
  {
    term: 'Decentralized Finance (DeFi)',
    summary: 'DeFi refers to financial applications built on blockchain technology that operate without centralized intermediaries like banks.',
    full: `Decentralized Finance leverages blockchain, primarily Ethereum, to offer financial services like lending, borrowing, and trading via smart contracts. DeFi protocols (e.g., Aave, Compound) enable global access and transparency without traditional gatekeepers. While innovative, DeFi carries risks like smart contract bugs, market volatility, and regulatory scrutiny, requiring users to research thoroughly before participating.`
  },
  {
    term: 'Ethereum',
    summary: 'Ethereum is a blockchain platform that supports smart contracts and its native cryptocurrency, Ether (ETH).',
    full: `Launched in 2015 by Vitalik Buterin, Ethereum is a decentralized platform enabling programmable smart contracts and decentralized applications (dApps). Ether powers network transactions and smart contract execution. Ethereum supports DeFi, NFTs, and more, with its proof-of-stake upgrade (Ethereum 2.0) improving energy efficiency. Its flexibility drives innovation but exposes users to risks like high gas fees during network congestion.`
  },
  {
    term: 'Fork',
    summary: 'A fork is a change in a blockchain\'s protocol, creating a new branch or version of the blockchain.',
    full: `A fork occurs when a blockchain's rules are updated, resulting in two paths: a soft fork (backward-compatible) or a hard fork (new rules, creating a separate chain). Examples include Bitcoin Cash splitting from Bitcoin. Forks can address security, scalability, or add features but may cause community disputes or confusion. They impact holders, as they may receive coins on the new chain.`
  },
  {
    term: 'Gas Fees',
    summary: 'Gas fees are payments made to process transactions or execute smart contracts on a blockchain like Ethereum.',
    full: `Gas fees compensate miners or validators for computational resources used in blockchain transactions. On Ethereum, fees are paid in ETH and vary with network demand and transaction complexity. High fees during congestion can make small transactions costly, prompting layer-2 solutions like Optimism. Gas fees ensure network security but can deter new users due to unpredictable costs.`
  },
  {
    term: 'Hash',
    summary: 'A hash is a unique string of characters generated by a cryptographic function to secure blockchain data.',
    full: `A hash is a fixed-length output created by processing data through a cryptographic algorithm (e.g., SHA-256 in Bitcoin). It ensures data integrity, as even a small change in input produces a vastly different hash. Hashes link blocks in a blockchain and verify transactions. Their one-way nature makes them secure but computationally intensive to reverse, underpinning blockchain security.`
  },
  {
    term: 'Hodl',
    summary: 'Hodl is a crypto term meaning to hold onto cryptocurrencies long-term, regardless of market fluctuations.',
    full: `Originating from a 2013 Bitcoin forum typo, "hodl" (hold on for dear life) describes a strategy of retaining cryptocurrencies through market volatility instead of trading. Hodlers believe in the long-term value of assets like Bitcoin or Ethereum. While this avoids panic-selling, it carries risks if projects fail or markets crash, requiring strong conviction and risk tolerance.`
  },
  {
    term: 'Initial Coin Offering (ICO)',
    summary: 'An ICO is a fundraising method where new cryptocurrencies or tokens are sold to investors to fund a project.',
    full: `ICOs allow blockchain projects to raise capital by issuing tokens, often on Ethereum, in exchange for cryptocurrencies like ETH or BTC. Investors buy tokens hoping for future value or utility in the project. Popular in 2017-2018, ICOs faced criticism for scams and lack of regulation, leading to alternatives like STOs or IDOs. Due diligence is critical due to high risks.`
  },
  {
    term: 'Liquidity Pool',
    summary: 'A liquidity pool is a collection of funds locked in a smart contract to facilitate trading on decentralized exchanges.',
    full: `Liquidity pools power DEXs like Uniswap by allowing users to deposit cryptocurrency pairs (e.g., ETH/USDT) into smart contracts, enabling instant trading. Providers earn fees but face risks like impermanent loss, where token price changes reduce returns. Pools enhance DeFi accessibility but require understanding of risks and rewards, as they're integral to automated market makers (AMMs).`
  },
  {
    term: 'Mining',
    summary: 'Mining is the process of validating cryptocurrency transactions and earning rewards by solving computational problems.',
    full: `In proof-of-work blockchains like Bitcoin, miners use powerful computers to solve cryptographic puzzles, validating transactions and securing the network. They earn newly minted coins and transaction fees. Mining is energy-intensive, raising environmental concerns, and difficulty adjusts to maintain block times. It's competitive, with advanced hardware increasing reward chances, but centralization risks arise from large mining pools.`
  },
  {
    term: 'Non-Fungible Token (NFT)',
    summary: 'An NFT is a unique digital asset on a blockchain, representing ownership of items like art or collectibles.',
    full: `NFTs, often on Ethereum, are distinct tokens with unique metadata, proving ownership of digital or physical assets like art, music, or virtual goods. Unlike fungible tokens like ETH, NFTs are non-interchangeable. They enable creators to monetize digital works but are speculative, with risks of overvaluation and environmental concerns due to blockchain energy use.`
  },
  {
    term: 'Private Key',
    summary: 'A private key is a secret code that allows users to access and control their cryptocurrency in a wallet.',
    full: `A private key is a cryptographic string granting access to funds associated with a wallet's public address. It must remain confidential, as anyone with the key can spend the associated crypto. Private keys are stored in wallets (software or hardware) and are critical for security. Losing a private key means losing access to funds permanently, emphasizing the need for backups.`
  },
  {
    term: 'Proof of Stake (PoS)',
    summary: 'Proof of Stake is a consensus mechanism where validators stake cryptocurrency to secure a blockchain and earn rewards.',
    full: `In PoS, validators lock up cryptocurrency as a stake to create blocks and confirm transactions, selected based on stake size. It's energy-efficient compared to proof-of-work, as seen in Ethereum's PoS upgrade. Validators earn rewards but risk stake loss for malicious actions. PoS enhances scalability but may favor wealthier participants, raising concerns about potential centralization.`
  },
  {
    term: 'Proof of Work (PoW)',
    summary: 'Proof of Work is a consensus mechanism where miners solve computational puzzles to validate blockchain transactions.',
    full: `PoW requires miners to use computational power to solve complex mathematical problems, securing blockchains like Bitcoin by validating transactions and adding blocks. It's secure but energy-intensive, contributing to environmental concerns. Mining rewards incentivize participation, but high costs lead to centralization in mining pools. PoW's robustness underpins Bitcoin's security but limits scalability compared to PoS.`
  },
  {
    term: 'Public Key',
    summary: 'A public key is a cryptographic address used to receive cryptocurrencies in a wallet.',
    full: `A public key, paired with a private key, is part of a cryptographic key pair in a crypto wallet. It's shared openly to receive funds, like an email address for payments. Derived from the public key, a wallet address is used for transactions. While secure, users must ensure correct addresses to avoid sending funds to unintended recipients, as transactions are irreversible.`
  },
  {
    term: 'Smart Contract',
    summary: 'A smart contract is a self-executing program on a blockchain that automatically enforces agreement terms when conditions are met.',
    full: `Smart contracts are coded agreements on blockchains like Ethereum, executing actions (e.g., fund transfers) when conditions are met. They eliminate intermediaries, ensuring transparency and trust via immutable code. Used in DeFi, NFTs, and more, they carry risks like coding errors leading to hacks, necessitating rigorous audits. Smart contracts drive blockchain innovation but require technical understanding.`
  },
  {
    term: 'Stablecoin',
    summary: 'A stablecoin is a cryptocurrency pegged to a stable asset, like the US dollar, to minimize price volatility.',
    full: `Stablecoins maintain consistent value, often pegged to fiat (e.g., USDT, USDC) or backed by assets or algorithms. They're used for trading, savings, or DeFi, offering stability in volatile crypto markets. Centralized stablecoins rely on issuer reserves, raising transparency concerns, while decentralized ones use smart contracts. Regulatory scrutiny and reserve audits are key considerations for users.`
  },
  {
    term: 'Token',
    summary: 'A token is a digital asset built on an existing blockchain, often representing utility or ownership in a project.',
    full: `Tokens, created on platforms like Ethereum (e.g., ERC-20), represent assets, utility, or rights within ecosystems, unlike cryptocurrencies with their own blockchains. They're used for governance, in-game items, or DeFi services. Token value often ties to project success, making research essential. They're issued via smart contracts and traded on exchanges, driving blockchain application diversity.`
  },
  {
    term: 'Wallet',
    summary: 'A crypto wallet is a software or physical device that stores private and public keys, enabling users to manage cryptocurrencies.',
    full: `Crypto wallets store cryptographic keys to interact with blockchains, with public keys receiving funds and private keys authorizing transactions. Types include software (mobile/desktop apps), hardware (offline devices), or paper wallets. Funds reside on the blockchain, not in the wallet, which provides access. Security is critical, as losing private keys means losing funds, and wallets are common hacking targets.`
  }
];

// DOM elements
const glossaryList = document.querySelector('.glossary-list');
const alphabetFilter = document.querySelector('.alphabet-filter');
const searchInput = document.getElementById('search');
const modal = document.getElementById('glossary-modal');
const modalTerm = document.getElementById('modal-term');
const modalFull = document.getElementById('modal-full');
const closeBtn = document.querySelector('.close-btn');

// Generate alphabet filter (with 'All' at the start)
const alphabet = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
alphabet.forEach(letter => {
  const btn = document.createElement('button');
  btn.textContent = letter;
  btn.classList.add('alphabet-btn');
  btn.addEventListener('click', () => filterByLetter(letter));
  alphabetFilter.appendChild(btn);
});

// Generate glossary cards
function generateCards(data) {
  glossaryList.innerHTML = '';
  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('glossary-card');
    card.innerHTML = `
      <div class="card-header">
        <h3>${item.term}</h3>
      </div>
      <p class="card-summary">${item.summary}</p>
      <a href="#" class="full-link">Full definition &rarr;</a>
    `;
    card.querySelector('.full-link').addEventListener('click', (e) => {
      e.preventDefault();
      openModal(item);
    });
    card.addEventListener('click', () => openModal(item));
    glossaryList.appendChild(card);
  });
}

// Filter by letter
function filterByLetter(letter) {
  document.querySelectorAll('.alphabet-btn').forEach(btn => btn.classList.remove('active'));
  const btn = Array.from(document.querySelectorAll('.alphabet-btn')).find(b => b.textContent === letter);
  if (btn) btn.classList.add('active');
  if (letter === 'All') {
    generateCards(glossaryData);
  } else {
    const filtered = glossaryData.filter(item => item.term.toUpperCase().startsWith(letter));
    generateCards(filtered);
  }
}

// Search functionality
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = glossaryData.filter(item => item.term.toLowerCase().includes(query));
  generateCards(filtered);
});

// Modal functionality
function openModal(item) {
  modalTerm.textContent = item.term;
  modalFull.textContent = item.full;
  modal.style.display = 'block';
}

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Initial load
document.querySelectorAll('.alphabet-btn').forEach(btn => btn.classList.remove('active'));
generateCards(glossaryData); 