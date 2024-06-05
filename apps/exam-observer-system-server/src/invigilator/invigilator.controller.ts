import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InvigilatorService } from "./invigilator.service";
import { InvigilatorControllerBase } from "./base/invigilator.controller.base";

@swagger.ApiTags("invigilators")
@common.Controller("invigilators")
export class InvigilatorController extends InvigilatorControllerBase {
  constructor(protected readonly service: InvigilatorService) {
    super(service);
  }
}
