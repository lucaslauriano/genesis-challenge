import { Component } from '../components/component';
export class ListTemplate {
  constructor(private tbody: Element) {
    this.tbody = document.querySelector('tbody');
  }

  render(users: any) {
    const components = new Component();
    if (users) {
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        this.tbody.innerHTML += components.createRowElement(user);
      }
    }
  }
}
