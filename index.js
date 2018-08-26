/**
 * Created by mac on 2018/8/21.
 */


$(function(){
    $('#fullpage').fullpage({
            // 'verticalCentered': false
            //     paddingBottom:200
            'verticalCentered': false,
            'css3': true,
            // 'sectionsColor': ['#254875', '#00FF00', '#254587', '#695684'],
            anchors: ['page1', 'page2', 'page3', 'page4'],
            'navigation': true,
            'navigationPosition': 'right',
            'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple']
        }
    );
});


// var text = document.getElementById('text'),
//     body = document.body,
//     steps = 7;
// function threedee (e) {
//     var x = Math.round(steps / (window.innerWidth / 2) * (window.innerWidth / 2 - e.clientX)),
//         y = Math.round(steps / (window.innerHeight / 2) * (window.innerHeight / 2 - e.clientY)),
//         shadow = '',
//         color = 190,
//         radius = 3,
//         i;
//
//     for (i=0; i<steps; i++) {
//         tx = Math.round(x / steps * i);
//         ty = Math.round(y / steps * i);
//         if (tx || ty) {
//             color -= 3 * i;
//             shadow += tx + 'px ' + ty + 'px 0 rgb(' + color + ', ' + color + ', ' + color + '), ';
//         }
//     }
//
//     shadow += x + 'px ' + y + 'px 1px rgba(0,0,0,.2), ' + x*2 + 'px ' + y*2 + 'px 6px rgba(0,0,0,.3)';
//
//     text.style.textShadow = shadow;
//     text.style.webkitTransform = 'translateZ(0) rotateX(' + y*1.5 + 'deg) rotateY(' + -x*1.5 + 'deg)';
//     text.style.MozTransform = 'translateZ(0) rotateX(' + y*1.5 + 'deg) rotateY(' + -x*1.5 + 'deg)';
// }
//
// document.addEventListener('mousemove', threedee, false);
//


$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav");
    }
});



$(document).ready(function(e) {

    $("#bodyPage").fullImages({
        // ImgWidth: 1920,
        ImgWidth: 1920,
        ImgHeight: 980,
        autoplay :  3500,
        fadeTime : 1500
    });

});

$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});

$('#myTabs a[href="#profile"]').tab('show') // Select tab by name
$('#myTabs a:first').tab('show') // Select first tab
$('#myTabs a:last').tab('show') // Select last tab
$('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)

// $(function () {
//     function resize() {
//         //获取屏幕宽度
//         var windowWidth = $(window).width();
//         //判断屏幕的大小
//         var isSmallScreen = windowWidth < 768;
//         //根据大小为界面上的每一张轮播图设置背景
//         $('#main_ad > .carousel-inner > .item').each(function (i,item) {
//             //因为获取的是dom对象，要把DOM对象转换成jquery对象
//             var $item = $(item);
//             //根据屏幕的大小来获取不同的图片 data()函数就是专门获取data属性的
//             var imgSrc =
//                 isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
//             //获得data属性后，给div设置背景图片
//             $item.css('backgroundImage', 'url("' + imgSrc + '")');
//             // 针对移动端，尺寸需要等比例变化，所以小屏幕使用img方式 ，在div中添加img标签
//             if (isSmallScreen){
//                 $item.html('<img src="'+imgSrc+'" alt="小图"/>')
//             } else{
//                 // 当屏幕由小到大切换时，清空div中的img标签
//                 $item.empty();
//             }
//         });
//     }
//
//     $(window).on('resize', resize).trigger('resize');
// });

// 第二屏图表----------------------------
var myChart = echarts.init(document.getElementById('tmain'));


var option = {
    backgroundColor: '#132028',

    title: {
        text: '设计技能',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'百分比',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'Photoshop'},
                {value:310, name:'Illustrator'},
                {value:280, name:'sketch'},
                {value:274, name:'Axure'},
                {value:234, name:'Principle'},
                {value:240, name:'After Effects'},
                {value:300, name:'CINEMA 4D'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
myChart.setOption(option);


var myChart2 = echarts.init(document.getElementById('rmain'));


var option2 = {
    backgroundColor: '#132028',

    title: {
        text: '代码技能',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'Html5'},
                {value:310, name:'CSS3'},
                {value:280, name:'Bootstrap'},
                {value:264, name:'Jquery'},
                {value:230, name:'Javascript'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#FFCD55',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
myChart2.setOption(option2);



// 第三屏手风琴----------------------------
var Expand = function () {
    var tile = $('.strips__strip');
    var tileLink = $('.strips__strip > .strip__content');
    var tileText = tileLink.find('.strip__inner-text');
    var stripClose = $('.strip__close');
    var expanded = false;
    var open = function () {
        var tile = $(this).parent();
        if (!expanded) {
            tile.addClass('strips__strip--expanded');
            tileText.css('transition', 'all 0.6s 1s cubic-bezier(0.23, 1, 0.32, 1)');

            stripClose.addClass('strip__close--show');
            stripClose.css('transition', 'all 0.6s 1s cubic-bezier(0.23, 1, 0.32, 1)');

            expanded = true;
        }
    };
    var close = function () {
        if (expanded) {
            tileText.removeAttr("style");
            tile.removeClass('strips__strip--expanded');
            tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');


            // tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
            stripClose.removeClass('strip__close--show');
            stripClose.css('transition', 'all 0.15s 0s cubic-bezier(0.23, 1, 0.32, 1)');
            expanded = false;
        }
    };
    var bindActions = function () {
        tileLink.on('click', open);
        stripClose.on('click', close);
    };
    var init = function () {
        bindActions();
    };
    return { init: init };
}();
Expand.init();

