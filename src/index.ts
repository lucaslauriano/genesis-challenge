import { User } from './classes/User';
import { ListTemplate } from './classes/ListTemplate';
import { HasFormatter } from './interfaces/HasFormatter';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const fullName = document.querySelector('#fullName') as HTMLInputElement;
const cpf = document.querySelector('#cpf') as HTMLInputElement;
const phone = document.querySelector('#phone') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
let userData = <[]>[];
const fetchUsers = () => {
  fetch('https://private-847f5-ivangenesis.apiary-mock.com/users')
    .then((response) => response.json())
    .then((data) => (userData = data))
    .catch((error) => error);
};

fetchUsers();
list.render(userData, null, null);
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, string, string];
  values = [fullName.value, cpf.value, phone.value, email.value];

  let doc: HasFormatter;
  doc = new User(...values);

  list.render(doc, ['Nome Completo', 'CPF', 'Telefone', 'E-mail'], 'start');
});
