import * as FaIcons from "react-icons/fa";
import { VscAccount ,VscOutput } from "react-icons/vsc";
import { AiOutlineCheckCircle,AiOutlineHeart,AiOutlineFundProjectionScreen } from "react-icons/ai";
export const SidebarData=[
    {
        title: "Profile",
        path: "/AdminProfile",
        icon: <VscAccount />,
      },
      {
        title: "Projects",
        path: "/AdminProjects",
        icon: <VscOutput />,
      },
      {
        title: "Users",
        path: "/AdminUsers",
        icon: <AiOutlineCheckCircle />,
      }

]