let cur="Socrates";
function setLegend(n){cur=n;alert(n+" selected! Tap ENTER THRONE");}
function enterThrone(){
let a=document.getElementById('chatArea');
a.innerHTML="";
let h=document.createElement('h3');h.textContent=cur+" LIVE!";h.style.color="gold";h.style.textAlign="center";a.appendChild(h);
let box=document.createElement('div');box.id="msgs";a.appendChild(box);
let br=document.createElement('br');a.appendChild(br);
let inp=document.createElement('input');inp.id="inp";inp.placeholder="Ask "+cur+"...";a.appendChild(inp);
let btn=document.createElement('button');btn.textContent="SEND";btn.style.background="gold";btn.style.color="black";btn.style.padding="12px";btn.style.fontWeight="bold";btn.onclick=send;a.appendChild(btn);
add(cur+": Ask me anything Kargbo! Wisdom awaits!");
}
function add(t){let m=document.getElementById('msgs');let p=document.createElement('p');p.innerHTML=t;m.appendChild(p);m.scrollTop=m.scrollHeight;}
function send(){let i=document.getElementById('inp');let t=i.value;if(!t)return;add("<b>You:</b> "+t);i.value="";setTimeout(()=>{add("<b>"+cur+":</b> I hear '"+t+"' - Remember, wisdom is power!")},700);}