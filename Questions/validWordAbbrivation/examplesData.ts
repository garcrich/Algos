type TestCase = {
    word: string;
    abbr: string;
}

export const substitution: TestCase = {
    word: 'internationalization',
    abbr: 's10n'
}

export const fullSub: TestCase = {
    word: 'internationalization',
    abbr: '12'
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