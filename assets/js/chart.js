const ctx = document.getElementById("myChart");

var chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Investment", "Withdraw", "Total Balance"],
    datasets: [
      {
        label: "$",
        data: [0, 0, 0],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const chartDeposit = document.querySelector(".deposit_btn");
chartDeposit.addEventListener("click", function () {
  const depositTotal = parseFloat(
    document.querySelector(".deposit_total").innerHTML
  );
  const withdrawTotal = parseFloat(
    document.querySelector(".withdraw_total").innerHTML
  );
  const overallTotal = parseFloat(
    document.querySelector(".total_balance").innerHTML
  );
  var depositData = chart.data.datasets[0].data;

  depositData[0] = depositTotal;
  depositData[1] = withdrawTotal;
  depositData[2] = overallTotal;
  chart.update();
});

const chartWithdraw = document.querySelector(".withdraw_btn");
chartWithdraw.addEventListener("click", function () {
  const depositTotal = parseFloat(
    document.querySelector(".deposit_total").innerHTML
  );
  const withdrawTotal = parseFloat(
    document.querySelector(".withdraw_total").innerHTML
  );
  const overallTotal = parseFloat(
    document.querySelector(".total_balance").innerHTML
  );
  var depositData = chart.data.datasets[0].data;

  depositData[0] = depositTotal;
  depositData[1] = withdrawTotal;
  depositData[2] = overallTotal;
  chart.update();
});
