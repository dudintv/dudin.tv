(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{201:function(e,t){const o={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"frontmatter-markdown"},[o("blockquote",[o("p",[e._v("If you want to have several configs of VizArtist, or automatically load particular scene when VizEngine is loaded, startup options can help you.")])]),e._v(" "),o("h2",[e._v("How to set up startup option")]),e._v(" "),o("ol",[o("li",[e._v("Right mouse click on a shrotcut of the Artist / Engine / TemplateWizard (VTW)")]),e._v(" "),o("li",[e._v('Find "object" string field')]),e._v(" "),o("li",[e._v("Check out the format. It must be "),o("code",{pre:!0},[e._v('"<path to engine>" <startup options #1> <startup options #2>')]),e._v(". Every option separates by space. For example: "),o("br"),e._v(" "),o("code",{pre:!0},[e._v('"C:\\Program Files\\Vizrt\\Viz3\\viz.exe" -u1 -y')])]),e._v(" "),o("li",[e._v("Add your option through space. "),o("em",[e._v("Or delete existing one.")]),e._v(" For example: "),o("br"),e._v(" "),o("code",{pre:!0},[e._v('"C:\\Program Files\\Vizrt\\Viz3\\viz.exe" -u1 -y  -g videowall.cfg')])])]),e._v(" "),o("p",[e._v('Each option starts with minus sign "-". If the option have a parameter, it writes after the option definition through space.')]),e._v(" "),o("h2",[e._v("VizArtist / VizEngine")]),e._v(" "),o("h3",[e._v("Load VizEngine with another config")]),e._v(" "),o("p",[e._v("This is the most popular option.")]),e._v(" "),o("p",[o("code",{pre:!0},[e._v("-g <relative or full path to config>")]),e._v(" — start VizArtist / VizEngine with particular config.")]),e._v(" "),o("p",[e._v("For example, "),o("code",{pre:!0},[e._v("-g other.cfg")]),e._v(".")]),e._v(" "),o("h3",[e._v("Load VizEngine with particular scene")]),e._v(" "),o("p",[o("code",{pre:!0},[e._v("-o <full path to the scene>")]),e._v(" — automatically load and start particular scene just after loading VizEngine. If you add this option to VizArtist shortcut its turn out the VizEngine.")]),e._v(" "),o("p",[e._v("For example, "),o("code",{pre:!0},[e._v("-o SCENE*Dudin/Test/MaxSize")]),e._v(" or "),o("code",{pre:!0},[e._v("-o Dudin/Test/MaxSize")])]),e._v(" "),o("h3",[e._v("Full list")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Option")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",{pre:!0},[e._v("-c")])]),e._v(" "),o("td",[e._v("Start as Config mode.")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-C")])]),e._v(" "),o("td",[e._v("Start without console.")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-db ...")])]),e._v(" "),o("td",[e._v("Specify the Graphic Hub. Format is "),o("em",[e._v("user:pw@server/name-server:port")]),e._v(". "),o("br"),e._v(" Example: "),o("code",{pre:!0},[e._v("-db Guest:@VizDbServer/localhost:19396")]),e._v(".")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-g <config file>")])]),e._v(" "),o("td",[e._v("Start with another Viz Config file.")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-i")])]),e._v(" "),o("td",[e._v("Enable pre-initialization of textures. Textures are generated on the graphics card immediately after loading an image.")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-l")])]),e._v(" "),o("td",[e._v("Specify a console title to distinguish Viz Engines in a Dual Channel setup. Example: "),o("code",{pre:!0},[e._v("-l <title>")]),e._v(".")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-n")])]),e._v(" "),o("td",[e._v("Start in Viz Engine mode.")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-o <scene>")]),e._v(" or "),o("code",{pre:!0},[e._v("-o <layer> <scene>")])]),e._v(" "),o("td",[e._v("Autoloading the scene after VizEngine start. "),o("code",{pre:!0},[e._v("<layer>")]),e._v(" accepts values: 0 - back layer, 1 - middle layer, 2 - front layer. "),o("br"),e._v(" Example: "),o("code",{pre:!0},[e._v("-o 1 Dudin/Test/Background")]),e._v(".")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-P")])]),e._v(" "),o("td",[e._v("Disable automatic mouse capture.")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-t")])]),e._v(" "),o("td",[e._v("Non-interactive mode.")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-T")])]),e._v(" "),o("td",[e._v("Console is always on top.")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-u1")]),e._v(", "),o("code",{pre:!0},[e._v("-u2")]),e._v(", "),o("code",{pre:!0},[e._v("-u3")]),e._v(" (up to 24)")]),e._v(" "),o("td",[e._v("Specify GPU1 (-u1), etc... For system with several graphic cards.")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-v <argument>")])]),e._v(" "),o("td",[e._v("Verbose mode. Argument is a composite bytes integer of: 1 - produce verbose output to console, 2 - add a timestamp, 4 - log OpenGL, 16 - log 2d-texture messages, 32 - log Graphic Hub releated debug messages, 64 - log medium and high GL warnings")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-w")])]),e._v(" "),o("td",[e._v("Engine mode and show render window (videowall mode).")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-W")])]),e._v(" "),o("td",[e._v("Disable restart on crash.")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-x")])]),e._v(" "),o("td",[e._v("Without GUI.")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-X")])]),e._v(" "),o("td",[e._v("Write extended dump file (full memory dump) in case of a program crash.")])]),e._v(" "),o("tr",[o("td",[o("code",{pre:!0},[e._v("-y")])]),e._v(" "),o("td",[e._v("Start in Artist mode.")])])])]),e._v(" "),o("p",[o("em",[e._v('Please look in the documentation of VizEngine in "5.4 Viz Command Line Options".')])]),e._v(" "),o("h2",[e._v("Template Wizard")]),e._v(" "),o("p",[o("code",{pre:!0},[e._v("-duplicates")]),e._v(" — for using multiple copies TVW at the same time on the one computer. Example:\n"),o("code",{pre:!0},[e._v('"C:\\Program Files (x86)\\Vizrt\\Viz Pilot 8.2\\VizTemplateWizard.exe" -duplicates')])]),e._v(" "),o("p",[o("code",{pre:!0},[e._v("-mse <host>")]),e._v(" — specify the MSE")]),e._v(" "),o("p",[o("code",{pre:!0},[e._v("-db <connect string>")]),e._v(" — specify the database")]),e._v(" "),o("p",[o("code",{pre:!0},[e._v("-inifile <path>")]),e._v(" — specify the path of ini-file")]),e._v(" "),o("p",[o("em",[e._v('Please look in the documentation of VizPilot in "9.3.2 To specify command line parameters for Template Wizard".')])])])}]};e.exports={attributes:{title:"Startup options",description:"To run several VizArtist instances with different configs, or automatically load particular scene when VizEngine is started, you need this options.",date:"2019-01-15 12:00:00 +0300",tags:"artist vtw"},meta:{resourcePath:"/Users/svetozar/rails/dudin.tv/content/articles/startup-options.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=o.render,this.$options.staticRenderFns=o.staticRenderFns}}}}}}]);