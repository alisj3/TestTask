import { Intro } from "../components/Intro/Intro";
import { Products } from "../components/Products/Products";
import { HomeLayout } from "../layouts/HomeLayout";

export function Home(){
    return (
        <>
            <HomeLayout>
                <Intro />
                <Products />
            </HomeLayout>
        </>
    )
}