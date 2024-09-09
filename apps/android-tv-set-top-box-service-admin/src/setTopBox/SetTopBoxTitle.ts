import { SetTopBox as TSetTopBox } from "../api/setTopBox/SetTopBox";

export const SETTOPBOX_TITLE_FIELD = "id";

export const SetTopBoxTitle = (record: TSetTopBox): string => {
  return record.id?.toString() || String(record.id);
};
