import { create } from "zustand";

import data from "../data/notifications.json";
import NotificationData from "../types/NotificationTypes";

interface Store {
  notifications: NotificationData[];
}

interface Actions {
  countUnreadNotifications: () => number;
  setNotificationReadById: (id: number) => void;
  setAllNotificationsRead: () => void;
}

const useNotificationsStore = create<Store & Actions>((set, get) => ({
  notifications: data as NotificationData[],
  countUnreadNotifications: () =>
    get().notifications.filter((item) => !item.notification.read).length,
  setNotificationReadById: (id: number) => {
    const notifications = get().notifications.map((item) => {
      if (item.id === id) {
        return { ...item, notification: { ...item.notification, read: true } };
      }
      return item;
    });
    set({ notifications });
  },
  setAllNotificationsRead: () => {
    const notifications = get().notifications.map((item) => ({
      ...item,
      notification: { ...item.notification, read: true },
    }));
    set({ notifications });
  },
}));

export default useNotificationsStore;
