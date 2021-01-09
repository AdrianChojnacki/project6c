// Names array
const names = [];

// Selectors
const input = document.querySelector(`input`);
const btn = document.querySelector(`button`);
const div = document.querySelector(`div`);

//Function
const addName = (e) => {
  e.preventDefault();

  const newName = input.value;

  if (input.value.length) {
    for (const name of names) {
      if (name === newName) {
        alert("To już jest!");
        return;
      }
    }

    names.push(newName);
    div.textContent += `${newName}, `;
  } else {
    alert("Musisz coś wpisać!");
  }

  input.value = "";
};

// Listener
btn.addEventListener(`click`, addName);
