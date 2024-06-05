import * as graphql from "@nestjs/graphql";
import { ObserverResolverBase } from "./base/observer.resolver.base";
import { Observer } from "./base/Observer";
import { ObserverService } from "./observer.service";

@graphql.Resolver(() => Observer)
export class ObserverResolver extends ObserverResolverBase {
  constructor(protected readonly service: ObserverService) {
    super(service);
  }
}
