---
layout: post
title: "API REST con NestJS: Mejores prácticas"
description: "Aprende a desarrollar APIs REST robustas y escalables utilizando NestJS, el framework Node.js más completo."
date: 2025-03-02
categories: [Tutoriales, Backend]
tags: [NestJS, Node.js, API, REST]
author: Christiam Rey
---

NestJS es un framework Node.js que ha revolucionado el desarrollo de aplicaciones backend. Su arquitectura basada en módulos y su integración con TypeScript lo convierten en una excelente opción para proyectos enterprise.

## ¿Por qué NestJS?

NestJS combina lo mejor de varios mundos:

- **Arquitectura modular**: Organiza tu código en módulos reutilizables
- **TypeScript**: Tipado estático para mayor seguridad
- **Inyección de dependencias**: Código más limpio y testeable
- **Decoradores**: Sintaxis declarativa y legible
- **Compatibilidad**: Integración con Express o Fastify

## Estructura de un Proyecto NestJS

```
src/
├── modules/
│   ├── users/
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── users.module.ts
│   │   └── dto/
│   └── products/
├── common/
│   ├── decorators/
│   ├── filters/
│   └── guards/
├── config/
└── app.module.ts
```

## Ejemplo: Creando un CRUD

### 1. Definir el DTO

```typescript
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  @IsOptional()
  description?: string;
}
```

### 2. Crear el Servicio

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async create(dto: CreateProductDto): Promise<Product> {
    const product = this.productsRepository.create(dto);
    return this.productsRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productsRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Producto ${id} no encontrado`);
    }
    return product;
  }
}
```

### 3. Crear el Controlador

```typescript
import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }
}
```

## Autenticación con JWT

Para proteger tus endpoints, puedes implementar autenticación JWT:

```typescript
import { AuthGuard } from '@nestjs/passport';

@Controller('protected')
export class ProtectedController {
  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return { message: 'Ruta protegida' };
  }
}
```

## Conclusión

NestJS ofrece una arquitectura sólida para desarrollar APIs REST profesionales. Su curva de aprendizaje es suave si ya conoces TypeScript, y la comunidad crece constantemente.

¿Necesitas ayuda implementando tu API? Contáctanos.
