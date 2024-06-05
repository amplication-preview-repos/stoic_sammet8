import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ObserverServiceBase } from "./base/observer.service.base";

@Injectable()
export class ObserverService extends ObserverServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
