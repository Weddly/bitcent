import Header from "@/components/template/Header";
import Page from "@/components/template/Page";
import Id from "@/logic/core/shared/Id";

export default function UserRegistration() {
  return (
    <Page>
        <Header />
        <div>
            User!!! {Id.new()}
        </div>
    </Page>
  )
}
