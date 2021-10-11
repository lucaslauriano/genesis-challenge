import { Component } from '../src/components/component';

let item: Component;

describe('render components', function () {
  beforeEach(() => {
    item = new Component();
  });

  it('should show component', function () {
    const res = item.tableColumn();

    expect(res).toBeCalled();
  });
});
