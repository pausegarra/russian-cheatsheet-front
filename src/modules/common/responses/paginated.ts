export class Paginated<T> {

  constructor(
    private _data: T[],
    private _page: number,
    private _pageSize: number,
    private _totalPages: number,
    private _totalElements: number,
    private _hasNextPage: boolean,
    private _hasPreviousPage: boolean
  ) {}

  get data(): T[] {
    return this._data;
  }

  get page(): number {
    return this._page;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  get totalPages(): number {
    return this._totalPages;
  }

  get totalElements(): number {
    return this._totalElements;
  }

  get hasNextPage(): boolean {
    return this._hasNextPage;
  }

  get hasPreviousPage(): boolean {
    return this._hasPreviousPage;
  }
}