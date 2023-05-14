export default class TextFormat {
    static stringSize(value: string, min: number, max: number, trim: boolean = true): boolean {
        const finalValue = (trim ? value?.trim?.(): value) ?? ''
        return finalValue.length >= min && finalValue.length <= max
    }
}