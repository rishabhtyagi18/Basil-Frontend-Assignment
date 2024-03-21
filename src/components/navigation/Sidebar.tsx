import React from "react";
import HomeIcon from "../icons/HomeIcon";
import Logo from "../Logo";
import { Link, useLocation } from "react-router-dom";
import MapIcon from "../icons/MapIcon";
import OrderIcon from "../icons/OrderIcon";
import PeopleIcon from "../icons/PeopleIcon";
import RestaurantIcon from "../icons/RestaurantIcon";
import DiscountIcon from "../icons/DiscountIcon";
import BillIcon from "../icons/BillIcon";
import { LogOut, Settings } from "lucide-react";

interface IProps {
  showFullSidebar: boolean;
  sidebarWidthInPixels: number;
  toggleSidebarWidth: () => void;
}

interface MenuItem {
  id: number;
  label: string;
  icon: React.ReactNode;
  link: string;
}

const menuItems: MenuItem[] = [
  { id: 1, label: "Dashboard", icon: <HomeIcon />, link: "/" },
  { id: 2, label: "Transport", icon: <MapIcon />, link: "/transport" },
  { id: 3, label: "Orders", icon: <OrderIcon />, link: "/orders" },
  { id: 4, label: "Users", icon: <PeopleIcon />, link: "/users" },
  {
    id: 5,
    label: "Restaurants",
    icon: <RestaurantIcon />,
    link: "/restaurants",
  },
  { id: 6, label: "Bills", icon: <BillIcon />, link: "/bills" },
  { id: 7, label: "Offers", icon: <DiscountIcon />, link: "/offers" },
];

export default function Sidebar(props: IProps) {
  const { sidebarWidthInPixels } = props;
  const { pathname } = useLocation();

  const activeMenu = menuItems.find((menu) => menu.link === pathname);

  const getNavItemClasses = (menu: MenuItem) =>
    `flex items-center cursor-pointer hover:bg-blue-50 rounded w-full overflow-hidden whitespace-nowrap ${
      activeMenu && activeMenu.id === menu.id
        ? "bg-[#377DFF] text-white hover:bg-[#377DFF] text-white"
        : ""
    }`;

  return (
    <aside
      id="app-sidebar"
      style={{
        width: `${sidebarWidthInPixels}px`,
        transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s",
      }}
      className="bg-light fixed left-0 top-0 z-50 flex h-full flex-col justify-between overflow-x-hidden bg-white px-2 py-6 shadow-md"
    >
      <div className="flex flex-col">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4 pl-1">
            <Logo />
          </div>
        </div>
        <div className="my-4 flex flex-col items-start">
          {menuItems.map(({ id, label, link, icon: Icon }) => {
            const menuItem: MenuItem = { id, label, link, icon: Icon || "" };
            const classes = getNavItemClasses(menuItem);

            return (
              <div className={classes} key={id}>
                <Link to={link} className="w-full">
                  <div className="m-4 flex h-full w-full items-center">
                    <div className="flex w-12 items-center justify-center">
                      {Icon &&
                        typeof Icon === "object" &&
                        React.isValidElement(Icon) &&
                        Icon}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <Settings className="w-12 text-[#333333]" />
          <LogOut className="w-12 text-[#333333]" />
        </div>
      </div>
    </aside>
  );
}
