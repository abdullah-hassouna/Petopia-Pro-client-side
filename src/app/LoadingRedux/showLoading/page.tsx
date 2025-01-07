"use client"

import { RootState, } from "@/lib/reduxStore/store";
import { useSelector } from "react-redux";

function ShowLoading() {
    const isLoading = useSelector((state: RootState) => state.loading.isLoading);


    return (
        <>
            <h1 className="text-3xl font-bold">{isLoading ? "Loading" : "Not Loading"}</h1>
        </>
    );
}


export default ShowLoading