{/*
    1. select a seat
    2. change the color of the selected seat
    3. get the seat name 
    4. if selected seat count more than 4, then show alert


 */}


const seatButtonsContainer = document.getElementById("seatButtonsContainer");
// let seatButtons = document.getElementsByClassName("btn");
let seatButtons = document.querySelectorAll('.seatButtons .btn');
let selectedButtonsCount = 0;


for (let i = 0; i < seatButtons.length; i++) {
    seatButtons[i].addEventListener("click", function() {
      if (selectedButtonsCount < 4 && !seatButtons[i].classList.contains("bg-[#1DD100]")) {
        seatButtons[i].classList.add("text-white", "bg-[#1DD100]");
        selectedButtonsCount++;

        document.getElementById("seatCount").innerText = selectedButtonsCount;
        addTableData("seatTable", seatButtons[i].innerText);

        totalPrice = parseInt(document.getElementById("totalPrice").innerText)
        totalPrice = totalPrice + 550;
        
        document.getElementById("totalPrice").innerText = totalPrice;

        grandTotalPrice = parseInt(document.getElementById("grandTotal").innerText)
        grandTotalPrice = grandTotalPrice + 550;
        
        document.getElementById("grandTotal").innerText = grandTotalPrice;


      }
       
      else {

        if(!seatButtons[i].classList.contains("bg-[#1DD100]"))
        {
            document.getElementById("my_modal_1").showModal()

        }
      }

      if (selectedButtonsCount == 4) {
   
        removeAttributeById("couponInput", "disabled");
        removeAttributeById("couponApplyBtn", "disabled");
    }
    });
  }



function addTableData(tableId, seat)
{
        let table = document.getElementById(tableId);
        let row = document.createElement("tr");
        let seatName = document.createElement("td");
        let seatCategory = document.createElement("td");
        let seatPrice = document.createElement("td");
        seatName.textContent = seat;
        seatCategory.textContent = "Economy";
        seatPrice.textContent = "550";
        row.appendChild(seatName);
        row.appendChild(seatCategory);
        row.appendChild(seatPrice);
        table.querySelector('tbody').appendChild(row);
}

function removeAttributeById(id, attrName)
{
  document.getElementById(id).removeAttribute(attrName);
}


document.getElementById("couponApplyBtn").addEventListener("click", function(event){
  let couponValue = document.getElementById("couponInput").value;
  if(couponValue==="NEW15")
  {
    couponHandle(15);
  }

  else if(couponValue === "Couple 20")
  {
    couponHandle(20);
  }

  else
  {
    document.getElementById("my_modal_2").showModal()
  }
})


document.getElementById("nextBtn").addEventListener("click", function(event){

    document.getElementById("my_modal_3").showModal()
})


function createDivElement(containerName, discount)
{

    let containerDiv = document.getElementById(containerName);
    let reference = containerDiv.children[3];
    let divNew = document.createElement("div");
    let pNew = document.createElement("p");
    let pNew2 = document.createElement("p");
    pNew.textContent = "Total Discount";
    pNew2.textContent = "BDT " + discount;
    divNew.appendChild(pNew);
    divNew.appendChild(pNew2);
    containerDiv.insertBefore(divNew,reference);
    divNew.classList.add("flex", "justify-between");
    pNew.classList.add("font-inter", "font-semibold");
    pNew2.classList.add("font-inter", "font-semibold");

}


function couponHandle(discountPercentage)
{

    document.getElementById("couponForm").classList.add("hidden");
    totalPrice = parseInt(document.getElementById("totalPrice").innerText)
    discount = totalPrice * discountPercentage * 0.01;

    grandTotalPrice = parseInt(document.getElementById("grandTotal").innerText)
    grandTotalPrice = grandTotalPrice - grandTotalPrice*discountPercentage*0.01;
        
    document.getElementById("grandTotal").innerText = grandTotalPrice;
    createDivElement("priceContainer", discount);

}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}