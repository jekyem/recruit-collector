export default class NotSupportSite extends Error {
  constructor() {
    super("지원하지 않는 인증 사이트 입니다.");
  }
}
