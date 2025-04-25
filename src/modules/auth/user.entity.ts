export class UserEntity {

  constructor(
    private readonly _id?: string,
    private readonly _firstName?: string,
    private readonly _lastName?: string,
    private readonly _email?: string
  ) {}

  get id(): string | undefined {
    return this._id;
  }

  get firstName(): string | undefined {
    return this._firstName;
  }

  get lastName(): string | undefined {
    return this._lastName;
  }

  get fullName(): string | undefined {
    return this._firstName + ' ' + this._lastName;
  }

  get email(): string | undefined {
    return this._email;
  }

}