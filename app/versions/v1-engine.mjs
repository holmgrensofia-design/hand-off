export const MAX_STEPS=100000;
export function cleanSteps(value){return Math.max(0,Math.min(MAX_STEPS,Number(String(value).replace(/[^0-9]/g,''))||0));}
export function localISO(date=new Date()){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}
export function dateFor(start,index){const [y,m,d]=start.split('-').map(Number);return new Date(y,m-1,d+index,12);}
export function dayIndex(start,now=new Date()){const d=new Date(now.getFullYear(),now.getMonth(),now.getDate(),12);return Math.round((Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())-Date.UTC(...start.split('-').map((v,i)=>i===1?+v-1:+v)))/86400000);}
export function validISO(s){if(!/^\d{4}-\d{2}-\d{2}$/.test(s||''))return false;const d=dateFor(s,0);return !Number.isNaN(+d)&&localISO(d)===s;}
export function initialState(){return {version:1,start:localISO(),goal:10000,addons:['stretch','breakfast'],days:Array.from({length:30},()=>({steps:null,lit:false,extras:{}})),secret:false,device:{}};}
export function normalize(raw){const base=initialState();if(!raw||raw.version!==1)return base;base.start=validISO(raw.start)?raw.start:base.start;base.goal=Math.max(1,cleanSteps(raw.goal)||10000);base.addons=Array.isArray(raw.addons)?raw.addons.filter(x=>['stretch','breakfast'].includes(x)):base.addons;base.secret=raw.secret===true;for(let i=0;i<30;i++){const d=raw.days?.[i];if(d){base.days[i]={steps:d.steps==null?null:cleanSteps(d.steps),lit:d.lit===true,extras:{stretch:d.extras?.stretch===true,breakfast:d.extras?.breakfast===true}};}}if(raw.device&&typeof raw.device==='object'){for(let i=0;i<30;i++)if(raw.device[i]!=null)base.device[i]=cleanSteps(raw.device[i]);}return base;}
export function totals(state){return {steps:state.days.reduce((s,d)=>s+(d.steps||0),0),lit:state.days.filter(d=>d.lit&&d.steps>=state.goal).length};}
export function qualifySecret(deviceSteps){return cleanSteps(deviceSteps)>=20000;}
