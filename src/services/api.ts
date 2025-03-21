const checkResponse = <T>(res: Response): Promise<T> =>
    res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export type TBook = {
    userId: number | null;
    id: number;
    title: string | null;
    body: string | null;
}
export const getBooksApi = () =>
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => checkResponse<TBook[]>(res))
      .then((data) => {
        if (data) return data;
        return Promise.reject(data);
      });