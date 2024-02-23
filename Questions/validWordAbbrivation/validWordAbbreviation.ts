import { substitution } from "./examplesData";

export default function validWordAbbreviation(word: string, abbr: string): boolean {
    let wordIndex = 0;
    let num = 0;

    for(let i = 0; i < abbr.length; i++) {

        if(abbr[i] >= '0' && abbr[i] <= '9') {
            if(num === 0 && abbr[i] === '0') return false

            num = num * 10 + parseInt(abbr[i])
        } else {
            wordIndex += num;
            num = 0;

            if(wordIndex >= word.length || word[wordIndex] !== abbr[i])
                return false

            wordIndex++;
        }
    }
    return wordIndex + num === word.length
}

validWordAbbreviation(substitution.word, substitution.abbr)