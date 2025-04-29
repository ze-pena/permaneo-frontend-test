export default async function fakeRequest<T>(data: T): Promise<T> {
  const promise = new Promise<T>(resolve => {
    setTimeout(() => resolve(data), 1000);
  });
  const result = await promise.then(value => value);
  return result;
}
