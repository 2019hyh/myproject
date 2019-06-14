function TagCheck() {
    TAg("ic1", 'i2', 'i1');
    TAg("ic2", 'i1', 'i2');
    TAg("ic3", 'i2', 'i1');
    TAg("ic4", 'i1', 'i2');
    TAg("ic5", 'i2', 'i1');
    TAg("id1", 'i4', 'i3');
    TAg("id2", 'i3', 'i4');
    TAg("id3", 'i3', 'i4');
    TAg("id4", 'i4', 'i3');

    function TAg(id, lei1, lei2) {
        var ele = document.getElementById(id);
        var offset = true;
        ele.onclick = function () {
            if (offset) {
                ele.className = lei1;
                offset = false;
            } else {
                ele.className = lei2;
                offset = true;
            }
        }
    }
}

function ScorllEvent() {
    var oFixLi = document.getElementById("fixLi");
    var oCeLan = document.getElementById("ceLan");
    var oGoTop = document.getElementById("goTop");
    var oTop = 0;
    var suDu = 0;
    var timer = null;
    oFixLi.onmouseover = function () {
        oCeLan.style.display = "block";
    }
    oFixLi.onmouseout = function () {
        oCeLan.style.display = "none";
    }
    oCeLan.onmouseover = function () {
        oCeLan.style.display = "block";
    }
    oCeLan.onmouseout = function () {
        oCeLan.style.display = "none";
    }

    window.onscroll = function () {
        oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop >= 800) {
            oGoTop.style.display = "block";
        } else {
            oGoTop.style.display = "none";
        }

        oGoTop.onclick = function () {
            clearInterval(timer);
            timer = setInterval(
                function () {
                    window.scrollBy(0, -10);
                }, 10)
        }
        if (oTop <= 0) {
            clearInterval(timer);
        }
    }

}

function scorlList() {
    var oNameList = document.getElementById("nameList");
    var aLI = oNameList.getElementsByTagName("li");
    /*var a=oUl.removeChild(ali[0]);
    oUl.appendChild(a);*/
    setInterval(function () {
        var a = oNameList.removeChild(aLI[0]);
        oNameList.appendChild(a);
    }, 500)
}

function sunNav() {
    this.oNav = document.getElementById("nav");
    this.aNavLi = this.oNav.getElementsByTagName("li");
    this.aNavDiv = this.oNav.getElementsByTagName("div");
    this.aI = this.oNav.getElementsByTagName("i")
    this.num = 0;

    this.j = 0;
}
sunNav.prototype.init = function () {
    for (let i = 0; i < this.aNavLi.length; i++) {
        this.show(i);
        this.hide(i);
    }
}
sunNav.prototype.show = function (i) {
    this.aNavLi[i].onmouseover = function (){
        for (let j = 0; j < this.aNavLi.length; j++) {
            this.aNavLi[j].className = "";
        }

        this.aNavDiv[i].style.display = "block";
        this.aI[i].style.transform = "rotate(360deg)";
        this.aNavLi[i].className = "eli";

    }
}
sunNav.prototype.hide = function (i) {
    this.aNavLi[i].onmouseout =function () {
        for (let j = 0; j < this.aNavLi.length; j++) {
            this.aNavLi[j].className = "";
        }
        this.aNavDiv[i].style.display = "none";
        this.aI[i].style.transform = "rotate(180deg)";

    }
}
let sunav = new sunNav();
sunav.init();

/* function sunNav() {
    var oNav = document.getElementById("nav");
    var aNavLi = oNav.getElementsByTagName("li");
    var aNavDiv = oNav.getElementsByTagName("div");
    var aI = oNav.getElementsByTagName("i")

    function zhankai() {
        for (var i = 1; i < aNavLi.length; i++) {
            aNavLi[i].index = i;
            aNavLi[i].onmouseover = function () {
                for (var j = 1; j < aNavLi.length; j++) {
                    aNavLi[j].className = "";
                }

                aNavDiv[this.index].style.display = "block";
                aI[this.index].style.transform = "rotate(360deg)";
                aNavLi[this.index].className = "eli";

            }
            aNavLi[i].onmouseout = function () {
                for (var j = 1; j < aNavLi.length; j++) {
                    aNavLi[j].className = "";
                }
                aNavDiv[this.index].style.display = "none";
                aI[this.index].style.transform = "rotate(180deg)";

            }
        }
    }
    zhankai();
} */


/*轮播图*/
function shuFling(Ban, Dot, per, next) {
    this.oBanner = document.getElementById(Ban); //获取大盒子
    this.ali1 = this.oBanner.getElementsByTagName("li"); //获取大盒子下的小盒子
    this.oDot = document.getElementById(Dot); //获取点
    this.ali2 = this.oDot.getElementsByTagName("li");
    this.oPer = document.getElementById(per);
    this.oNext = document.getElementById(next);
    this.num = 0;
    this.timer = null;
}
//集中的函数
shuFling.prototype.init = function () {
    // this.Per();   //点击按钮切换
    // this.Next();   //点击按钮切换
    this.Dit(); //点的切换
    this.Timer(); //轮播
}
shuFling.prototype.Per = function () {
    this.oPer.onclick =function (){
        this.Tag(this);
    }
}
shuFling.prototype.Next = function () {
    this.oNext.onclick = function (){
        this.Tag(this);
    }
}
shuFling.prototype.Dit = function () {
    for (let i = 0; i < this.ali2.length; i++) {
        this.ali2[i].index = i;
        this.ali2[i].onclick =function (){
            clearInterval(this.timer)
            this.num = this.ali2[i].index - 1;
            this.Tag(this)
            this.Timer();

        }
    }
}
shuFling.prototype.Tag = function (obj) {
    for (let i = 0; i < obj.ali1.length; i++) {
        obj.ali1[i].className = "";
        obj.ali2[i].className = "";
    }
    obj.num++;
    if (obj.num == obj.ali1.length) {
        obj.num = 0;
    } else if (obj.num < 0) {
        obj.num = obj.ali1.length - 1;
    }
    obj.ali1[obj.num].className = "active";
    obj.ali2[obj.num].className = "bit";

}
shuFling.prototype.Timer = function () {
    var This = this;
    this.timer = setInterval(function () {
        This.Tag(This);
    }, 2000)
}


var oBanner = new shuFling("bannerList", "dot", "per", "next");
oBanner.init();

/* function Menu(BTN, ELE) {
    this.oForm = document.getElementsByClassName("formTitle");
    this.oFormMain = document.getElementsByClassName("formMain");
    this.aTitle = document.querySelectorAll(".formTitle i");
    this.aMain = document.querySelectorAll(".formItem ul");
    this.aALL = document.querySelectorAll(BTN); 选项卡按钮
    this.oPia = document.querySelectorAll(ELE)  选项卡获取内容  

}
*/
 /*Menu.prototype.init = function () {
    for (let i = 0; i < this.aALL.length; i++) {
        this.aALL[i].onclick = () => {
           
            for (let j = 0; j < this.oPia.length; j++) {
                this.oPia[j].style.display = "none" 点击按钮让所有的内容隐藏 */
             /*   this.aALL[j].className = ""  给所有的按钮清除样式 

            }

            this.oPia[i].style.display = "block" /*让对应的内容显示
            this.aALL[i].className = "bur" /* 让对应的按钮添加样式 *
            return false; /* 取消a链接的默认行为 *


        }


    }
    this.tab()

}*//*
Menu.prototype.tab = function () {
    for (let i = 0; i < this.aTitle.length; i++) {

        this.aTitle[i].onclick = () => {

            for (let j = 0; j < this.aMain.length; j++) {
                console.log(i, j);
                this.aMain[j].style.display = "none"; /* 点击按钮让所有的内容隐藏 *
                this.aTitle[j].className = ""; /* 给所有的按钮清除样式 *
            }

            this.aMain[i].style.display = "block"; /*让对应的内容显示*/
           /*  this.aTitle[i].className = "aCur";
            让对应的按钮添加样式 

        }
    }
}
var tab = new Menu("#xinList a", ".dinPia", "bur")
tab.init();


Menu.prototype.tab = function (obj, num) {
    for (let j = 0; j < obj.aPane.length; j++) {
        obj.aPane[j].style.display = "none";
    }
    obj.aPane[num].style.display = "block";

}*/
function TabForm() {

    function Tag(title, main) {
        var oForm = document.getElementById(title);
        var oFormMain = document.getElementById(main);
        var aTitle = oForm.getElementsByTagName("i");
        var aMain = oFormMain.getElementsByTagName("ul");
        var aALL = document.getElementsByTagName("a");

        function NO() {
            for (var i = 0; i < aALL.length; i++) {
                aALL[i].onclick = function () {
                    return false;
                }
            }
        }
        NO();
        

        for (var i = 0; i < aTitle.length; i++) {
            aTitle[i].index = i;
            aTitle[i].onclick = function () {

                for (var j = 0; j < aMain.length; j++) {
                    aMain[j].style.display="none"
                }
                for (var k = 0; k < aTitle.length; k++) {

                    aTitle[k].className = "";
                }

                aMain[this.index].style.display = "block";
                aTitle[this.index].className = "aCur";

            }
        }
    }
    Tag("title", "fMain");
    Tag("title3", "fMain3");
    Tag("title2", "fMain2");
    var oXinList = document.getElementById("xinList");
    var aXinLi = oXinList.getElementsByTagName("li");
    var alink = oXinList.getElementsByTagName("a");
    var aDinPia = [$("dinPia1"), $("dinPia2"), $("dinPia3")];
    for (var i = 0; i < aXinLi.length; i++) {
        aXinLi[i].index = i;
        aXinLi[i].onclick = function () {
            for (var j = 0; j < aDinPia.length; j++) {
                aDinPia[j].style.display = "none";
            }
            for (var k = 0; k < alink.length; k++) {

                alink[k].className = "";
            }


            aDinPia[this.index].style.display = "block";
            alink[this.index].className = "bur"

        }

    }

    function $(id) {
        if (typeof id == "string") {
            return document.getElementById(id);
        } else if (typeof id == "function") {
            return window.onload = id;
        } else {
            return id;
        }
    }
}

function refore() {
    exChange("start1", 'end1', 'btn1');
    exChange("start2", 'end2', 'btn2');
    exChange("start3", 'end3', 'btn3');

    function exChange(start, end, btn) {
        var oStart = document.getElementById(start);
        var oEnd = document.getElementById(end);
        var oBtn = document.getElementById(btn);
        var str = null;
        oBtn.onclick = function () {
            str = oStart.value;
            oStart.value = oEnd.value
            oEnd.value = str;

        }
    }
}


function sWitch() {
    var oUser = document.getElementById("user");
    var oA = oUser.getElementsByTagName("a")[0];
    var oUl = oUser.getElementsByTagName("ul")[0];
    oA.onmouseover = kai;
    oUl.onmouseover = kai;
    oA.onmouseout = guAn;
    oUl.onmouseout = guAn;

    function kai() {
        oUl.style.display = "block";
    }

    function guAn() {
        oUl.style.display = "none";
    }
}

function TagTable() {
    var oNewList = document.getElementById("textList");
    var ali = oNewList.children;

    function sun(a) {
        for (var i = 0; i < ali.length; i++) {
            ali[i].getElementsByTagName("div")[0].style.opacity = 0;
        }
    }
    sun()
    ali[0].getElementsByTagName("div")[0].style.opacity = 1;

    function chAnge() {
        for (var i = 0; i < ali.length; i++) {
            ali[i].index = i;
            ali[i].onclick = function () {
                for (var j = 0; j < ali.length; j++) {
                    ali[j].children[0].className = "";
                }
                ali[this.index].children[0].className = "bli";
                sun();
                ali[this.index].getElementsByTagName("div")[0].style.opacity = 1;
            }
        }
    }
    chAnge();
}

function clearInput() {
    var aInput = document.getElementsByTagName("input");
    for (var i = 0; i < aInput.length; i++) {
        aInput[i].index = i;
        if (aInput[i].type == "text") {
            let Value=aInput[i].value;
            aInput[i].onfocus = function () {

                aInput[this.index].value = "";
                aInput[this.index].placeholder = "";
            }
            aInput[i].onblur=function () {
                aInput[this.index].value =Value;
                aInput[this.index].placeholder = Value;
              }
        }
    }
}

function Link() {
    var aA = document.getElementsByTagName("a")
    for (var i = 0; i < aA.length; i++) {
        aA[i].onclick = function () {
            return false;
        }
    }
}