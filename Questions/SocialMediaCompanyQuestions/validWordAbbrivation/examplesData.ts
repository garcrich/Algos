type TestCase = {
    word: string;
    abbr: string;
}

export const substitution: TestCase = {
    word: 'Pocatello',
    abbr: 'P8'
}

export const fullSub: TestCase = {
    word: 'California',
    abbr: '10'
}

export const invalidNums: TestCase = {
    word: 'internationalization',
    abbr: 's55'
}

export const shortAbbr: TestCase = {
    word: 'apple',
    abbr: 'a2e'
}

export const emptyStr: TestCase = {
    word: '',
    abbr: ''
}