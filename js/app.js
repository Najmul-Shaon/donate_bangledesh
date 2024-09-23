// to get inner text from any content
function innerText(id) {
  const result = document.getElementById(id).innerText;
  return result;
}

// to get inner value on any input
function inputValue(id) {
  const result = document.getElementById(id).value;
  return result;
}

// get element by id
function getElement(id) {
  const result = document.getElementById(id);
  return result;
}

// set element by id
function setElement(id, value) {
  const result = getElement(id);
  result.innerText = value;
}

// convert string to number
function toNumber(String) {
  const result = parseInt(String);
  return result;
}

// input validations
function inputValidation(
  inputedTaka,
  mainBalance,
  newMainBalance,
  newNoakhaliBalance,
  main_balanceId,
  placeId
) {
  if (
    inputedTaka <= 0 ||
    isNaN(inputedTaka) ||
    mainBalance < inputedTaka ||
    mainBalance === 0
  ) {
    return alert("Please input a valid amount!!!");
  } else {
    setElement(main_balanceId, newMainBalance);
    setElement(placeId, newNoakhaliBalance);
  }
}

// noakhali card

const donateBtn1 = getElement("donateBtn1");

donateBtn1.addEventListener("click", function () {
  const inputedTaka = toNumber(inputValue("donateForNoakhali"));
  const mainBalance = toNumber(innerText("main_balance"));
  const noakhaliBalance = toNumber(innerText("noakhaliBalance"));
  const newMainBalance = mainBalance - inputedTaka;
  const newNoakhaliBalance = noakhaliBalance + inputedTaka;
  inputValidation(
    inputedTaka,
    mainBalance,
    newMainBalance,
    newNoakhaliBalance,
    "main_balance",
    "noakhaliBalance"
  );

  console.log(
    typeof inputedTaka,
    inputedTaka,
    typeof inp,
    mainBalance,
    noakhaliBalance,
    newMainBalance,
    newNoakhaliBalance
  );
});

const donateBtn2 = getElement("donateBtn2");

donateBtn2.addEventListener("click", function () {
  const inputedTaka = toNumber(inputValue("donateForFeni"));
  const mainBalance = toNumber(innerText("main_balance"));
  const feniBalance = toNumber(innerText("feniBalance"));
  const newMainBalance = mainBalance - inputedTaka;
  const newFeniBalance = feniBalance + inputedTaka;
  inputValidation(
    inputedTaka,
    mainBalance,
    newMainBalance,
    newFeniBalance,
    "main_balance",
    "feniBalance"
  );
  //   setElement("main_balance", newMainBalance);
  //   setElement("feniBalance", newFeniBalance);
});

const donateBtn3 = getElement("donateBtn3");

donateBtn3.addEventListener("click", function () {
  const inputedTaka = toNumber(inputValue("donateForQuota"));
  const mainBalance = toNumber(innerText("main_balance"));
  const qoutaBanlance = toNumber(innerText("qoutaBanlance"));
  const newMainBalance = mainBalance - inputedTaka;
  const newQoutaBanlance = qoutaBanlance + inputedTaka;
  inputValidation(
    inputedTaka,
    mainBalance,
    newMainBalance,
    newQoutaBanlance,
    "main_balance",
    "qoutaBanlance"
  );
  //   setElement("main_balance", newMainBalance);
  //   setElement("qoutaBanlance", newQoutaBanlance);
});
