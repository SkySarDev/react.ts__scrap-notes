import { bindActionCreators } from "redux";

import { useAppDispatch } from "hooks/store/reduxHooks";
import { storeActions } from "services/modalsPopupsDialogs/actions";

export const useActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(storeActions, dispatch);
};
