import { Toast } from "../../hooks/useNotification";
import {
  ADD_NOTIFICATION,
  DELETE_NOTIFICATION,
  SET_NOTIFICATIONS,
} from "../typesof";

export const addNotification = (notification: Toast) => ({
  type: ADD_NOTIFICATION,
  payload: notification,
});
export const deleteNotification = (id: string) => ({
  type: DELETE_NOTIFICATION,
  payload: id,
});
export const cleanNotifications = () => ({
  type: SET_NOTIFICATIONS,
  payload: [],
});
