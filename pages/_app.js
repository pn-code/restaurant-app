import Layout from "@/components/Layout";
import "@/styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}) {
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </SessionProvider>
    );
}
