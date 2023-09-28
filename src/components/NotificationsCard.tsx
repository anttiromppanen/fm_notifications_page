import useNotificationsStore from "../store/useNotificationsStore";
import Notification from "./Notification";
import NotificationsTopBar from "./NotificationsTopBar";

function NotificationsCard() {
  const notificationsState = useNotificationsStore(
    (state) => state.notifications,
  );

  return (
    <div
      className="
      h-full w-full max-w-[730px] bg-userCardBgColor px-4 py-6 shadow-2xl shadow-slate-200
      md:mt-14 md:h-fit md:rounded-xl md:px-8 md:py-9"
    >
      <NotificationsTopBar />
      <div className="mt-6 flex flex-col gap-y-4">
        {notificationsState.map((item) => (
          <Notification item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default NotificationsCard;
