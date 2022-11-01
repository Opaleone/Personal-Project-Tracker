let taskArr = [];

if(JSON.parse(localStorage.getItem('tasks')) === null) {
  localStorage.setItem('tasks', JSON.stringify(taskArr));
}


function updateTasks() {
  let storedTasks = JSON.parse(localStorage.getItem('tasks'));

  let arrNum = 0

  for (let i = 9; i <= 17; i++) {
    let currentEl = document.getElementById(i);

    currentEl.textContent = storedTasks[arrNum]

    arrNum++
  }
}

function historyOfTasks(event) {
  event.preventDefault();

  let retreivedTasks = []

  $('.description').each(function () {
    retreivedTasks.push($(this).val());
    localStorage.setItem('tasks', JSON.stringify(retreivedTasks));
  })
}

function colorByTime() {
  let time = moment().hour();

  $(".description").each(function () {
    if(parseInt($(this).attr('id')) > time){
      $(this).addClass('future')
    }
    if(parseInt($(this).attr('id')) == time){
      $(this).addClass('present')
    }
    if(parseInt($(this).attr('id')) < time){
      $(this).addClass('past')
    }
  })
}

$('#currentDay').text(moment().format('dddd, MMMM Do'));
$('.saveBtn').on('click', historyOfTasks);


colorByTime();
updateTasks();