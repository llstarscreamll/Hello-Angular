export class AppMessage {
  public message: string;
  public errors: Object | null;
  public status_code: number | null;
  public type: string;
  public date: Date = new Date();
}
