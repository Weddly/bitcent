import Content from "@/components/template/Content";
import Header from "@/components/template/Header";
import Page from "@/components/template/Page";
import PageTitle from "@/components/template/PageTitle";
import {IconForms } from "@tabler/icons-react";
import user from "@/data/constants/mockUser"
import Forms from "@/components/user/Forms";

export default function UserRegistration() {
  return (
    <Page>
        <Header />
        <Content>
          {/* TODO - Secundary dynamic */}
            <PageTitle primary="Registration Data" secondary={`${user.email}`} icon={<IconForms />} />
            <Forms />
        </Content>
    </Page>
  )
}
