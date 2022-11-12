export const ShortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`

export function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}
export function reduceString(str, n){

  return (str.length > n) ? str.substr(0, n-1) : str;
}
export function convertDate(ddate){
    let date = new Date(ddate)   
        const options = { month: "short", day: "numeric", year: "numeric" }
        return new Intl.DateTimeFormat("en-US", options).format(date)   
}