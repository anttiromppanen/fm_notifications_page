import useNotificationsStore from "../store/useNotificationsStore";

function NotificationsTopBar() {
  const numOfUnreadNotifications = useNotificationsStore((state) =>
    state.countUnreadNotifications(),
  );
  const setAllNotificationsRead = useNotificationsStore(
    (state) => state.setAllNotificationsRead,
  );

  const handleSetAllNotificationsRead = () => setAllNotificationsRead();

  return (
    <div className="flex justify-between">
      <div className="flex select-none items-center">
        <p className="mr-3 text-xl font-bold text-userUserTextColor">
          Notifications
        </p>
        {numOfUnreadNotifications !== 0 && (
          <div className="flex items-center justify-center rounded-lg bg-userLinkHoverColor px-3 py-[2px] text-userMainBgColor">
            <p>{numOfUnreadNotifications}</p>
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={handleSetAllNotificationsRead}
        className="w-fit hover:text-blue-700"
      >
        Mark all as read
      </button>
    </div>
  );
}

export default NotificationsTopBar;
