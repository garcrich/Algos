import simplifyPath from "./SimplifyPath"

describe('simplifyPath', () => {
    test('simplifies path without ".." or "."', () => {
      expect(simplifyPath('/home/user')).toBe('/home/user');
    });
  
    test('simplifies path with ".." to go up a directory', () => {
      expect(simplifyPath('/a/b/c/../..')).toBe('/a');
    });
  
    test('simplifies path with "." indicating current directory', () => {
      expect(simplifyPath('/home/./user')).toBe('/home/user');
    });
  
    test('simplifies path with excessive slashes', () => {
      expect(simplifyPath('/home//user/')).toBe('/home/user');
    });
  
    test('simplifies path leading to the root', () => {
      expect(simplifyPath('/../')).toBe('/');
    });
  });
  