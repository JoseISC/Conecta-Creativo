import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { CreatorsService } from './creators.service';
import { CreateCreatorDto } from './dto/create-creator.dto';

@ApiTags('Creators')
@Controller('creators')
export class CreatorsController {
  constructor(private readonly creatorsService: CreatorsService) {}

  @Get()
  @ApiOperation({ summary: 'List all creators' })
  @ApiQuery({ name: 'category', required: false })
  findAll(@Query('category') category?: string) {
    if (category) {
      return this.creatorsService.findByCategory(category);
    }
    return this.creatorsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get creator by ID' })
  findOne(@Param('id') id: string) {
    return this.creatorsService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Register a new creator' })
  create(@Body() createCreatorDto: CreateCreatorDto) {
    return this.creatorsService.create(createCreatorDto);
  }
}
