import './main.scss';
import { ListTemplate } from './classes/ListTemplate';
import { Users } from './classes/User';
import { Component } from './components/component';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const fullName = document.querySelector('#fullName') as HTMLInputElement;
const cpf = document.querySelector('#cpf') as HTMLInputElement;
const phone = document.querySelector('#phone') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const tbody = document.querySelector('tbody');
const tableEl = document.querySelector('table');
const components = new Component();

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
      let users = new Users(data);
      list.render(data);
      users.setUsers(data);
    })
    .catch((error) => error);
};

fetchUsers();

const onDeleteRow = (e: any) => {
  if (!e.target.classList.contains('deleteBtn')) {
    return;
  }
  e.target.closest('tr').remove();
};

tableEl.addEventListener('click', onDeleteRow);

form.addEventListener('submit', (e: Event) => {
  let users = new Users(null);
  e.preventDefault();
  let values: {};
  values = {
    name: fullName.value,
    cpf: cpf.value,
    phone: phone.value,
    email: email.value,
  };
  users;
  tbody.innerHTML += components.createRowElement(values);
});
