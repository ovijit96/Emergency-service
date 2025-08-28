let loveCount = 0 ;

let copyCount = 0 ;

let coins = 100 ;

// elements by id

const loveCountEl = document.getElementById("love-count");
const pointsEl = document.getElementById("points");
const navCopyBtn = document.querySelector(".navbar .bg-green-600"); 
const callHistoryEl = document.getElementById("call-history");
const clearHistoryBtn = document.getElementById("clear-history");

//love Buttons

const loveButtons = document.getElementsByClassName("love-btn");
for (let i = 0; i < loveButtons.length; i++) {
  loveButtons[i].addEventListener("click", function () {
    loveCount = loveCount + 1;
    loveCountEl.textContent = loveCount;
  });
}

//copy Buttons
const copyButtons = document.getElementsByClassName("copy-btn");
for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
    const number = this.getAttribute("data-number");
    navigator.clipboard.writeText(number);
    copyCount = copyCount + 1;
    navCopyBtn.textContent = `📋 Copy (${copyCount})`;
  });
}

//call Button
const callButtons = document.getElementsByClassName("call-btn");
for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    const number = this.getAttribute("data-number");
    const service = this.getAttribute("data-service");

    if (coins >= 20) {
      coins = coins - 20;
      pointsEl.textContent = coins;

      alert("Calling " + service + " (" + number + ")...");
      // time genarate
      const now = new Date();
      const localTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      const li = document.createElement("li");
      li.innerHTML = `
        <span style="margin-right:6px;">📞</span> 
        <strong>${service}</strong> - ${number} 
        <span style="float:right; font-size:12px; color:gray;">${localTime}</span>
      `;
      
      callHistoryEl.prepend(li);
    } else {
      alert("❌ আপনার কাছে পর্যাপ্ত কয়েন নেই!");
    }
  });
}

//call log
clearHistoryBtn.addEventListener("click", function () {
  callHistoryEl.innerHTML = "";
});