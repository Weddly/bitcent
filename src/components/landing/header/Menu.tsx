import { IconBrandGoogle } from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import AuthContext from "@/data/contexts/AuthContext";
import { useContext } from "react";

export default function Menu() {

    const { loginGoogle } = useContext(AuthContext)

    return(
        <div className="flex gap-2">
            <MenuItem url="#home" className="hidden sm:flex">
                Home
            </MenuItem>
            <MenuItem url="#features" className="hidden sm:flex">
                Features
            </MenuItem>
            <MenuItem url="#testimonials" className="hidden sm:flex">
                Testimonials
            </MenuItem>
            <MenuItem onClick={loginGoogle} className="bg-gradient-to-r from-indigo-600 to-cyan-600">
                <div className="flex items-center gap-2">
                    <IconBrandGoogle size={15}/>
                    <span>Login</span>
                </div>
            </MenuItem>
        </div>
    )
}