import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SequelizeOptionsFactory } from '@nestjs/sequelize';
import { SequelizeModuleOptions } from '@nestjs/sequelize/dist';

@Injectable()
export class PersistenceConfiguration implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createSequelizeOptions(): SequelizeModuleOptions {
    console.log('host', this.configService.get<string>('host'));
    console.log('portdb', this.configService.get<string>('portdb'));
    console.log('username', this.configService.get<string>('username'));
    console.log('password', this.configService.get<string>('password'));
    console.log('database', this.configService.get<string>('database'));
    return {
      dialect: 'postgres',
      host: this.configService.get<string>('host'),
      port: +this.configService.get<string>('portdb'),
      username: 'postgres',
      password: this.configService.get<string>('password'),
      database: this.configService.get<string>('database'),
      autoLoadModels: true,
      synchronize: true,
    };
  }
}
