document.addEventListener("DOMContentLoaded", function () {
  const upcomingSection = document.getElementById("upcoming");
  const countdown = document.getElementById("countdown");
  let lastShownMinute = null;

  const upcomingHTML = `
    <h2>7月5日（金）〜7月11日（木）のレッスン</h2>
    <div class="lesson-list">
      <div class="lesson-day">7月10日（水）</div>
      <div class="lesson"><a href="seats.html">18:00 FEEL HIGH</a></div>
      <div class="lesson"><a href="seats.html">19:30 BB2 Rock2</a></div>
      <div class="lesson"><a href="seats.html">20:00 BB2 SUMMER2</a></div>
    </div>
  `;

  function checkAndUpdate() {
    const now = new Date();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const totalSeconds = now.getHours() * 3600 + min * 60 + sec;
    countdown.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

    if (min % 3 === 0 && sec === 0 && lastShownMinute !== min) {
      lastShownMinute = min;
      upcomingSection.innerHTML = upcomingHTML;

      // 自動で2分後に消す
      setTimeout(() => {
        upcomingSection.innerHTML = '';
      }, 2 * 60 * 1000);
    }
  }

  setInterval(checkAndUpdate, 1000);
});
