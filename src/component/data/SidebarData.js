import * as FaIcons from "react-icons/fa";
import { VscAccount ,VscOutput } from "react-icons/vsc";
import { AiOutlineCheckCircle,AiOutlineHeart,AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
export const SidebarData=[
    {
        title: "Profile",
        path: "/MyProfile",
        icon: <VscAccount />,
      },
      {
        title: "My Projects",
        path: "/myProjects",
        icon: <VscOutput />,
      },
      {
        title: "my contributions",
        path: "/mycontributions",
        icon: <AiOutlineCheckCircle />,
      },
      {
        title: "my favourites",
        path: "/myFavourites",
        icon: <AiOutlineHeart />,
      },
      {
        title: "marketing",
        path: "/marketing",
        icon: <AiOutlineFundProjectionScreen />,
      },
      {
        title: "My Questions",
        path: "/MyQuestions",
        icon: <AiFillQuestionCircle />,
      },

]