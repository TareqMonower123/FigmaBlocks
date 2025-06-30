$(document).ready(function () {
  const ctx = document.getElementById("myStackedChart").getContext("2d");

  const data = {
    labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5"],
    datasets: [
      {
        label: "1-3",
        data: [60, 70, 80, 120, 180],
        backgroundColor: "#FF8C64",
      },
      {
        label: "4-10",
        data: [20, 30, 40, 50, 70],
        backgroundColor: "#A960EE",
      },
      {
        label: "11-20",
        data: [15, 25, 30, 40, 50],
        backgroundColor: "#32C5FF",
      },
      {
        label: "21-50",
        data: [10, 20, 30, 40, 50],
        backgroundColor: "#00C48C",
      },
      {
        label: "51-100",
        data: [5, 10, 20, 30, 40],
        backgroundColor: "#FFD700",
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
        tooltip: {
          mode: "index",
          intersect: false,
        },
        annotation: {
          annotations: {
            label1: {
              type: "label",
              xValue: "Month 1",
              yValue: 60,
              backgroundColor: "black",
              color: "white",
              content: ["4 articles", "published"],
              font: {
                size: 10,
              },
              padding: 6,
            },
            label2: {
              type: "label",
              xValue: "Month 5",
              yValue: 400,
              backgroundColor: "black",
              color: "white",
              content: ["13 articles", "published"],
              font: {
                size: 10,
              },
              padding: 6,
            },
          },
        },
      },
      scales: {
        x: {
          stacked: true, // ensures all datasets stack horizontally
        },
        y: {
          stacked: true, // ensures all datasets stack vertically
          beginAtZero: true,
          max: 600,
          title: {
            display: true,
            text: "KW & SERP Feature Visibility",
          },
        },
      },
    },
  };

  new Chart(ctx, config);
});
