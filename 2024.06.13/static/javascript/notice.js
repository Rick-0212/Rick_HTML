

$(function(){

    $("#detail").keyup(function(){
  
        if($("#detail").val().length >=5){
           $("#save").removeAttr('disabled')
        }else{
            $("#save").attr('disabled' , '');
        }
    });

    $("#save").click(function(){
        let text = $("#detail").val();
        addList(text);
        
        // if (text ===''){
        //     alert("내용을 입력하세요");
        //     $("#detail").focus();
        //     return; //함수 강제종료를 위해
        // }
    }); //$("#save").click END
}); // $(function) END

function addList(text){
    $("#list").append('<li>'+text + '</li>');
}

