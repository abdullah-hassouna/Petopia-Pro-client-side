"use client"

import { makeStore } from "@/lib/store";
import { Provider } from "react-redux";


interface ReduxProviderProps {
    children: React.ReactNode;
}


const ProviderContainer: React.FC<ReduxProviderProps> = ({ children }) => {

    return (
        <Provider store={makeStore()}>
            {children}
        </Provider>

    );
}


export default ProviderContainer