let $chatBody = document.querySelector(".chatBody");
let $txt = document.querySelector(".textInput");
let a = Date();
function send(doc) {
  console.log("send darsan");
  let $chatBody = document.querySelector(".chatBody");
  let $chatData = document.createElement("div");
  $chatData.classList.add("chatData");
  if (doc.data().name === localStorage.getItem("username")) {
    $chatData.classList.add("left");
  } else {
    $chatData.classList.add("right");
  }
  let $top = document.createElement("div");
  $top.classList.add('top');
  let $username = document.createElement("span");
  $username.classList.add("username");
  // if(doc.data().name)
  $username.innerText = doc.data().name;
  let $smsdate = document.createElement("span");
  $smsdate.classList.add("smsdate");
  $smsdate.innerText = doc.data().createdtime;
  let $smsText = document.createElement("span");
  if (doc.data().name === localStorage.getItem("username")) {
    $smsText.classList.add("smsText-left");
  } else {
    $smsText.classList.add("smsText-right");
  }
  $smsText.innerText = doc.data().text;

  $top.append($username,$smsdate)
  $chatData.append($top, $smsText);
  $chatBody.prepend($chatData);
}

{
  /*           <div class="chatData left">
            <div class="top">
            <span class="username">Temuujin</span>
            <span class="smsdate"> today</span>
          </div>
            <span class ="smsText-left">zuun tald baina</span>
          </div>*/
}

db.collection("groupChat").onSnapshot((sms) => {
  $chatBody.innerHTML = "";
  for (const doc of sms.docs) {
    send(doc);
  }
});
document.querySelector(".sendButton").onclick = () => {
  db.collection("groupChat").add({
    text: $txt.value + "",
    createdtime: a.replace(" GMT+0800 (Ulaanbaatar Standard Time)", "") + "",
    name: localStorage.getItem("username"),
  });
};
