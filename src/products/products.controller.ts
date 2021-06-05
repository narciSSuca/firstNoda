import {Body, Controller, Delete, Get,
        Post, Param, Put, Redirect,
        Header, HttpCode, HttpStatus } from '@nestjs/common';
import {CreateProductDto} from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto';

@Controller('products')
export class ProductsController {

  @Get()
  index():string {
    return 'index qwery'
  }

  @Get(':id')
  show(@Param('id') id:string):string {
    return 'show ' + id
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  store(@Body() createProductDto: CreateProductDto):string {
    return `title: ${createProductDto.title} price:  ${createProductDto.price}`
  }

  @Delete(':id')
  destroy(@Param('id') id:string):string {
    return `product ${id} remove`
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string):string {
    return `product ${id} update`
  }
}
