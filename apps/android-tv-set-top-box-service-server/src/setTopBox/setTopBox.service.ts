import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SetTopBoxServiceBase } from "./base/setTopBox.service.base";

@Injectable()
export class SetTopBoxService extends SetTopBoxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
