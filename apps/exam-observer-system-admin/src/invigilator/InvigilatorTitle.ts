import { Invigilator as TInvigilator } from "../api/invigilator/Invigilator";

export const INVIGILATOR_TITLE_FIELD = "id";

export const InvigilatorTitle = (record: TInvigilator): string => {
  return record.id?.toString() || String(record.id);
};
