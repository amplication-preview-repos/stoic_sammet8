import * as graphql from "@nestjs/graphql";
import { InvigilatorResolverBase } from "./base/invigilator.resolver.base";
import { Invigilator } from "./base/Invigilator";
import { InvigilatorService } from "./invigilator.service";

@graphql.Resolver(() => Invigilator)
export class InvigilatorResolver extends InvigilatorResolverBase {
  constructor(protected readonly service: InvigilatorService) {
    super(service);
  }
}
