function sendMessage() {
  const input = document.getElementById("user-input");
  const log = document.getElementById("chat-log");
  const userText = input.value.trim();
  if (userText === "") return;

  const userDiv = document.createElement("div");
  userDiv.textContent = "🧑‍💻 " + userText;
  log.appendChild(userDiv);

  const botDiv = document.createElement("div");
  botDiv.textContent = "🤖 در حال جستجو برای \"" + userText + "\"...";
  log.appendChild(botDiv);
  input.value = "";
  log.scrollTop = log.scrollHeight;

  setTimeout(() => {
    const response = getBookSuggestion(userText);
    const replyDiv = document.createElement("div");
    replyDiv.innerHTML = response;
    log.appendChild(replyDiv);
    log.scrollTop = log.scrollHeight;
  }, 1000);
}

function getBookSuggestion(topic) {
  topic = topic.toLowerCase();
  if (topic.includes("رمان")) {
    return `📖 چند رمان پیشنهادی:
    <ul>
      <li>نام من سرخ – اورهان پاموک</li>
      <li>صد سال تنهایی – گابریل گارسیا مارکز</li>
      <li>سووشون – سیمین دانشور</li>
    </ul>`;
  } else if (topic.includes("روان")) {
    return `🧠 کتاب‌های روانشناسی پیشنهادی:
    <ul>
      <li>انسان در جستجوی معنا – ویکتور فرانکل</li>
      <li>هنر شفاف اندیشیدن – رولف دوبلی</li>
      <li>تسلط بر عادت – جیمز کلیر</li>
    </ul>`;
  } else if (topic.includes("موفق")) {
    return `🚀 کتاب‌های موفقیت و انگیزشی:
    <ul>
      <li>اثر مرکب – دارن هاردی</li>
      <li>بیندیشید و ثروتمند شوید – ناپلئون هیل</li>
      <li>قورباغه‌ات را قورت بده – برایان تریسی</li>
    </ul>`;
  } else {
    return `🤔 متأسفم! فعلاً برای \"${topic}\" کتابی در دیتابیس ندارم.`;
  }
}

function setTheme(color, el) {
  document.body.style.background = `linear-gradient(135deg, #1e1b2b, ${color})`;
  document.querySelectorAll(".color-btn").forEach(btn => btn.classList.remove("active"));
  el.classList.add("active");
}
