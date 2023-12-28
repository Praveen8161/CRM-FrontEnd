const Notification = () => {
  return (
    <div>
      <h1 className="px-5 py-3 text-xl font-semibold">Notifications</h1>
      <div className="mx-5 space-y-2">
        <div
          className="flex flex-col gap-2 p-5 text-white bg-black rounded-lg group"
          tabIndex="1"
        >
          <div className="flex items-center justify-between cursor-pointer">
            <span> HTML </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
              className="w-3 h-2 transition-all duration-500 group-focus:-rotate-180"
            />
          </div>
          <div className="items-center invisible h-auto transition-all opacity-0 max-h-0 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>

        <div
          className="flex flex-col gap-2 p-5 text-white bg-black rounded-lg group"
          tabIndex="2"
        >
          <div className="flex items-center justify-between cursor-pointer">
            <span> CSS </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
              className="w-3 h-2 transition-all duration-500 group-focus:-rotate-180"
            />
          </div>
          <div className="items-center invisible h-auto transition-all opacity-0 max-h-0 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>

        <div
          className="flex flex-col gap-2 p-5 text-white bg-black rounded-lg group"
          tabIndex="3"
        >
          <div className="flex items-center justify-between cursor-pointer">
            <span> JAVASCRIPT </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
              className="w-3 h-2 transition-all duration-500 group-focus:-rotate-180"
            />
          </div>
          <div className="items-center invisible h-auto transition-all opacity-0 max-h-0 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
