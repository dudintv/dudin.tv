(window.webpackJsonp=window.webpackJsonp||[]).push([[5,15,16,17,18,19,20],{204:function(e,t,n){var content=n(257);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("630ad4de",content,!0,{sourceMap:!1})},205:function(e,t){const n={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("p",[e._v("One of the common cases of using vizrt is videowall. Often the outputs have non-standart proportion. Videowall in TV studio is a custom product constructed from several panels or blocks. So if you need to create a graphic for videowall you have to organize the workflow of creating graphic templates.")]),e._v(" "),n("p",[e._v('The main parameter of proportion in vizrt is "Aspect". For example 16:9 = 1.777(7)')]),e._v(" "),n("p",[e._v("For example composite videowall with 6 standard 16:9 panels, three columns and two rows.")]),e._v(" "),n("p",[e._v("16:9 | 16:9 | 16:9\n16:9 | 16:9 | 16:9")]),e._v(" "),n("p",[e._v("Total aspect is (16*3):(9*2) = 48:18 = 2.666(6)")]),e._v(" "),n("media-image",{attrs:{name:"custom-resolution-in-studio.png"}}),e._v(" "),n("h2",[e._v("Seting up custom aspect")]),e._v(" "),n("p",[e._v("For convenient workflow you have to change the setting:")]),e._v(" "),n("media-image",{attrs:{name:"custom-resolution-config-output-format.png"}}),e._v(" "),n("p",[e._v("If you are creating not only one format you can copy config and shortcut for launching Artist with different config.")]),e._v(" "),n("media-image",{attrs:{name:"custom-resolution-config-copy.png"}}),e._v(" "),n("p",[e._v("Creating scene in new config Artist:")]),e._v(" "),n("media-image",{attrs:{name:"custom-resolution-vizartist-create-scene.png"}}),e._v(" "),n("h2",[e._v("Using custom scene with standard license Engine")]),e._v(" "),n("p",[e._v("In onair we use standart VizEngine and VizTrio for videowall:")]),e._v(" "),n("media-image",{attrs:{name:"custom-resolution-in-viztrio.png"}}),e._v(" "),n("media-image",{attrs:{name:"custom-resolution-in-vizengine.png"}}),e._v(" "),n("p",[e._v('These Engines are configured with standard aspect 1.777(7) because of 16:9. Our scene doesn\'t work properly if scenes have set "Camera Aspect = Config." We must change aspect in the scene to "User" with a certain number.')]),e._v(" "),n("media-image",{attrs:{name:"custom-resolution-in-scene.png"}}),e._v(" "),n("p",[e._v("This scene setting overrides config.")])],1)},staticRenderFns:[]};e.exports={attributes:{title:"Custom resolution and aspect in Vizrt",description:"How setup VizEngine to working with uncommon screen proportions and resolution, for example, for videowall.",date:"2013-06-06 12:00:00 +0300",tags:"artist"},meta:{resourcePath:"/mnt/c/www/dudin.tv/content/articles/custom-resolution.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},206:function(e,t){const n={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[e._m(0),e._v(" "),n("p",[e._v('Previous to Execution Logic we were using implemented script block into Viz Template Wizard for sending custom commands to VizENgine. We used to use the "Live Update" option. It was generating a lot of problems. Every "Live Update" template was generating extra load on a computer. When you opened or run a bunch of templates it was turning into a big extra problem with computer memory and сonsequently interface latency.')]),e._v(" "),n("media-image",{attrs:{name:"el-cover.png"}}),e._v(" "),n("p",[e._v('"EL" allows put control logic to MSE as backend service. And it allows use several VizPilot safely because each Pilot does not control VizEngine directly anymore. Pilot sends commands to MSE, and MSE decides what to do.')]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("It's so unusual... isn't it? :)")]),e._v(" "),n("p",[e._v("From Pilot 5.7 knowing EL has become must-have if you would like to create custom templates. For the beginning we need to know only basic elements and debug instruments.")]),e._v(" "),n("h2",[e._v("Basic stuff of Execution Logic")]),e._v(" "),n("p",[e._v("There are three things you have to know:")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("Creating and using typical variable:")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),n("p",[e._v("List of all options you can find in MSE documentation.")]),e._v(" "),n("h3",[e._v("2. Send commands to VizEngine")]),e._v(" "),e._m(13),e._v(" "),n("p",[e._v('A simple example with two commands send to "LowerThird" channel:')]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),n("h3",[e._v("3. Get data from template")]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),n("p",[e._v("We've changed the global variable into the VizEngine which is in current Program channel in VizPilot ;)")]),e._v(" "),n("h2",[e._v("Debug Execution Logic")]),e._v(" "),n("p",[e._v("You can debug only by printing strings into consoles.")]),e._v(" "),e._m(25),e._v(" "),n("h3",[e._v("Update checking")]),e._v(" "),n("p",[e._v("Sometimes you need to be sure that new logic was updated in MSE.")]),e._v(" "),e._m(26),e._v(" "),n("media-image",{attrs:{name:"mse-master-templates.png"}}),e._v(" "),n("hr"),e._v(" "),n("br"),e._v(" "),e._m(27),e._v(" "),n("hr"),e._v(" "),n("br"),e._v(" "),n("p",[e._v("In the next part you will know:")]),e._v(" "),e._m(28)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('"Execution Logic" allows creating custom Pilot templates. It does not cancel scripts in Pilot templates for interface logic.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("EL is really different from ordinary programming languages like visual basic. EL is like traditional logic of scripting into XML form. Let's compare "),t("strong",[this._v("how to create and fill a variable")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[this._v("Visual Basic")]),this._v(" "),t("th",[this._v("Execution Logic")])])]),this._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[this._v('Dim s As String = "xyz"')])]),this._v(" "),t("td",[t("code",{pre:!0},[this._v('<def var="s">xyz</def>')])])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",[n("li",[e._v("how to create and use "),n("strong",[e._v("variables")])]),e._v(" "),n("li",[e._v("how to "),n("strong",[e._v("send commands to Engine")])]),e._v(" "),n("li",[e._v("how to get "),n("strong",[e._v("data from template fields")]),e._v(" to put it into commands.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[this._v("1. Variables. "),t("code",{pre:!0},[this._v("<var>")]),this._v(" or "),t("code",{pre:!0},[this._v("<ref>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-xml"}},[this._v('<def var="s">xyz</def>\n<var>s</var>\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By "),t("code",{pre:!0},[this._v("<var>")]),this._v(" you get the value of the variable.\nAlso, there is a list of ready useful system variables:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-xml"}},[this._v("<var>channel</var>   \x3c!-- name of current channel --\x3e\n<var>profile</var>   \x3c!-- name of current profile --\x3e\n<var>element</var>   \x3c!-- path to current data-element --\x3e\n<var>scene</var>     \x3c!-- name of vizrt scene of current template --\x3e\n<var>viz_layer</var> \x3c!-- scene layer of current template --\x3e\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("And, if you want to get a part of VDOM tree use "),t("code",{pre:!0},[this._v("<ref>")]),this._v(":\n"),t("code",{pre:!0},[this._v("<ref>/custom_logic/take</ref>")]),this._v(' takes piece of VDOM tree contains custom logic of "take".')])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[t("code",{pre:!0},[this._v("<var>")]),this._v(" just returns value of variable. "),t("code",{pre:!0},[this._v("<ref>")]),this._v(" returns and integrates part of the tree.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",[this._v("Bonus variable: "),t("code",{pre:!0},[this._v("<time>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("There is a special variable. This is the current time by format — "),t("code",{pre:!0},[this._v("<time>%c</time>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-xml"}},[this._v('<log>Time: <time utc="yes">%H:%M:%S:%ff</time></log> \x3c!-- Time: 12:00:00:00 --\x3e\n<log>Now: <time>%Y %m %d %H:%M:%S</time></log> \x3c!-- Now: 2019 01 01 12:00:00 --\x3e\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Useful in practice commands is "),n("code",{pre:!0},[e._v("<forked_exec>")]),e._v(" and "),n("code",{pre:!0},[e._v("<viz>")]),e._v(". "),n("code",{pre:!0},[e._v("<forked_exec>")]),e._v(" define the area where you can choose a channel of Pilot profile and send commands to this profile. And "),n("code",{pre:!0},[e._v("<viz>")]),e._v(" contains viz-command(s).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-xml"}},[this._v('<forked_exec>\n\t<entry name="execution_group">LowerThird</entry>\n\t<viz>RENDERER GET</viz>\n\t<viz>RENDERER SET_OBJECT </viz>\n</forked_exec>\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",{pre:!0},[this._v('<entry name="execution_group">')]),this._v(" defines profile within current "),t("code",{pre:!0},[this._v("<forked_exec>")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",{pre:!0},[this._v("<entry>")]),this._v(" often meets in VDOM, there is a name parameter which is important. "),t("code",{pre:!0},[this._v('name="execution_group"')]),this._v(' define "entry" with name of channel.')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you want to send commands to defined Program channel you can use system variable "),t("code",{pre:!0},[this._v("<var>channel</var")]),this._v(". And, you can write several commands into one "),t("code",{pre:!0},[this._v("<viz>")]),this._v(' tag divided by "new line":')])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-xml"}},[this._v('<forked_exec>\n\t<entry name="execution_group"><var>channel</var></entry>\n\t<viz>\n\t\tRENDERER GET\n\t\tRENDERER SET_OBJECT\n\t</viz>\n</forked_exec>\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('If you don\'t want to wait a response of command you can add the parameter "no_responce" '),t("code",{pre:!0},[this._v('<viz no_responce="yes">')]),this._v('. This command runs a little bit faster but you can get some bugs if you start using it with no reason. "no_responce" commands run not consistently! The second command don\'t wait finished first.')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('If you have TextEdit with ControlName parameter = "123" you can get the content by '),t("code",{pre:!0},[this._v("<ref>")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-xml"}},[this._v("<ref><var>element</var>/data/123</ref>\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("There is the system standard variable "),t("code",{pre:!0},[this._v("<var>element</var>")]),this._v(". This is the path to current data-element into VDOM XML. We dig to data by "),t("code",{pre:!0},[this._v("/data/123")]),this._v(". And we are getting content of this part VDOM XML by "),t("code",{pre:!0},[this._v("<ref>")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("There is a "),t("strong",[this._v("full working example")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-xml"}},[this._v('<forked_exec>\n\t<entry name="execution_group"><var>channel</var></entry>\n\t<viz no_response="yes">GLOBAL*MAP SET_STRING_ELEMENT Surname <ref><var>element</var>/data/surname</ref></viz>\n</forked_exec>\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",{pre:!0},[this._v("<log><var>test</var></log>")]),this._v(" prints into MSE console. If you run MSE in console mode."),t("br"),this._v(" "),t("code",{pre:!0},[this._v("<viz><var>test</var></viz>")]),this._v(" sends command to VizEngine console. I prefer this way because MSE have a lot of garbage outputs that bothers me.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",[n("li",[e._v("Launch VizPilot and open playlist with the template for checking.")]),e._v(" "),n("li",[e._v("Enter "),n("code",{pre:!0},[e._v("http://localhost:8580/app/vdomconfig/vdomconfig.html")]),e._v(" in a browser. Where "),n("code",{pre:!0},[e._v("localhost")]),e._v(" is the MSE host.")]),e._v(" "),n("li",[e._v("Dig down to "),n("code",{pre:!0},[e._v("external/master_templates/#####")]),e._v(". Where ##### is number your template. Obviously you won't know it, just go through all of the existing elements.")]),e._v(" "),n("li",[e._v("Look "),n("code",{pre:!0},[e._v("commands")]),e._v(" section. There are all your actual EL commands. Just check it visually.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("This information is enough to begin. You have known how to control Engine by template data.")]),t("br"),this._v(" "),t("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("if-else branch")]),this._v(" "),t("li",[this._v("delayed commands")]),this._v(" "),t("li",[this._v("infinity cycles")])])}]};e.exports={attributes:{title:"Execution Logic. Part 1",description:"Creating custom logic for custom vizrt template.",date:"2017-11-12 12:00:00 +0300",tags:"vcp vtw"},meta:{resourcePath:"/mnt/c/www/dudin.tv/content/articles/execution-logic-1.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},207:function(e,t){const n={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[e._m(0),e._v(" "),n("p",[e._v('This mechanism based on 1) convention of directors names, 2) duration of Takeout director, 3) duplicating scenes and 4) moving scenes from front to middle layer (I call it "jump off").')]),e._v(" "),n("p",[e._v('The idea of "jumping scenes" is loading scenes into the front layer and after 1.5 seconds jumping off to middle layer. In the beginning front scene starts "Take" director and the middle scene play "Takeout" director simultaneously. We get unique transition effects — old scene pleasantly goes away when a new scene appears. Each scene has custom unique animations of appearing and disappearing.')]),e._v(" "),n("p",[e._v("You have to think only about the duration of disappearing. It must be less than some conventional seconds. I recommend 1.5 seconds for the most real projects.")]),e._v(" "),n("h2",[e._v("Preview")]),e._v(" "),n("p",[e._v("I made 0.5 sec for the preview. Take a look how it works (no sound ;)):")]),e._v(" "),n("media-youtube",{attrs:{url:"https://www.youtube.com/embed/fEwqgMe_xX8"}}),e._v(" "),n("p",[e._v("There are three different design slides in different styles. Note how they correctly combine while transition. Especially how combines the same style slides.")]),e._v(" "),n("h2",[e._v("Why I don't use Transition Logic")]),e._v(" "),e._m(1),e._v(" "),n("h2",[e._v("How to cook jumping scene")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("Why I start and stop one director? :) This hacking give me 1) convenience to play Take in Artist and 2) automatically takeout another scene in Engine mode and reset Takeout director in the self scene.")]),e._v(" "),e._m(4),e._v(" "),n("p",[e._v('These commands make the "jump" effect. It creates copy to middle layer (push out the previous scene) and erase itself from the front layer.\nDone.')]),e._v(" "),n("media-image",{attrs:{name:"jumping-scene-stage-take-action-keys.png"}}),e._v(" "),n("h2",[e._v("Prepare VCP template")]),e._v(" "),n("p",[e._v('Next, you need to create vcp template for this scene. We start as usual, create a new template by Wizard in Template Wizard. Make interface as you want. And we have to use "execution logic" for our custom commands.')]),e._v(" "),n("p",[e._v("Only three commands:")]),e._v(" "),e._m(5),e._v(" "),n("hr"),e._v(" "),e._m(6),e._v(" "),n("p",[e._v('If you are familiar with Execution Logic you understand what to do with these commands. If not I can recommend you head to documentation but I know they\'re not so good for understanding. I will prepare a lesson about "EL"... ')]),e._v(" "),n("p",[e._v('Now you just can copy the commands to "take" section in EL. Of course with changing paths and content for ControlObject. Extra:')]),e._v(" "),e._m(7),e._v(" "),n("p",[e._v("Full EL script for my example:")]),e._v(" "),e._m(8),e._v(" "),n("h2",[e._v("Smart loading script for VizEngine")]),e._v(" "),n("p",[e._v("As you can see I use some script trick instead of command to load the scene directly.")]),e._v(" "),e._m(9),e._v(" "),n("h2",[e._v("Known Issue")]),e._v(" "),n("p",[e._v('Main disadvantage "jumping" scene is the busy front layer. You can use the back layer for background. But you can\'t use the front layer.')])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Jumping scene useful for unpredictable seamless graphic flow.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("I want every new graphic must appears on the front.")]),this._v(" "),t("li",[this._v("Universality. I can smoothly appear new graphics on top of any scene;)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Create Take and Takeout as independent directors. Make sure that Takeout animation is less than 1.5 seconds.")]),this._v(" "),t("li",[this._v('Create an action channel in Take director. Name it like "jump".')]),this._v(" "),t("li",[this._v("Create two action keys at 0 and 1.5 seconds with commands:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-r"}},[this._v("#1 at 0 sec:\nRENDERER*STAGE*DIRECTOR*Takeout CONTINUE;\nTHIS_SCENE*STAGE*DIRECTOR*Takeout SHOW 0;\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-r"}},[this._v("#2 at 1.5 sec:\nRENDERER SET_OBJECT THIS_SCENE;\nRENDERER*FRONT_LAYER SET_OBJECT ;\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Load scene (or copy) to the front layer.")]),this._v(" "),t("li",[this._v("Load controls values into the scene.")]),this._v(" "),t("li",[this._v("Start the Take director.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-r"}},[this._v("SCENE*COMMON/SCRIPTS/LoadJumpScene*SCRIPT INVOKE Load News/Videowall/Slide1\nRENDERER*FRONT_LAYER*TREE*$object*FUNCTION*ControlObject*in SET ON 1 SET 111\\02 SET 222\\03 SET 333\nRENDERER*FRONT_LAYER*STAGE*DIRECTOR*Take START\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v('"\\0" — this is one separation symbol. We have to use it to separate several data contents. Control ids are "1", "2" and "3" in my example.')]),this._v(" "),t("li",[this._v("You need insert control data from the template. It's "),t("code",{pre:!0},[this._v("<ref><var>element</var>/data/1</ref>")]),this._v(' for element with parameter ControlObjectName = "1".')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-xml"}},[this._v('<forked_exec>\n\t<entry name="execution_group"><var>channel</var></entry>\n\t<viz>\n\t\tSCENE*COMMON/SCRIPTS/LoadJumpScene*SCRIPT INVOKE Load News/Videowall/Slide1\n\t\tRENDERER*FRONT_LAYER*TREE*$object*FUNCTION*ControlObject*in SET ON 1 SET <ref><var>element</var>/data/1</ref>\\02 SET <ref><var>element</var>/data/2</ref>\\03 SET <ref><var>element</var>/data/3</ref>\n\t\tRENDERER*FRONT_LAYER*STAGE*DIRECTOR*Take START\n\t</viz>\n</forked_exec>\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",{pre:!0,attrs:{class:"language-r"}},[this._v("SCENE*COMMON/SCRIPTS/LoadJumpScene*SCRIPT INVOKE Load News/Videowall/Slide1\n")])])}]};e.exports={attributes:{title:"Jumping scene for seamless graphic",description:"Jumping scene useful for unpredictable seamless graphic flow.",date:"2018-10-10 12:00:00 +0300",tags:"artist vcp"},meta:{resourcePath:"/mnt/c/www/dudin.tv/content/articles/jumping-scene.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},208:function(e,t){const n={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[e._m(0),e._v(" "),n("p",[e._v("Default oprions:\n"),n("media-image",{attrs:{name:"startup-option-default.png"}})],1),e._v(" "),n("h2",[e._v("How to set up a startup option")]),e._v(" "),e._m(1),e._v(" "),n("p",[e._v('Each option starts with the minus sign "-". If the option has a parameter, it writes after the option definition separated by space.')]),e._v(" "),n("h2",[e._v("Examples")]),e._v(" "),n("h3",[e._v("Load VizArtist / VizEngine with another config")]),e._v(" "),n("p",[e._v("This is the most popular option.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("media-image",{attrs:{name:"startup-option-g.png"}}),e._v(" "),n("h3",[e._v("Load VizArtist / VizEngine connected to different GraphicHub")]),e._v(" "),e._m(4),e._v(" "),n("media-image",{attrs:{name:"startup-option-db.png"}}),e._v(" "),n("h3",[e._v("Load VizArtist / VizEngine with a particular scene")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),n("h3",[e._v("Full list")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),n("h2",[e._v("Template Wizard")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("If you want to have several configs of VizArtist, or automatically load a particular scene when VizEngine is loaded, startup options can help you.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",[n("li",[e._v("Right mouse click on a shrotcut of the Artist / Engine / TemplateWizard (VTW)")]),e._v(" "),n("li",[e._v('Find string field "Target"')]),e._v(" "),n("li",[e._v("Check out the format. It must be "),n("code",{pre:!0},[e._v('"<path to engine>" <startup options #1> <startup options #2>')]),e._v(". Every option is separated by space. For example: "),n("br"),e._v(" "),n("code",{pre:!0},[e._v('"C:\\Program Files\\Vizrt\\Viz3\\viz.exe" -u1 -y')])]),e._v(" "),n("li",[e._v("Add your option through space. "),n("em",[e._v("Or delete existing one.")]),e._v(" For example: "),n("br"),e._v(" "),n("code",{pre:!0},[e._v('"C:\\Program Files\\Vizrt\\Viz3\\viz.exe" -u1 -y  -g videowall.cfg')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",{pre:!0},[this._v("-g <relative or the full path to config>")]),this._v(" — start VizArtist / VizEngine with the particular config.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For example, "),t("code",{pre:!0},[this._v("-g other.cfg")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",{pre:!0},[this._v("-db Admin:VizDb@VizDbServer/localhost:19396")]),this._v(' — sign in another "DataBase" (Viz Graphic Hub) with Admin:VizDb credentials.')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",{pre:!0},[this._v("-o <full path to the scene>")]),this._v(" — automatically load and start particular scene just after loading VizEngine. If you add this option to VizArtist shortcut its turn out the VizEngine.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For example, "),t("code",{pre:!0},[this._v("-o SCENE*Dudin/Test/MaxSize")]),this._v(" or "),t("code",{pre:!0},[this._v("-o Dudin/Test/MaxSize")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Option")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("code",{pre:!0},[e._v("-c")])]),e._v(" "),n("td",[e._v("Start as Config mode.")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-C")])]),e._v(" "),n("td",[e._v("Start without console.")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-db ...")])]),e._v(" "),n("td",[e._v("Specify the Graphic Hub. Format is "),n("em",[e._v("user:pw@server/name-server:port")]),e._v(". "),n("br"),e._v(" Example: "),n("code",{pre:!0},[e._v("-db Guest:@VizDbServer/localhost:19396")]),e._v(".")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-g <config file>")])]),e._v(" "),n("td",[e._v("Start with another Viz Config file.")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-i")])]),e._v(" "),n("td",[e._v("Enable pre-initialization of textures. Textures are generated on the graphics card immediately after loading an image.")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-l")])]),e._v(" "),n("td",[e._v("Specify a console title to distinguish Viz Engines in a Dual Channel setup. Example: "),n("code",{pre:!0},[e._v("-l <title>")]),e._v(".")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-n")])]),e._v(" "),n("td",[e._v("Start in Viz Engine mode.")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-o <scene>")]),e._v(" or "),n("code",{pre:!0},[e._v("-o <layer> <scene>")])]),e._v(" "),n("td",[e._v("Autoloading the scene after VizEngine start. "),n("code",{pre:!0},[e._v("<layer>")]),e._v(" accepts values: 0 - back layer, 1 - middle layer, 2 - front layer. "),n("br"),e._v(" Example: "),n("code",{pre:!0},[e._v("-o 1 Dudin/Test/Background")]),e._v(".")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-P")])]),e._v(" "),n("td",[e._v("Disable automatic mouse capture.")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-t")])]),e._v(" "),n("td",[e._v("Non-interactive mode.")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-T")])]),e._v(" "),n("td",[e._v("Console is always on top.")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-u1")]),e._v(", "),n("code",{pre:!0},[e._v("-u2")]),e._v(", "),n("code",{pre:!0},[e._v("-u3")]),e._v(" (up to 24)")]),e._v(" "),n("td",[e._v("Specify GPU1 (-u1), etc... For system with several graphic cards.")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-v <argument>")])]),e._v(" "),n("td",[e._v("Verbose mode. Argument is a composite bytes integer of: 1 - produce verbose output to console, 2 - add a timestamp, 4 - log OpenGL, 16 - log 2d-texture messages, 32 - log Graphic Hub releated debug messages, 64 - log medium and high GL warnings")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-w")])]),e._v(" "),n("td",[e._v("Engine mode and show render window (videowall mode).")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-W")])]),e._v(" "),n("td",[e._v("Disable restart on crash.")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-x")])]),e._v(" "),n("td",[e._v("Without GUI.")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-X")])]),e._v(" "),n("td",[e._v("Write extended dump file (full memory dump) in case of a program crash.")])]),e._v(" "),n("tr",[n("td",[n("code",{pre:!0},[e._v("-y")])]),e._v(" "),n("td",[e._v("Start in Artist mode.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v('Please look in the documentation of VizEngine in "5.4 Viz Command Line Options".')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",{pre:!0},[this._v("-duplicates")]),this._v(" — for using multiple copies TVW at the same time on the one computer. Example:\n"),t("code",{pre:!0},[this._v('"C:\\Program Files (x86)\\Vizrt\\Viz Pilot 8.2\\VizTemplateWizard.exe" -duplicates')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",{pre:!0},[this._v("-mse <host>")]),this._v(" — specify the MSE")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",{pre:!0},[this._v("-db <connect string>")]),this._v(" — specify the database")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",{pre:!0},[this._v("-inifile <path>")]),this._v(" — specify the path of ini-file")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v('Please look in the documentation of VizPilot in "9.3.2 To specify command line parameters for Template Wizard".')])])}]};e.exports={attributes:{title:"Startup options",description:"To run several VizArtist instances with different configs, or automatically load particular scene when VizEngine is started, you need this options.",date:"2019-01-15 12:00:00 +0300",tags:"artist vtw"},meta:{resourcePath:"/mnt/c/www/dudin.tv/content/articles/startup-options.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},209:function(e,t){const n={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",[e._v("Animations")]),e._v(" "),n("blockquote",[n("p",[e._v("Use them in action channel in the director")])]),e._v(" "),n("p",[e._v("Start the same director (e.g. make a loop):")]),e._v(" "),n("p",[n("code",{pre:!0},[e._v("THIS_DRECTOR START")])]),e._v(" "),n("p",[e._v("Start another director:")]),e._v(" "),n("p",[n("code",{pre:!0},[e._v("THIS_SCENE*STAGE*DIRECTOR*Name START")]),e._v("\n(replace "),n("strong",[e._v('"Name"')]),e._v(" with the name of the director)")]),e._v(" "),n("p",[e._v('There is not only "START" command. The full list:')]),e._v(" "),n("pre",[n("code",{pre:!0},[e._v("START\nCONTINUE\nSTOP\n\nSTART REVERSE\nCONTINUE REVERSE\n")])]),e._v(" "),n("h2",[e._v("Control parameter")]),e._v(" "),n("blockquote",[n("p",[e._v('Use them in the "control parameter" plugin to expose any parameter on the container')])]),e._v(" "),n("pre",[n("code",{pre:!0},[e._v("TRANSFORMATION*POSITION*X\nTRANSFORMATION*ROTATION*Y\nTRANSFORMATION*SCALING*Z\n")])]),e._v(" "),n("p",[e._v("Change the axis as you need: X, Y, Z")])])}]};e.exports={attributes:{title:"Useful console commands",description:"xxx",date:"2021-12-21 12:00:00 +0300",tags:"artist"},meta:{resourcePath:"/mnt/c/www/dudin.tv/content/articles/useful-console-commands.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},210:function(e,t){const n={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[e._m(0),e._v(" "),n("p",[e._v("VizArtist has only fullscreen mode and it isn't useful if you have only one monitor. Of course, you can have solution such as buying the second monitor. Sometimes you can't set up second monitor for some reason. Or you're using a large screen and working with Artist isn't comfortable or you want to have a reference near to the working area.")]),e._v(" "),n("p",[e._v("I have receipt how to get around the issue:")]),e._v(" "),e._m(1),e._v(" "),n("media-image",{attrs:{name:"viz_in_window_using.png"}}),e._v(" "),n("h2",[e._v("How it working:")]),e._v(" "),n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/kfqtSZtMHbw",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"title_vizrt_window.jpg",alt:"Windowed mode for VizArtist",title:"Windowed mode for VizArtist"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Switch screen resolution to a smaller size (it will be the size of Artist)")]),this._v(" "),t("li",[this._v("Start VizArtist and wait when loading screen appeared")]),this._v(" "),t("li",[this._v("After that (at any time) just turn back the resolution. Voila!")])])}]};e.exports={attributes:{title:"Windowed mode for VizArtist",description:"Yes, you can make classic VizArtist working in window.",date:"2015-04-07 12:08:10 +0300",tags:"artist"},meta:{resourcePath:"/mnt/c/www/dudin.tv/content/articles/windowed-vizartist.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},211:function(e,t,n){var content=n(260);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("375a5d84",content,!0,{sourceMap:!1})},256:function(e,t,n){"use strict";var r=n(204);n.n(r).a},257:function(e,t,n){(t=n(13)(!1)).push([e.i,".date[data-v-97e195e2]{color:hsla(0,0%,100%,.5)}.icons[data-v-97e195e2]{display:flex;position:absolute;left:0;padding-right:.5rem;transform:translateX(-100%)}.icon[data-v-97e195e2]{margin-left:.25rem;margin-right:.25rem;width:32px;height:32px}.title[data-v-97e195e2]{color:#78beff}",""]),e.exports=t},258:function(e,t,n){var map={"./custom-resolution.md":205,"./execution-logic-1.md":206,"./jumping-scene.md":207,"./startup-options.md":208,"./useful-console-commands.md":209,"./vizrt-script-1.md":254,"./windowed-vizartist.md":210};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=258},259:function(e,t,n){"use strict";var r=n(211);n.n(r).a},260:function(e,t,n){(t=n(13)(!1)).push([e.i,".articles-page[data-v-8aa340a0]{position:relative;display:flex;justify-content:center;align-items:center;width:100%;padding-left:6rem;padding-right:1rem}#articles-bg[data-v-8aa340a0]{position:absolute;z-index:0;top:-15vw}.articles-list[data-v-8aa340a0]{position:relative;display:flex;flex-direction:column;z-index:10;max-width:600px}",""]),e.exports=t},333:function(e,t,n){"use strict";n.r(t);n(33),n(18),n(32);var r=n(3),o=n(16),c=n.n(o),l=(n(113),{props:{article:{type:Object,required:!0}},computed:{icons:function(){return this.article.attributes.tags.split(" ")},date:function(){var e=new Date(this.article.attributes.date);return e.toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"})}},methods:{slug:function(){return this.article.meta.resourcePath.split("\\").pop().split("/").pop().split(".")[0]},permalink:function(){return"/articles/".concat(this.slug())}}}),v=(n(256),n(11)),_={components:{ArticleItem:Object(v.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-item mb-16"},[n("span",{staticClass:"date"},[e._v(e._s(e.date))]),n("div",{staticClass:"title"},[n("div",{staticClass:"icons"},e._l(e.icons,(function(e){return n("img",{staticClass:"icon",attrs:{src:"/images/icons/"+e+".png"}})})),0),n("nuxt-link",{attrs:{to:e.permalink()}},[n("h2",{staticClass:"title text-left my-2"},[e._v(e._s(e.article.attributes.title))])])],1),n("p",{staticClass:"description mb-0"},[e._v(e._s(e.article.attributes.description))]),n("small",[n("nuxt-link",{attrs:{to:e.permalink()}},[e._v("read more ...")])],1)])}),[],!1,null,"97e195e2",null).exports},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n(258),r=t.keys().map((function(e){return t(e)})).sort((function(e,t){return new Date(e.attributes.date)<new Date(t.attributes.date)?1:-1})),e.abrupt("return",{articles:r});case 3:case"end":return e.stop()}}),e)})))()},mounted:function(){c.a.loadAnimation({container:document.getElementById("articles-bg"),renderer:"svg",loop:!0,autoplay:!0,path:"/animations/bg-rock.json",speed:500}).setSpeed(2)}},d=(n(259),Object(v.a)(_,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"articles-page"},[t("div",{attrs:{id:"articles-bg"}}),t("div",{staticClass:"articles-list"},this._l(this.articles,(function(article){return t("ArticleItem",{key:article.attributes.title,attrs:{article:article}})})),1)])}),[],!1,null,"8aa340a0",null));t.default=d.exports}}]);