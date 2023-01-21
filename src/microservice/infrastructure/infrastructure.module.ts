import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PersistenceConfiguration } from './configuration/persistence.configuration';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useClass: PersistenceConfiguration,
    }),
    PersistenceModule,
  ],
  exports: [PersistenceModule],
})
export class InfrastructureModule {}
