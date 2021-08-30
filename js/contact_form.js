/*$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

function submitForm(){
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
 
    $.ajax({
        type: "POST",
        url: "php/form_process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
            else{
                formError();
                submitMSG(false,text);
            }
        }
    });
}
function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}*/

var form = document.getElementById("my-form");
        
    async function handleSubmit(event) {
        event.preventDefault();
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            $('.message-sent').css("display", "block");
            setTimeout(function(){
                $('.message-sent').css("display", "");
            }, 5000);
            form.reset()
        }).catch(error => {
            $('.message-error').css("display", "block");
            setTimeout(function(){
                $('.message-error').css("display", "");
            }, 5000);
        });
    }
form.addEventListener("submit", handleSubmit);

function open_popup(url){
    var width   = 320;
    var height  = 240;
    var haut    = (screen.height-height)/2;
    var gauche  = (screen.width-width)/2;
    window.open(
        url,
        'popup_envoi_msg',
        'status=no , toolbar=no, location=yes, menubar=no, resizable=yes, top='+haut+', left='+gauche+', directories=no, width='+width+', height='+height
    );
}