a= 1+10;
b="1"+"10"
console.log(a==b);
console.log(a===b);


let task = [];
let tableBody= document.getElementById('tableBody');
let tr= document.getElementById('tr');

let taskName = document.getElementById('taskname');
let taskDesc = document.getElementById('taskDesc');
let taskDate = document.getElementById('taskDate');
const previousData = document.querySelector(".task_details-hide")

// renderTask=()=>{
//     task.map((user)=>{
           
//         // let tr= document.createElement('tr');
//         // let td1 = document.getElementById('td1');
//         // td1.innerText= user.taskName;
//         // let td2 = document.getElementById('td2');
//         // td2.innerText= user.taskDesc;
//         // let td3 = document.getElementById('td3');
//         // td3.innerText = user.taskDate;
//         // let td4 = document.getElementById('td4');
//         // let button1= document.createElement('btn');
//         // let button2= document.createElement('btn')
//         // button1.classList.add('btn-done')
//         // button2.classList.add('btn-remove');
//         // button1.innerHTML="Done"
//         // button2.innerHTML="Remove"
//         // button1.onclick = function(){

//         // }
//         // button2.onclick = function(){
//         //     tr.remove();
//         // }

//         // td4.appendChild(button1);
//         // td4.appendChild(button2)
        
//         // tableBody.appendChild(tr);
//         // tr.appendChild(td1);
//         // tr.appendChild(td2);
//         // tr.appendChild(td3);
//         // tr.appendChild(td4);

//         previousData.classList.add("d-none")

//         let details=document.getElementById('task-details');
//         let newTask = document.createElement("div")
//     newTask.innerHTML = `
//     <div class="new-task">
//         <div class="insideBox">
//             <div id="tick"></div>
//             <div id='row1'class='row'>
//                <div class="col">
//                <h3 class="newTaskName">${user.taskName}</h3>
//                </div>
//                <div class="col">
//                <p class="newTaskDescription">${user.taskDesc}</p>
//                </div>
//                <div class="col">
//                <p class="newTaskDate">${user.taskDate}</p>
//                </div>
//                <div class="col">
//                <button class="btn-remove"  onclick="remove()">Delete</button>
//                </div>
               
//             </div>
//         </div>
//     </div>
//     `
//         details.appendChild(newTask);
        
//        taskName.value = ""
//         taskDesc.value = ""
//         taskDate.value = ""
//         remove=()=>{
           
        
//         }

       

//     })
// }


addTask = () => {
      
   
    let text1= document.getElementById('text1');
    let text2 = document.getElementById('text2')
    let text3 = document.getElementById('text3')
    let name= document.getElementById('name');
    let desc= document.getElementById('desc');
    let due= document.getElementById('due');

     function displayData(){
        tableBody.innerHTML+= `<tr id="rowData">
                <td> ${taskName.value} </td>
                <td>${taskDesc.value} </td>
                <td>${taskDate.value}</td>
                <td>
                <button class="btn-remove" id="btn-remove" ">Remove</button>
                </td></tr>`;
    }


        
            if(taskName.value == ""){
                text1.innerText = "Fill Task Name!!"
                setTimeout(()=>{
                    text1.innerText = ""
                },2000)
                
            }
            else if(taskDesc.value == ""){
                
                text2.innerText = "Fill Task Description!!";
                setTimeout(()=>{
                    text2.innerText = ""
                },2000)
                
                
            }
           else if(taskDate.value == ""){
            text3.innerText = "Fill Task Due!!"
            setTimeout(()=>{
                text3.innerText = ""
            },2000)
                
            }
            else{
                let temptask = {
                    taskName: taskName.value,
                    taskDesc: taskDesc.value,
                    taskDate: taskDate.value,
                    taskid:task.length+1
                }
                task.push(temptask);
               
                console.log(task);

                previousData.classList.add('d-none');
                displayData();

                btnRemove= document.querySelectorAll(".btn-remove");
                
                  btnRemove.addEventListener('click', my)

                }

                


                

             
              
            }
            

          
            



