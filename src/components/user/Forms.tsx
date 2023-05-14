import useForm from "@/data/hooks/useForm";
import MiniForm from "../template/MiniForm";
import Transaction from "@/logic/core/finances/Transaction";
import User from "@/logic/core/user/User";
import fakeUser from "@/data/constants/fakeUser";
import { TextInput } from "@mantine/core";
import TextFormat from "@/logic/utils/Text";
import SNN from "@/logic/utils/SSN";
import Phone from "@/logic/utils/Phone";

export default function Forms() {
    const {data, changeValue} = useForm<User>(fakeUser)

    return(
        <div className="flex flex-col gap5
        ">
            <MiniForm
                title="Name"
                description="How would you like to be called?"
                footerMsg="Name must contain between 3 and 80 characters."
                btnText="Save"
                canSave={TextFormat.stringSize(data.name, 3, 80)}
                save={() => {}}
            >
                <TextInput 
                    value={data.name}
                    onChange={changeValue('name')}
                />
            </MiniForm>
            <MiniForm
                title="SSN"
                description="What's your Social Security Number?"
                footerMsg="Don't worry, your data is safe here!"
                btnText="Save"
                canSave={true}
                save={() => {}}
            >
                <TextInput 
                    value={SNN.formatCPF(data.ssn ?? '')}
                    onChange={changeValue('ssn', SNN.unformatCPF)}
                />
            </MiniForm>
            <MiniForm
                title="Phone"
                description="Only used on important notification about your account."
                footerMsg="We don't make collected calls!"
                btnText="Save"
                canSave={true}
                save={() => {}}
            >
                <TextInput 
                    value={Phone.format(data.phone ?? '')}
                    onChange={changeValue('phone', Phone.unformat)}
                />
            </MiniForm>
        </div>
    )
}