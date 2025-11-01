	let slideIndex=0;
	const slides=document.getElementById("slides");
	function showSlide(i){slideIndex=(i+3)%3;slides.style.transform=`translateX(-${slideIndex*100}%)`;}
	function nextSlide(){showSlide(slideIndex+1);}function prevSlide(){showSlide(slideIndex-1);}
	setInterval(nextSlide,4000);

	function muaHang(sp){document.getElementById("popupForm").style.display="flex";document.getElementById("productName").innerText="Sản phẩm: "+sp;}
	function dongForm(){document.getElementById("popupForm").style.display="none";}
	function guiDon(){const sdt=document.getElementById("sdt").value.trim();if(!/^[0-9]{10}$/.test(sdt)){alert("⚠️ Số điện thoại phải đủ 10 số!");return;}alert("✅ Đơn hàng đã đặt thành công!");dongForm();}

	let prodIndex=0;
	const track=document.getElementById("productTrack");
	const prodCount=track.children.length;
	function showProduct(i){prodIndex=(i+prodCount)%prodCount;track.style.transform=`translateX(-${prodIndex*270}px)`;}
	function nextProduct(){showProduct(prodIndex+1);}
	function prevProduct(){showProduct(prodIndex-1);}
	setInterval(nextProduct,6000);






// ===== MENU HAMBURGER =====
// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}
