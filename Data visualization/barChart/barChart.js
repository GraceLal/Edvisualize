/*@author: Grace Lal 
	Group No: A-15
	Roll no: 06
	Registration Number:18010460
*/

let myChart = document.getElementById("myChart").getContext("2d");
let masspopChart = new Chart(myChart, {
  type: "bar", //bar chart,pie,line,donut,radar,polarArea,horizontalBar
  data: {
    labels: [
      "Mumbai",
      "Delhi",
      "Bengaluru",
      "Kolkata",
      "Chennai",
      "Ahmedabad",
      "Hyderabad",
      "Pune",
      "Surat",
      "Kanpur",
    ],
    datasets: [
      {
        label: "Population",
        data: [
          12691836, 10927986, 5104047, 4631392, 4328063, 3719710, 3597816,
          2935744, 2894504, 2823249,
        ],
        backgroundColor: [
          "#ffb3b3",
          " #ffb3cc",
          "#ffb3ff",
          " #b3b3ff",
          "#ffffb3",
          "#b3ffb3",
          "#ffe0b3",
          "#e0e0d1",
          "#ecc6c6",
          "#b3ffff",
        ],
        borderwidth: 4,
        bordercolor: "black",
        hoverBorderWidth: 3,
        hoverBorderColor: "black",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Top 10 populated cities in India",
      fontSize: 25,
    },
    legend: {
      display: true,
      position: "right",
      labels: {
        fontColor: "black",
      },
    },
    responsive: false,
  },
});
function addData(chart) {
  let newCity = document.getElementById("city").value;
  if (chart.data.labels.find((label) => label === newCity) === undefined) {
    chart.data.labels.push(newCity);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(document.getElementById("pop").value * 1);
    });
  } else {
    let indexOfCity = chart.data.labels.findIndex((label) => label === newCity);
    chart.data.datasets[0].data[indexOfCity] =
      document.getElementById("pop").value * 1;
  }
  chart.update();
}

function removeData(chart) {
  let newCity = document.getElementById("city").value;
  chart.data.labels = chart.data.labels.filter((label) => label !== newCity);
  chart.data.datasets[0].data = chart.data.datasets[0].data.filter(
    (data) => data !== chart.data.datasets[0].data[newCity]
  );
  chart.update();
}