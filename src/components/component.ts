export class Component {
  createRowElement = (item: any) => {
    return `
    <tr>
      <td>${item.name}</td>
      <td>${item.cpf}</td>
      <td>${item.phone}</td>
      <td>${item.email}</td>
      <td>
        <i class="material-icons icons deleteBtn">delete</i>
      </td>
    </tr>
  `;
  };
}
