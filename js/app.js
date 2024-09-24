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
  placeId,
  cardTitle
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

    // const cardTitle = innerText("quotaTitle");
    const historySection = getElement("donation_history_container");
    const newDiv = document.createElement("Div");
    newDiv.classList.add("border", "p-8", "rounded-2xl", "space-y-4");
    newDiv.innerHTML = `
   <h3 class="text-lg text-black font-bold">${inputedTaka} Taka is Donated for ${cardTitle}</h3>
          <p class="text-base text-black/70 font-light">Date: ${new Date().getFullYear()}/${
      new Date().getMonth() + 1
    }/${new Date().getDate()} at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}
  `;

    historySection.appendChild(newDiv);

    console.log(cardTitle);
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
    "noakhaliBalance",
    innerText("noakhaliTitle")
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
    "feniBalance",
    innerText("feniTitle")
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
    "qoutaBanlance",
    innerText("quotaTitle")
  );

  // const cardTitle = innerText("quotaTitle");
  // const historySection = getElement("donation_history_container");
  // const newDiv = document.createElement("Div");
  // newDiv.classList.add("border", "p-8", "rounded-2xl", "space-y-4");
  // newDiv.innerHTML = `
  //  <h3 class="text-lg text-black font-bold">${inputedTaka} Taka is Donated for ${cardTitle}</h3>
  //         <p class="text-base text-black/70 font-light">Date: ${new Date().getFullYear()}/${
  //   new Date().getMonth() + 1
  // }/${new Date().getDate()} at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}
  // `;

  // historySection.appendChild(newDiv);

  // console.log(historySection, cardTitle, newDiv);

  // if()
  //   setElement("main_balance", newMainBalance);
  //   setElement("qoutaBanlance", newQoutaBanlance);
});

// donateBtn3.addEventListener("click", function () {});

// hide unhide donation and history section

// while click donation button
getElement("donationBtn").addEventListener("click", function () {
  // getElement("donationBtn").classList.add(
  //   "bg-primary_color",
  //   " hover:bg-primary_color"
  // );
  // getElement("historyBtn").classList.remove(
  //   "bg-primary_color",
  //   " hover:bg-primary_color"
  // );
  getElement("donationBtn").classList.add("bg-primary_color");
  getElement("donationBtn").classList.remove("btn-outline");
  getElement("historyBtn").classList.remove("bg-primary_color");
  getElement("historyBtn").classList.add("btn-outline");
  getElement("donationSection").classList.remove("hidden");
  getElement("donation_history_container").classList.add("hidden");
  console.log("donationBtn");
});
// while click history button
getElement("historyBtn").addEventListener("click", function () {
  getElement("donationBtn").classList.remove("bg-primary_color");
  getElement("donationBtn").classList.add("btn-outline");
  getElement("historyBtn").classList.add("bg-primary_color");
  getElement("historyBtn").classList.remove("btn-outline");
  getElement("donationSection").classList.add("hidden");
  getElement("donation_history_container").classList.remove("hidden");
});
