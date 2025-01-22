"use client"
import TrindingSidebar from "./components/sidebars/TrendingSidebar";
import { AppDispatch, RootState, startLoading, stopLoading } from "@/lib/reduxStore/store";
import { useDispatch, useSelector } from "react-redux";
import { SelectSearch } from "./components/SelectSearch";

function Home() {
  const dispatch: AppDispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const userName = useSelector((state: RootState) => state.userInfo.userName);


  return (
    <div className=" flex justify-between">
      {/* <SelectSearch /> */}
      {isLoading ? <h2>loading...</h2> : <h2>Done Loading!</h2>}
      <TrindingSidebar />
    </div>
  );
}

export default Home
