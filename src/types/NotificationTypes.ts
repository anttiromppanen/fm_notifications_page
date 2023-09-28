interface User {
  name: string;
  profilePicture: string;
}

export type NotificationTypes =
  | "reaction"
  | "follow"
  | "joinedGroup"
  | "privateMessage"
  | "comment"
  | "reaction"
  | "leave";

export interface NotificationType {
  type: NotificationTypes;
  userPostType?: string;
  userPostReactedTo?: string;
  groupJoined?: string;
  messageBody?: string;
  pictureReactedTo?: string;
  groupLeftFrom?: string;
  timestamp: string;
  read: boolean;
}

interface NotificationData {
  id: number;
  user: User;
  notification: NotificationType;
}

export default NotificationData;
