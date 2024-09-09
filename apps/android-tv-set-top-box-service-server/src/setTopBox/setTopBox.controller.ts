import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SetTopBoxService } from "./setTopBox.service";
import { SetTopBoxControllerBase } from "./base/setTopBox.controller.base";

@swagger.ApiTags("setTopBoxes")
@common.Controller("setTopBoxes")
export class SetTopBoxController extends SetTopBoxControllerBase {
  constructor(protected readonly service: SetTopBoxService) {
    super(service);
  }
}
