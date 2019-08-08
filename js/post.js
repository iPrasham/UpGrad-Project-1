function edit()
{
    document.getElementById("edit_button").style.display = "none";
    document.getElementById("save_button").style.display = "block";
    document.getElementById("blogBody").contentEditable = "true";
    document.getElementById("span_title").contentEditable = "true";
    document.getElementById("blogBody").style.border = "1px solid #f3bcbc";
    document.getElementById("span_title").style.border = "1.5px solid #f3bcbc";
}
function save()
{
    document.getElementById("save_button").style.display = "none";
    document.getElementById("edit_button").style.display = "block";
    document.getElementById("blogBody").style.border = "none";
    document.getElementById("span_title").style.border = "none";
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
