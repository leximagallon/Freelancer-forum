/**
/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */


const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function getRandomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomRate(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomFreelancer() {
  return {
    name: getRandomFromArray(NAMES),
    occupation: getRandomFromArray(OCCUPATIONS),
    rate: getRandomRate(PRICE_RANGE.min, PRICE_RANGE.max),
  };
}


const freelancers = Array.from({ length: NUM_FREELANCERS }, createRandomFreelancer);
const averageRate = freelancers.reduce((sum, f) => sum + f.rate, 0) / freelancers.length;


function FreelancerTable(freelancers) {
  const rows = freelancers.map(
    ({ name, occupation, rate }) => `
      <tr>
        <td>${name}</td>
        <td>${occupation}</td>
        <td>$${rate}/hr</td>
      </tr>`
  ).join("");

  return `
    <table class="freelancer-table" border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; max-width: 700px; margin: 0 auto; font-family: Arial, sans-serif;">
      <thead style="background-color: #4CAF50; color: white;">
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1 style="text-align: center;">Freelancer Forum</h1>
    <p style="text-align: center; font-weight: bold; font-size: 18px;">
      Average Hourly Rate: $${averageRate.toFixed(2)}/hr
    </p>
    ${FreelancerTable(freelancers)}
  `;
}

render();