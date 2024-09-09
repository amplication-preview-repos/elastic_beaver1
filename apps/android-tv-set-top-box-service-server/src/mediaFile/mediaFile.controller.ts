import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MediaFileService } from "./mediaFile.service";
import { MediaFileControllerBase } from "./base/mediaFile.controller.base";

@swagger.ApiTags("mediaFiles")
@common.Controller("mediaFiles")
export class MediaFileController extends MediaFileControllerBase {
  constructor(protected readonly service: MediaFileService) {
    super(service);
  }
}
