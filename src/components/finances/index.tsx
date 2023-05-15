import { emptyTransaction } from "@/logic/core/finances/Transaction";
import Content from "../template/Content";
import Header from "../template/Header";
import Page from "../template/Page";
import List from "./List";
import Form from "./Form";
import NotFound from "../template/NotFound";
import { Button, SegmentedControl } from "@mantine/core";
import { IconLayoutGrid, IconList, IconPlus } from "@tabler/icons-react";
import useTransaction, { ViewType } from "@/data/hooks/useTransaction";
import FieldMonthYear from "../template/FieldMonthYear";
import Grid from "./Grid";

export default function Finances() {
    const{transactions, selectedtransaction, saveTransaction, deleteTransaction, selectTransaction, date, changeDate, viewType,  alternateViewType} = useTransaction()

    function renderControls() {
        return(
            <div className="flex justify-between">
                <FieldMonthYear 
                    date={date} 
                    dateChanged={changeDate}
                />
                <div className="flex gap-5">
                    <Button 
                        className="bg-blue-500" 
                        leftIcon={<IconPlus />} 
                        onClick={() => selectTransaction(emptyTransaction)}>
                        New Transaction
                    </Button>
                    <SegmentedControl 
                        data={[
                            {label: <IconList />, value: 'list'},
                            {label: <IconLayoutGrid />, value: 'grid'}
                        ]}
                        onChange={type => alternateViewType(type as ViewType)}
                    />
                </div>
            </div>
        )
    }

    function renderTransactions() {
        const props = {transactions, selectTransaction}
        return viewType == 'list' ? (
            <List {...props} />
        ) : (
            <Grid {...props} />
        )
    } 


    return (
        <Page>
            <Header />
            <Content className="gap-5">
                {renderControls()}
                {selectedtransaction ? (<Form 
                    transaction={selectedtransaction}
                    back={() => selectTransaction(null)}
                    save={saveTransaction}
                    delete={deleteTransaction}
                    /> 
                    ) : transactions.length ? (
                        renderTransactions()
                    ) : (<NotFound>No transaction found</NotFound>)}
            </Content>
        </Page>
    )
}