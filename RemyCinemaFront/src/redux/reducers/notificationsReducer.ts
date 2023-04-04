import { Toast } from "../../hooks/useNotification";
import {
  ADD_NOTIFICATION,
  DELETE_NOTIFICATION,
  SET_NOTIFICATIONS,
} from "../typesof";

interface initialStateProps {
  notifications: Toast[];
}

const initialState: initialStateProps = {
  notifications: [],
};

export default function NotificationsReducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case SET_NOTIFICATIONS: {
      return {
        ...state,
        notifications: action.payload,
      };
    }
    case ADD_NOTIFICATION: {
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    }
    case DELETE_NOTIFICATION: {
      const newNotifications = state.notifications?.filter(
        (notification) => notification.id !== action.payload
      );
      return {
        ...state,
        notifications: newNotifications,
      };
    }
    default:
      return state;
  }
}
