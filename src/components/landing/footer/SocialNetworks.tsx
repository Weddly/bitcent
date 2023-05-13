import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandYoutube } from "@tabler/icons-react";
import SocialNetwork from "./SocialNetwork";

export default function SocialNetworks() {
    return(
        <div className="flex">
            <SocialNetwork icon={<IconBrandYoutube />} url="https://www.youtube.com" />
            <SocialNetwork icon={<IconBrandInstagram />} url="https://www.instagram.com" />
            <SocialNetwork icon={<IconBrandFacebook />} url="https://www.facebook.com" />
            <SocialNetwork icon={<IconBrandGithub />} url="https://www.github.com" />
        </div>
    )
}