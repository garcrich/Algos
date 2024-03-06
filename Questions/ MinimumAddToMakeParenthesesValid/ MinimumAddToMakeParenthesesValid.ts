function minAddToMakeValid(s:string) {
    let balance = 0;
    let insertionsNeeded = 0;

    for (const char of s) {
        if (char === '(') {
            balance++;
        } else {
            if (balance > 0) balance--;
            else insertionsNeeded++;
        }
    }

    return insertionsNeeded + balance;
}

