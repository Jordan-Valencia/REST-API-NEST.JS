import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { HomeService } from './home.service';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';
import { query } from 'express';

@Controller('/home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Post()
  create(@Body() createHomeDto: CreateHomeDto) {
    return this.homeService.create(createHomeDto);
  }

  @Get('/:num')
  findAll(@Param('num') num:number) {
    return this.homeService.findAll(num);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomeDto: UpdateHomeDto) {
    return this.homeService.update(+id, updateHomeDto);
  }

  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homeService.remove(+id);
  }
}
