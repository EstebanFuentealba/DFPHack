window.BBCL = window.BBCL || {};
BBCL.DFPHackManager = {
    _singleton: {},
    lookup: function (a) {
        return this._singleton[a]
    },
    ini: function (a, b) {
        if (this._singleton[a] == undefined) {
            this._singleton[a] = b
        }
    }
};
BBCL.DFPHack = function(opts) {
	this.defaults = {
		template{
			first: '<div  class="container">',
			border: '<div class="fancybox-bg" id="fancybox-bg-n"></div>\
					<div class="fancybox-bg" id="fancybox-bg-ne"></div>\
					<div class="fancybox-bg" id="fancybox-bg-e"></div>\
					<div class="fancybox-bg" id="fancybox-bg-se"></div>\
					<div class="fancybox-bg" id="fancybox-bg-s"></div>\
					<div class="fancybox-bg" id="fancybox-bg-sw"></div>\
					<div class="fancybox-bg" id="fancybox-bg-w"></div>\
					<div class="fancybox-bg" id="fancybox-bg-nw"></div>',
			content: '',
			last: '</div>'
		},
		clickTAGText: 'clickTAG',
		creatividad: '',
		closeButton: true,
		banners: {
			normal: {
				width: 250,
				height: 250,
				swf: false,
				img: false
			},
			expanded: null
		},
		link: '',
		linkEncoded: function(){
			return encodeURIComponent(this.link);
		},
		animation: 'none' /*none|rotate*/
	};
    this.options = jQuery.extend( this.defaults,  opts );
    this.fixExternalTagsClickCounter = function(){
    	/*function mtload() {
			var jQuery = window.parent.jQuery || jQuery;
			jQuery(function(){
						
						
						var obj;
						if(jQuery(".ad-1000x75 object").size()>0) {
							obj = jQuery(".ad-1000x75 object");
						} else {
							obj = jQuery(document.getElementsByTagName("object")[0]);
						}
						var	param = jQuery("param[value*='clickTag=']", obj),
							embed = jQuery("embed[flashvars*='clickTag=']", obj);
							param.attr('value',param.attr('value').replace('clickTag=','clickTag=%%CLICK_URL_ESC%%'));
							embed.attr('flashvars',embed.attr('flashvars').replace('clickTag=','clickTag=%%CLICK_URL_ESC%%'));
					});
		}*/
    	return this;
    };
    this.expandAnimate = function(opts){
    	var me = this;
    	this.options = jQuery.extend( this.defaults,  opts );
    	return me;
    };


    this.render = function(){
    	var me = this;

    	var template = '<div  class="container">\
				<div class="fancybox-bg" id="fancybox-bg-n"></div>\
				<div class="fancybox-bg" id="fancybox-bg-ne"></div>\
				<div class="fancybox-bg" id="fancybox-bg-e"></div>\
				<div class="fancybox-bg" id="fancybox-bg-se"></div>\
				<div class="fancybox-bg" id="fancybox-bg-s"></div>\
				<div class="fancybox-bg" id="fancybox-bg-sw"></div>\
				<div class="fancybox-bg" id="fancybox-bg-w"></div>\
				<div class="fancybox-bg" id="fancybox-bg-nw"></div>\
				<div class="content">\
					<div id="stage" class="">\
						<div class="shape">\
							<div class="side">\
								<!-- [FLASH MIN] -->\
								<div id="imagebannerMin">\
									<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="{{banners.normal.width}}" height="{{banners.normal.height}}"  align="middle">\
										<param name="movie" value="{{banners.normal.swf}}" />\
										<param name="flashvars" value="{{clickTAGText}}=%%CLICK_URL_ESC%%{{linkEncoded}}" />\
										<param name="quality" value="high" />\
										<param name="bgcolor" value="#000000" />\
										<param name="play" value="true" />\
										<param name="loop" value="true" />\
										<param name="wmode" value="transparent" />\
										<param name="scale" value="showall" />\
										<param name="menu" value="true" />\
										<param name="devicefont" value="false" />\
										<param name="salign" value="" />\
										<param name="allowScriptAccess" value="sameDomain" />\
										<!--[if !IE]>-->\
										<object type="application/x-shockwave-flash" data="http://ads.lax.biobiochile.cl/lan/2013/12/16/lanpass_canjeparquearauco_biobio_250x250.swf" width="250" height="250">\
											<param name="flashvars" value="{{clickTAGText}}=%%CLICK_URL_ESC%%{{linkEncoded}}" />\
											<param name="movie" value="{{banners.normal.swf}}" />\
											<param name="quality" value="high" />\
											<param name="bgcolor" value="#000000" />\
											<param name="play" value="true" />\
											<param name="loop" value="true" />\
											<param name="wmode" value="transparent" />\
											<param name="scale" value="showall" />\
											<param name="menu" value="true" />\
											<param name="devicefont" value="false" />\
											<param name="salign" value="" />\
											<param name="allowScriptAccess" value="sameDomain" />\
										<!--<![endif]-->\
											<a href="http://www.adobe.com/go/getflash">\
												<img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" />\
											</a>\
										<!--[if !IE]>-->\
										</object>\
										<!--<![endif]-->\
									</object>\
								</div>\
								<!-- [FLASH MAX] -->\
								<div id="imagebannerMax">\
									<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="{{banners.expanded.width}}" height="{{banners.expanded.height}}"  align="middle">\
										<param name="movie" value="{{banners.expanded.swf}}" />\
										<param name="flashvars" value="{{clickTAGText}}=%%CLICK_URL_ESC%%{{linkEncoded}}" />\
										<param name="quality" value="high" />\
										<param name="bgcolor" value="#000000" />\
										<param name="play" value="true" />\
										<param name="loop" value="true" />\
										<param name="wmode" value="transparent" />\
										<param name="scale" value="showall" />\
										<param name="menu" value="true" />\
										<param name="devicefont" value="false" />\
										<param name="salign" value="" />\
										<param name="allowScriptAccess" value="sameDomain" />\
										<!--[if !IE]>-->\
										<object type="application/x-shockwave-flash" data="{{banners.expanded.swf}}" width="{{banners.expanded.width}}" height="{{banners.expanded.height}}">\
											<param name="flashvars" value="{{clickTAGText}}=%%CLICK_URL_ESC%%{{linkEncoded}}" />\
											<param name="movie" value="{{banners.expanded.swf}}" />\
											<param name="quality" value="high" />\
											<param name="bgcolor" value="#000000" />\
											<param name="play" value="true" />\
											<param name="loop" value="true" />\
											<param name="wmode" value="transparent" />\
											<param name="scale" value="showall" />\
											<param name="menu" value="true" />\
											<param name="devicefont" value="false" />\
											<param name="salign" value="" />\
											<param name="allowScriptAccess" value="sameDomain" />\
										<!--<![endif]-->\
											<a href="http://www.adobe.com/go/getflash">\
												<img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" />\
											</a>\
										<!--[if !IE]>-->\
										</object>\
										<!--<![endif]-->\
									</object>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>\
				{{#closeButton}}\
				<a id="fancybox-close"></a>\
				{{/closeButton}}\
			</div>';

		var output = Mustache.render(template, me.options);
		document.write(output);
    	return this;
    }

    BBCL.DFPHackManager.ini(this.options.creatividad, this);
    return this;
};