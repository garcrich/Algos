import accountsMerge from "./AccountsMerge";

describe('accountsMerge', () => {
  test('merges accounts with a single common email', () => {
    const accounts = [
      ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
      ['John', 'johnsmith@mail.com', 'john00@mail.com'],
      ['Mary', 'mary@mail.com'],
      ['John', 'johnnybravo@mail.com']
    ];
    const merged = accountsMerge(accounts);
    expect(merged).toEqual(expect.arrayContaining([
      expect.arrayContaining(['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']),
      expect.arrayContaining(['Mary', 'mary@mail.com']),
      expect.arrayContaining(['John', 'johnnybravo@mail.com'])
    ]));
  });
  test('handles accounts with no common emails separately', () => {
    const accounts = [
      ['John', 'johnsmith@mail.com'],
      ['John', 'john00@mail.com'],
      ['Mary', 'mary@mail.com']
    ];
    const merged = accountsMerge(accounts);
    expect(merged).toEqual(expect.arrayContaining([
      expect.arrayContaining(['John', 'johnsmith@mail.com']),
      expect.arrayContaining(['John', 'john00@mail.com']),
      expect.arrayContaining(['Mary', 'mary@mail.com'])
    ]));
  });

  test('handles accounts with all unique emails', () => {
    const accounts = [
      ['John', 'johnsmith@mail.com'],
      ['John', 'john_newyork@mail.com'],
      ['John', 'john00@mail.com']
    ];
    const merged = accountsMerge(accounts);
    expect(merged).toEqual(expect.arrayContaining([
      expect.arrayContaining(['John', 'johnsmith@mail.com']),
      expect.arrayContaining(['John', 'john_newyork@mail.com']),
      expect.arrayContaining(['John', 'john00@mail.com'])
    ]));
  });

  test('sorts emails within the merged account', () => {
    const accounts = [
      ['John', 'c@mail.com', 'b@mail.com', 'a@mail.com'],
      ['John', 'c@mail.com']
    ];
    const merged = accountsMerge(accounts);
    expect(merged).toEqual(expect.arrayContaining([
      expect.arrayContaining(['John', 'a@mail.com', 'b@mail.com', 'c@mail.com'])
    ]));
  });

  // Add more tests as needed for edge cases and more complex scenarios
});
