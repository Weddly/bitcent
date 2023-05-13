import Feature from "./Feature";
import vantagem1 from "../../../../public/vantagem-1.jpg"
import vantagem2 from "../../../../public/vantagem-2.jpg"
import vantagem3 from "../../../../public/vantagem-3.jpg"
import Area from "../shared/Area";

export default function Features() {
    return(
        <Area id="features" className="bg-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
                <Feature 
                    title="Complete and simple to use financial manager"
                    subtitle="Here you can have complete control of your finances and an easy-to-understand visualization. The path of the economy begins here!" 
                    image={vantagem1}
                />
                <Feature 
                    title="Organized so you never forget an account again"
                    subtitle="Visualize and track your finances day by day. The monthly organization will help you to have a clear control of income and expenses!" 
                    image={vantagem2}
                    inverter
                />
                <Feature 
                    title="Ideal for financial planning"
                    subtitle="Our No. 1 principle is to be a platform that makes financial control simple, so planning becomes a natural thing!"
                    image={vantagem3}
                />
            </div>
            
            
        </Area>
    )
}