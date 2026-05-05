import { IsString, IsNumber, IsOptional, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Jarrón de cerámica artesanal' })
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Jarrón hecho a mano con técnica de gres, acabado rústico',
  })
  @IsString()
  description: string;

  @ApiProperty({ example: 45000, description: 'Precio en CLP' })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ example: 'artesania' })
  @IsString()
  category: string;

  @ApiProperty({ example: 'clxxx-creator-id' })
  @IsString()
  creatorId: string;

  @ApiProperty({
    example: 'https://cdn.example.com/jarron.jpg',
    required: false,
  })
  @IsString()
  @IsOptional()
  imageUrl?: string;
}
