import { Module } from "@nestjs/common";
import { SetTopBoxModuleBase } from "./base/setTopBox.module.base";
import { SetTopBoxService } from "./setTopBox.service";
import { SetTopBoxController } from "./setTopBox.controller";
import { SetTopBoxResolver } from "./setTopBox.resolver";

@Module({
  imports: [SetTopBoxModuleBase],
  controllers: [SetTopBoxController],
  providers: [SetTopBoxService, SetTopBoxResolver],
  exports: [SetTopBoxService],
})
export class SetTopBoxModule {}
