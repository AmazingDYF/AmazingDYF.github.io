if(window.console){Function.prototype.makeMulti=function(){let o=new String(this);return o=o.substring(o.indexOf("/*")+3,o.lastIndexOf("*/")),o};let o=function(){};var now1=new Date;function createtime1(){var n=["欢迎来到忆语`Blog!","面朝大海 春暖花开",`${o.makeMulti()}`];setTimeout(console.log.bind(console,`\n%c${n[0]} %c ${n[1]} %c \n\n${n[2]}\n`,"color:#3b70fc","","color:#3b70fc"))}function createtime2(){var o=["NCC2-036","调用前置摄像头拍照成功，识别为【小笨蛋】.","Photo captured: ","🤪 "];setTimeout(console.log.bind(console,`%c ${o[0]} %c ${o[1]} %c \n${o[2]}\n %c ${o[3]}\n`,"color:white; background-color:#4fd953","","","font-size:450%"))}createtime1(),createtime2(),console.log=function(){}}