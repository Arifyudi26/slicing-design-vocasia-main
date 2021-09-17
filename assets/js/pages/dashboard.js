var optionsProfileVisit = {
  annotations: {
    position: "right",
  },
  dataLabels: {
    enabled: false,
  },
  chart: {
    type: "bar",
    height: "200",
    width: "100%",
    toolbar: {
      show: false,
    },
  },
  fill: {
    opacity: 1,
  },
  plotOptions: {},
  series: [
    {
      name: "jumlah siswa baru",
      data: [350, 150, 300, 450, 600, 350, 150, 300, 450, 600, 100, 150],
    },
  ],
  colors: "#127CA6",
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
};

let optionsVisitorsProfile = {
  series: [87, 13],
  labels: ["Jumlah Kursus", "Kursus Aktif"],
  colors: ["#127CA6", "#CD2228"],
  chart: {
    type: "donut",
  },
  legend: {
    position: "right",
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: undefined,
      options: {},
    },
  ],
  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        labels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "22px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "bold",
            color: undefined,
          },
          total: {
            show: true,
            showAlways: false,
            fontSize: "22px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 600,
          },
        },
      },
    },
  },
};

var optionsEurope = {
  series: [
    {
      name: "series1",
      data: [310, 800, 600, 430, 540, 340, 605, 805, 430, 540, 340, 605],
    },
  ],
  chart: {
    height: 80,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#5350e9"],
  stroke: {
    width: 2,
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
      "2018-09-19T07:30:00.000Z",
      "2018-09-19T08:30:00.000Z",
      "2018-09-19T09:30:00.000Z",
      "2018-09-19T10:30:00.000Z",
      "2018-09-19T11:30:00.000Z",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
  show: false,
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

let optionsAmerica = {
  ...optionsEurope,
  colors: ["#008b75"],
};
let optionsIndonesia = {
  ...optionsEurope,
  colors: ["#dc3545"],
};

var chartProfileVisit = new ApexCharts(
  document.querySelector("#chart-profile-visit"),
  optionsProfileVisit
);
var chartVisitorsProfile = new ApexCharts(
  document.getElementById("chart-visitors-profile"),
  optionsVisitorsProfile
);
var chartEurope = new ApexCharts(
  document.querySelector("#chart-europe"),
  optionsEurope
);
var chartAmerica = new ApexCharts(
  document.querySelector("#chart-america"),
  optionsAmerica
);
var chartIndonesia = new ApexCharts(
  document.querySelector("#chart-indonesia"),
  optionsIndonesia
);

chartIndonesia.render();
chartAmerica.render();
chartEurope.render();
chartProfileVisit.render();
chartVisitorsProfile.render();
