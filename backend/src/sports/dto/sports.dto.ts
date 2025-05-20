import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateSportDto {
  id: number;

  @IsNotEmpty()
  @MinLength(3)
  Title: string;
}
