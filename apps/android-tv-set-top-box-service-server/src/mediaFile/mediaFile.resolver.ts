import * as graphql from "@nestjs/graphql";
import { MediaFileResolverBase } from "./base/mediaFile.resolver.base";
import { MediaFile } from "./base/MediaFile";
import { MediaFileService } from "./mediaFile.service";

@graphql.Resolver(() => MediaFile)
export class MediaFileResolver extends MediaFileResolverBase {
  constructor(protected readonly service: MediaFileService) {
    super(service);
  }
}
