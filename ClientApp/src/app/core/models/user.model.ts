import { Resource } from './resource.model';

export class User extends Resource {
  Id = 0;
  FirstName = '';
  LastName = '';
  Email = '';
  Password = '';
  Mobile = { CountryCode: '', Number: '' };
  Role = '';
  Client = '';
  IsActive = '';
}
