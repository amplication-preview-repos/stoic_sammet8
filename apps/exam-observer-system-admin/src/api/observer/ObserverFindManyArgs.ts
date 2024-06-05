import { ObserverWhereInput } from "./ObserverWhereInput";
import { ObserverOrderByInput } from "./ObserverOrderByInput";

export type ObserverFindManyArgs = {
  where?: ObserverWhereInput;
  orderBy?: Array<ObserverOrderByInput>;
  skip?: number;
  take?: number;
};
