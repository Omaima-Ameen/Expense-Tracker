let budgetInp = document.getElementById("total-budget");
const budgetBtn = document.getElementById("budgetBtn");
let expenseBox = document.querySelector(".expense-box");
const expenseBtn = document.getElementById("expenseBtn");
const expenseName = document.getElementById("expense-name");
const expenseCost = document.getElementById("expense-cost");
const expenditureValue = document.getElementById("expenditure-value");
const totalBudget = document.getElementById("total-budget");
const balanceValue =  document.getElementById("balance-amount");
const list = document.getElementById("list");
// const budgetBox = document.querySelector(".budget")


let tempAmount = 0;
budgetBtn.addEventListener("click" , () =>{
  tempAmount = budgetInp.value;
  if (tempAmount === "" || tempAmount < 0) {
    alert("please fix some budget first");
  } else {
    let budgetBox = document.querySelector(".budget");
    budgetBox.style.display = "none";
    let settedBuget = document.createElement("div");
    settedBuget.classList.add("setted-budget");
    let budgetFixed = document.createElement("button");
    budgetFixed.classList.add("budget-fixed");
    let h2 = document.createElement("h2");
    h2.innerHTML = ` TOTAL BUDGET  `;
    settedBuget.appendChild(h2)
    budgetFixed.innerHTML =  " Rs  " + tempAmount;
    let wrapper = document.querySelector(".wrapper");
    settedBuget.appendChild(budgetFixed);
    wrapper.appendChild(settedBuget);

    //set balance
    balanceValue.innerText = tempAmount - expenditureValue.innerText;
    //clear input box
    budgetInp.value = "";
  }
})
 // Function to modify list element
 function modifyElement(element , edit = false){
  let parentDiv = element.parentElement;
  let currentBalance = balanceValue.innerText;
  let currentExpense = expenditureValue.innerText;
  let parentAmount = parentDiv.querySelector(".amount");
   if(edit) {
    parentText = parentDiv.querySelector(".product").innerText ;
    expenseName.innerText = parentText;
    expenseCost.innerText = parentAmount; 
   }
   balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
   expenditureValue.innerText = parseInt(currentExpense) - parseInt(parentAmount);
   parentDiv.remove();
 }
 
 //function to create expense list
 const listCreator = (expenseName, expenseValue) =>{
  let sublistContent = document.createElement("div");
  sublistContent.classList.add("sublist-content", "flex-space");
  list.appendChild(sublistContent);

  sublistContent.innerHTML = `<p class="product">
  ${expenseName}</p><p class="amount">${expenseValue}</p>`
 }



//function to add expenses
expenseBtn.addEventListener("click" , function () {
  //expenses
  let expenditure = parseInt(expenseCost.value);
// total expense = existing + new
let sum = parseInt(expenditureValue.innerText) + expenditure;
//ab expenditure value = purani + new
expenditureValue.innerText = sum;
// left balance = budget - expense
const totalBalance = tempAmount  - sum;
balanceValue.innerText = totalBalance;

//create list
listCreator(expenseName.value, expenseCost.value);
//sbke baad empty outputs
expenseName.value = "";
expenseCost.value = "";

});