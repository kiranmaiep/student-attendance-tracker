function markAttendance() {
  const nameInput = document.getElementById("studentName");
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter a student name.");
    return;
  }

  const list = document.getElementById("attendanceList");
  const entry = document.createElement("li");
  entry.textContent = `${name} - Present ✅`;
  list.appendChild(entry);

  nameInput.value = "";
}
