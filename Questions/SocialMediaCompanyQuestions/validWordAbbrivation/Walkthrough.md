# Valid Word Abbreviation

## Problem
https://leetcode.com/problems/valid-word-abbreviation

### Problem Statement
A string can be abbreviated by replacing non-adjacent, non-empty substrings with their lengths, ensuring no leading zeros are present. For instance, "substitution" could be abbreviated as "s10n" or "sub4u4", but not as "s55n" or "s010n".

### Solution Approach
The solution iterates through the abbreviation (`abbr`) and matches it against the original word (`word`). This process includes handling numeric abbreviations and matching literal characters, with a final validation to ensure the end of `word` is reached correctly.

### Big O Complexity
- **Time Complexity**: O(N), where N is the length of the abbreviation string `abbr`. The algorithm iterates through `abbr` once, processing each character sequentially.
- **Space Complexity**: O(1), as the solution uses a constant amount of space regardless of the input size. Only a few variables are used for indexing and comparisons.

### Examples

#### Example 1:
- **Input**: word = "internationalization", abbr = "i12iz4n"
- **Output**: true
- **Explanation**: "i12iz4n" correctly abbreviates "internationalization" by replacing "nternationalizatio" with "12" and "atio" with "4".

#### Example 2:
- **Input**: word = "apple", abbr = "a2e"
- **Output**: false
- **Explanation**: "a2e" does not correctly abbreviate "apple" as it skips only two characters ('p'), but 'l' is not 'e'.
