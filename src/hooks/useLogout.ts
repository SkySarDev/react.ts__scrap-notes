import { useAppDispatch } from "hooks/store/reduxHooks";
import { removeToken } from "utils/tokensManager";
import { usersApi } from "services/api/usersApi";
import { noteCategoriesApi } from "services/api/noteCategoriesApi";
import { noteItemsApi } from "services/api/noteItemsApi";

export const useLogout = () => {
  const dispatch = useAppDispatch();

  return () => {
    removeToken();
    dispatch(usersApi.util.resetApiState());
    dispatch(noteCategoriesApi.util.resetApiState());
    dispatch(noteItemsApi.util.resetApiState());
  };
};
