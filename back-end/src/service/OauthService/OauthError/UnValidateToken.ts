export default class UnValidateToken extends Error {
  constructor() {
    super("올바르지 않은 토큰 입니다.");
  }
}
