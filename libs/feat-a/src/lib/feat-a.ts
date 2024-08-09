import assert = require('assert');
import {IsEmail, isEmail, validateSync} from 'class-validator';
class Clean {
  @IsEmail()
  email!: string;
}
export function featA(): string {
  const clean = new Clean();
  clean.email = 'dev@dev.com';
  const valid = validateSync(clean);
  assert(valid.length === 0);
  return 'hello with a valid email';
}
