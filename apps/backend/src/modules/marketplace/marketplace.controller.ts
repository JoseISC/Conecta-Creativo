import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { MarketplaceService } from './marketplace.service';
import { CreateProductDto } from './dto/create-product.dto';

@ApiTags('Marketplace')
@Controller('marketplace')
export class MarketplaceController {
  constructor(private readonly marketplaceService: MarketplaceService) {}

  @Get('products')
  @ApiOperation({ summary: 'List all products in marketplace' })
  @ApiQuery({ name: 'search', required: false })
  findAll(@Query('search') search?: string) {
    if (search) {
      return this.marketplaceService.searchProducts(search);
    }
    return this.marketplaceService.findAllProducts();
  }

  @Get('products/:id')
  @ApiOperation({ summary: 'Get product by ID' })
  findOne(@Param('id') id: string) {
    return this.marketplaceService.findProductById(id);
  }

  @Post('products')
  @ApiOperation({ summary: 'Create a new product listing' })
  create(@Body() createProductDto: CreateProductDto) {
    return this.marketplaceService.createProduct(createProductDto);
  }
}
