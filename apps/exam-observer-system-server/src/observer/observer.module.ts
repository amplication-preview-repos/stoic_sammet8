import { Module } from "@nestjs/common";
import { ObserverModuleBase } from "./base/observer.module.base";
import { ObserverService } from "./observer.service";
import { ObserverController } from "./observer.controller";
import { ObserverResolver } from "./observer.resolver";

@Module({
  imports: [ObserverModuleBase],
  controllers: [ObserverController],
  providers: [ObserverService, ObserverResolver],
  exports: [ObserverService],
})
export class ObserverModule {}
