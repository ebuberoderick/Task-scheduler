import { Stack } from "expo-router"; 
import reduxStore from "./store/store";
import { Provider } from "react-redux";
import { RootSiblingParent } from 'react-native-root-siblings';
import { PersistGate } from 'redux-persist/integration/react'



const Layout = () => {
    const {store,persistor} = reduxStore()
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RootSiblingParent>
                    <Stack />
                </RootSiblingParent>
            </PersistGate>
        </Provider>
    )
}

export default Layout;