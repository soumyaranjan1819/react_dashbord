import UserProfileIcon from "../assets/icons/userProfile.svg";
import DarkUserProfileIcon from "../assets/icons/IdentificationBadge_D.svg";
import AccountIcon from "../assets/icons/account.svg";
import DarkAccountIcon from "../assets/icons/IdentificationCard_D.svg";
import CorporateIcon from "../assets/icons/corporate.svg";
import DarkCorporateIcon from "../assets/icons/UsersThree_D.svg";
import BlogIcon from "../assets/icons/blog.svg";
import DarkBlogIcon from "../assets/icons/Notebook_D.svg";
import SocialIcon from "../assets/icons/social.svg";
import DarkSocialIcon from "../assets/icons/ChatsTeardrop_D.svg";
import Natali from "../assets/icons/Natali.svg";
import Drew from "../assets/icons/Drew.svg";
import Orlando from "../assets/icons/Orlando.svg";
import Andi from "../assets/icons/Andi.svg";
import Kate from "../assets/icons/Kate.svg";
import Koray from "../assets/icons/Koray.svg";
import BugIcon from "../assets/icons/Bug.svg";
import UserIcon from "../assets/icons/User.svg";
import SubscribedIcon from "../assets/icons/Broadcast.svg";
import User1 from "../assets/icons/3D05.svg";
import User2 from "../assets/icons/3D08.svg";
import User3 from "../assets/icons/Female05.svg";
import User4 from "../assets/icons/Male07.svg";
import User5 from "../assets/icons/Male11.svg";
import DarkUser1 from "../assets/icons/3D05_D.svg";
import DarkUser2 from "../assets/icons/3D08_D.svg";
import DarkUser3 from "../assets/icons/Female05_D.svg";
import DarkUser4 from "../assets/icons/Male07_D.svg";
import DarkUser5 from "../assets/icons/Male11_D.svg";

import {
  PagesItems,
  ProjectionsVsActualsItems,
  RevenueGraphDataItems,
  RevenueByLocationItem,
  TopSellingProductsItems,
  TotalSalesItems,
  StatsDataItem,
  Order,
} from "../types";

export const pages: PagesItems[] = [
  {
    id: "userProfile",
    label: "User Profile",
    icon: UserProfileIcon,
    iconDark: DarkUserProfileIcon,
    subItems: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
  },
  { id: "account", label: "Account", icon: AccountIcon, iconDark: DarkAccountIcon, subItems: [] },
  { id: "corporate", label: "Corporate", icon: CorporateIcon, iconDark: DarkCorporateIcon, subItems: [] },
  { id: "blog", label: "Blog", icon: BlogIcon, iconDark: DarkBlogIcon, subItems: [] },
  { id: "social", label: "Social", icon: SocialIcon, iconDark: DarkSocialIcon, subItems: [] },
];

export const contactsData = [
  { id: 1, name: "Natali Craig", icon: Natali },
  { id: 2, name: "Drew Cano", icon: Drew },
  { id: 3, name: "Orlando Diggs", icon: Orlando },
  { id: 4, name: "Andi Lane", icon: Andi },
  { id: 5, name: "Kate Morrison", icon: Kate },
  { id: 6, name: "Koray Okumus", icon: Koray },
];

export const activityData = [
  {
    id: 1,
    message: "You have a bug that needs to be resolved",
    time: "Just now",
    icon: User1,
    iconDark : DarkUser1
  },
  {
    id: 2,
    message: "Released a new version",
    time: "59 minutes ago",
    icon: User2,
    iconDark: DarkUser2
  },
  {
    id: 3,
    message: "Submitted a bug",
    time: "12 hours ago",
    icon: User3,
    iconDark: DarkUser3
  },
  {
    id: 4,
    message: "Modified A data in Page X",
    time: "Today, 11:59 AM",
    icon: User4,
    iconDark: DarkUser4
  },
  {
    id: 5,
    message: "Deleted a page in Project X",
    time: "Feb 2, 2023",
    icon: User5,
    iconDark: DarkUser5
  },
];

export const notificationsData = [
  {
    id: 1,
    icon: BugIcon,
    message: "You have a bug that needs to be resolved",
    time: "Just now",
  },
  {
    id: 2,
    icon: UserIcon,
    message: "New user registered",
    time: "59 minutes ago",
  },
  {
    id: 3,
    icon: BugIcon,
    message: "You have a bug that needs to be resolved",
    time: "12 hours ago",
  },
  {
    id: 4,
    icon: SubscribedIcon,
    message: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];

export const statsData: StatsDataItem[] = [
  {
    id: 1,
    title: "Customers",
    value: "3,781",
    growth: "+11.01%",
    backgroundColor: "#E3F5FF",
    backgroundColorDark: "#E3F5FF"
  },
  {
    id: 2,
    title: "Orders",
    value: "1,219",
    growth: "-0.03%",
    backgroundColor: "#F7F9FB",
    backgroundColorDark: "rgba(255, 255, 255, 0.05)"
  },
  {
    id: 3,
    title: "Revenue",
    value: "$695",
    growth: "+15.03%",
    backgroundColor: "#F7F9FB",
    backgroundColorDark: "rgba(255, 255, 255, 0.05)"
  },
  {
    id: 4,
    title: "Growth",
    value: "30.1%",
    growth: "+6.08%",
    backgroundColor: "#E5ECF6",
    backgroundColorDark: "#E5ECF6",
  },
];

export const projectionsVsActuals: ProjectionsVsActualsItems[] = [
  { month: "Jan", value: 20 },
  { month: "Feb", value: 25 },
  { month: "Mar", value: 28 },
  { month: "Apr", value: 23 },
  { month: "May", value: 26 },
  { month: "Jun", value: 21 },
];

export const revenueGraphData: RevenueGraphDataItems[] = [
  { month: "Jan", currentWeek: 58211, previousWeek: 68768 },
  { month: "Feb", currentWeek: 61000, previousWeek: 65000 },
  { month: "Mar", currentWeek: 59000, previousWeek: 63000 },
  { month: "Apr", currentWeek: 60000, previousWeek: 66000 },
  { month: "May", currentWeek: 57000, previousWeek: 64000 },
  { month: "Jun", currentWeek: 62000, previousWeek: 67000 },
];

export const revenueByLocation: RevenueByLocationItem[] = [
  { location: "New York", revenue: 72000 },
  { location: "San Francisco", revenue: 39000 },
  { location: "Sydney", revenue: 25000 },
  { location: "Singapore", revenue: 61000 },
];

export const topSellingProducts: TopSellingProductsItems[] = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
  { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
  { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
];

export const salesData = {
  labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
  datasets: [
    {
      label: "Total Sales",
      data: [300.56, 135.18, 154.02, 48.96],
      backgroundColor: [
        "rgba(198, 199, 248, 1)",
        "rgba(186, 237, 189, 1)",
        "rgba(149, 164, 252, 1)",
        "rgba(177, 227, 255, 1)",
      ],
      hoverOffset: 8,
      borderWidth: 4,
    },
  ],
};

export const totalSales: TotalSalesItems[] = [
  { type: "Direct", amount: 300.56, percentage: 38.6 },
  { type: "Affiliate", amount: 135.18, percentage: 17.3 },
  { type: "Sponsored", amount: 154.02, percentage: 22.7 },
  { type: "E-mail", amount: 48.96, percentage: 12.4 },
];

export const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Actuals',
      data: [18, 22, 19, 25, 17, 22], 
      backgroundColor: 'rgba(168, 197, 218, 1)',
      barThickness: 20, 
      borderRadius: { topRight: 0, topLeft: 0 },
    },
    {
      label: 'Projections',
      data: [22, 25, 23, 28, 19, 27],
      backgroundColor: 'rgba(168, 197, 218, 0.5)',
      barThickness: 20, 
      borderRadius: { topRight: 4, topLeft: 4 },
    },
  ],
};

export const orders: Order[] = [
  {
    id: "#CM9801",
    user: "Natali Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    statusColor: "#8A8CD9",
    icon: Natali,
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    statusColor: "#4AA785",
    icon: Kate,
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusColor: "#59A8D4",
    icon: Drew,
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusColor: "#FFC555",
    icon: Orlando,
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    statusColor: "#1C1C1C66",
    icon: Andi,
  },
  {
    id: "#CM9806",
    user: "Natali Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    statusColor: "#8A8CD9",
    icon: Natali,
  },
  {
    id: "#CM9807",
    user: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    statusColor: "#4AA785",
    icon: Kate,
  },
  {
    id: "#CM9808",
    user: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusColor: "#59A8D4",
    icon: Drew,
  },
  {
    id: "#CM9809",
    user: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusColor: "#FFC555",
    icon: Orlando,
  },
  {
    id: "#CM9810",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    statusColor: "#1C1C1C66",
    icon: Andi,
  },
];

export const favoritePages: string[] = ["Overview", "Projects"];
export const recentPages: string[] = ["Page 1", "Page 2"];
