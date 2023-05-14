import TransactionServices from "./finances/TransactionServices";

class Services {
    get transaction() { return new TransactionServices()}
}

const services = new Services()

export default services