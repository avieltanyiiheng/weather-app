export default async function fetchAPIData(input) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=9aee09bcd2194896bde85902232406&q=${input}&aqi=no`
    );

    const jsonify = await response.json();

    const result =
      jsonify.error === undefined ? jsonify : alert("invalid country");
    // console.log(result);
    return result;
    // console.log(a);
  } catch (err) {
    console.log("A");
  }
}
