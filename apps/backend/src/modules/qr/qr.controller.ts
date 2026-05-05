import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { QrService } from './qr.service';

@ApiTags('QR')
@Controller('qr')
export class QrController {
  constructor(private readonly qrService: QrService) {}

  @Get('generate/:productId')
  @ApiOperation({ summary: 'Generate QR code for a product' })
  async generateQr(@Param('productId') productId: string) {
    const qrCode = await this.qrService.generateQr(productId);
    return { productId, qrCode };
  }

  @Post('scan/:productId')
  @ApiOperation({ summary: 'Track a QR code scan' })
  async trackScan(
    @Param('productId') productId: string,
    @Body() metadata: { location?: string },
  ) {
    return this.qrService.trackScan(productId, metadata);
  }

  @Get('stats/:productId')
  @ApiOperation({ summary: 'Get scan statistics for a product' })
  async getStats(@Param('productId') productId: string) {
    return this.qrService.getScanStats(productId);
  }
}
