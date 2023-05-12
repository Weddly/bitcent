import Page from "../template/Page";
import Features from "./features";
import Footer from "./footer";
import Header from "./header";
import Highlight from "./highlight";
import Testimonials from "./testimonials";

export default function Landing() {
    return(
        <Page>
            <Header />
            <Highlight />
            <Features />
            <Testimonials />
            <Footer />
        </Page>
    )
}