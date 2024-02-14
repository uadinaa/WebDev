const cinBox = document.getElementById("cinList")

// getElementsByClassName("cinList")
const listsBox = document.getElementById("listsbox")
// getElementsByClassName("listsbox")

function addTask(){
    if(cinBox.value === ''){
        alert("you must write something :|")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = cinBox.value;
        listsBox.appendChild(li);

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    cinBox.value = '';
    save();
}

listsBox.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        save();
    }
}, false);

function save(){
    localStorage.setItem("data", listsBox.innerHTML)
}

function show(){
    listsBox.innerHTML = localStorage.getItem("data");
}
show();