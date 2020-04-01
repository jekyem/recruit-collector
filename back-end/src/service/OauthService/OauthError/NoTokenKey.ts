export default class NoTokenKey extends Error {
  constructor() {
    super("토큰의 키값이 없습니다.");
  }
}
