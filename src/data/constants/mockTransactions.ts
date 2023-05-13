import Transaction from "@/logic/core/finances/Transaction";
import { TransactionType } from "@/logic/core/finances/TransactionType";
import Id from "@/logic/core/shared/Id";

const mockTransactions: Transaction[] = [
    {
        id: Id.new(),
        description: 'Salary',
        date: new Date(2023, 5, 1),
        value: 7548.50,
        type: TransactionType.INCOME
    },
    {
        id: Id.new(),
        description: 'Light',
        date: new Date(2023, 5, 3),
        value: 320.00,
        type: TransactionType.EXPENSE
    },
    {
        id: Id.new(),
        description: 'Rent + Cond',
        date: new Date(2023, 5, 3),
        value: 1870.50,
        type: TransactionType.EXPENSE
    },
    {
        id: Id.new(),
        description: 'Credit Card',
        date: new Date(2023, 5, 10),
        value: 2200.50,
        type: TransactionType.EXPENSE
    },
    {
        id: Id.new(),
        description: 'Water',
        date: new Date(2023, 5, 8),
        value: 130.00,
        type: TransactionType.EXPENSE
    },
    {
        id: Id.new(),
        description: 'MBA',
        date: new Date(2023, 5, 15),
        value: 750.00,
        type: TransactionType.EXPENSE
    },
    {
        id: Id.new(),
        description: 'Bonus',
        date: new Date(2023, 5, 28),
        value: 1000.00,
        type: TransactionType.INCOME
    }
]