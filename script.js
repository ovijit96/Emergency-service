let loveCount = 0;
let copyCount = 0;
let coins = 100;

// elements by id
const loveCountEl = document.getElementById("love-count");
const pointsEl = document.getElementById("points");
const navCopyBtn = document.querySelector(".navbar .bg-green-600");
const callHistoryEl = document.getElementById("call-history");
const clearHistoryBtn = document.getElementById("clear-history");

// love Buttons
const loveButtons = document.getElementsByClassName("love-btn");
for (let i = 0; i < loveButtons.length; i++) {
  loveButtons[i].addEventListener("click", function () {
    loveCount++;
    loveCountEl.textContent = loveCount;
  });
}

// copy Buttons
const copyButtons = document.getElementsByClassName("copy-btn");
for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
    const number = this.getAttribute("data-number");
    navigator.clipboard.writeText(number);
    copyCount++;
    navCopyBtn.textContent = `📋 Copy (${copyCount})`;
  });
}

// call Button
const callButtons = document.getElementsByClassName("call-btn");
for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    const number = this.getAttribute("data-number");
    const service = this.getAttribute("data-service");

    if (coins >= 20) {
      coins -= 20;
      pointsEl.textContent = coins;

      alert(`Calling ${service} (${number})...`);

      // time generate
      const now = new Date();
      const localTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      // create li element
      const li = document.createElement("li");

      // icon
      const icon = document.createElement("span");
      icon.textContent = "📞";
      icon.style.marginRight = "6px";

      // text
      const text = document.createElement("strong");
      text.textContent = `${service} - ${number}`;

      // time
      const time = document.createElement("span");
      time.textContent = localTime;
      time.style.float = "right";
      time.style.fontSize = "12px";
      time.style.color = "gray";

      // append all
      li.appendChild(icon);
      li.appendChild(text);
      li.appendChild(time);

      // prepend to call history
      callHistoryEl.prepend(li);

    } else {
      alert("❌ আপনার কাছে পর্যাপ্ত কয়েন নেই!");
    }
  });
}

// clear call log
clearHistoryBtn.addEventListener("click", function () {
  callHistoryEl.innerHTML = "";
});
