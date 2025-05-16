export class UnahandledError extends Error {

  constructor(public readonly message: string) {
    super(message);
  }

}