const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  for (const price of priceElements) {
    total += parseFloat(price.textContent);
  }
// let newrow=document.createElement("tr");
// let newcell=document.createElement("td");
// 	newrow.appendChild(newcell);
// 	newcell.colSpan=2;
// 	newcell.textContent=`Total Price: ${total}`;
// 	newcell.style.fontWeight="bold";
// 	newcell.style.textAlign="center";
// 	document.querySelector("table").appendChild(newrow);
	let result = document.getElementById("ans");
if (!result) {
  result = document.createElement("p");
  result.id = "ans"; // Required for Cypress
  document.body.appendChild(result);
}
result.textContent = "Total Price: Rs " + total;

	getSumBtn.disabled=true;
};

getSumBtn.addEventListener("click", getSum);
