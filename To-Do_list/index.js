//If you do not input anything in the place of input, then you will see a kind of error message
//Then I added the above conditions using else. We have determined what kind of work will be done
document.querySelector('#push').onclick = function(){
  if(document.querySelector('#newtask input').value.length == 0){
    alert("Please Enter a Task")
}
  else{
    document.querySelector('#tasks').innerHTML += `
    <div class="task">
      <span id="taskname">
          ${document.querySelector('#newtask input').value}
      </span>
      <button class="delete">
          <i class="far fa-trash-alt"></i>Delete
      </button>
    </div>
    `;
    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
      current_tasks[i].onclick = function(){
          this.parentNode.remove();
      }
    }
  }
}
//edit button - return back to task writing
function edit_task(){
  var newValue = document.getElementById("newtask").value;
  document.getElementById("newtask").value = newValue;
  }

    