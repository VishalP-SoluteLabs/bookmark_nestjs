import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { BookMark } from './bookmark/bookmark.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'bookmark_db',
      entities: [User, BookMark],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
