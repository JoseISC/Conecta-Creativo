import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class QrService {
  constructor(private prisma: PrismaService) {}

  async generateQr(productId: string): Promise<string> {
    const baseUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
    const productUrl = `${baseUrl}/producto/${productId}`;

    const qrDataUrl = await QRCode.toDataURL(productUrl, {
      width: 300,
      margin: 2,
      color: {
        dark: '#1a1a2e',
        light: '#ffffff',
      },
    });

    return qrDataUrl;
  }

  async trackScan(productId: string, metadata?: { location?: string }) {
    return this.prisma.qrScan.create({
      data: {
        productId,
        location: metadata?.location,
        scannedAt: new Date(),
      },
    });
  }

  async getScanStats(productId: string) {
    const totalScans = await this.prisma.qrScan.count({
      where: { productId },
    });

    const recentScans = await this.prisma.qrScan.findMany({
      where: { productId },
      orderBy: { scannedAt: 'desc' },
      take: 10,
    });

    return {
      productId,
      totalScans,
      recentScans,
    };
  }
}
