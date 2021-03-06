import getRandomInt from '../intgenerator.js';
import playGame from '../index.js';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  const limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeGameData = () => {
  const question = getRandomInt(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  const result = [question, answer];
  return result;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrimeGame = () => playGame(task, getPrimeGameData);
export default playPrimeGame;
