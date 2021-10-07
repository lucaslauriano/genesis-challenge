import { HasFormatter } from '../interfaces/HasFormatter';

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: any, heading: Array<string>, pos: 'start' | 'end') {
    const row = document.createElement('tr');
    const column = document.createElement('td');

    const p = document.createElement('p');
    for (let index = 0; index < item.length; index++) {
      const element = item[index];
      console.log('element', element);
      /*  column.innerText = element;
      row.append(column); */
    }

    if (pos === 'start') {
      this.container.prepend(row);
    } else {
      this.container.append(row);
    }
  }
}
