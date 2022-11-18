async function testSelection(STU_ID) {
  try {
    let response = await fetch("http://localhost:3000/student/" + STU_ID);
    data = await response.json();
    return Object.values(data.data).toString();
  } catch (e) {
    return e;
  }
}

async function testInsertion(STU_DATAS) {
  try {
    let response = await fetch("http://localhost:3000/student", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(STU_DATAS),
    });
    data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
}

module.exports = { testSelection, testInsertion };
