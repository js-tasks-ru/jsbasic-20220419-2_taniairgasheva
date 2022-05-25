function highlight(table) {
  let rowsList = table.querySelectorAll("tbody > tr");

  for (let row of rowsList) {
    let gender = row.children[2];
    row.classList.add(gender.textContent === "m" ? "male" : "female");

    if (row.children[1].textContent <= 18)
      row.style.textDecoration = "line-through"; // задача 4

    let status = row.children[3].dataset.available;
    if (status === "true") {
      row.classList.add("available");
    } else if (status === "false") {
      row.classList.add("unavailable");
    } else {
      row.hidden = true;
    }
  }
}
