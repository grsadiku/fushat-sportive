import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateFacilityDto {
  @IsNotEmpty()
  @MinLength(3)
  Title: string;

  Location: string;

  @IsNotEmpty()
  @MinLength(10)
  Description: string;

  ProfileImageUrl: string;

  IsActive: boolean;

  @IsNotEmpty()
  SportID: number;

  @IsNotEmpty()
  IDManagingUser: number;

  @IsNotEmpty()
  IDState: number;

  @IsNotEmpty()
  IDCity: number;
}
