const unitTest = require("./system");
// const axious = require("./axious");
const fetch = require("jest-fetch-mock");

URLS = "http://localhost:3000/addstudent";
TEST_STU_ID = "2,Alexandra,Brown,25";
TEST_STU_DATAS =
  '{"STU_ID": "7","STU_FNAME": "Adam","STU_LNAME": "Lasuz","STU_AGE": "25"}';
tttt = [7, "sag", "sfde", 23];
it("finds Student that ID = " + TEST_STU_ID, async () => {
  const data = await unitTest.testSelection(TEST_STU_ID);

  expect(data).toEqual(TEST_STU_ID);
  // expect(axious.get("/student")).toHaveBeenCalledTimes(1);
});

it("Insert Students", async () => {
  const data = await unitTest.testInsertion(TEST_STU_DATAS);

  expect(data).toEqual({
    message: "New student has been created successfully.",
    error: false,
    data: Object.keys(TEST_STU_DATAS).length,
  });
  // expect(axious.post("/addstudent")).toHaveBeenCalledTimes(1);
});
