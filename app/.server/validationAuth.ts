import { IAuthRequest } from "~/types";
import { validationEmail, validationLength } from "~/utils";

export function validationAuth(payload: IAuthRequest) {
  const { email, password } = payload
  const errors = {} as { email?: string, password?: string }

  if (!validationLength(email, 15)) {
    errors.email = 'email length error'
  }

  if (!validationEmail(email)) {
    errors.email = 'email must contain @'
  }

  if (!validationLength(password, 6)) {
    errors.password = 'password length error'
  }

  if (Object.values(errors).length) throw errors
}
