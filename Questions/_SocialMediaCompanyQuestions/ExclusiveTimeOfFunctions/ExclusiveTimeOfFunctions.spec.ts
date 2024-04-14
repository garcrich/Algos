import exclusiveTime from "./ExclusiveTimeOfFunctions";

describe('exclusiveTime', () => {
  
    test('handles sequential function calls', () => {
      const logs = ["0:start:1", "0:end:2", "1:start:3", "1:end:4"];
      const n = 2;
      expect(exclusiveTime(n, logs)).toEqual([2, 2]);
    });
  
    test('handles single function call', () => {
      const logs = ["0:start:1", "0:end:2"];
      const n = 1;
      expect(exclusiveTime(n, logs)).toEqual([2]);
    });
  
    test('handles empty log array', () => {
      const logs: string[] = [];
      const n = 0;
      expect(exclusiveTime(n, logs)).toEqual([]);
    });
  
    test('handles function calling itself recursively', () => {
      const logs = ["0:start:1", "0:start:2", "0:end:3", "0:end:4"];
      const n = 1;
      expect(exclusiveTime(n, logs)).toEqual([4]);
    });
  });
  