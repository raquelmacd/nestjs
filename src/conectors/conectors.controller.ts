import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Conector } from './conector';
import { ConectorsService } from './conectors.service';

@Controller('conectors')
export class ConectorsController {
    constructor(
        private readonly conectorsService : ConectorsService
    ){}

    @Get()
    async findall(): Promise<Conector[]>{
        return this.conectorsService.findAll();
    }

    @Post()
    async create(@Body() conector: Conector): Promise<Conector>{
        return this.conectorsService.create(conector);
    }

    @Get(':id')
    async findById(@Param('id') id:string): Promise<Conector>{
        return this.conectorsService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() conectorUpdated: Conector): Promise<Conector>{
        return this.conectorsService.update(id,conectorUpdated);
    }

    @Delete(':id')
    async delete(@Param('id') id:string): Promise<Conector>{
        return this.conectorsService.remove(id);
    }
}
