import fakeUser from "@/data/constants/fakeUser";
import { Avatar, Menu } from "@mantine/core";
import { IconArrowsRightLeft, IconLogout, IconUser } from "@tabler/icons-react";
import Link from "next/link";

export default function MenuUser() {
    const user = fakeUser;

    function logout() {
        console.log("I'm out")
    }
    
    return(
        <Menu>
            <Menu.Target>
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="hidden md:flex flex-col select-none">
                        <span className="text-sm font-bold text-zinc-200">{user?.name}</span>
                        <span className="text-xs text-zinc-400">{user?.email}</span>
                    </div>
                    <Avatar 
                        size={40}
                        radius="xl"
                        src={user?.imgUrl ?? 'https://source.unsplash.com/random/100x100/?abstract'}
                    />
                </div>  
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Label>User</Menu.Label>
                    <Link href="/">
                        <Menu.Item icon={<IconArrowsRightLeft size={14}/>}>
                            Finances
                        </Menu.Item>
                    </Link>
                    <Link href="/user">
                        <Menu.Item icon={<IconUser size={14}/>}>
                            My Info
                        </Menu.Item>
                    </Link>
                    <Menu.Divider />
                    <Menu.Item
                        color="red" 
                        icon={<IconLogout size={14}/>}
                        onClick={logout}
                    >
                        Logout
                    </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}