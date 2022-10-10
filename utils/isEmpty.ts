export default function isEmty(value: string | string[]): boolean {
    //To do: Here we can create more case to validate when somethin could be empty
    return typeof value === 'string' && value.length > 0 && value.trim() != ''
}
