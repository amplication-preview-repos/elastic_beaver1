import * as graphql from "@nestjs/graphql";
import { SetTopBoxResolverBase } from "./base/setTopBox.resolver.base";
import { SetTopBox } from "./base/SetTopBox";
import { SetTopBoxService } from "./setTopBox.service";

@graphql.Resolver(() => SetTopBox)
export class SetTopBoxResolver extends SetTopBoxResolverBase {
  constructor(protected readonly service: SetTopBoxService) {
    super(service);
  }
}
