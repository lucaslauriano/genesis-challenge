import { Component } from '../components/component';
export class ListTemplate {
  constructor(private tbody: Element) {
    this.tbody = document.querySelector('tbody');
  }

  render(item: any) {
    const components = new Component();
    if (item) {
      for (let i = 0; i < item.length; i++) {
        let element = item[i];
        let tr = document.createElement('tr');
        this.tbody.appendChild(tr);

        for (const item in element) {
          let td = document.createElement('td');
          td.appendChild(document.createTextNode(element[item]));
          tr.appendChild(td);
        }
        let td = document.createElement('td');
        td.innerHTML += components.tableColumn();
        tr.appendChild(td);
      }
    }
  }
}
