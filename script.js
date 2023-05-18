function validateForm() {
    var rollno = document.getElementById("rollno").value;
    var mothername = document.getElementById("mothername").value;

  if (rollno === "" || mothername === "") {
    alert("Please fill in all fields.");
    return false; // Prevent form submission
  }
}
function showSemesterOptions() {
  var yearOptions = document.getElementsByName("year");
  var semesterSelect = document.getElementById("semester");
  // Hide all options by default
  for (var i = 0; i < semesterSelect.options.length; i++) {
    semesterSelect.options[i].style.display = "none";
  }
  
  // Show the relevant options based on the selected year
  for (var i = 0; i < yearOptions.length; i++) {
    if (yearOptions[i].checked) {
      var selectedYear = yearOptions[i].value;
      if (selectedYear === "second-year") {
        document.getElementById("third-sem").style.display = "block";
        document.getElementById("fourth-sem").style.display = "block";
      } else if (selectedYear === "third-year") {
        document.getElementById("fifth-sem").style.display = "block";
        document.getElementById("sixth-sem").style.display = "block";
      } else if (selectedYear === "fourth-year") {
        document.getElementById("seventh-sem").style.display = "block";
        document.getElementById("eighth-sem").style.display = "block";
      }
      break;
    }
  }
}