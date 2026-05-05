import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

export interface Creator {
  id: string;
  name: string;
  email: string;
  category: string;
  bio: string;
  location: string;
  rating: number;
  verified: boolean;
  createdAt: Date;
}

@Injectable()
export class CreatorsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Creator[]> {
    return this.prisma.creator.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string): Promise<Creator | null> {
    return this.prisma.creator.findUnique({
      where: { id },
    });
  }

  async create(data: {
    name: string;
    email: string;
    category: string;
    bio?: string;
    location?: string;
  }): Promise<Creator> {
    return this.prisma.creator.create({
      data: {
        ...data,
        bio: data.bio || '',
        location: data.location || '',
        rating: 0,
        verified: false,
      },
    });
  }

  async findByCategory(category: string): Promise<Creator[]> {
    return this.prisma.creator.findMany({
      where: { category },
      orderBy: { rating: 'desc' },
    });
  }
}
