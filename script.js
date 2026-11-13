const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;

const STORAGE_KEYS = {
  stats: "wordle-stats",       // localStorage: { wins, losses }
  rows: "wordle-rows",         // localStorage: fuldførte rækker
  secretWord: "wordle-word",   // sessionStorage: ordet der skal gættes
};

let secretWord = "";       
let wordList = [];         
let currentRow = 0;        
let currentTile = 0;      
let gameOver = false;
let stats = { wins: 0, losses: 0 };


function init() {
  // Hent statistik, hent/vælg ord, genskab evt. rækker, sæt event listeners
  secretWord = loadSecretWord()

  if (secretWord === null) {
    secretWord = pickRandomWord()
    saveSecretWord(secretWord)
  }

  updateStatsUI()
}

function startNewGame() {
  // Nulstil bræt, tastatur, række/felt-tællere og gameOver
  // Vælg nyt ord og gem det i sessionStorage
  // Ryd gemte rækker i localStorage
}

// Lytter på fysisk tastatur, skærmtastatur og "Nyt spil"-knap
function setupEventListeners() {
}

// Hent win/loss fra localStorage og gem i stats
function loadStats() {
  // TODO load stats og gem
  updateStatsUI()
}

// Gem win/loss i localStorage
function saveStats() {
}

// Udregn win-rate i procent ud fra stats
function calculateWinRate() {
  const total = stats.wins + stats.losses
  if (total === 0) return 0
  return Math.round(stats.wins / total * 100)
}

// Opdater #wins, #losses og #winrate i DOM
function updateStatsUI() {
  document.getElementById("wins").textContent = stats.wins
  document.getElementById("losses").textContent = stats.losses
  document.getElementById("winrate").textContent = calculateWinRate()
}

// Hent ordbogen med gyldige ord (fx fra en fil eller et array)
function loadWordList() {
}

// Vælg et tilfældigt ord fra ordlisten
function pickRandomWord() {
}

// Gem ordet i sessionStorage
function saveSecretWord(word) {
  sessionStorage.setItem(STORAGE_KEYS.secretWord, word)
}

// Hent ordet fra sessionStorage (hvis det findes)
function loadSecretWord() {
  return sessionStorage.getItem(STORAGE_KEYS.secretWord)
}

// Samlet indgang for alle input (fysisk tast og skærmtast)
// Skal sende videre til addLetter, removeLetter eller submitGuess
function handleKeyPress(key) {
}

// Vis bogstav i det aktive felt og gør næste felt (til højre) aktivt
function addLetter(letter) {
}

// Slet seneste bogstav og flyt aktivt felt et skridt tilbage
function removeLetter() {
}

// Hjælpefunktioner til at finde elementer i DOM
function getCurrentRowElement() {
}

function getTileElement(rowIndex, tileIndex) {
}

function getKeyElement(letter) {
}

// Kaldes ved Enter: tjek at rækken er fuld, ordet er gyldigt, og vurdér gættet
function submitGuess() {
}

// Er alle 5 felter i den aktive række udfyldt?
function isRowComplete() {
}

// Læs ordet i den aktive række som en streng
function getCurrentGuess() {
}

// Findes ordet i ordbogen?
function isValidWord(word) {
}

// Sammenlign gæt med secretWord
// Returnér en liste med "correct" / "present" / "absent" for hvert bogstav
function evaluateGuess(guess) {
}

// Farv felterne i den aktive række efter resultatet fra evaluateGuess
function colorRow(result) {
}

// Markér brugte bogstaver på tastaturet: grå (forkert), grøn eller gul
// Husk: en tast der allerede er grøn må ikke nedgraderes til gul
function updateKeyboard(guess, result) {
}

// Gem den fuldførte række i localStorage
function saveRow(guess, result) {
}

// Genskab tidligere rækker fra localStorage (hvis siden genindlæses)
function restoreRows() {
}

// Er gættet lig med secretWord?
function checkWin(guess) {
}

// Var det sidste forsøg (6. række) uden at have vundet?
function checkLoss() {
}

// Gør næste række aktiv og nulstil aktivt felt
function nextRow() {
}

// Afslut spil: opdater stats, gem, vis besked
// won = true (vundet) eller false (tabt)
function endGame(won) {
  updateStatsUI()
}

// Vis tekst i #message (fx "Ikke et gyldigt ord", "Du vandt!")
function showMessage(text) {
}

// Ryst aktiv række (klassen .shake) ved ugyldigt ord eller for få bogstaver
function shakeRow() {
}

// ---------- Start spillet ---------- //
init();