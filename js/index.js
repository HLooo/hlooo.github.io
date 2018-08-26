/**
 * Created by mac on 2017/2/22.
 */
$(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#de4b4e', '#6f9fe7', '#3ed3d2', '#fad84e'],
        anchors: ['page1', 'page2', 'page3', 'page4'],
        menu: '#menu',
        afterLoad: function (link, i) {
            /*清除上次的当前样式*/
            $('.section').removeClass('now');
            /*给当前选中的页面加上当前样式  now*/
            //console.log($(this));
            var $this = $(this);
            /*第一屏动画需要延时  防止没有时间差*/
            setTimeout(function () {
                $this.addClass('now');
            }, 200);
        }
    });


    setInterval(function () {

    $('')

    },1000)


    });


