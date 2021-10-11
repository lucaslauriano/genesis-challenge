import './main.scss';
import { ListTemplate } from './classes/ListTemplate';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const fullName = document.querySelector('#fullName') as HTMLInputElement;
const cpf = document.querySelector('#cpf') as HTMLInputElement;
const phone = document.querySelector('#phone') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const tbody = document.querySelector('tbody');

cpf.addEventListener(
  'keyup',
  function (evt) {
    var n = this.value.replace(/\D/g, '');
    cpf.value = n.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  },
  false
);

const fetchUsers = () => {
  fetch('https://private-847f5-ivangenesis.apiary-mock.com/users')
    .then((response) => response.json())
    .then((data) => {
      let list = new ListTemplate(data);
      list.render(data);
    })
    .catch((error) => error);
};

fetchUsers();

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, string, string];
  values = [fullName.value, cpf.value, phone.value, email.value];
  var tr = document.createElement('tr');

  for (var i = 0; i < values.length + 1; i++) {
    let element = values[i];
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(element));
    tr.appendChild(td);
  }

  tbody.appendChild(tr);
});
