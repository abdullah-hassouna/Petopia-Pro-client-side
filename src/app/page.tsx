"use client"
import TrindingSidebar from "./components/sidebars/TrendingSidebar";
import { AppDispatch, RootState, startLoading, stopLoading } from "@/lib/reduxStore/store";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch: AppDispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const userName = useSelector((state: RootState) => state.user.userName);


  return (
    <>
      <h1 className="text-3xl font-bold">Welcom Back, {userName}!</h1>
      <button onClick={() => dispatch(startLoading())}>Start Loading</button>
      <button onClick={() => dispatch(stopLoading())}>Stop Loading</button>
      {isLoading ? <h2>loading...</h2> : <h2>Done Loading!</h2>}
      <TrindingSidebar />
    </>
  );
}

export default Home
