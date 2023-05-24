import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  menuClasses,
  type MenuItemStyles,
} from "react-pro-sidebar";
import React, { useState } from "react";
import Link from "next/link";
import { SidebarHeader } from "./SidebarHeader";

type Theme = "light" | "dark";

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#0098e5",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);
  const [rtl, setRtl] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  // handle on RTL change event
  const handleRTLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRtl(e.target.checked);
  };

  // handle on theme change event
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  // handle on image change event
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasImage(e.target.checked);
  };

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.disabled`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(
              themes[theme].menu.menuContent,
              hasImage && !collapsed ? 0.4 : 1,
            )
          : "transparent",
    }),
    button: {
      "&.disabled": {
        color: themes[theme].menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: hexToRgba(
          themes[theme].menu.hover.backgroundColor,
          hasImage ? 0.8 : 1,
        ),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        direction: rtl ? "rtl" : "ltr",
      }}
    >
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        rtl={rtl}
        backgroundColor={hexToRgba(
          themes[theme].sidebar.backgroundColor,
          hasImage ? 0.9 : 1,
        )}
        rootStyles={{
          color: themes[theme].sidebar.color,
        }}
      >
        <SidebarHeader
          rtl={rtl}
          style={{ marginBottom: "24px", marginTop: "16px" }}
        />
        <Menu menuItemStyles={menuItemStyles}>
          <div className="px-4 py-4  text-sm font-semibold">ACTIVITY</div>
          <MenuItem component={<Link href="/authorizations" />}>
            Authorizations
          </MenuItem>
          <MenuItem component={<Link href="/reservations" />}>
            Reservations
          </MenuItem>
          <MenuItem component={<Link href="/charging-sessions" />}>
            Charging Sessions
          </MenuItem>
          <MenuItem component={<Link href="/transactions" />}>
            Transactions
          </MenuItem>
          <div className="px-4 py-4 text-sm  font-semibold">CRM</div>
          <MenuItem component={<Link href="/users" />}>Users</MenuItem>
          <MenuItem component={<Link href="/rfid-tags" />}>RFID Tags</MenuItem>
          <MenuItem component={<Link href="/receipts" />}>Receipts</MenuItem>
          <div className="px-4 py-4  text-sm font-semibold">ASSETS</div>
          <MenuItem component={<Link href="/charging-points" />}>
            Charging Points
          </MenuItem>
          <MenuItem component={<Link href="/charging-zone" />}>
            Charging Zone
          </MenuItem>
          <MenuItem component={<Link href="/locations" />}>Locations</MenuItem>
          <MenuItem component={<Link href="/locations-images" />}>
            Locations Images
          </MenuItem>
          <MenuItem component={<Link href="/cp-notice" />}>CP Notice</MenuItem>
          <MenuItem component={<Link href="/cp-templetes" />}>
            CP Templetes
          </MenuItem>
          <div className="px-4 py-4  text-sm font-semibold">PARTNERS</div>
          <MenuItem component={<Link href="/partners-contracts" />}>
            Partners contracts
          </MenuItem>
          <MenuItem component={<Link href="/partners-invites" />}>
            Partners invites
          </MenuItem>
          <MenuItem component={<Link href="/revenue-expenses" />}>
            Revenue & Expenses
          </MenuItem>
          <MenuItem component={<Link href="/settltement-reports" />}>
            Settlenent Reports
          </MenuItem>
          <div className="px-4 py-4 text-sm  font-semibold">
            TARIFFS & VOUCHERS
          </div>
          <MenuItem component={<Link href="/traiffs-groups" />}>
            Tariffs Groups
          </MenuItem>
          <MenuItem component={<Link href="/traiffs" />}>Tariffs</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;
