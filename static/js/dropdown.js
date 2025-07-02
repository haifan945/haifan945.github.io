/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+ function($) {
	'use strict';

	// DROPDOWN CLASS DEFINITION
	// =========================

	/*触发元素和下拉元素为兄弟节点关系，[data-toggle="dropdown"]触发元素，dropdown-menu下拉框元素，dropdown包裹元素*/
	var backdrop = '.dropdown-backdrop'
	var toggle = '[data-toggle="dropdown"]'

	/*click.bs.dropdown事件在click事件的触发的时候也执行toggle函数，hide.bs.drop事件只能通过hide.bs.drop绑定，不能通过hide绑定  */
	var Dropdown = function(element) {
		$(element).on('click.bs.dropdown', this.toggle)
	}

	Dropdown.VERSION = '3.3.7'

	/*通过data-target或者href获取包裹元素，不存在就选择父元素*/
	function getParent($this) {
		var selector = $this.attr('data-target')

		if (!selector) {
			selector = $this.attr('href')
			selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
		}

		var $parent = selector && $(selector)

		return $parent && $parent.length ? $parent : $this.parent()
	}

	/*clearMenus函数折叠下拉框，下拉框折叠的情况触发if语句展开下拉框*/
	// clearMenus函数下拉框若为展开状态，就执行收起动作，折叠和展开通过添加open样式类实现
	// 通过return使函数具有多种用途，折叠状态不执行后续操作
	// trigger触发hide.bs.dropdown（折叠前）、hidden.bs.dropdown（折叠后）事件，on方法绑定函数，触发时间在clearMenus函数执行过程中
	// e.isDefaultPrevented()判断使hide事件中e.preventDefault()能阻止下拉框折叠、hidden事件触发，同样效果可以通过缓存实现
	function clearMenus(e) {
		if (e && e.which === 3) return //e.which===3 当正文结束 e.which指示哪个键被按下，给出该键的索引值（按键码）  ASCII  http://ascii.911cha.com/
		$(backdrop).remove() //点击dropmenu会生成一个dropdown-backdrop导致点击下一个dropdown不起作用
		// dropdown方法被调用以外，还需要用[data-toggle="dropdown"]属性指向触发元素，查看该元素的属性填写情况是否合法
		$(toggle).each(function() {
			var $this = $(this)
			var $parent = getParent($this)
			var relatedTarget = {
				relatedTarget: this
			} //返回指针刚刚离开的元素（不支持 IE）。

			if (!$parent.hasClass('open')) return

			// 触发元素中包含input、textarea时跳出clearMenus函数
			//$.contains()检测一个元素包含在另一个元素之内：
			if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

			// 父级元素触发hide事件，relatedTarget的目的是为mouseout、mouseleave指定相关元素/目标元素
			// $.event构建事件，可以配置数据以及relatedTarget关联元素，以便使用
			$parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

			// event.isDefaultPrevented判断是否调用了preventDefault方法，event.preventDefault()阻止默认事件
			// event.stopPropagation()阻止事件冒泡，event.isPropagationStopped()判断有否调用stopPropagation方法
			if (e.isDefaultPrevented()) return

			$this.attr('aria-expanded', 'false') //aria-expanded :展开状态  false不展开
			$parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget)) //trigger 规定被选元素要触发的事件
		})
	}

	/*当点击的时候触发事件*/
	// trigger触发show（展开前）、focus（展开中）、shown（展开后）事件
	// toggle通过单if语句实现折叠时展开，展开时折叠的效果，即顺序执行折叠，折叠前获取展开折叠状态，若为折叠if语句展开
	Dropdown.prototype.toggle = function(e) {
		// this指代调用dropdown方法的元素，clearMenus函数里再取填写[data-toggle="dropdown"]属性的元素，避免该属性未曾填写的元素
		var $this = $(this)

		if ($this.is('.disabled, :disabled')) return //如果被禁用返回

		var $parent = getParent($this)
		var isActive = $parent.hasClass('open')

		clearMenus()

		if (!isActive) {
			if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
				// if mobile we use a backdrop because click events don't delegate
				// 手机端使用backdrop，以使点击事件有效
				$(document.createElement('div'))
					.addClass('dropdown-backdrop')
					.insertAfter($(this))
					.on('click', clearMenus)
			}

			var relatedTarget = {
				relatedTarget: this
			}
			$parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

			if (e.isDefaultPrevented()) return

			$this
				.trigger('focus')
				.attr('aria-expanded', 'true')

			$parent
				.toggleClass('open')
				.trigger($.Event('shown.bs.dropdown', relatedTarget))
		}

		return false
	}

	// 下拉框以及触发元素处点击向上向下、空格Esc箭头通过trigger触发相应事件，
	Dropdown.prototype.keydown = function(e) {
		// 向上38、向下40、空格32、Esc键27
		if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

		var $this = $(this)

		e.preventDefault()
		e.stopPropagation()

		if ($this.is('.disabled, :disabled')) return

		var $parent = getParent($this)
		var isActive = $parent.hasClass('open')

		// 触发元素折叠时按键触发点击事件，e.target也随之改变，以便上下箭头在下拉框中选择，展开时Esc按键触发focus事件折叠
		if (!isActive && e.which != 27 || isActive && e.which == 27) {
			if (e.which == 27) $parent.find(toggle).trigger('focus')
			return $this.trigger('click')
		}

		// 展开时下拉框向上向下箭头得到焦点
		var desc = ' li:not(.disabled):visible a'
		var $items = $parent.find('.dropdown-menu' + desc)

		if (!$items.length) return

		var index = $items.index(e.target)

		if (e.which == 38 && index > 0) index-- // up
		if (e.which == 40 && index < $items.length - 1) index++ // down
		if (!~index) index = 0

		$items.eq(index).trigger('focus')
	}


	// DROPDOWN PLUGIN DEFINITION
	// ==========================

	// 由触发元素dropdown-toggle调用dropdown方法，通过data属性new出一个dropdown实例，data属性也记录该对象，继而通过传入的option参数调用实例的toggle方法
	function Plugin(option) {
		return this.each(function() {
			var $this = $(this)
			var data = $this.data('bs.dropdown')

			if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
			if (typeof option == 'string') data[option].call($this)
		})
	}

	var old = $.fn.dropdown

	$.fn.dropdown = Plugin
	$.fn.dropdown.Constructor = Dropdown


	// DROPDOWN NO CONFLICT
	// ====================

	// $.fn.dropdown已存在，使用old保存该值，$.fn.dropdown空闲出来完成操作，执行$.fn.dropdown.noConflict回归原$.fn.dropdown
	$.fn.dropdown.noConflict = function() {
		$.fn.dropdown = old
		return this
	}


	// APPLY TO STANDARD DROPDOWN ELEMENTS
	// ===================================

	// 点击[data-toggle="dropdown"]元素触发toggle方法，toggle方法中调用clearMenus函数先折叠，回到toggle再展开，点击其他区域折叠
	$(document)
		.on('click.bs.dropdown.data-api', clearMenus)
		.on('click.bs.dropdown.data-api', '.dropdown form', function(e) {
			e.stopPropagation()
		})
		.on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
		.on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
		.on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);
