export default class Phone {
    private static _phoneFormat = '(??) ?????-????'

    static format(value: string): string {
        const nums = Phone.unformat(value).split('')
        return nums.reduce((f: string, num: string) => {
            return f.replace('?', num)
        }, Phone._phoneFormat).split('?')[0].trim().replace(/[()-]$/, '')
    }

    static unformat(value: string): string {
        return value.replace(/[^0-9]+/g, '')
    }
}