"use client"

import { makeStore } from "@/lib/reduxStore/store";
import { Provider } from "react-redux";

interface ReduxProviderProps {
    children: React.ReactNode;
}


const ProviderContainer: React.FC<ReduxProviderProps> = ({ children }) => {

    return (
        <Provider store={makeStore()}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            {children}
            {/* </PersistGate> */}
        </Provider>

    );
}


export default ProviderContainer