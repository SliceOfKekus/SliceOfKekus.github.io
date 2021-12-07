const input = document.querySelector('.comment_form')
const button = document.querySelector('.comment_button')
const commentSection = document.querySelector('.comments_container')

ShowComments();

function GetComments() {
    if (localStorage.length == 0)
        return [];
    else
        return JSON.parse(localStorage.getItem("comments"));
}

button.onclick = () => {
    let new_comment = document.querySelector('.comment_form input').value;
    let comments = GetComments();

    if (new_comment != "")
        comments.push(new_comment);
    localStorage.setItem("comments", JSON.stringify(comments));
    ShowComments();
    document.getElementById("input").value = "";
}

function ShowComments() {
    let comments = GetComments();
    let new_comments = `<div class="comments">`;

    comments.forEach((_comment, _index) => {
        new_comments += `<div class="comment"><div class="comment_text"><p>${_comment}</p></div><button class="delete_button" onclick="DeleteComment(${_index})">delete</button></div>`;
    });

    new_comments += `</div>`;
    commentSection.innerHTML = new_comments;
}

function DeleteComment(index) {
    let comments = GetComments();

    comments.splice(index, 1);
    localStorage.setItem("comments", JSON.stringify(comments));
    ShowComments();
}