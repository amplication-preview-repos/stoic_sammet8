import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InvigilatorServiceBase } from "./base/invigilator.service.base";

@Injectable()
export class InvigilatorService extends InvigilatorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
