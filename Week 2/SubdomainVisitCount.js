/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const domainsDict = {};
    for(let i = 0; i < cpdomains.length; i++){
        let [val, domainString] = cpdomains[i].split(' ');
        val = parseInt(val, 10);
        domainsDict[domainString] = domainsDict[domainString] + val || val;
        let nextPeriod = domainString.indexOf('.');
        while(nextPeriod !== -1){
            domainString = domainString.slice(nextPeriod + 1);
            domainsDict[domainString] = domainsDict[domainString] + val || val;
            nextPeriod = domainString.indexOf('.');
        }
    }
    
    return Object.keys(domainsDict).map(key => `${domainsDict[key]} ${key}`)
};