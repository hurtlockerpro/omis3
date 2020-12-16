import { DbTodos } from './db-todos';

describe('DbTodos', () => {
  it('should create an instance', () => {
    expect(new DbTodos()).toBeTruthy();
  });
});
