var todoList = [];
const calender = document.getElementById("cal");
const todo = document.getElementById("todo")
console.log(todoList);
function onClick() {
    var e =todo.value;
    if (todoList.includes(e)){
        alert('Đã tồn tại!!!');
    } else {
        todoList.push(e);
        num = todoList.length - 1;
        document.getElementById("cal").innerHTML += '<div class="box history-box" id="num'+num+'"><div class="todo">'+e+'</div><input class="btn" type="button" value="x" onclick="event.preventDefault; del('+num+')"></div>';
        alert('Thêm vào thành công');
    }
}
function del(num){
    delete todoList[num];
    let eDiv = document.getElementById('num'+num);
    document.getElementById('num'+num).parentNode.removeChild(eDiv);
}