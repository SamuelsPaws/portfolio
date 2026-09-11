export function formatPrice(price: number): string {
    const priceStr = price.toString()
    const priceArr = [priceStr.slice(0, -2), priceStr.slice(-2)]

    if (priceArr[1] === '00') return priceArr[0]

    return priceArr.join(',')
}