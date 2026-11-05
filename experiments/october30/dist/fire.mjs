// Non-tonal fireplace ambience: warm filtered noise and irregular wood crackles.
// Synthesised locally; never downloads audio or starts without a button press.
export function createFireBuffer(context, random=Math.random){
 const rate=context.sampleRate,seconds=24,buffer=context.createBuffer(2,rate*seconds,rate);
 for(let channel=0;channel<2;channel++){
  const data=buffer.getChannelData(channel);let warm=0,low=0;
  for(let i=0;i<data.length;i++){
   const noise=random()*2-1;warm=.965*warm+.035*noise;low=.998*low+.002*noise;
   const t=i/rate,envelope=.75+.13*Math.sin(t*.71)+.08*Math.sin(t*1.93);
   data[i]=(warm*.5+low*.45)*envelope;
  }
  for(let t=.3;t<seconds-.2;t+=.17+random()*.8){
   const start=Math.floor(t*rate),duration=Math.floor(rate*(.007+random()*.04)),strength=.025+random()*.13;let previous=0;
   for(let j=0;j<duration&&start+j<data.length;j++){
    previous=.45*previous+.55*(random()*2-1);
    data[start+j]+=previous*strength*Math.exp(-j/(duration*.18));
   }
  }
  // Smooth the loop boundary so there is no periodic click.
  const fade=Math.floor(rate*.045);
  for(let i=0;i<fade;i++){data[i]*=i/fade;data[data.length-1-i]*=i/fade;}
 }
 return buffer;
}
