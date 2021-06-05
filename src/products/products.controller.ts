import {Body, Controller, Get, Post, Param } from '@nestjs/common';
import {CreateProductDto} from './dto/create-product.dto';

@Controller('products')
export class ProductsController {

  @Get()
  index() {
    return 'index qwery'
  }

  @Get(':id')
  show(@Param('id') id:string):string {
    return 'show ' + id
    console.log('asd');
  }

  @Post()
  store(@Body() createProductDto: CreateProductDto):string {
    return `title: ${createProductDto.title} price:  ${createProductDto.price}`
  }

}
