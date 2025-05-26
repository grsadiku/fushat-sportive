import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  Title: string;

  @IsInt()
  IDFacility: number;

  @IsDateString()
  ReservationDate: Date;

  @IsDateString()
  ReservationEndDate: Date;

  @IsBoolean()
  IsRecurring: boolean;

  @IsInt()
  IDEntryUser: number;
}

export class UpdateReservationDto {
  @IsString()
  Title?: string;

  @IsInt()
  IDFacility?: number;

  @IsDateString()
  ReservationDate?: Date;

  @IsDateString()
  ReservationEndDate?: Date;

  @IsBoolean()
  IsRecurring?: boolean;

  @IsInt()
  IDEntryUser?: number;
}

export class ReservationResponseDto {
  ID: number;
  Title: string;
  ReservationDate: Date;
  ReservationEndDate: Date;
  IsRecurring: boolean;
  IDFacility: number;
  FacilityTitle: string | null;
  FacilityLocation: string | null;
  FacilitySport: string | null;
  IDEntryUser: number;
  EntryUserFullName: string | null;
  EntryDate: Date;
}
