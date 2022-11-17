module.exports = {
  get: jest.fn((url) => {
    if (url === "/student") {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            data: {
              STU_ID: "2",
            },
          }),
      });
    }
  }),
  post: jest.fn((url) => {
    if (url === "/addstudent") {
      return Promise.resolve({
        message: "New student has been created successfully.",
        error: false,
        data: 2,
      });
    }
    if (url === "/student") {
      return Promise.resolve({
        data: "data2",
      });
    }
  }),
  create: jest.fn(function () {
    return this;
  }),
};
