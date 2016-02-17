window.onload = function(){
// -------------------------扑克游戏---------------------------
// 在页面中用定位创建28个元素,放到一个div中
// 28个元素都用定位 1.1(top:0)  2.2(top 30) ......7.7(top 180)
var body = document.getElementById('body');
var poker = document.getElementById('poker');
var card = document.getElementById('card');
var els = document.getElementsByClassName('pk');
var els1 = document.getElementsByClassName('pk11');
var next = document.getElementById('next');
var reset = document.getElementById('reset');
var index=10,cishu=0;
var  fn1 = function(){
	for(var i = 0;i<7;i++){
		for( var j=0;j<i+1;j++){
		  var div = document.createElement('div');
          div.setAttribute('class','pk');
          div.setAttribute('id',i+'_'+j);
          div.style.position = 'absolute';
          div.style.top = i*50+'px';
          // 55是一张扑克牌一半宽度,110 是一张扑克牌厚度加了点,增加间距
          div.style.left = (6-i)*55 +j*110+'px';
          poker.appendChild(div);
            //setTimeout(function(){
            //    div.style.webkitTransform = 'rotateZ(360deg)';
            //},30)
		} 
	}
};
fn1();

var fn2 = function(){
  for( var i=0;i<24;i++){
      var div = document.createElement('div');
          div.setAttribute('class','pk11');
          div.style.position = 'absolute';
          div.style.bottom = 0+'px';
          div.style.left=0+'px'; 
          div.setAttribute('id',0+'_'+i);
          div.style.zIndex=index;
          index++;
          card.appendChild(div);
    }
};
fn2();
//类似于开关思想(简化后把if的等于变为不等于,相同的移除if  else外,把else中的放入if删除else)
var previous = null;
var xianshi=100;
var shuzi={A:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',J:'11',Q:'12',K:'13'};
poker.onclick = function(e){
    var el = e.target;
    if(el == this) return;
    el.style.cursor='pointer';
    var id=el.getAttribute('id'); //5_2
    // console.log(Number(id.split('_')[0]),Number(id.split('_')[1]));
    var x=Number(id.split('_')[0]);
    var y=Number(id.split('_')[1]);
    var tx = document.getElementById((x+1)+'_'+y);
    var ty = document.getElementById((x+1)+'_'+(y+1));
    if(tx || ty )   return;
    if(previous !==null){
       // previous = e.target;  
    	 previous.style.border ='none';
       previous.style.boxShadow = '1px 2px 6px black';
      if(Number(shuzi[el.innerHTML])+Number(shuzi[previous.innerHTML]) == 13){
        el.parentElement.removeChild(el);
        previous.parentElement.removeChild(previous);
      }
    }
    if(el.innerHTML=='K'){
      el.parentElement.removeChild(el);
    }
     el.style.border = '1px solid #928B8B';
     el.style.boxShadow='0px 2px 12px rgba(165,161,161,0.6)';
    previous=e.target;
  };
next.onclick = function(){
      if(card.length<=0)return;
      rpoker.appendChild(card.removeChild(card.lastElementChild));
      rpoker.lastElementChild.style.zIndex=xianshi;
};
reset.onclick = function(){
    while(rpoker.lastElementChild){
        card.appendChild(rpoker.removeChild(rpoker.lastElementChild));
      }
      cishu++;
    if(cishu>3){
      //alert('你的机会已经用完了');
        $(".tishi").css({"display":"block"});
      //location.reload();
    }
};
      

var dict ={1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'};
var huase = ['rd','bk','fk','mh'];
var fn3 = function(){
	var zidian = {};    //记录产生的牌,
	var poker = [], hh ,nu;     //最后的数组
    while( poker.length !=52){           
    	hh =huase [ Math.floor(Math.random()*4)];
    	nu =dict  [ Math.floor(1+Math.random()*13)];
    	var pai = {huase:hh,number:nu};
    	if( !zidian[hh+nu]){            //看字典中是否有重复的
    	   poker.push(pai);
    	   zidian[hh+nu] = true;       //改为dict[hh+nu] = '';可能会出现错误(出现重复),所有吧''改为真值
    	         // 'hh+nu'  in zidian       //hh+nu必须带字符串
      }
    }
    return poker;          //52个对象
};
// console.table( fn3());
// 显示扑克
var poker = fn3();
for( var i = 0;i<els.length;i++){
	els[i].innerHTML  = poker[i].number;
	if( poker[i].huase =='rd'){
		els[i].style.background='url(./img/r.png)';
	}
  if( poker[i].huase =='bk'){
    els[i].style.background='url(./img/h.png)';
  }
  if( poker[i].huase =='fk'){
    els[i].style.background='url(./img/f.png)';
  }
  if( poker[i].huase =='mh'){
    els[i].style.background='url(./img/m.png)';
  }
}
// 下部显示扑克
for(var i=0;i<els1.length;i++){
      els1[i].innerHTML=poker[28+i].number;
if( poker[28+i].huase =='rd'){
    els1[i].style.background='url(./img/r.png)';
  }
  if( poker[28+i].huase =='bk'){
    els1[i].style.background='url(./img/h.png)';
  }
  if( poker[28+i].huase =='fk'){
    els1[i].style.background='url(./img/f.png)';
  }
  if( poker[28+i].huase =='mh'){
    els1[i].style.background='url(./img/m.png)';
  }
}

document.ondblclick = function(e){
  e.preventDefault();
};



};