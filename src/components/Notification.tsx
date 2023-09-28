import useNotificationsStore from "../store/useNotificationsStore";
import NotificationData, { NotificationType } from "../types/NotificationTypes";

interface Props {
  item: NotificationData;
}

type TextSelectorReturnType = { text: string; target?: string };

const textSelectorByNotificationType = (
  item: NotificationType,
): TextSelectorReturnType => {
  switch (item.type) {
    case "comment":
      return { text: "commented on your picture" };
    case "follow":
      return { text: "followed you" };
    case "joinedGroup":
      return { text: "has joined your group", target: item.groupJoined };
    case "privateMessage":
      return { text: "sent you a private message" };
    case "reaction":
      return {
        text: "reacted to your recent post",
        target: item.userPostReactedTo,
      };
    case "leave":
      return { text: "left the group", target: item.groupLeftFrom };
    default:
      return { text: "" };
  }
};

function Notification({ item }: Props) {
  const setNotificationReadById = useNotificationsStore(
    (state) => state.setNotificationReadById,
  );
  const { id, user, notification } = item;
  const actionText = textSelectorByNotificationType(notification);

  const actionTargetStyles = () => {
    if (notification.type === "joinedGroup" || notification.type === "leave") {
      return "text-sm md:text-base font-bold text-blue-700 ml-1";
    }
    return "text-sm md:text-base font-bold ml-1 hover:text-blue-700";
  };

  const handleClick = () => setNotificationReadById(id);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        flex w-full justify-between rounded-lg bg-userNotificationReadBgColor p-4 text-left
        ${!notification.read && "!bg-userNotificationNotReadBgColor"}`}
    >
      <div className="flex">
        <img src={user.profilePicture} alt="Profile" className="h-10 w-10" />
        <div className="ml-3">
          <p className="text-sm text-userBoldTextColor md:text-base">
            <span className="font-bold text-userUserTextColor hover:text-blue-700">
              {user.name}{" "}
            </span>
            {actionText.text}
            {actionText.target && (
              <span className={actionTargetStyles()}>{actionText.target}</span>
            )}
            {!notification.read && (
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-red-600" />
            )}
          </p>
          <p className="text-sm text-userTextColor md:text-base">
            {notification.timestamp}
          </p>
          {notification.type === "privateMessage" && (
            <div
              className="
            border-userLightGrayishBlue2 hover:bg-userLightGrayishBlue1 mt-2 rounded-md border p-3 text-sm
            text-userBoldTextColor md:text-base"
            >
              <p>{notification.messageBody}</p>
            </div>
          )}
        </div>
      </div>
      {notification.type === "comment" && (
        <img
          src={notification.pictureReactedTo}
          alt=""
          className="ml-4 h-[41px] w-[41px] rounded-md hover:outline hover:outline-blue-100"
        />
      )}
    </button>
  );
}

export default Notification;
