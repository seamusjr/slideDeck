/*describe 'BannerGallery'
	it "should exist"
	  $.fn.bannerGallery.should_not.be_undefined
	end
	
	after
	  $('.banner_gallery').remove();
	end
	
	  it "should hide the gallery if there is no children"
		gallery = elements('.banner_gallery')
		var container = elements('<ul class="banner_gallery"/>').appendTo('body')
		$('.banner_gallery').bannerGallery()
		gallery.length.should.be 0
	  end
	
	describe 'with 0 items'
		after
		  $('.banner_gallery').remove();
		end
	
	    it 'should be hidden'
			elements("<ul class='banner_gallery' />").appendTo('body');
			gallery = elements('.banner_gallery')
			$('.banner_gallery').bannerGallery()
	      gallery.should.be_hidden
	    end
	  end

	  describe 'with 1 item'
		before_each
		  elements(fixture('with_one_item.html')).appendTo('body');
			$('.banner_gallery').bannerGallery()
			nav =  element('.nav')
		end
	
		after_each
		  element('.banner_gallery_wrapper').remove();
		end

	    it 'should be shown'
			$('.banner_gallery').gallery.should.be_visible
	    end

		it 'should should hide nav'
		  nav.should.be_hidden
		end
	end	
	
	
	describe 'with 2 items'
	  before_each
	    elements(fixture('with_two_items.html')).appendTo('body');
			gallery = $('.banner_gallery')
			$('.banner_gallery').bannerGallery();
			nav =  element('.nav')
			nav_item = elements('li', nav)
			first_nav = element('li:eq(0)', nav)
			second_nav = element('li:eq(1)', nav)
			first_banner = $('.banner:eq(0)', gallery);
			second_banner = $('.banner:eq(1)', gallery);
	  end
			
		after_each
			$('.banner_gallery_wrapper').remove();
		end
	
		it 'should show the first item but hide subsequent items'
				first_banner.should.be_visible
				second_banner.should.be_hidden
		end
	
		it 'should should show navigation'
			gallery.siblings('.nav').should.be_visible
		end
			
		it 'should show navigation links for each banner'
			nav_item.length.should.be 2
		end
	
		it 'should show first nav item as active'
			first_nav.should.have_class "active"
		end
			
		it 'should on click of 2nd link, add class "active" to itself, and remove class "active" from 1st link'
			elements('a', second_nav).trigger('click')
			second_nav.should.have_class 'active'
			first_nav.should.not_have_class 'active'
		end
		
		it 'should get the navigation text from the hero h3 title'
			element('a', first_nav).html().should.eql 'Banner Uno'	  
		end
		it 'should have a class of "two_items_only"'
		  $('ul.nav').should.have_class 'two_items_only'
		end
	
	end
	
	describe 'with 3 items'
	  before_each
	    elements(fixture('with_three_items.html')).appendTo('body');
			gallery = $('.banner_gallery')
			$('.banner_gallery').bannerGallery();
			nav =  element('.nav')
			nav_item = elements('li', nav)
			first_nav = element('li:eq(0)', nav)
			second_nav = element('li:eq(1)', nav)
			third_nav = element('li:eq(2)', nav)
	  end
			
		after_each
			$('.banner_gallery_wrapper').remove();
		end
		
		it 'should have a class of "three_items_only"'
		  $('ul.nav').should.have_class 'three_items_only'
		end
	end
	
	describe 'with 4 items'
	  before_each
	    elements(fixture('with_four_items.html')).appendTo('body');
			gallery = $('.banner_gallery')
			$('.banner_gallery').bannerGallery();
			nav =  element('.nav')
			nav_item = elements('li', nav)
			first_nav = element('li:eq(0)', nav)
			second_nav = element('li:eq(1)', nav)
			third_nav = element('li:eq(2)', nav)
			fourth_nav = element('li:eq(3)', nav)
	  end
			
		after_each
			$('.banner_gallery_wrapper').remove();
		end
		
		it 'should add class of "one_item" to last .nav li, to take up slack'
		  nav.children().should.have_length 4
			fourth_nav.should.have_class 'one_item'			
		end
	end
	
	describe 'with 5 items'
	  before_each
	    elements(fixture('with_five_items.html')).appendTo('body');
			gallery = $('.banner_gallery')
			$('.banner_gallery').bannerGallery();
			nav =  element('.nav')
			nav_item = elements('li', nav)
			first_nav = element('li:eq(0)', nav)
			second_nav = element('li:eq(1)', nav)
			third_nav = element('li:eq(2)', nav)
			fourth_nav = element('li:eq(3)', nav)
			fifth_nav = element('li:eq(4)', nav)			
	  end
			
		after_each
			$('.banner_gallery_wrapper').remove();
		end
		
		it 'should add class of "two_items" to last, and second to last .nav li to take up slack'
		  nav.children().should.have_length 5
			fourth_nav.should.have_class 'two_items'	
			fifth_nav.should.have_class 'two_items'			
		end
	end

end*/

describe	'SlideDeck'
	it 'should exist'
	  $.fn.slideDeck.should_not.be_undefined
	end

	describe 'with 0 slides'
	  after
	    $('.slide_deck').remove();
	  end
	
		it 'should be hidden'
			elements("<ul class='deck' />").appendTo('body');
			deck = elements('.deck')
			$('.deck').slideDeck();
	      deck.should.be_hidden
		end 
	end
	
	describe 'with 1 slide'
		before_each
	  	elements(fixture('with_one_slide.html')).appendTo('body');
			$('.deck').slideDeck();
			deck = elements('.deck')
			nav = elements('nav')
		end
		
		after_each
		  $('.slide_deck').remove()
		end
		
		it 'should be shown'
		  deck.should.be_visible 
		end
		
		it 'should not show navigation'
		  $('nav').should.be_hidden 
		end
	end
	
	describe 'with 2 slides'
	  before_each
	    elements(fixture('with_two_slides.html')).appendTo('body');
			deck = elements('.deck');
			nav = elements('nav');
			nav_item = elements('ul li', nav);
			prev = elements('.prev', nav);
			next = elements('.next', nav);
			first_banner = elements('.banner:eq(0)', deck);
			second_banner = elements('.banner:eq(1)', deck);
			pager = elements('.pager');
			first_page = elements('#link_0', pager)
			second_page = elements('#link_1', pager)
			$('.deck').slideDeck();
	  end
		
		after_each
			elements('.slide_deck').remove();
		end
		
		it 'should show the first item but hide subsequent items'
			first_banner.should.be_visible
			second_banner.should.not.be_visible 
		end
		
		it 'should show navigation on mouseover'
			deck.trigger('mouseover')
			nav.should.be_visible
		end		
		
		it 'should hide navigation on mouseout'
			deck.trigger('mouseout')
			nav.should.not.be_visible
		end
		
		it 'should on click of next nav control should hide current item and show next item'
			next.trigger('click')
			first_banner.should.be_hidden
			second_banner.should.be_visible
		end
		
		it 'should on click of previous nav control hide current item and show previous item'
		  prev.trigger('click')
			first_banner.should.be_hidden
			second_banner.should.be_visible
		end
		
		it 'should show a pager of how many slides'
			pager.should.be_visible 
		end
		
		it 'should add a class of active to the first pager list item'
		  element('.pager li:eq(0)').should.have_class "active"
		end
		
		it 'should on click of first pager link add active class to itself and remove from siblings'
			first_page.trigger('click')
			element('.pager li:eq(0)').should.have_class "active"
			element('.pager li:eq(1)').should.not.have_class "active"
		end

		it 'should on click of first pager link should show first slide and hide siblings'
			first_page.trigger('click')
			first_banner.should.be_visible
			second_banner.should.be_hidden 
		end
	end
	
	
/*	
	describe 'with 2 items'
	  before_each
	    elements(fixture('with_two_items.html')).appendTo('body');
			gallery = $('.banner_gallery')
			$('.banner_gallery').bannerGallery();
			nav =  element('.nav')
			nav_item = elements('li', nav)
			first_nav = element('li:eq(0)', nav)
			second_nav = element('li:eq(1)', nav)
			first_banner = $('.banner:eq(0)', gallery);
			second_banner = $('.banner:eq(1)', gallery);
	  end
			
		after_each
			$('.banner_gallery_wrapper').remove();
		end
	
		it 'should show the first item but hide subsequent items'
				first_banner.should.be_visible
				second_banner.should.be_hidden
		end
	
		it 'should should show navigation'
			gallery.siblings('.nav').should.be_visible
		end
			
		it 'should show navigation links for each banner'
			nav_item.length.should.be 2
		end
	
		it 'should show first nav item as active'
			first_nav.should.have_class "active"
		end
			
		it 'should on click of 2nd link, add class "active" to itself, and remove class "active" from 1st link'
			elements('a', second_nav).trigger('click')
			second_nav.should.have_class 'active'
			first_nav.should.not_have_class 'active'
		end
		
		it 'should get the navigation text from the hero h3 title'
			element('a', first_nav).html().should.eql 'Banner Uno'	  
		end
		it 'should have a class of "two_items_only"'
		  $('ul.nav').should.have_class 'two_items_only'
		end
	
	end
	*/
	
end