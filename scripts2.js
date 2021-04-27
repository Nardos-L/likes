var likes = [0,0,0];

function increaseNumber(id,index){
    var user = document.querySelector(id);
    likes[index]++;
    user.innerText = likes[index] + " like(s)";
}
