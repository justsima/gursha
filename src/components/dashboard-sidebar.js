import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { NavItem } from "./nav-item";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import PaymentIcon from "@mui/icons-material/Payment";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import PeopleIcon from "@mui/icons-material/People";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import QrCode2Icon from "@mui/icons-material/QrCode2";
const donators= [
  {
    href: "/dashboard",
    icon: <DashboardIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/donatenow",
    icon: <QrCode2Icon fontSize="small" />,
    title: "Donate Now",
  },
  {
    href: "/charitieinfo",
    icon: <QrCode2Icon fontSize="small" />,
    title: "Charities Informations",
  },
  {
    href: "/history",
    icon: <BookmarkBorderIcon fontSize="small" />,
    title: "Previous Donations",
  }
];
const charities = [
  {
    href: "/donations",
    icon: <InventoryIcon />,
    title: "Donations",
  },
  {
    title: "Donators",
    icon: <InventoryIcon />,
    href: "/donators",
  },
  {
    title: "Request",
    icon: <AddShoppingCartIcon />,
    href: "/request",
  },
];
// const order = [
//   {
//     href: "/Order",
//     icon: <BookmarkBorderIcon />,
//     title: "Orders",
//   },
//   {
//     href: "/PaymentView",
//     icon: <PaymentIcon />,
//     title: "Payment History",
//   },
//   {
//     href: "/PaymentList",
//     icon: <PaymentIcon />,
//     title: "Payment List",
//   },
//   {
//     href: "/gift",
//     icon: <CardGiftcardIcon />,
//     title: "Gift",
//   },
// ];
// const menuList2 = [
//   {
//     href: "/AddLocation",
//     icon: <AddLocationAltIcon />,
//     title: "Add Location",
//   },
//   {
//     href: "/ViewLocation",
//     icon: <EditLocationIcon />,
//     title: "View Location",
//   },
// ];
// const menuList3 = [
//   {
//     href: "/ViewUsers",
//     icon: <PeopleIcon />,
//     title: "View Users",
//   },
// ];
// const menuList4 = [
//   {
//     href: "/dashboard/Location",
//     icon: <LoyaltyIcon />,
//     title: "Add Membership Type",
//   },
//   {
//     href: "/dashboard/Location",
//     icon: <GroupAddIcon />,
//     title: "Add Membership",
//   },
//   {
//     href: "/dashboard/LocationList",
//     icon: <PeopleIcon />,
//     title: "View Membership",
//   },
//   {
//     href: "/dashboard/LocationList",
//     icon: <MilitaryTechIcon />,
//     title: "Membership Status",
//   },
// ];
// const RegisterUser = [
//   {
//     href: "/dashboard/Location",
//     icon: <AdminPanelSettingsIcon />,
//     title: "Admin",
//   },
//   {
//     href: "/dashboard/registerguest",
//     icon: <AddIcon fontSize="small" />,
//     title: "Add Admin",
//   },
// ];

export const DashboardSidebar = (props) => {
  const [expanded, setExpanded] = useState(false);
  const { open, onClose } = props;
  // const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // useEffect(
  //   () => {
  //     if (!router.isReady) {
  //       return;
  //     }
  //
  //     if (open) {
  //       onClose?.();
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [router.asPath]
  // );

  const [isExpand, setIsExpand] = useState(false);

  const dropDownClickHandler = () => {
    setIsExpand((p) => !p);
  };

  // const token = Cookies.get("token");
  const [user, setUser] = useState({});
  // useEffect(() => {
  //   jwt.verify(token, "PROPLAST", (err, decoded) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       setUser(decoded);
  //       console.log("asdcasdc");
  //     }
  //   });
  // }, []);

  const isSuperAdmin = user.role === "Super Admin" ? true : false;
  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          //  backgroundColor: "#7F675B"
        }}
      >
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pt: 5,
            }}
          >
            <a href="/dashboard">
              {/* <h1>LOGO</h1> */}
              <img className="w-[5rem] h-[5rem]" src='/logo.png' alt="logo" />
              {/* <Logo
                  sx={{
                    
                  }}
                  href='/logo.svg'
                /> */}
            </a>
          </Box>
        </div>
        <Divider sx={{ borderColor: "#E5E7EB", my: 2, opacity: ".2" }} />

        <Box sx={{ flexGrow: 1 }}>
          {/* <Typography variant="menuTitle">GENERAL</Typography> */}
          {donators.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        
      
      </Box>
      
      <Divider sx={{ borderColor: "#E5E7EB", my: 2, opacity: ".2" }} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="menuTitle">Charities</Typography>
        {charities.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            href={item.href}
            title={item.title}
          />
        ))}
      </Box>
      {/* <Box sx={{ flexGrow: 1 }}>
              <Typography variant="menuTitle">ACCOUNTS</Typography>

              {RegisterUser.map((item,index) => (
                  <NavItem key={index} icon={item.icon} href={item.href} title={item.title} />
              ))}
            </Box> */}
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
