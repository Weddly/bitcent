import Transaction, { emptyTransaction } from "@/logic/core/finances/Transaction";
import Content from "../template/Content";
import Header from "../template/Header";
import Page from "../template/Page";
import List from "./List";
import { useState } from "react";
import { mockTransactions } from "@/data/constants/mockTransactions";
import Form from "./Form";
import NotFound from "../template/NotFound";
import Id from "@/logic/core/shared/Id";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

export default function Finances() {
    const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions)
    const [selectedtransaction, setSelectedTransaction] = useState<Transaction | null>(null)

    function saveTransaction(transaction: Transaction) {
        const otherTransactions = transactions.filter(t => t.id !== transaction.id)
        setTransactions([...otherTransactions, {
            ...transaction,
            id: transaction.id ?? Id.new()
        } ])
        setSelectedTransaction(null)
    }

    function deleteTransaction(transaction: Transaction) {
        const otherTransactions = transactions.filter(t => t.id !== transaction.id)
        setTransactions(otherTransactions)
        setSelectedTransaction(null)
    }

    return (
        <Page>
            <Header />
            <Content className="gap-5">
                <Button className="bg-blue-500" leftIcon={<IconPlus />} onClick={() => setSelectedTransaction(emptyTransaction)}>
                    New Transaction
                </Button>
                {selectedtransaction ? (<Form 
                    transaction={selectedtransaction}
                    back={() => setSelectedTransaction(null)}
                    save={saveTransaction}
                    delete={deleteTransaction}
                    /> 
                    ) : transactions.length ? (
                        <List transactions={transactions} selectTransaction={setSelectedTransaction}/>
                    ) : (<NotFound>No transaction found</NotFound>)}
            </Content>
        </Page>
    )
}