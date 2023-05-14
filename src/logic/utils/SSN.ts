export default class SNN {
    private static _cpfFormat = '???.???.???-??'

    static formatCPF(value: string): string {
        const nums = SNN.unformatCPF(value).split('')
        return nums.reduce((f: string, num: string) => {
            return f.replace('?', num)
        }, SNN._cpfFormat).split('?')[0].replace(/[-.]$/, '')
    }

    static unformatCPF(value: string): string {
        return value.replace(/[^0-9]+/g, '')
    }
}