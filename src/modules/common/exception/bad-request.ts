export class BadRequest extends Error {

  public constructor(public readonly message: string) {
    super(message);
  }

}