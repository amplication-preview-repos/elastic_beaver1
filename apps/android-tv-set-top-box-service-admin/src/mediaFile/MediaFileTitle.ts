import { MediaFile as TMediaFile } from "../api/mediaFile/MediaFile";

export const MEDIAFILE_TITLE_FIELD = "id";

export const MediaFileTitle = (record: TMediaFile): string => {
  return record.id?.toString() || String(record.id);
};
