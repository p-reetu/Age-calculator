function calculate() {
    event.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let years = currentYear - year;
    let months = currentMonth - month;
    let days = currentDay - day;

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
    if (days < 0) {
      const tempDate = new Date(currentYear, currentMonth - 1, 0);
      days += tempDate.getDate();
      months--;
    }
    document.querySelector("#main-row .row:nth-child(2) h1 span").textContent = years;
    document.querySelector("#main-row .row:nth-child(3) h1 span").textContent = months;
    document.querySelector("#main-row .row:nth-child(4) h1 span").textContent = days;
  }
  

  function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");

    const icon = document.getElementById("theme-icon");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
  }
  
  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);