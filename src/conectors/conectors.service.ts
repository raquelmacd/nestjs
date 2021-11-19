import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Conector } from './conector';

@Injectable()
export class ConectorsService {
    constructor(
        @InjectModel(Conector.name) private conectorModel: Model<Conector>
    ){}

    async findAll(): Promise<Conector[]>{
        return this.conectorModel.find().exec();
    }

    async create(conector: Conector): Promise<Conector>{
        const conectorCreated = new this.conectorModel(conector);

        return conectorCreated.save();
    }

    async findById(id: string): Promise<Conector>{
        return this.conectorModel.findById(id).exec();
    }

    async update(id: string, conector : Conector): Promise<Conector>{
        return this.conectorModel.findByIdAndUpdate(id, conector).exec();
    }

    async remove(id: string) {
        const conectorRemoved = this.conectorModel.findOneAndDelete({_id: id}).exec();
 
        return  (await conectorRemoved).remove();
    }
}

