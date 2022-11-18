const unitTest = require("./unit");
// const axious = require("./axious");
const fetch = require("jest-fetch-mock");

TEST_STU_ID = "2,Alexandra,Brown,25";
TEST_STU_DATAS = {
  student: {
    STU_ID: 7,
    STU_FNAME: "Akex",
    STU_LNAME: "Break",
    STU_AGE: 23,
  },
};
it("finds Student that ID = " + TEST_STU_ID[0], async () => {
  const data = await unitTest.testSelection(TEST_STU_ID);
  expect(data).toEqual(TEST_STU_ID);
  // expect(axious.get("/student")).toHaveBeenCalledTimes(1);
});

// it("Insert Students", async () => {
//   const data = await unitTest.testInsertion(TEST_STU_DATAS);
//   expect(data).toEqual({
//     message: "New student has been created successfully.",
//     error: false,
//     data: Object.keys(TEST_STU_DATAS).length,
//   });
//   // expect(axious.post("/addstudent")).toHaveBeenCalledTimes(1);
// });
