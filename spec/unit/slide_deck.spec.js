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
// 
// describe 'with 1 slide'
// 	before_each
// 		elements(fixture('with_one_slide.html')).appendTo('body');
// 		deck = elements('.deck')
// 		nav = elements('nav')
// 		$('.deck').slideDeck();
// 	end
// 
// 	after_each
// 	$('.slide_deck').remove()
// 	end
// 
// 	it 'should be shown'
// 	$('.deck').should.be_visible 
// 	end
// 
// 	it 'should not show navigation'
// 	 $('nav').should.be_hidden 
// 	end
// end

	// describe 'with 2 slides but pager hidden'
	// 	before_each
	//   	elements(fixture('with_two_slides.html')).appendTo('body');
	// 		deck = elements('.deck')
	// 		nav = elements('nav')
	// 		pager = elements('.pager', nav)
	// 		$('.deck').slideDeck();
	// 	end
	// 	
	// 	after_each
	// 		$('.slide_deck').remove()
	// 	end
	// 		
	// 	it 'should show navigation'
	// 	  $('nav').should.be_visible
	// 	end
	// 	
	// 	it 'should show pager'
	// 	  $('.pager').should.be_visible
	// 	end
	// end
	
	describe 'with 3 items slideshow, accordion nav and pager off'
		before_each
  		elements(fixture('with_three_slides_accordion.html')).appendTo('body');
			accordion = elements('.accordion')
			deck = elements('.deck', body)
			link_1 = elements('h3 a:eq(0)', accordion)
			link_2 = elements('h3 a:eq(1)', accordion)
			link_3 = elements('h3 a:eq(2)', accordion)
			banner_1 = elements('.banner:eq(0)', deck)
			banner_2 = elements('.banner:eq(1)', deck)
			banner_3 = elements('.banner:eq(2)', deck)
			nav = elements('nav')
			$('.deck').slideDeck({'pager_on': false, 'prev_next_on': false, 'accordion_links': true})
		end
		// after_each
		//   $('.slide_deck').remove()
		// end
		
		// it 'should not show prev and next nav controls'
		//   nav.should.be_hidden 
		// end
		
		// it 'should show banner_1 on load but hide others'
		//   banner_1.should.be_visible
		// 	banner_2.should.be_hidden
		// 	banner_3.should.be_hidden
		// end
		it 'should on click of accordion link_2, show banner_2 and hide its siblings'
			link_2.trigger('click')
			banner_1.should.be_hidden
			banner_2.should.be_visible
			banner_3.should.be_hidden
		end
		
		
	end

end