test("simple test should pass", () => {
  expect(1 + 1).toBe(2);
});

function filterAdults(users) {
  return users.filter(user => user.age >= 18);
}

test('should return only users who are 18 or older', () => {
  const users = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 22 },
    { name: 'Carol', age: 18 }
  ];

  const result = filterAdults(users);

  expect(result).toEqual([
    { name: 'Bob', age: 22 },
    { name: 'Carol', age: 18 }
  ]);
});

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve('data loaded'), 100);
  });
}

test('should fetch data asynchronously', async () => {
  const data = await fetchData();
  expect(data).toBe('data loaded');
});