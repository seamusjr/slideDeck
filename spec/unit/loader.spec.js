describe 'SHS'
  describe '.Loader'
    before_each
      loader = SHS.Loader
    end
        
    it 'should exist'
      loader.should_not.be_undefined
    end
    
    it 'should have a load method'
      loader.should.respond_to "load"
    end
    
    it 'should add a link tag to the head'
      current_links = elements('head link').length
      loader.load('css', 'fixtures/loader/test-load.css')
      elements('head link').length.should.eql current_links + 1
    end
    
    it 'should add a script tag to the head'
      current_scripts = elements('head script').length
      loader.load('js', 'fixtures/loader/test-load.js')
      elements('head script').length.should.eql current_scripts + 1
    end

    describe 'when loading css'
      before_each
        loader.load('css', 'fixtures/loader/test-load.css')
        css_file = elements('head link:last')
      end
      
      it 'should have a rel of "stylesheet"'
        css_file.attr('rel').should.eql 'stylesheet'
      end
      
      it 'should have a type of "text/css"'
        css_file.attr('type').should.eql 'text/css'
      end
      
      it 'should have a media type of "screen"'
        css_file.attr('media').should.eql 'screen'
      end
      
      it 'should have an href of "fixtures/loader/test-load.css"'
        css_file.attr('href').should.eql 'fixtures/loader/test-load.css'
      end
    end
    
    describe 'when loading js'
      before_each
        loader.load('js', 'fixtures/loader/test-load.js', 'window.isLoaded')
        js_file = elements('head script:last')
      end
                  
      it 'should have a type of "text/javascript"'
        js_file.attr('type').should.eql 'text/javascript'
      end
      
      it 'should have a src of "fixtures/loader/test-load.js"'
        js_file.attr('src').should.eql 'fixtures/loader/test-load.js'
      end
    end
    
    describe 'with a callback'
      before_each
        called = 0
        callback = function() { called++; }
      end
      
      it 'should not run the callback if the watch does not exist'
        stub(window, 'eval').and_return('undefined')
        loader.load('js', 'fixtures/loader/test-load.js', 'window.isNotLoaded', callback);
        tick(50)
        called.should.eql 0
        destub(window)
      end
      
      it 'should call the callback when the file is loaded'
        stub(window, 'eval').and_return('defined')
        loader.load('js', 'fixtures/loader/test-load.js', "window.isLoaded", callback)
        tick(50)
        called.should.eql 1
        destub(window)
      end
    end
  end
end