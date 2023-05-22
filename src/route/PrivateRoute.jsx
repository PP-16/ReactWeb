import React from "react";
import {Contents} from "../private/page/Contents";
import {Table} from "../private/page/Table";
import { Order } from "../private/page/Order";
import { Profile } from "../private/page/Profile";
import SignIn from "../private/page/SignIn";
import SignUp from "../private/page/SignUp";
import { CreateProduct } from "../private/page/CreateProduct";
import DatePickerTH from "../private/components/DatePickerTH";
import { EditOrder } from "../private/page/EditOrder";

export const PrivateRoute = [
    {
        id:"0",
        path:"/",
        element:<Contents/>
    },
    {
        id:"1",
        path:"/table",
        element:<Table/>
    },
    {
        id:"2",
        path:"/order",
        element:<Order/>
    },
    {
        id:"3",
        path:"/profile",
        element:<Profile/>
    },
    {
        id:"3",
        path:"/profile",
        element:<Profile/>
    },
    {
        id:"4",
        path:"/singin",
        element:<SignIn/>
    },
    {
        id:"5",
        path:"/signup",
        element:<SignUp/>
    },
    {
        id:"6",
        path:"/product",
        element:<CreateProduct/>
    },
    {
        id:"7",
        path:"/DatePickerTH",
        element:<DatePickerTH/>
    },
    {
        id:"8",
        path:"/edit",
        element:<EditOrder/>
    },
];