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
			deck = elements('.deck')
			nav = elements('nav')
			$('.deck').slideDeck();
		end

		after_each
		$('.slide_deck').remove()
		end

		it 'should be shown'
			$(deck).should.not.be_hidden 
		end
		
		it 'should not show navigation'
		 $(nav).should.be_hidden 
		end
	end

	describe 'with 2 slides but pager hidden'
		it 'should hide pager'
	  	elements(fixture('with_two_slides.html')).appendTo('body');
			wrapper = elements('.slide_deck')
			deck = elements('.deck', wrapper)
			nav = elements('nav', wrapper)
			pager = elements('.pager', nav)
			$('.deck').slideDeck({'pager': 0})
		  pager.should.be_hidden
		end
		after
			$('.slide_deck').remove()
		end
	end
	
	describe 'with accordion slideshow'
	  before_each
	    elements(fixture('with_three_slides_accordion.html')).appendTo('body')
			$('.deck').slideDeck({'pager': 0, 'prev_next': 0, 'accordion_nav' : 1});
			slide_deck = elements('.slide_deck')
			deck = elements('.deck')
			link_1 = elements('.accordion h3 a:eq(0)')
			link_2 = elements('.accordion h3 a:eq(1)')
			link_3 = elements('.accordion h3 a:eq(2)')
			link_4 = elements('.accordion h3 a:eq(4)')
			banner_1 = elements('.banner:eq(0)')
			banner_2 = elements('.banner:eq(1)')
			banner_3 = elements('.banner:eq(2)')
	  end
		after_each
		  slide_deck.remove();
		end
	
		it 'should on click on link 1 shows banner 1 and hides siblings'
		  link_2.trigger('click')
			banner_2.should.be_visible
		end
		
		it 'should on click of a link that has no banner, do nothing'
		  link_4.trigger('click')
			banner_1.should.be_visible
			banner_1.siblings().should.be_hidden
		end
	end

end