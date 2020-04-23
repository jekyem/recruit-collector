export default interface Reducer<T> {
  type: string;
  payload: T;
}
