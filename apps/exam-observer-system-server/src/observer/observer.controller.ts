import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ObserverService } from "./observer.service";
import { ObserverControllerBase } from "./base/observer.controller.base";

@swagger.ApiTags("observers")
@common.Controller("observers")
export class ObserverController extends ObserverControllerBase {
  constructor(protected readonly service: ObserverService) {
    super(service);
  }
}
