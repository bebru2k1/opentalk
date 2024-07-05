import { IsString, Length } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @Length(6, 100)
  name: string;
}
