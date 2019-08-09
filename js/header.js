function clear_signInModal()
{
    document.getElementById("username_signIn").value = "";
    document.getElementById("pass_signIn").value = "";
    
}
function clear_signUpModal()
{
    document.getElementById("fullname").value = "";
    document.getElementById("username").value= "";
    document.getElementById("pass").value = "";
    document.getElementById("confirm_pass").value = "";
}
function dismiss_signUp_modal()
{
    var fname = document.getElementById("fullname").value;
    var uname =  document.getElementById("username").value;
    var password = document.getElementById("pass").value;
    var conf_password = document.getElementById("confirm_pass").value;
    if(fname != "" && uname != "" && password != "" && conf_password != "")
    {
        document.getElementById("signUpModal").close();
    }
}
function dismiss_signIn_modal()
{
    var uname =  document.getElementById("username_signIn").value;
    var password = document.getElementById("pass_signIn").value;
    if(uname != "" && password != "")
    {
        document.getElementById("signIpModal").close();
    }
}
function dismiss_createPost_modal()
{
    var title =  document.getElementById("post_title").value;
    var content = document.getElementById("post_content").value;
    if(title != "" && content != "")
    {
        document.getElementById("createPostModal").close();
    }
}
