import { Observer as TObserver } from "../api/observer/Observer";

export const OBSERVER_TITLE_FIELD = "id";

export const ObserverTitle = (record: TObserver): string => {
  return record.id?.toString() || String(record.id);
};
