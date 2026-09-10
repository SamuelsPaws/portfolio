function formatPhoneEC(phone: string): string {
    const stripped = phone.slice(4)
    const split = [ stripped.slice(0, 2), stripped.slice(2, 5), stripped.slice(5) ]
    return '0' + split.join(' ')
}

export default formatPhoneEC