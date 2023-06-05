import * as insert from "./insert";
import * as get from "./get";
import * as update from "./update";
import * as remove from "./delete";

export const UsersControllers = {
  ...insert,
  ...get,
  ...update,
  ...remove
};
