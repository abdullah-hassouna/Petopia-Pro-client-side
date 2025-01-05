"use client"

import { AppDispatch, RootState, startLoading, stopLoading } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch: AppDispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);


  return (
    <>
      <h1 className="text-3xl font-bold">Welcom Back, Mohammad!</h1>
      <button onClick={() => dispatch(startLoading())}>Start Loading</button>
      <button onClick={() => dispatch(stopLoading())}>Stop Loading</button>
      {isLoading ? <h2>loading...</h2> : <h2>Done Loading!</h2>}
    </>
  );
}


export default Home