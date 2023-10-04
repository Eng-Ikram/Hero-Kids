function search() {
    let searchBar = document.querySelector('.search-input').value.toLocaleUpperCase();
    let postList = document.querySelector('.post-list');
    let post = document.querySelectorAll('.post');
    let re = document.getElementsByTagName('h6');
    for (let i = 0; i < re.length; i++) {
        if (re[i].innerHTML.toLocaleUpperCase().indexOf(searchBar) >= 0) {
            post[i].style.display = "";
        }
        else {
            post[i].style.display = "none";
        }
    }
}