

// todo.js

// $(function(){
//     $("#enroll").click(enroll);
// })

// function enroll(){
    // var work = $("#work").val();
    // var time = $("#time").val();
    // var state = $("#state").val();
//     $(".todo").append(`<br> ${work}`);
//     $(".todoTime").append(`<br> ${time}`);
//     $(".todoState").append(`<br> ${state}`);
// }

$(function(){
    $("#enroll").attr("disabled", "disabled");

    $("#work").keyup(check); // 할일 입력시
    $("#tiem").change(check); // 시간 입력시
    $("#state").keyup(check); // 상태 입력시
    $("#work").focus();

    

    $("#enroll").click(add);
}); 

function add(){
    var work= $("#work").val();
    var work= $("#time").val();
    var work= $("#state").val();

    if( state === '완료' || state ==='진행중'){

        $("#todoList").append(`<li class="todo">${work}</li>
            <li class="todoTime">${time}</li>
            <li class="todoState">${state}</li> `);

            $("#work").val('');
            $("#time").val('');
            $("#state").val('');
}else{
    alert("상태는 완료 또는 진행중으로만 입력하세요.");
}

function check(){
    var work = $("#work").val();
    var time = $("#time").val();
        $("#enroll").removeAttr("disabled");
    }
}

