let currentGroupIndex = 0; 
let currentWordIndex = 0;  
let wordDictionary = []; 

const container = document.getElementById('inputContainer');
const englishHint = document.getElementById('englishHint');
const chineseHint = document.getElementById('chineseHint');
const msgElement = document.getElementById('successMessage');
const checkBtn = document.getElementById('checkBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressText = document.getElementById('progressText');
const groupSelect = document.getElementById('groupSelect');
const speakBtn = document.getElementById('speakBtn'); 

function speakWord(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); 
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; 
    utterance.rate = 0.85;    
    window.speechSynthesis.speak(utterance);
  }
}

function initSelect() {
  groupSelect.innerHTML = '';
  wordGroups.forEach((group, index) => {
    const option = document.createElement('option');
    option.value = index;
    const startNum = index * 10 + 1;
    const endNum = index * 10 + group.words.length;
    option.innerText = `🎀 ${group.groupName} (${startNum}-${endNum})`;
    groupSelect.appendChild(option);
  });
  
  if(wordGroups.length > 0) {
      wordDictionary = wordGroups[0].words;
  }
}

groupSelect.addEventListener('change', (e) => {
  currentGroupIndex = parseInt(e.target.value);
  wordDictionary = wordGroups[currentGroupIndex].words;
  currentWordIndex = 0; 
  loadQuestion(currentWordIndex);
});

function loadQuestion(index) {
  container.innerHTML = '';
  msgElement.innerText = '';
  checkBtn.style.display = 'inline-block';

  if (!wordDictionary || wordDictionary.length === 0) {
      englishHint.innerText = "請先加入題庫！";
      chineseHint.innerText = "";
      progressText.innerText = `第 0 題 / 共 0 題`;
      return;
  }

  progressText.innerText = `第 ${index + 1} 題 / 共 ${wordDictionary.length} 題`;

  const currentData = wordDictionary[index];
  
  englishHint.innerText = currentData.english;
  chineseHint.innerText = `(${currentData.chinese})`;

  const input = document.createElement('input');
  input.type = "text";
  input.className = 'word-input';
  input.placeholder = "照著上方英文打... ✍️"; 
  input.autocomplete = "off"; 
  input.spellcheck = false; 
  
  input.addEventListener('input', () => {
      if (input.classList.contains('wrong')) {
          input.classList.remove('wrong'); 
          msgElement.innerText = ''; 
      }
  });

  input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && checkBtn.style.display !== 'none') {
          checkBtn.click();
      }
  });

  container.appendChild(input);
  setTimeout(() => input.focus(), 10);
}

speakBtn.addEventListener('click', () => {
  if (wordDictionary && wordDictionary.length > 0) {
      const currentData = wordDictionary[currentWordIndex];
      speakWord(currentData.english);
      const input = container.querySelector('.word-input');
      if(input) input.focus();
  }
});

checkBtn.addEventListener('click', () => {
  if (!wordDictionary || wordDictionary.length === 0) return;

  const currentData = wordDictionary[currentWordIndex];
  const rawAnswer = currentData.english;
  const input = container.querySelector('.word-input');
  const userInput = input.value;

  const possibleAnswers = rawAnswer.split(/[,;(]/);
  const cleanText = (text) => text.replace(/[\s\.\/\-\)]/g, '').toLowerCase();
  const cleanInput = cleanText(userInput);

  let isCorrect = possibleAnswers.some(part => {
      const cleanPart = cleanText(part);
      return cleanPart !== '' && cleanPart === cleanInput;
  });

  if (isCorrect) {
      input.className = 'word-input correct';
      msgElement.innerText = "🎉 照打正確！太棒了！";
      msgElement.className = "success-msg correct-text";
      input.disabled = true; 
      checkBtn.style.display = 'none';
  } else {
      input.className = 'word-input wrong';
      msgElement.innerText = "❌ 哎呀，不小心打錯囉！直接打字覆蓋重試吧！";
      msgElement.className = "success-msg wrong-text";
      input.select(); 
  }
});

prevBtn.addEventListener('click', () => {
  if (!wordDictionary || wordDictionary.length === 0) return;
  currentWordIndex--;
  if (currentWordIndex < 0) currentWordIndex = wordDictionary.length - 1;
  loadQuestion(currentWordIndex);
});

nextBtn.addEventListener('click', () => {
  if (!wordDictionary || wordDictionary.length === 0) return;
  currentWordIndex++;
  if (currentWordIndex >= wordDictionary.length) currentWordIndex = 0;
  loadQuestion(currentWordIndex);
});

document.addEventListener('keydown', (e) => {
  if (document.activeElement.tagName === 'INPUT') return; 
  if (e.key === 'ArrowLeft') prevBtn.click();
  else if (e.key === 'ArrowRight') nextBtn.click();
});

initSelect();
loadQuestion(currentWordIndex);
