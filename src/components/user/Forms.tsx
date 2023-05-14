import useForm from "@/data/hooks/useForm";
import MiniForm from "../template/MiniForm";
import UserLogin from "@/logic/core/user/User";
import { TextInput } from "@mantine/core";
import TextFormat from "@/logic/utils/Text";
import SNN from "@/logic/utils/SSN";
import Phone from "@/logic/utils/Phone";
import AuthContext from "@/data/contexts/AuthContext";
import {useContext, useEffect} from 'react'

export default function Forms() {
    const { user, updateUser } = useContext(AuthContext)
    const {data, changeValue, setData} = useForm<UserLogin>()

    useEffect(() => {
        if(!user) return
        setData(user)
    }, [user])

    async function save() {
        if(!user) return
        await updateUser(data)
    }

    return(
        <div className="flex flex-col gap5 mt-7
        ">
            <MiniForm
                title="Name"
                description="How would you like to be called?"
                footerMsg="Name must contain between 3 and 80 characters."
                btnText="Save"
                canSave={TextFormat.stringSize(data.name, 3, 80)}
                save={save}
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
                save={save}
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
                save={save}
            >
                <TextInput 
                    value={Phone.format(data.phone ?? '')}
                    onChange={changeValue('phone', Phone.unformat)}
                />
            </MiniForm>
        </div>
    )
}