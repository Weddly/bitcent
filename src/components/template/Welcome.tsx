import fakeUser from "@/data/constants/mockUser";
import { useContext } from "react";

export default function Welcome() {
    // const {user} = useContext(AuthenticationContext)
    const user = fakeUser;
    function renderName() {
        return (
            <span>
                {user?.name?.split(' ')[0]}
            </span>
        )
    }

    return (
        <div className="text-3xl font-black">
            Hello, {renderName()} 👋
        </div>
    )
}