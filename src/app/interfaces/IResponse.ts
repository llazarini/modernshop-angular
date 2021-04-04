export interface IResponse<T> {
    id: number;
    status: boolean,
    message: string,
    data: T;
}

export interface IResponseData<T> {
    total: number;
    data: Array<T>;
    next_page_url?: string;
}
