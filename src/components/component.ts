export class Component {
  onDelete(event: Event) {
    console.log('deleting', event);
  }

  tableColumn() {
    return `
      <i class="material-icons icons" 
         oncLick={${(event: Event) => this.onDelete(event)}}>delete</i>
    `;
  }
}
