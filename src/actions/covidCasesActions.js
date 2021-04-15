/**
 * 
 * Api call to fetch the data
 */

export function getCovidData() {
    return window.fetch('https://api.covid19india.org/state_district_wise.json', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(result => { return result })
}