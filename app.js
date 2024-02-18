{/*
    1. select a seat
    2. change the color of the selected seat
    3. get the seat name 
    4. if selected seat count more than 4, then show alert


 */}


const seatButtonsContainer = document.getElementById("seatButtonsContainer");
let seatButtons = document.getElementsByClassName("btn");
let selectedButtonsCount = 0;
// console.log(seatButtons);

for (let i = 0; i < seatButtons.length; i++) {
    seatButtons[i].addEventListener("click", function() {
      if (selectedButtonsCount < 4 && !seatButtons[i].classList.contains("bg-[#1DD100]")) {
        seatButtons[i].classList.add("text-white", "bg-[#1DD100]");
        selectedButtonsCount++;
        console.log(seatButtons[i].innerText);
        addTableData("seatTable", seatButtons[i].innerText);

        totalPrice = parseInt(document.getElementById("totalPrice").innerText)
        totalPrice = totalPrice + 550;
        
        document.getElementById("totalPrice").innerText = totalPrice;


      } else {
        if(!seatButtons[i].classList.contains("bg-[#1DD100]"))
        {
            document.getElementById("my_modal_1").showModal()
        }
        

        
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