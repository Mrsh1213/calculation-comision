export function numberWithCommas(x) {
    return   x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}

export function numberWithoutCommas(x) {
    return Number(x.replace(/,/g, ""))
}