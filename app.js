const state={calendar:[{time:"18:30",title:"Dinner with Alex"},{time:"20:00",title:"Movie night"}],shopping:["Popcorn","Sparkling water"],routines:["Good morning","Good night"]};
const tools={
getCalendar(){return{name:"get_calendar",result:state.calendar}},
addShopping(item){item=item.replace(/\.$/,"").trim();if(!state.shopping.some(x=>x.toLowerCase()===item.toLowerCase()))state.shopping.push(item);return{name:"add_to_shopping_list",result:`Added “${item}” to your shopping list.`}},
createRoutine(name){state.routines.push(name);return{name:"create_home_routine",result:`Created the “${name}” routine.`}},
scheduleEvent(title,time){state.calendar.push({time,title});return{name:"schedule_calendar_event",result:`Scheduled “${title}” for ${time}.`}}
};
function plan(text){const t=text.toLowerCase(),steps=[];
if(t.includes("calendar")||t.includes("schedule")||t.includes("what's on")){const c=tools.getCalendar();steps.push(c);return{answer:`You have ${c.result.length} calendar items today: ${c.result.map(x=>`${x.time} — ${x.title}`).join("; ")}.`,steps};}
if(t.includes("shopping")||t.includes("add ")||t.includes("popcorn")||t.includes("water")){let item="Popcorn";const m=text.match(/add\s+(.+?)\s+to\s+(my\s+)?shopping/i);if(m)item=m[1];else if(t.includes("sparkling water"))item="Sparkling water";const r=tools.addShopping(item);steps.push(r);return{answer:`Done. ${r.result}`,steps};}
if(t.includes("routine")){const r=tools.createRoutine(t.includes("quiet")?"Quiet evening":"Custom home routine");steps.push(r);return{answer:`Done. ${r.result}`,steps};}
if(t.includes("movie night")||t.includes("movie")){const a=tools.addShopping("Popcorn"),b=tools.addShopping("Sparkling water"),c=tools.scheduleEvent("Movie night","20:00");steps.push(a,b,c);return{answer:"Movie night is ready: I added snacks to your shopping list and scheduled the event for 20:00.",steps};}
return{answer:"I can coordinate calendar, shopping and home routines. Try “Prepare movie night for Friday at 8”, “Add popcorn to my shopping list”, or “What's on my calendar today?”.",steps};}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));}
function addMessage(text,who,trace=[]){const chat=document.querySelector("#chat"),div=document.createElement("div");div.className=`message ${who}`;div.innerHTML=`<strong>${who==="user"?"You":"Nexanix"}</strong><p>${esc(text)}</p>`;if(trace.length){const box=document.createElement("div");box.className="tooltrace";box.innerHTML="<strong>Agent tool calls</strong>"+trace.map(x=>`<div>✓ ${esc(x.name)} — ${esc(typeof x.result==="string"?x.result:"completed")}</div>`).join("");div.appendChild(box)}chat.appendChild(div);chat.scrollTop=chat.scrollHeight}
function submit(text){text=text.trim();if(!text)return;addMessage(text,"user");const r=plan(text);setTimeout(()=>addMessage(r.answer,"assistant",r.steps),220)}
document.querySelector("#composer").addEventListener("submit",e=>{e.preventDefault();const i=document.querySelector("#input");submit(i.value);i.value=""});
document.querySelectorAll("[data-prompt]").forEach(b=>b.addEventListener("click",()=>submit(b.dataset.prompt)));