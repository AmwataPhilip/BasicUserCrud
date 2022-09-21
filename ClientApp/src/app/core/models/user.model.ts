import { Resource } from './resource.model';

export class User extends Resource {
  id = 0;
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  countryCode = '';
  number = '';
  role = '';
  client = '';
  isActive = '';
}
