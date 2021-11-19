import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Conector, ConectorSchema } from './conector';
import { ConectorsService } from './conectors.service';
import { ConectorsController } from './conectors.controller';

@Module({
    imports:[MongooseModule.forFeature([
        {
        name: Conector.name,
        schema: ConectorSchema
        }
    ])
],
exports:[],
controllers:[ConectorsController],
providers:[ConectorsService]
})
export class ConectorsModule {}
