export class Todo {
  public id: number = new Date().getTime();
  public completed: boolean = false;

  constructor(public text: string) { }
}
