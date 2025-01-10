import { ReactNode } from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

interface HomeLayoutProps {
    children: ReactNode;
}

export function HomeLayout({ children }: HomeLayoutProps): JSX.Element {
    return (
        <>
            <Header />
                <main>{children}</main>
            <Footer />
        </>
    );
}