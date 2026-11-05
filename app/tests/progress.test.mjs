import test from 'node:test';
import assert from 'node:assert/strict';
import {initialState,normalize,recordDay,entryGlow,totals} from '../dist/engine.mjs';

test('a quieter marked day reveals a stage and contributes to the 30-day goal',()=>{
 const s=initialState();
 assert.equal(recordDay(s,0,8000,true),true);
 assert.equal(totals(s).lit,1);
 assert.equal(totals(s).goal,300000);
 assert.equal(totals(s).remaining,292000);
 assert.equal(entryGlow(s,s.days[0]),.8);
 assert.equal(recordDay(s,0,9000,true),false);
 assert.equal(totals(s).lit,1);
 assert.equal(s.days[0].order,1);
});

test('goal changes affect future references, preserving past marks and glow after reload',()=>{
 let s=initialState();recordDay(s,0,8000,true);recordDay(s,1,12000,true);
 s.goal=15000;s=normalize(JSON.parse(JSON.stringify(s)));
 assert.equal(totals(s).lit,2);
 assert.equal(entryGlow(s,s.days[0]),.8);
 assert.equal(entryGlow(s,s.days[1]),1);
 recordDay(s,2,9000,true);
 assert.equal(s.days[2].goalAtEntry,15000);
 assert.equal(entryGlow(s,s.days[2]),.6);
 assert.equal(totals(s).goal,450000);
});

test('existing lit entries survive migration even below the current goal',()=>{
 const old=initialState();old.goal=15000;
 old.days[0]={steps:12000,lit:true,order:1,extras:{stretch:true}};
 const s=normalize(old);
 assert.equal(totals(s).lit,1);
 assert.equal(s.days[0].extras.stretch,true);
 s.goal=20000;
 assert.equal(entryGlow(s,s.days[0]),1);
});

test('saving steps alone does not mark a day; thirty deliberate marks finish the garden',()=>{
 const s=initialState();recordDay(s,0,20000,false);
 assert.equal(totals(s).lit,0);
 for(let i=0;i<30;i++)recordDay(s,i,i%2?8000:12000,true);
 assert.equal(totals(s).lit,30);
 assert.equal(totals(s).remaining,0);
 recordDay(s,0,20000,false);
 assert.equal(totals(s).lit,30);
 assert.equal(totals(s).extra,8000);
});

test('step boundaries never produce negative or unbounded totals',()=>{
 const s=initialState();recordDay(s,0,-4000,true);recordDay(s,1,200000,true);
 assert.equal(s.days[0].steps,0);
 assert.equal(s.days[1].steps,100000);
 assert.equal(totals(s).lit,2);
});

import {sceneFor,JOURNEY} from '../dist/engine.mjs';
test('reviewed discoveries stay on the agreed days without hanging lanterns',()=>{
 assert.equal(JOURNEY.length,31);
 for(const [day,kind] of [[6,'bird'],[11,'fox'],[13,'lamp'],[17,'owl'],[18,'hedgehog'],[20,'owlets'],[23,'pumpkins'],[24,'ripples'],[25,'fox'],[26,'snail'],[27,'canopy'],[28,'baby-snails'],[29,'fox'],[30,'finale']])assert.equal(sceneFor(day).kind,kind);
 for(let n=0;n<=30;n++){assert.equal(sceneFor(n).floating,0);assert.ok(sceneFor(n).label);}
 assert.equal(sceneFor(21).shooting,false);assert.equal(sceneFor(22).shooting,true);
 assert.equal(sceneFor(10).fox,false);assert.equal(sceneFor(11).fox,true);
});
test('room mute preference survives reload without granting the secret',()=>{
 const s=initialState();s.fireMuted=true;
 for(let i=0;i<30;i++)recordDay(s,i,8000,true);
 const restored=normalize(JSON.parse(JSON.stringify(s)));
 assert.equal(restored.fireMuted,true);assert.equal(restored.secret,false);assert.equal(restored.roomOpened,false);
});
