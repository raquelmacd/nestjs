import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConectorsModule } from './conectors/conectors.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://devapi:devapi@cluster0.uhq08.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), ConectorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
