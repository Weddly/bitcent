import Transaction from "@/logic/core/finances/Transaction";
import Content from "../template/Content";
import Header from "../template/Header";
import Page from "../template/Page";
import List from "./List";
import { useState } from "react";
import { mockTransactions } from "@/data/constants/mockTransactions";

export default function Finances() {
    const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions)

    return (
        <Page>
            <Header />
            <Content>
                <List transactions={transactions} />
            </Content>
        </Page>
    )
}