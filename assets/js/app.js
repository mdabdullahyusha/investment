// Deposit Area
const depositBtn = document.querySelector(".deposit_btn");

depositBtn.addEventListener("click", function () {
  const depositInput = parseFloat(
    document.querySelector(".deposit_input").value
  );
  document.querySelector(".deposit_input").value = "";

  const depositTotal = parseFloat(
    document.querySelector(".deposit_total").innerHTML
  );

  if (isNaN(depositInput)) {
    swal("Your Field is Empty!", "Please Type The Amount", "warning");
  } else {
    const sumOfDepositTotal = depositInput + depositTotal;
    document.querySelector(".deposit_total").innerHTML = sumOfDepositTotal;

    swal("Good job!", "Investment Successful", "success");

    //   Total Balance Add
    const totalBalance = parseFloat(
      document.querySelector(".total_balance").innerHTML
    );
    let sumOfTotalBalance = depositInput + totalBalance;
    document.querySelector(".total_balance").innerHTML = sumOfTotalBalance;
    //   Total Balance Add End
  }
});
// Deposit Area End

// Withdraw Area
const withdrawBtn = document.querySelector(".withdraw_btn");

withdrawBtn.addEventListener("click", function () {
  const withdrawInput = parseFloat(
    document.querySelector(".withdraw_input").value
  );
  document.querySelector(".withdraw_input").value = "";

  const withdrawTotal = parseFloat(
    document.querySelector(".withdraw_total").innerHTML
  );

  const totalBalance = parseFloat(
    document.querySelector(".total_balance").innerHTML
  );

  if (withdrawInput >= totalBalance) {
    swal(
      "Inshufficient Balance!",
      "Please Increase the amount by deposit",
      "error"
    );
  } else if (isNaN(withdrawInput)) {
    swal("Your Field is Empty!", "Please Type The Amount", "warning");
  } else {
    const sumOfWithdrawTotal = withdrawInput + withdrawTotal;
    document.querySelector(".withdraw_total").innerHTML = sumOfWithdrawTotal;

    swal("Good job!", "Withdraw Successful", "success");

    // Total Balance Sub

    let sumOfTotalBalance = totalBalance - withdrawInput;
    document.querySelector(".total_balance").innerHTML =
      sumOfTotalBalance.toFixed(2);
    // Total Balance Sub End
  }
});
// Withdraw Area End
