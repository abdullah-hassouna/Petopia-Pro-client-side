"use client"

import { AppDispatch, startLoading, stopLoading } from "@/lib/store";
import { useDispatch, } from "react-redux";

function ChangeLoading() {
    const dispatch: AppDispatch = useDispatch();


    return (
        <>
            <h1 className="text-3xl font-bold">Change Loading state</h1>
            <button className="block" onClick={() => dispatch(startLoading())}>Start Loading</button>
            <button className="block" onClick={() => dispatch(stopLoading())}>Stop Loading</button>
        </>
    );
}


export default ChangeLoading