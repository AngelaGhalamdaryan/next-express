import {
    HOME_PAGE,
    ABOUT_PAGE,
    PRODUCTS_PAGE,
    COURSES_PAGE,
    COURSES_MODELING_PAGE,
    COURSES_MACHINERY_CONTROLL_PAGE,
    SHOP_PAGE,
    SHOP_3D_MODELS_PAGE,
    SHOP_2D_MODELS_PAGE,
    SHOP_G_CODE_PAGE
} from "../../../constants/routes";

import { BiPyramid } from "react-icons/bi";
import { BsCircleSquare, BsCode, BsBoundingBox, BsGear } from "react-icons/bs";
import { FiCpu } from "react-icons/fi";
import { GiWoodBeam, GiCleaver } from "react-icons/gi";

export default [
    {
        title: "home",
        href: HOME_PAGE,
        submenu: [],
    }, 
    {
        title: "about us",
        href: ABOUT_PAGE,
        submenu: [],
    },
    {
        title: "products",
        href: PRODUCTS_PAGE,
        submenu: [
            {
                title: "machinery",
                href: COURSES_MODELING_PAGE,
                icon: <BsGear />,
            },
            {
                title: "machinery details",
                href: COURSES_MODELING_PAGE,
                icon: <GiCleaver />,
            },
            {
                title: "wood work",
                href: COURSES_MODELING_PAGE,
                icon: <GiWoodBeam />,
            },
        ],
    },
    {
        title: "courses",
        href: COURSES_PAGE,
        submenu: [
            {
                title: "modeling",
                href: COURSES_MODELING_PAGE,
                icon: <BsCircleSquare />,
            },
            {
                title: "machine control",
                href: COURSES_MACHINERY_CONTROLL_PAGE,
                icon: <FiCpu />,
            },
        ],
    },
    {
        title: "online shop",
        href: SHOP_PAGE,
        submenu: [
            {
                title: "3D models",
                href: SHOP_3D_MODELS_PAGE,
                icon: <BiPyramid />,
            },
            {
                title: "2D models",
                href: SHOP_2D_MODELS_PAGE,
                icon: <BsBoundingBox />,
            },
            {
                title: "G-Code files",
                href: SHOP_G_CODE_PAGE,
                icon: <BsCode />,
            }

        ]
    }
]