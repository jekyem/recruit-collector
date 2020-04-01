import * as Factory from "./Factory";

export default interface LoginTokenValidator {
  validate(token: any): Promise<string>;
}

export { Factory };
