import { IsString, IsOptional, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetUserDTO {
  @IsString()
  email: string;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value, 10))
  number: number;
}
