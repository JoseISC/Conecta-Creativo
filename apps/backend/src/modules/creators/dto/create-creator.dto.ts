import { IsString, IsEmail, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum CreatorCategory {
  ARTESANIA = 'artesania',
  MUSICA = 'musica',
  PERFORMANCE = 'performance',
  DECORACION = 'decoracion',
  DISENO = 'diseno',
  GASTRONOMIA = 'gastronomia',
  FOTOGRAFIA = 'fotografia',
  OTRO = 'otro',
}

export class CreateCreatorDto {
  @ApiProperty({ example: 'María Pérez' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'maria@ejemplo.cl' })
  @IsEmail()
  email: string;

  @ApiProperty({ enum: CreatorCategory, example: CreatorCategory.ARTESANIA })
  @IsEnum(CreatorCategory)
  category: string;

  @ApiProperty({
    example: 'Artesana especializada en cerámica gres',
    required: false,
  })
  @IsString()
  @IsOptional()
  bio?: string;

  @ApiProperty({ example: 'Santiago, Chile', required: false })
  @IsString()
  @IsOptional()
  location?: string;
}
