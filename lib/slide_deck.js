$.fn.slideDeck = function(){
	$(this).each(function(index) {
		var deck = $(this),
				items = $('li', deck),
				counter = 0,
				total_items = items.length - 1,
				wrapper = deck.parent(),
				nav = $('nav', wrapper),
				nextBtn = $('.next', nav).click(goNext),
				prevBtn = $('.prev', nav).click(goPrevious),
				pager = $('<ul class="pager" style="list-style:none"/>'),
				pager_items = '';
				
		init();
		
		function init() {	
			if (items.length > 1) {
				showFirstItem();
				showNav();
				createPager();
				attachPager();
				pagerLinks();
			} else if (items.length === 1) {
				nav.hide();	
			} else {
				deck.hide();
			}
		}
		
		function showNav() {
			nav.hide();
			deck.hover(function() {
				nav.show();
			},function() {
				nav.hide();
			});
		}
		
		function createPager() {
			$(items).map(function(i) {
				return pager_items += '<li style="float:left"><a href="#" id="pagerlink_'+i+'">'+i+'</a></li>';
			}).get().join();
			return pager_items;
		}
		
		function attachPager() {
			$(pager_items).appendTo(pager);
			$(wrapper).append(pager);
			$(".pager li:eq(0)").addClass('active');
		};
		
		// Navigation and pager controls
		function changeSlide() {
			$(items[counter]).show().siblings().hide();
		}
		
		function showFirstItem() {
			$(items[0]).siblings().hide();
		}
		
		function pagerLinks() {
			$('.pager li a').click(function(e) {
				$(this).parent().addClass('active').siblings().removeClass('active');
				var link_id = $(e.target).attr('id');
				link_id = parseInt(link_id.replace(/pagerlink_/g,''), 10);
				if(counter !== link_id){
					counter = link_id;
					changeSlide();
				}
				e.preventDefault();
			});
		}
		
		function goNext(e) {
			counter === total_items ? counter = 0 : counter++;
			changeSlide();
			e.preventDefault();
		}
		
		function goPrevious(e) {
			counter <= 0 ? counter = total_items : counter--;
			changeSlide();
			e.preventDefault();
		}
		
	});
};