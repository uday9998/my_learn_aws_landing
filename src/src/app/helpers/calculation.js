export const usersFormat = value => `${value} Users`;
export const precentFormat = value => `${value} %`;
export const paymentFormat = value => `$${value}`;

export const yearCalculate = (usersCount, precent, payment) => {
    const result = usersCount / 100 * precent * payment;
    return Math.floor(result).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })
}