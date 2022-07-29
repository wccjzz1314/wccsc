// poem
var words=[
    '王吃吃爱江贞贞',
    '居八盖的居居',
    '我傻但我爱你',
    '我永远在你身边',
    '想抱抱你',
    '我的告白你喜欢吗',
    '抑郁抑郁快走开',
    '爷永远爱你',
    '我们生闺女哦',
    '闺女不好就送她回炉重造',
    '等我练出腹肌',
    '我要先去找你',
    '好久不见你的起床气了宝宝',
    '一个月哪够，一辈子都嫌少',
    '冠名时间：永',
    '我会对你好的',
    '每天要多喝水',
    '每天都要喷鼻炎药',
    '遇见你是上辈子修来的福分',
    '我的爱只属于你一人',
    '可可爱爱，腻腻歪歪',
   ];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let text = document.querySelector('.text').querySelector('h1');
      setTimeout(function(){
        textone.innerHTML = '余生还请多多指教';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          text.innerHTML = '';
      },28000)


 
