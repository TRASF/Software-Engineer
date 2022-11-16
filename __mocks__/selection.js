async function testSelection(STU_ID) {
  try {
    let response = await fetch("http://localhost:3000/student/" + STU_ID);
    data = await response.json();
    return Object.values(data.data).toString();
  } catch (e) {
    return null;
  }
}

module.exports = testSelection;
