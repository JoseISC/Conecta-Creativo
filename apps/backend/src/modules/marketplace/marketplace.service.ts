import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class MarketplaceService {
  constructor(private prisma: PrismaService) {}

  async findAllProducts() {
    return this.prisma.product.findMany({
      include: { creator: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findProductById(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
      include: { creator: true },
    });
  }

  async createProduct(data: {
    title: string;
    description: string;
    price: number;
    category: string;
    creatorId: string;
    imageUrl?: string;
  }) {
    return this.prisma.product.create({
      data,
      include: { creator: true },
    });
  }

  async searchProducts(query: string) {
    return this.prisma.product.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
          { category: { contains: query, mode: 'insensitive' } },
        ],
      },
      include: { creator: true },
    });
  }
}
