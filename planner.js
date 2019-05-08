const input = document.querySelector('.addText input[type=text]')
const allNotes = document.querySelector('.allNotes');
function addNewList() {
  const note = document.createElement('div');
  note.classList.add('note');

  const leftBlock = document.createElement('div');

  const rightBlock = document.createElement('div');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';

  const inputText = document.createElement('p');
  inputText.innerText = input.value;

  note.appendChild(leftBlock);
  note.appendChild(rightBlock);
  leftBlock.appendChild(checkBox);
  rightBlock.appendChild(inputText);

  allNotes.appendChild(note); 
}