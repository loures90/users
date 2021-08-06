export class BaseError extends Error {
    constructor(public message: string, public code: number) {
      super(message);
    }
  }
 export const baseError = new BaseError("", 400)