export default function ResponseJSON(data, message) {
    return {
        message: message,
        data,
    }
}