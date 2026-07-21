document.addEventListener("DOMContentLoaded", function () {
  const chartModal = document.getElementById("chart-modal");
  const viewChartBtn = document.getElementById("view-chart");
  const chartCloseBtn = chartModal.querySelector(".close");
  let chartInstance = null; // Store the chart instance

  viewChartBtn.addEventListener("click", function (e) {
    e.preventDefault();
    chartModal.style.display = "block";
    renderChart();
  });

  chartCloseBtn.addEventListener("click", function () {
    chartModal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === chartModal) {
      chartModal.style.display = "none";
    }
  });

  function renderChart() {
    const canvas = document.getElementById("chart-canvas");
    const ctx = canvas.getContext("2d");

    // Destroy existing chart instance if it exists
    if (chartInstance) {
      chartInstance.destroy();
      chartInstance = null; // Reset the chart instance
    }

// Generate random data between 1 and 20
  const randomData = Array.from({ length: 6 }, () => Math.floor(Math.random() * 20) + 1);

    chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: randomData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 20,
          },
        },
      },
    });
  }
});

