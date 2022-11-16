const testSelection = require("./selection");

TEST_STU_ID = "2";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: { STU_ID: TEST_STU_ID } }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("finds Student that ID = " + TEST_STU_ID, async () => {
  const data = await testSelection(TEST_STU_ID);

  expect(data).toEqual(TEST_STU_ID);
  expect(fetch).toHaveBeenCalledTimes(1);
});
