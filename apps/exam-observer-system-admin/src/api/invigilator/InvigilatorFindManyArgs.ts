import { InvigilatorWhereInput } from "./InvigilatorWhereInput";
import { InvigilatorOrderByInput } from "./InvigilatorOrderByInput";

export type InvigilatorFindManyArgs = {
  where?: InvigilatorWhereInput;
  orderBy?: Array<InvigilatorOrderByInput>;
  skip?: number;
  take?: number;
};
