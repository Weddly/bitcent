import AuthContext from "@/data/contexts/AuthContext";
import { useContext } from "react";

export default function Welcome() {
    const {user} = useContext(AuthContext)

    function renderName() {
        return (
            <span className="hidden sm:inline">
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