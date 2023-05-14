import { emptyTransaction } from "@/logic/core/finances/Transaction";
import Content from "../template/Content";
import Header from "../template/Header";
import Page from "../template/Page";
import List from "./List";
import Form from "./Form";
import NotFound from "../template/NotFound";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import useTransaction from "@/data/hooks/useTransaction";
import FieldMonthYear from "../template/FieldMonthYear";

export default function Finances() {
    const{transactions, selectedtransaction, saveTransaction, deleteTransaction, selectTransaction, date, changeDate} = useTransaction()

    function renderControls() {
        return(
            <div className="flex justify-between">
                <FieldMonthYear 
                    date={date} 
                    dateChanged={changeDate}/>
                <div className="flex gap-5">
                    <Button 
                        className="bg-blue-500" 
                        leftIcon={<IconPlus />} 
                        onClick={() => selectTransaction(emptyTransaction)}>
                        New Transaction
                    </Button>
                </div>
            </div>
        )
    }


    return (
        <Page>
            <Header />
            <Content className="gap-5">
                {renderControls}
                {selectedtransaction ? (<Form 
                    transaction={selectedtransaction}
                    back={() => selectTransaction(null)}
                    save={saveTransaction}
                    delete={deleteTransaction}
                    /> 
                    ) : transactions.length ? (
                        <List transactions={transactions} selectTransaction={selectTransaction}/>
                    ) : (<NotFound>No transaction found</NotFound>)}
            </Content>
        </Page>
    )
}