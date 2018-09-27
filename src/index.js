module.exports = function makeExchange(currency) {
    if (currency == 0) {                                                  //H, Q, D, N, P 
        return {};                                                        //50,25,10,5, 1
    }
    else if(currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else {
        let h, q, d, n, p;
        let result = {};
        if(currency >= 50) {
            h = Math.floor(currency/50);
            currency -= 50 * h;
            result['H'] = h; 
        }
        if(currency >= 25) {
            q = Math.floor(currency/25);
            currency -= 25 * q;
            result['Q'] = q;
        }
        if(currency >= 10) {
            d = Math.floor(currency/10);
            currency -= 10 * d;
            result['D'] = d;
        }
        if(currency >= 5) {
            n = Math.floor(currency/5);
            currency -= 5 * n;
            result['N'] = n;
        }
        if(currency >= 1) {
            result['P'] = currency;
        }
        return result;
    }
}
