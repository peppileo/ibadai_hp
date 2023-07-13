$(function(){
    $('a[href^="#"]').click(function(){ // aをクリックしたら発動
        var speed = 1000; // ミリ秒
        var href = $(this).attr("href"); // クリックした要素のhrefを取得
        // 取得したhrefが#または空➡html代入　違う➡href代入
        var target = $(href == "#" || href == "" ? 'html':href);
        // 画面上部からtargetまでの距離
        var position = target.offset().top;
        // html全体をposition分スクロール
        $("html, body").animate({scrollTop:position},speed, "swing");
        return false;
    });

    $('.b').click(function(){
      swal({
      title:"友情ポイント1Pゲット！",
      text: "覚えておくと役に立つかも？",
      icon: "success",
      button: "了解した",
    }).then(function() {
      window.location="studyFriend.html"
    })
    })
});