function edit()
{
    document.getElementById("edit_button").style.display = "none";
    document.getElementById("save_button").style.display = "block";
}
function save()
{
    document.getElementById("save_button").style.display = "none";
    document.getElementById("edit_button").style.display = "block";
}
var count = 1;
function like()
{
    if(count == 1)
    {
        document.getElementById("like_button").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
        document.getElementById("like_text").innerHTML = count + " person likes this!";
        count++;
    }
    else
    {
        document.getElementById("like_button").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
        document.getElementById("like_text").innerHTML = count + " people have liked this!";
        count++;
    }

}
function comment()
{
    if(document.getElementById("comment_box").value == "")
    {
        alert("Do write some comment");
    }
    else
    {
        var text = document.getElementById("comment_box").value;
        var template = document.createElement("div");
        template.setAttribute("class", "comments");
        var textTemplate = document.createTextNode(text); 
        template.appendChild(textTemplate); 
        document.getElementById("all_comment_box").prepend(template);
        document.getElementById("comment_box").value = "";
    }
}
