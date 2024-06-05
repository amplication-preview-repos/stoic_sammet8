import { Module } from "@nestjs/common";
import { InvigilatorModuleBase } from "./base/invigilator.module.base";
import { InvigilatorService } from "./invigilator.service";
import { InvigilatorController } from "./invigilator.controller";
import { InvigilatorResolver } from "./invigilator.resolver";

@Module({
  imports: [InvigilatorModuleBase],
  controllers: [InvigilatorController],
  providers: [InvigilatorService, InvigilatorResolver],
  exports: [InvigilatorService],
})
export class InvigilatorModule {}
