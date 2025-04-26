export class LetterEntity {

  constructor(
    private _id: string,
    private _cyrillic: string,
    private _latin: string,
    private _ipa: string
  ) {}

  get id(): string {
    return this._id;
  }

  get cyrillic(): string {
    return this._cyrillic;
  }

  get latin(): string {
    return this._latin;
  }

  get ipa(): string {
    return this._ipa;
  }

}