function extractNumber(inputString) {
  const numericPart = inputString.split("$");
  return numericPart[0];
}

function calculateTotalPrice() {
  const itemList = document.querySelectorAll(".itemList");
  const currentPrice = document.querySelector("#calculated");
  console.log("Total Price", itemList);
  let sum = 0;
  for (const item of itemList) {
    const price = item.querySelector("#eachItemTotalPrice");
    console.log("lol");
    console.log(parseInt(currentPrice.innerText));
    console.log(parseInt(price.innerText));
    sum += parseInt(price.innerText);
  }
  currentPrice.innerText = sum;
}

function showSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("hidden");
  sidebar.classList.remove("translate-x-full");
}
function toggleSideBar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("hidden");
  sidebar.classList.toggle("translate-x-full");
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.add("translate-x-full");
  sidebar.classList.remove("hidden");
}

function handleDelete(id) {
  const allFoods = document.querySelectorAll(".foods");
  const foodName = document.querySelectorAll(`#${id} #dishName`)[0];
  const itemToRemove = document.getElementById(id);

  if (itemToRemove) {
    const itemContainer = itemToRemove.parentNode;
    console.log("parent", itemContainer);
    itemContainer.removeChild(itemToRemove);
    totalItemInNav.innerText = parseInt(totalItemInNav.innerText) - 1;
    totalItemInSideBar.innerText = parseInt(totalItemInSideBar.innerText) - 1;

    //  changing color
    // Iterate over each food section
    allFoods.forEach((foodSection) => {
      // Find the element with the class "foodName" within the current food section
      const foodNameElement = foodSection.querySelector(".foodName");

      // Check if the "foodName" contains the name that is removed
      if (foodNameElement && foodNameElement.innerText === foodName.innerText) {
        console.log(
          "Found a food with the name chicken:",
          foodNameElement.innerText
        );
        const btn = foodSection.querySelector("button");
        btn.classList.add("bg-[#f9664f]", "hover:bg-[#e93b28]");
        btn.classList.remove("bg-[#5e6571]", "hover:bg-[#424958]");
        btn.removeAttribute("disabled", "false");
        calculateTotalPrice();
      }
    });
  }
}

function handleIncrement(id) {
  const quantity = document.querySelector(`#${id} .quantity div`);
  const eachTotalPrice = document.querySelector(`#${id} #eachItemTotalPrice`);
  const originalPrice = document.querySelector(
    `#${id} #originalPrice`
  ).innerText;

  const parsedPrice = parseInt(extractNumber(originalPrice));

  quantity.innerText = parseInt(quantity.innerText) + 1;
  eachTotalPrice.innerText = parseInt(eachTotalPrice.innerText) + parsedPrice;
  calculateTotalPrice();
}

function handleDecrement(id) {
  const quantity = document.querySelector(`#${id} .quantity div`);
  const eachTotalPrice = document.querySelector(`#${id} #eachItemTotalPrice`);
  const originalPrice = document.querySelector(
    `#${id} #originalPrice`
  ).innerText;

  if (parseInt(quantity.innerText) === 1) {
    return;
  }
  const parsedPrice = parseInt(extractNumber(originalPrice));
  quantity.innerText = parseInt(quantity.innerText) - 1;
  eachTotalPrice.innerText = parseInt(eachTotalPrice.innerText) - parsedPrice;
  calculateTotalPrice();
}

function btnEvent(btn, item, itemPrice, totalItemInNav, totalItemInSideBar) {
  btn.addEventListener("click", (e) => {
    showSidebar();
    totalItemInNav.innerText = parseInt(totalItemInNav.innerText) + 1;
    totalItemInSideBar.innerText = parseInt(totalItemInSideBar.innerText) + 1;
    btn.setAttribute("disabled", "true");
    btn.innerText = "Added to Cart";
    const dishName = document.querySelector(`.foodCard #${item}`).innerText;
    const price = document.querySelector(`.foodCard #${itemPrice}`).innerText;
    console.log(dishName);
    console.log(price);
    btn.classList.remove("bg-[#f9664f]", "hover:bg-[#e93b28]");
    btn.classList.add("bg-[#5e6571]", "hover:bg-[#424958]");
    const itemContainer = document.querySelector("#sidebar .itemContainer");
    console.log(itemContainer);
    const itemDiv = document.createElement("div");

    itemDiv.innerHTML = ` <div id="${item}Card" class="itemList h-36 border-2 border-[#ffaf9f] grid grid-cols-6 p-[6px] rounded-md text-[#ffefe3] text-[16px] font-bold
    gap-x-1 relative">
        <div class="col-span-2 w-[90%] overflow-hidden">
            <img class="h-full w-full rounded-md scale-150 " src="./assets/${
              dishName === "Fajitus"
                ? "fajitus"
                : dishName === "Chicken"
                ? "chicken"
                : "chicken-masala"
            }.jpg" alt="">
        </div>
        <div class="col-span-3 flex flex-col justify-center">
            <div id="dishName">${dishName}</div>
            <div id="originalPrice" class="text-[10px] -mt-1">${price}</div>
            <div class="flex text-[#939392] mt-4 items-center quantity">
                <button onclick="handleDecrement('${item}Card')" class="bg-[#e3e7ee] w-6 h-8 flex justify-center items-center rounded-l-[4px] cursor-pointer
                hover:bg-[#c8ccd3] active:scale-105 transition-all duration-150">-</button>
                <div class="w-10 h-6 bg-[#fefefd] flex justify-center items-center">1</div>
                <button onclick="handleIncrement('${item}Card')" class="bg-[#e3e7ee] w-6 h-8 flex justify-center items-center rounded-r-[4px] cursor-pointer
                hover:bg-[#e3e7ee] active:scale-105 transition-all duration-150">+</button>
            </div>
        </div>
        <div class="col-span-1 flex items-end text-[14px]"> <span id="eachItemTotalPrice">${extractNumber(
          price
        )}</span> 
        <span class="scale-y-125">$</span></div>
        <button onclick="handleDelete('${item}Card')" class="w-6 h-6 bg-[#fffbfe] p-1 rounded-md absolute -top-2 -right-1 active:scale-105">
            <img class="h-full w-full  "
                src="https://img.icons8.com/material-rounded/24/fe5442/filled-trash.png" alt="filled-trash" />
        </button>
  
    </div>`;
    itemContainer.appendChild(itemDiv);
    calculateTotalPrice();
  });
}

// Reference elements
const chickenAddBtn = document.querySelector("#chickenBtn");
const fajitusAddBtn = document.querySelector("#fajitusBtn");
const chickenMasalaAddBtn = document.querySelector("#chickenMasalaBtn");
const totalLock = document.querySelector("#totalLock");
const totalItemInNav = document.querySelectorAll(".totalItem")[0];
const totalItemInSideBar = document.querySelectorAll(".totalItem")[1];

// event handler func
btnEvent(
  chickenAddBtn,
  "chicken",
  "chickenPrice",
  totalItemInNav,
  totalItemInSideBar
);
btnEvent(
  fajitusAddBtn,
  "fajitus",
  "fajitusPrice",
  totalItemInNav,
  totalItemInSideBar
);
btnEvent(
  chickenMasalaAddBtn,
  "chickenMasala",
  "chickenMasalaPrice",
  totalItemInNav,
  totalItemInSideBar
);

fajitusAddBtn.addEventListener("click", (e) => {
  const dishName = document.querySelector("#fajitus").innerText;
  const price = document.querySelector("#fajitusPrice").innerText;
  console.log(dishName);
  console.log(price);
  showSidebar();
});
chickenMasalaAddBtn.addEventListener("click", (e) => {
  const dishName = document.querySelector("#chickenMasala").innerText;
  const price = document.querySelector("#chickenMasalaPrice").innerText;
  console.log(dishName);
  console.log(price);
  showSidebar();
});

document.querySelector("#close").addEventListener("click", (e) => {
  closeSidebar();
});

totalLock.addEventListener("click", () => {
  toggleSideBar();
});
