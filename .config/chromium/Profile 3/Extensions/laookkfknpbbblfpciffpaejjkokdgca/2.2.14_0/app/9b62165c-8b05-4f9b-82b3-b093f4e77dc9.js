var fn_addin=function(u,m,e){var t=t||{};t.styles=t.styles||{},t.commands=t.commands||{},t.dependencies=e||t.dependencies||{},t.styles.style=function(){},t.views=t.views||{},t.collect=t.collect||{},t.models=t.models||{},t.templates=t.templates||{},t.info={addin:"9b62165c-8b05-4f9b-82b3-b093f4e77dc9",dependencies:["settings"],commands:["settings.panels.general"],id:"settings_general"},u.console.log(u.elapsed()+": "+t.info.id+" started"),t.templates=t.templates||{},t.templates.general=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,i,s){return'<header class="settings-header">\n\t<h3 data-test="general-header">General</h3>\n\t<p class="description">Customize your dashboard</p>\n</header>\n\n\n<h4>Show</h4>\n<ul id="apps-list" class="settings-list options-list"></ul>\n\n\n<h4>Customize</h4>\n<ul id="customize-list" class="settings-list options-list"></ul>\n\n\n<h5>Tip</h5>\n<p class="tip no-top-margin">Many items in Momentum can be edited by double-clicking on them, including <strong>your name</strong> and your <strong>to-dos</strong>.\n'},useData:!0});var i=t.dependencies.settings;return t.views.General=i.views.SettingsPanel.extend({attributes:{id:"settings-general",class:"settings-view settings-general","data-test":"settings-general"},template:t.templates.general,panelid:"general",panelTitle:"General",events:{"click .config-button":"configWidget","click .toggle-option":"toggleOption","click .slide-toggle":"toggleSlider","dblclick .slide-toggle":"eatDblClick","click .balanced-message":"switchToBalanceSettings",webkitAnimationEnd:"onAnimationEnd"},initialize:function(){this.model=u.models.customization,this.initializeCustomizeItems(),this.listenTo(this.model,"change",this.customizationModelChanged),u.sendEvent(this.panelTitle,"Panel Opened")},initializeCustomizeItems:function(){var e=u.models.themeManager.getAvailableFonts(),s=this;this.customizeItems=[{name:"Theme",dataId:"settings-general-theme",field:"themeColour",widget:"themeColour",options:[{label:"Dark",value:"dark"},{label:"Light",value:"light"},{label:"System",value:"system",breakafter:!0},{label:"Photo Match",value:"photo",plusOnly:!0},{label:"",value:"custom",view_opt:{settingName:"themeColour",ignoreClick:!0},plusOnly:!0,show_always:!0,dataTest:"custom"}],default:"system",section:"customize"},{name:"Font",dataId:"settings-general-font",field:"themeFont",widget:"themeFont",options:e,default:"default",plusOnly:!0,requiredFeature:"plus",section:"customize"},{name:"Links",dataId:"settings-general-links",widget:"linksVisible",field:"linksVisible",section:"widgets"},{name:"Bookmarks Bar",dataId:"settings-general-bookmarks-bar",widget:"bookmarksVisible",field:"bookmarksVisible",section:"widgets",hidden:u.utils.bookmarksNotSupported()},{name:"Top Sites",dataId:"settings-general-most-visited",widget:"mostVisited",field:{getValue:function(){return u.models.bookmarksSettings.get("defaultMostVisited")&&u.models.customization.get("bookmarksVisible")},setValue:function(e,t){var i=u.models.bookmarksSettings;e&&!u.models.customization.get("bookmarksVisible")&&s.enableBookmarks(t),i.set("defaultMostVisited",e),i.optionsChanged()}},section:"widgets",message:"Show most visited websites by default in Bookmarks Bar",hidden:u.utils.bookmarksNotSupported()},{name:"Search",dataId:"settings-general-search",widget:"searchVisible",field:"searchVisible",section:"widgets"},{name:"Weather",dataId:"settings-general-weather",widget:"weatherVisible",field:"weatherVisible",section:"widgets"},{name:"Focus",dataId:"settings-general-focus",widget:"focusVisible",field:"focusVisible",section:"widgets"},{name:"Todo",dataId:"settings-general-todo",widget:"todoVisible",field:"todoVisible",section:"widgets"},{name:"Quotes",dataId:"settings-general-quote",widget:"quoteVisible",field:"quoteVisible",section:"widgets"},{name:"Mantras",dataId:"settings-general-mantras",widget:"mantraVisible",field:"mantraVisible",message:"Simple phrases to build positive mental habits",section:"widgets",beta:!1},{name:"Countdowns",dataId:"settings-general-countdown",widget:"countdownVisible",field:"countdownVisible",plusOnly:!0,requiredFeature:"countdown",message:"Count down to important dates and deadlines",section:"widgets"},{name:"Metrics",dataId:"settings-general-metric",widget:"metricVisible",field:"metricVisible",plusOnly:!0,requiredFeature:"plus",message:"Keep your important metrics at a glance",section:"widgets"},{name:"Notes",dataId:"settings-general-notes",widget:"notesVisible",field:"notesVisible",plusOnly:!0,requiredFeature:"notes",message:"Take quick notes and store wisdom to review",section:"widgets"},{name:"World Clocks",dataId:"settings-general-world-clocks",widget:"multiClockVisible",field:"multiClockVisible",plusOnly:!0,requiredFeature:"plus",message:"Keep track of time anywhere on Earth",section:"widgets",beta:!1}]},render:function(){var e=u.isLoggedIn();this.$el.html(this.template({loggedIn:e})),this.$popBody=this.$(".pop-body");var t={customize:this.$el.find("#customize-list"),widgets:this.$el.find("#apps-list"),misc:this.$el.find("#misc-list")};return _.each(t,function(e){e.empty()}),_.each(this.customizeItems,function(e){e.hidden||(e.options?t[e.section].append(i.templates["general-toggle-options"](e)):t[e.section].append(i.templates["general-toggle-slider"](e)))}),this.updateControlStates(_.pluck(this.customizeItems,"field")),u.commandManager.execute("settings.color.picker",this.$el[0]),this},onAnimationEnd:function(e){u.utils.removePulseClass(e)},customizationModelChanged:function(e){if(e){var t=e.changedAttributes(),i=_.keys(t);this.updateControlStates(i)}},fieldHasOwnControl:function(e){return"object"==typeof e&&null!==e&&e.getValue&&e.setValue},updateControlStates:function(e){var d=this;_.each(e,function(e){var t=_.findWhere(d.customizeItems,{field:e});if(t){var i=d.fieldHasOwnControl(e),s=i?e.getValue():d.model.get(e);if(t.options){t.plusOnly&&!d.featureAvailable(t.requiredFeature)&&(s=t.default),d.$el.find("."+t.widget).removeClass("active"),d.$el.find("."+t.widget+"[data-option-value='"+s+"']").first().addClass("active")}else{var n=i?s:d.model.getComputedSetting(e);s=!(t.plusOnly&&!d.featureAvailable(t.requiredFeature))&&!!s;var a=d.$el.find("[data-related-widget='"+t.widget+"']");if(a&&1===a.length){var o=a.first();if(o.toggleClass("on",s),s!==n){var l=d.model.overrides[e];l===d.model.settingOverriders.TEAM?(o.toggleClass("on",n),o.append('<span class="option-message"> &nbsp; &nbsp;Currently managed by team</span>'),o.addClass("balanced")):l===d.model.settingOverriders.BALANCE&&(o.append('<span class="option-message balanced-message"> &nbsp; &nbsp;Currently hidden by Balance mode (Customize here)</span>'),o.addClass("balanced"))}}}}})},setOption:function(e){var t=e.attr("data-related-widget"),i=e.attr("data-option-value"),s=_.findWhere(this.customizeItems,{widget:t});if(!s)return null;var n=_.findWhere(s.options,{value:i});if(!(s.plusOnly&&!this.featureAvailable(s.requiredFeature)||n&&n.plusOnly&&!this.isPlus())){u.models.activeBackground.isCustom()&&n&&"photo"===n.value&&n.plusOnly&&this.isPlus(),this.$el.find("."+t).removeClass("active"),e.addClass("active");var a={};return s.boolean?a[s.field]=JSON.parse(i):a[s.field]=i,this.model.save(a),u.sendEvent("General Settings","Set "+t),s}u.cmd("modal.open","UPSELL_THEMES",{sourceEvent:t})},toggleOption:function(e){var t=m(e.delegatedTarget),i=t.attr("data-option-value"),s=this.setOption(t);if(!0!==s){if(s){var n=_.findWhere(s.options,{value:i});if(n&&n.view&&n.view.handleClick){if(0<m(e.target).closest(".sub-view").length&&n.view.ignoreClickEvent&&n.view.ignoreClickEvent(e.target))return;if(n.view.handleClick(e,!0),n.view.scrollIntoViewElement){var a=n.view.scrollIntoViewElement();a&&this.scrollIntoView(a)}}}u.trigger("globalEvent:settingsclick",e)}else e.stopImmediatePropagation()},scrollIntoView:function(e){var t=m(e),i=t.closest(".settings-view-container"),s=t.offset().top,n=i.offset().top;s-n-12<0&&i.animate({scrollTop:i[0].scrollTop+s-n-12})},configWidget:function(e){e.stopImmediatePropagation();var t=m(e.delegatedTarget).closest(".slide-toggle").attr("data-related-widget");if(t){var i=_.findWhere(this.customizeItems,{widget:t});u.commandManager.execute(i.configCommand,null,i.configOptions)}},featureAvailable:function(e){return u.conditionalFeatures.featureEnabled(e)||u.conditionalFeatures.featureEnabled(e+"-degraded")},toggleSlider:function(e){if(!this.eatClicks){this.eatClicks=!0;var t,i=this;setTimeout(function(){i.eatClicks=!1},250);var s=m(".verte");if(!(m(e.target).closest("[data-option-value]").length||0<s.length&&m.contains(s[0],e.target)||m(e.delegatedTarget).hasClass("balanced"))){var n=m(e.delegatedTarget).attr("data-related-widget"),a=this.customizeItems.find(function(e){return e.widget===n});if(this.fieldHasOwnControl(a.field)){var o=!a.field.getValue();return a.field.setValue(o,e),void m(e.delegatedTarget).toggleClass("on",o)}if("bookmarksVisible"===n)return this.enableBookmarks(e),void c(n);if(n){a=_.findWhere(this.customizeItems,{widget:n});var l=this.model.get(a.field);if(a.options){var d;for(d=u.conditionalFeatures.featureEnabled("plus")?a.options:a.options.filter(function(e){return!e.plusOnly}),t=0;t<d.length;t++)if(d[t].value===l){t===d.length-1&&(t=-1),o=d[t+1].value;break}var r=m(e.delegatedTarget).find("."+a.widget+"[data-option-value='"+o+"']").first();this.setOption(r)&&e.stopPropagation()}else{if("mantraVisible"===n&&!u.models.mantraSettings.get("firstMantraActivated"))return u.commandManager.executeAsync("settings.display",null,{section:"mantra-settings"}),void c(n);if(o=!this.model.get(n),a.plusOnly&&!this.featureAvailable(a.requiredFeature))return void("Countdowns"===a.name?u.cmd("modal.open","UPSELL_COUNTDOWNS",{sourceEvent:"Settings"}):"Metrics"===a.name?u.cmd("modal.open","UPSELL_METRICS",{sourceEvent:"Settings"}):"Notes"===a.name?u.cmd("modal.open","UPSELL_NOTES",{sourceEvent:"Settings"}):"World Clocks"===a.name&&u.cmd("modal.open","UPSELL_WORLDCLOCKS",{sourceEvent:"Settings"}));var g={};g[n]=o,this.model.save(g),c(n)}}u.trigger("globalEvent:settingsclick",e)}}function c(e){u.sendEvent("General Settings","Toggle "+e)}},loginClicked:function(e){e.preventDefault(),e.stopPropagation(),u.sendEvent("Settings","Login","Clicked"),u.commandManager.execute("settings.hide"),u.commandManager.execute("account.login")},logoutClicked:function(e){e.preventDefault(),e.stopPropagation(),m(".action-logout").addClass("action-logout-disabled").text("Logging out..."),u.sendEvent("Settings","Logout","Clicked"),u.commandManager.execute("logout")},accountClicked:function(e){e.preventDefault(),e.stopPropagation(),m(e.delegatedTarget).html("Launching..."),m.ajax({type:"POST",data:JSON.stringify({medium:"account"}),url:u.globals.urlRootApi+"login/onetime"}).done(function(e){e&&e.otp&&e.email&&(window.location.href="http://localhost:8995/onetime?email="+encodeURIComponent(e.email)+"&otp="+encodeURIComponent(e.otp))})},switchToBalanceSettings:function(e){e&&(e.stopPropagation(),e.preventDefault()),u.commandManager.execute("settings.display",null,{section:"balance",showAdvanced:!0})},enableBookmarks:function(i){var s=this;i&&(i.stopPropagation(),i.preventDefault()),u.commandManager.executeAsync("settings.enableBookmarks",{callback:function(){var e=u.models.customization.get("bookmarksVisible"),t=u.models.bookmarksSettings.get("defaultMostVisited");m(i?i.delegatedTarget:'[data-related-widget="bookmarksVisible"]').toggleClass("on",e),s.$('[data-related-widget="mostVisited"]').toggleClass("on",t&&e)}})},isPlus:function(){return u.conditionalFeatures.featureEnabled("plus")}}),t.commands.SettingsPanelGeneral=u.models.Command.extend({defaults:{id:"settings.panels.general"},execute:function(){return t.styleLoaded||(t.styleLoaded=!0,t.styles.style()),new t.views.General}}),t};m.addinManager&&m.addinManager.registerAddinFn("9b62165c-8b05-4f9b-82b3-b093f4e77dc9",fn_addin);