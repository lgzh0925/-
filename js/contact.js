console.log("it works")

$(document).ready(function () {
    $(".submit-btn").click(function(event){
        // event.preventDefault()
        console.log("clickbutton")

        var name = $(".name").val()
        var email = $(".email").val()
        var subject = $(".subject").val()
        var message = $(".message").val()
        var statusElm = $(".status")
        statusElm.empty()

        if (name.length>=2){
            console.log("Name is valid")
        }else{
            event.preventDefault();
            statusElm.append("<div>请输入正确的姓名</div>")
        }


        if(email.length>5 && email.includes("@") &&email.includes(".")){
            console.log("Email is valid")
        }else{
            event.preventDefault()
            statusElm.append("<div>请输入正确的邮件地址</div>")
        }

        if(subject.length>3){
            console.log("Subject is valid")     
        }else{
            event.preventDefault()
            statusElm.append("标题不得少于三个字")     
        }

        if (message.length>10){
            console.log("Subject is valid")     
        }else{
            event.preventDefault()
            statusElm.append("<div>正文不得少于10字</div>")     
        }


    })

})