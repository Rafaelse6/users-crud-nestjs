import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://<username>:password@cluster0.fotdkvb.mongodb.net/',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
