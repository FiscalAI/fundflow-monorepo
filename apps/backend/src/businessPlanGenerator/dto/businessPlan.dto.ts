import { IsNotEmpty, IsString } from 'class-validator';

export class BusinessPlanDto {
  @IsString()
  @IsNotEmpty()
  problem: string;

  @IsString()
  @IsNotEmpty()
  solution: string;

  @IsString()
  @IsNotEmpty()
  usp: string;
}
