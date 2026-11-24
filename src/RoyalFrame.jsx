import React from 'react';

// All artwork is vector based. The ornamental edge stays outside the text area.
const palettes = {
 welcome: ['#315e91','#8eb8e3','#f2d496','#fff4dc','#527d56'],
 haldi: ['#de790d','#f1a91b','#ffcf43','#fff0b1','#567e43'],
 mehndi: ['#2f663f','#7fa34e','#c7d67a','#f5e9ad','#365f39'],
 wedding: ['#b72b37','#ef6e58','#f0c16c','#fff2d4','#617a43'],
 vidai: ['#ad4d72','#e8a2ae','#f2d1ad','#fff2e6','#6f8b56'],
 location: ['#98713e','#d3ad68','#efd398','#fff5dc','#677c49']
};
const leaf='M0 0Q-7 -8 0 -17Q7 -8 0 0Z';
function Bloom({x=0,y=0,r=6,color,light}) {
 return <g transform={`translate(${x} ${y}) scale(${r/7})`}>
  <g fill={color} stroke="#fff5d8" strokeOpacity=".45" strokeWidth=".38">
   {Array.from({length:10},(_,i)=><ellipse key={i} cy="-4.5" rx="2.6" ry="3.9" transform={`rotate(${i*36})`}/>)}
  </g><g fill={light} opacity=".88">{Array.from({length:6},(_,i)=><ellipse key={i} cy="-2.5" rx="1.35" ry="2.3" transform={`rotate(${i*60+15})`}/>)}</g>
  <circle r="1.9" fill="#e4a73e" stroke="#fff0b1" strokeWidth=".5"/>
 </g>;
}
function Corner({c,gold,bottom=false}) {
 return <g>
  <path d="M9 62V23Q9 9 23 9H62M13 49Q23 19 50 13M13 36Q23 15 37 14" fill="none" stroke={gold} strokeWidth="1.6"/>
  <g fill={c[4]} stroke="#eed2a0" strokeWidth=".45">
   {[[-12,2,55],[5,0,90],[10,10,120],[0,13,160]].map(([x,y,a],i)=><path key={i} d={leaf} transform={`translate(${22+x} ${17+y}) rotate(${a}) scale(.85)`}/>)}
  </g>
  <Bloom x={15} y={15} r={8} color={c[0]} light={c[2]}/><Bloom x={29} y={12} r={6} color={c[1]} light={c[3]}/><Bloom x={13} y={30} r={6} color={c[2]} light={c[3]}/>
  {bottom&&<Bloom x={24} y={24} r={5} color={c[1]} light={c[3]}/>}
 </g>;
}
function Strand({c,gold,x,side,long}) {
 const count=long?15:12;
 return <g transform={`translate(${x} 18)`}><g className="royal-mala" style={{animationDelay:`${side*-1.3}s`}}>
  <path d={`M0 0Q${side?-3:3} ${count*4} 0 ${count*7+8}`} stroke={gold} strokeWidth="1.4" fill="none"/>
  {Array.from({length:count},(_,j)=><g key={j}>
   <path d={leaf} transform={`translate(0 ${j*7+7}) rotate(${j%2?72:-72}) scale(.46)`} fill={c[4]} stroke="#f3d699" strokeWidth=".4"/>
   <Bloom x={Math.sin(j*1.1)*1.5} y={j*7+5} r={j%3===0?4.8:3.8} color={c[j%4]} light={c[(j+2)%4]}/>
  </g>)}
  <g transform={`translate(0 ${count*7+7})`}><path d="M0 0L-4 8 0 13 4 8Z" fill={gold}/><circle className="royal-jewel" cy="15" r="2.2" fill="#fff8cf"/></g>
 </g></g>;
}
export default function RoyalFrame({theme}) {
 const c=palettes[theme]||palettes.welcome, id=`royal-metal-${theme}`, gold=`url(#${id})`;
 return <svg className="frame royal-frame" viewBox="0 0 360 640" preserveAspectRatio="none" aria-hidden="true">
  <defs><linearGradient id={id} x1="0%" x2="100%" y1="0%" y2="100%"><stop stopColor="#98682d"/><stop offset=".24" stopColor="#f3d18a"/><stop offset=".47" stopColor="#ad7832"/><stop offset=".68" stopColor="#fff0bd"/><stop offset="1" stopColor="#b98538"/></linearGradient></defs>
  <rect x="4" y="4" width="352" height="632" rx="13" fill="none" stroke={gold} strokeWidth="5"/>
  <rect x="9" y="9" width="342" height="622" rx="10" fill="none" stroke="#fff0b6" strokeOpacity=".85" strokeWidth=".8"/>
  <rect x="12" y="12" width="336" height="616" rx="8" fill="none" stroke={gold} strokeWidth="2"/>
  <rect x="16" y="16" width="328" height="608" rx="7" fill="none" stroke={gold} strokeWidth=".7"/>
  <rect className="royal-rim-glint" x="6" y="6" width="348" height="628" rx="11" fill="none" stroke="#fff6d0" strokeWidth="2" strokeDasharray="25 134"/>
  {[0,1].map(side=><g key={side} transform={side?'translate(360 0) scale(-1 1)':''}>
   <Corner c={c} gold={gold}/><g transform="translate(0 640) scale(1 -1)"><Corner c={c} gold={gold} bottom/></g>
   <path d="M21 151V574" stroke={gold} strokeWidth=".65" fill="none"/>
   {Array.from({length:14},(_,i)=><g key={i} transform={`translate(20 ${157+i*31})`}>
    <path d="M0 -13Q-7 -8 0 0Q7 8 0 13M0 -9Q5 -10 3 -5M0 9Q-5 10 -3 5" fill="none" stroke={gold} strokeWidth="1.05"/>
    {i%3===0?<Bloom r={3.6} color={c[(i/3)%4]} light={c[3]}/>:<path d="M0 -3L2.5 0 0 3 -2.5 0Z" fill={gold}/>}
   </g>)}
  </g>)}
  {[0,1].map(side=><Strand key={side} c={c} gold={gold} x={side?340:20} side={side} long={theme==='wedding'||theme==='haldi'}/>)}
  {/* Three gently curved floral swags, with a double beaded gold thread. */}
  {[0,1,2].map(i=><g key={i} transform={`translate(${34+i*97} 13)`}>
   <path d="M0 0Q48 37 97 0M0 4Q48 43 97 4" fill="none" stroke={gold} strokeWidth="1.15"/>
   <g className="royal-swag" style={{animationDelay:`${-i*.85}s`}}>
    {Array.from({length:9},(_,j)=>{const t=j/8,x=t*97,y=4+19*4*t*(1-t);return <g key={j}>
      <path d={leaf} fill={c[4]} transform={`translate(${x} ${y}) rotate(${j%2?148:210}) scale(.5)`}/>
      <Bloom x={x} y={y} r={j%3===0?5.6:4.7} color={c[(j+i)%4]} light={c[3]}/>
    </g>})}
    <path d="M48.5 23v4l-3 4 3 4 3-4-3-4" fill={gold} stroke={gold} strokeWidth=".6"/>
    <circle className="royal-jewel" cx="48.5" cy="35" r="1.5" fill="#fff5c2"/>
   </g>
  </g>)}
  <path d="M42 625Q82 611 122 625Q151 614 180 625Q209 614 238 625Q278 611 318 625" fill="none" stroke={gold} strokeWidth="1.1"/>
  {[65,103,142,180,218,257,295].map((x,i)=><Bloom key={x} x={x} y={624-(i%2)*2} r={i===3?5:3.8} color={c[i%4]} light={c[3]}/>)}
  {[30,330].map((x,i)=><g key={x} transform={`translate(${x} 600)`}><g className="kalash-motion" style={{animationDelay:`${-i*1.7}s`}}><path d="M-7-12Q-18 0-12 13Q0 21 12 13Q18 0 7-12Z" fill={gold} stroke="#b47816"/><path d="M-12 4Q0 10 12 4M-9-10H9" fill="none" stroke="#a45c19"/><path d="M0-12Q-16-14-12-26Q-2-25 0-12Q16-26 13-21Q13-15 0-12" fill={c[4]}/><Bloom y={-10} r={5} color={c[1]} light={c[3]}/></g></g>)}
 </svg>;
}
