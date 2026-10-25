import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Название задачи должно быть строкой' })
  @IsNotEmpty({ message: 'Название задачи не должно быть пустым' })
  @Length(2, 40, {
    message: 'Название задачи должно быть не менее 2 и не более 40 символов',
  })
  title?: string;

  @IsBoolean({ message: 'Статус должен быть булевым выражением' })
  isCompleted?: boolean;
}
