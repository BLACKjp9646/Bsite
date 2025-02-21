// 幅が768px以上のビューポートをターゲットとするメディアクエリを作成
const mediaQuery = window.matchMedia('(min-width: 560px)')

$(document).ready(()=>{
	let navData = $(".gonav").clone();
	let offcanvas_navData = $(".gonav").children().clone();
	let menuData = $(".navbar-brand-nonradius").clone();

	$(".gonav").remove();
	$(".navbar-brand-nonradius").remove();
	$("#offcanvas_linkList").append(offcanvas_navData)
	// 今回の交差を監視する要素
	const boxes = document.querySelectorAll("#title_text")

	const options = {
		root: null, // ビューポートをルート要素とする
		rootMargin: "-15% 0px", // ビューポートの中心(50%)を判定基準とする
		threshold: 0 // 閾値は0とする
	};

	// Observer
	const observer = new IntersectionObserver(entries=>{
		entries.forEach(entry=>{
			if(entry.isIntersecting){
				//console.log("画像切り替え")
				$(".addimg").addClass("background_img");
                $(".addimg").removeClass("addimg");
			}
            else{
				$(".background_img").addClass("addimg");
                $(".background_img").removeClass("background_img");
            }
		});
	}, options);

	// それぞれのboxを監視する
	boxes.forEach(box => {
	  observer.observe(box);
	});

let preY = window.scrollY; // 前回のスクロール位置を初期化

window.addEventListener('scroll', () => {
  const currentY = window.scrollY; // 現在のスクロール位置を取得
  if (currentY < preY) { // 上にスクロールしている場合
    $(".head_active").removeClass("head_disactive");
  } else { // 下にスクロールしている場合
  if (currentY > 0) {
	$(".head_active").addClass("head_disactive");
    }
  }
  preY = currentY; // 前回のスクロール位置を更新
});


function handleTabletChange(e) {
	// メディアクエリがtrueかどうかを確認
	if (e.matches) {
	  // PCサイズ
	  //console.log("PC")
	  $(".container-fluid").append(navData)
	  $(".navbar-brand-nonradius").remove()
	}
	else{
		//スマホサイズ
		//console.log("スマホ")
		$(".container-fluid").prepend(menuData)
		$(".container-fluid .gonav").remove()
	}
  }
  
  // イベントリスナーを登録
  mediaQuery.addListener(handleTabletChange)
   
  // 初期チェック
  handleTabletChange(mediaQuery)

});