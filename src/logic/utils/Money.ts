export default class Money{
    private static _languague = "pt-BR"
    private static _currency = "BRL"

    static format(num: number): string {
        return (num ?? 0).toLocaleString(Money._languague, {
            style: "currency", currency: Money._currency
        })
    }

}