export class CreateUserDto {
  email!: string;
  password_hash!: string;
  firstName?: string;
  lastName?: string;
}
