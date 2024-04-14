import minMeetingRooms from './MeetingRoomsIII';

describe('minMeetingRooms', () => {
  test('should return the correct number of meeting rooms for overlapping meetings', () => {
    const intervals = [[0, 30], [5, 10], [15, 20]];
    expect(minMeetingRooms(intervals)).toEqual(2);
  });

  test('should return 1 when meetings do not overlap', () => {
    const intervals = [[7, 10], [2, 4]];
    expect(minMeetingRooms(intervals)).toEqual(1);
  });

  test('should handle empty list of meetings', () => {
    const intervals: number[][] = [];
    expect(minMeetingRooms(intervals)).toEqual(0);
  });

  test('should handle a single meeting', () => {
    const intervals = [[10, 15]];
    expect(minMeetingRooms(intervals)).toEqual(1);
  });

  test('should return the correct number of meeting rooms for meetings that end when others start', () => {
    const intervals = [[13, 15], [1, 13]];
    expect(minMeetingRooms(intervals)).toEqual(1);
  });

  test('should return the correct number of meeting rooms for complex overlapping meetings', () => {
    const intervals = [[0, 30], [5, 10], [15, 20], [25, 35]];
    expect(minMeetingRooms(intervals)).toEqual(3);
  });
});
