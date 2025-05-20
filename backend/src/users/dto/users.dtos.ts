import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  Username: string;

  @IsNotEmpty()
  @MinLength(8)
  Password: string;

  @IsNotEmpty()
  @IsEmail()
  Email: string;

  @IsNotEmpty()
  FirstName: string;

  @IsNotEmpty()
  LastName: string;

  @IsNotEmpty()
  IDRole: number;

  @IsNotEmpty()
  Birthdate: Date;

  @IsNotEmpty()
  PhoneNumber: string;
}
