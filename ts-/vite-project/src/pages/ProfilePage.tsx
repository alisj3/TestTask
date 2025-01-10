import { Profile } from "../components/Profile/Profile";
import { HomeLayout } from "../layouts/HomeLayout";


export function ProfilePage(){
    return (
        <>
            <HomeLayout>
                <Profile />
            </HomeLayout>

        </>
    )
}