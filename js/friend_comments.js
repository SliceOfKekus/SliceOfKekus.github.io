const button = document.querySelector('.show_comments_button')

function GetComments() {
    let packID = Math.floor(Math.random() * 3) + 1;
    //let data = fetch('https://my-json-server.typicode.com/SliceOfKekus/SliceOfKekus.github.io/comments?pack=' + packID).then(response => response.json());
    //let data = fetch('https://my-json-1server1.typi1cod1e1com/Slic1eOf1Kekus1/Sl1i1ceOfKeku1s.github.io/comments?pack=' + packID).then(response => response.json());
    let data = fetch('' + packID)
        .then(response => response.json());
    console.log(data);
    return data;
}

button.onclick = () => {
    const preloader = document.querySelector('.preloader')
    const comments = document.querySelector('.comments')

    preloader.style.display = "block";
    comments.innerHTML = "";
    GetComments().then(function(data) {
        for (let i = 0; i < data.length; ++i) {
            comments.innerHTML += `<p>${data[i]['name']}: ${data[i]['body']}</p>`
        }
    }).then(function() {
        preloader.style.display = "none";
        comments.style.display = "block";
    }).catch(() => {
        preloader.style.display = "none";
        comments.innerHTML = "Something went wrong :(";
    })
}