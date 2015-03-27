// calculate maxHeight
function maxHeight(_els){
	if(typeof(_els)=='object' && _els.length){
		var _maxHeight = 0;
		_els.each(function(obj,i){
			if(parseInt(obj.offsetHeight)>_maxHeight){
				_maxHeight = parseInt(obj.offsetHeight);
			}
		});
	}
	return _maxHeight;
}
// setMaxHeight
function setMaxHeight(_els){
	if(typeof(_els)=='object' && _els.length){
		var _elsMaxHeight = maxHeight(_els);
		_els.each(function(obj,i){
			obj.setStyle( 'height', _elsMaxHeight );
		});
	}
	return true;
}
// calculate maxHeight and set box-height and top-paddind=(maxHeight - box-height)
function maxHeightAndTopPadding(_els){
	if(typeof(_els)=='object' && _els.length){
		var _elsMaxHeight = maxHeight(_els);
		_els.each(function(obj,i){
			var _padding = Math.round((_elsMaxHeight-parseInt(obj.offsetHeight))/2);
			var _padding2 = _elsMaxHeight-parseInt(obj.offsetHeight)-_padding;
			var _height = parseInt(obj.offsetHeight);
			obj.setStyle( 'padding-top', _padding );
			obj.setStyle( 'padding-bottom', _padding2 );
			obj.setStyle( 'height', _height );
		});
	}
	return true;
}
// reset top bottom padding to 0, height to 'auto'
function resetProperties(_els){
	if(typeof(_els)=='object' && _els.length){
		_els.each(function(obj,i){
			obj.setStyle( 'padding-top', 0 );
			obj.setStyle( 'padding-bottom', 0 );
			obj.setStyle( 'height', 'auto' );
		});
	}
	return true;
}
// get outer size
function getOuterSize(_els){
	if (typeof(_els) == 'object') {
		var _elsWidth = 0;
		if(_els.length>1){
			_els.each(function(obj,i){
				_elsWidth+= obj.getSize().x;
				// margin
				if(obj.getStyle('margin-left')){_elsWidth+= parseInt(obj.getStyle('margin-left'));}
				if(obj.getStyle('margin-right')){_elsWidth+= parseInt(obj.getStyle('margin-right'));}
				// padding
				if(obj.getStyle('padding-left')){_elsWidth+= parseInt(obj.getStyle('padding-left'));}
				if(obj.getStyle('padding-right')){_elsWidth+= parseInt(obj.getStyle('padding-right'));}
			});
			return _elsWidth;
		}else{
			var obj = _els;
			_elsWidth+= obj.getSize().x;
			// margin
			if(obj.getStyle('margin-left')){_elsWidth+= parseInt(obj.getStyle('margin-left'));}
			if(obj.getStyle('margin-right')){_elsWidth+= parseInt(obj.getStyle('margin-right'));}
			// padding
			if(obj.getStyle('padding-left')){_elsWidth+= parseInt(obj.getStyle('padding-left'));}
			if(obj.getStyle('padding-right')){_elsWidth+= parseInt(obj.getStyle('padding-right'));}
			return _elsWidth;
		}
	}
}
// set box childrens height and padding
function setChildrenMaxHeightAndPadding(_els){
	if(typeof(_els)=='object' && _els.length){
		_els[0].getChildren().each(function(_objChildren,_iChildren){
			var _itemNumb = [];
			_els.each(function(_obj,_i){
				if( typeof(_obj.getChildren()[_iChildren]) != 'undefined'){ // if children exist
					if( _els[0].getChildren()[_iChildren].tagName.toLowerCase() == _obj.getChildren()[_iChildren].tagName.toLowerCase() ){ // if children tagName equal to current
						_itemNumb.push( _obj.getChildren()[_iChildren] );
					}
				}
			});
			maxHeightAndTopPadding(_itemNumb);
		});
	}
	return true;
}
// get children of elements by lines
function sliceChildrenByLines(_els){
	if(typeof(_els)=='object' && _els.length && _els.getParent().length ){
		var _elsLength = _els.length;
		var _parent = _els.getParent()[0];
		var _elsInLines = _els.length;
		var _lines = 1;
		if(getOuterSize(_els)>_parent.getSize().x){
			_lines = Math.ceil( getOuterSize(_els) / _parent.getSize().x );
			var _linesWidth = 0;
			_elsInLines = 0;
			_els.each(function(obj,i){
				if((_linesWidth+getOuterSize(obj))<=_parent.getSize().x){
					_linesWidth+= getOuterSize(obj);
					_elsInLines++;
				}else{
					return;
				}
			});
		}
		for (var i = 0; i < _lines; i++){
			var _start = i*_elsInLines;
			var _end = (i+1)*_elsInLines;
			if(_end>_els.length-1){
				_end = _els.length-1;
			}else{
				_end--;
			}
			var _sliceArr = _els.slice(_start, _end + 1);
			setChildrenMaxHeightAndPadding(_sliceArr);
		}
	}
	return true;
}

// set product position
function itemsPosition(_items){
	if(typeof(_items)=='object' && _items.length){
		resetProperties(_items.getChildren())
		sliceChildrenByLines(_items);
	}
}
window.addEvent('load', function(){
	var product_list = $$('ul.products-list');
	for(n = 0; n < product_list.length; n++)
	{
		itemsPosition( $(product_list[n]).getElements('li') );
	}
	
	//itemsPosition( $$('ul.products-list li') );
});