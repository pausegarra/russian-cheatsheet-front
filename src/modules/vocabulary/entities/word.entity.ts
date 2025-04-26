export class WordEntity {

  constructor(
    private _id: string,
    private _russian: string,
    private _english: string,
    private _spanish: string,
    private _type: string
  ) {}

  get id(): string {
    return this._id;
  }

  get russian(): string {
    return this._russian;
  }

  get english(): string {
    return this._english;
  }

  get spanish(): string {
    return this._spanish;
  }

  get type(): string {
    return this._type;
  }

}