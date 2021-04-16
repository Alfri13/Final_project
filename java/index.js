var helloWorld = "test";

console.log(helloWorld);

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  $('#date-picker').mobiscroll().datepicker({
    controls: ['date'],
    touchUi: true
});

// time picker
$('#time-picker').mobiscroll().datepicker({
    controls: ['time'],
    touchUi: true
});