(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{232:function(t,e){const r={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"frontmatter-markdown"},[r("p",[t._v("I know about the standard feature of Vizrt of importing *.aep projects. But also, I know that it sometimes gives an ugly or inconvenient result. I've workaround this by manual scripts. Of course, the manual way isn't handy. But you get full control of what there happens!")]),t._v(" "),r("p",[t._v("There are three scripts.")]),t._v(" "),t._m(0),t._v(" "),r("h2",[t._v("Little theory")]),t._v(" "),r("p",[t._v('There are two types of Axis System Definition in the 3D world. They are called as "right-handed" and "left-handed".')]),t._v(" "),r("details",[r("summary",[t._v("How to discover side of axis?")]),t._v("\nJust look at your palms and count your fingers:\n"),t._m(1),t._v(" "),r("media-image",{attrs:{name:"axes-system-definition.png"}})],1),t._v(" "),r("p",[t._v("There are several types of rotation orders. And, the type by default also is OK.")]),t._v(" "),r("media-image",{attrs:{name:"vizrt-axes-oerder.png"}}),t._v(" "),r("p",[t._v("Fortunately, AE and Vizrt have the same types of Axis System Definition — right-handed, and the same orders of rotation — XYZ! Nice! :)")]),t._v(" "),r("p",[t._v("My scripts are based on saving of coordinates from AE. So, you need to know:")]),t._v(" "),t._m(2),t._v(" "),r("h2",[t._v("Algorithm to copy of animation from AE to Vizrt")]),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("Firstly, open your composition in AE ;)")]),t._v(" "),r("h3",[t._v("1. Select keyframes")]),t._v(" "),r("p",[t._v("Please, you can select all keyframes by mouse frame or just pick with shift key the first and the last one. It's the same for the script:")]),t._v(" "),r("media-image",{attrs:{name:"ae-select-keyframes.png"}}),t._v(" "),t._m(4),t._v(" "),r("h3",[t._v('2. Run "ae-coords-extract-to-txt.jsx" script into AfterEffects')]),t._v(" "),r("media-image",{attrs:{name:"ae-menu-run-script.png"}}),t._v(" "),r("p",[t._v("You will take an alert message most likely:")]),t._v(" "),r("media-image",{attrs:{name:"ae-script-alert.png"}}),t._v(" "),r("p",[t._v("Just follow the instruction in the messages. Set on the checkbox in menu Preferences > General:")]),t._v(" "),r("media-image",{attrs:{name:"ae-allow-scripts-to-write-files.png"}}),t._v(" "),r("p",[t._v("Try again.")]),t._v(" "),r("p",[t._v("If you did it, next step is selecting the out path:")]),t._v(" "),r("media-image",{attrs:{name:"ae-select-path.png"}}),t._v(" "),r("p",[t._v("And accept the format. It's important to leave it as is for vizrt scripts.")]),t._v(" "),r("media-image",{attrs:{name:"ae-select-format.png"}}),t._v(" "),r("p",[t._v("You can check out the result, just open the txt-file:")]),t._v(" "),r("media-image",{attrs:{name:"txt-format.png"}}),t._v(" "),r("p",[t._v("Animation data is ready now!")]),t._v(" "),r("h3",[t._v("3. Import animation to vizrt scene")]),t._v(" "),r("p",[t._v('Drop an import script to a container — either for layer or for the camera. "Compile & run" it.')]),t._v(" "),t._m(5),t._v(" "),r("media-image",{attrs:{name:"vizrt-ui-layer-script.png"}}),t._v(" "),r("h4",[t._v("More about container animation")]),t._v(" "),r("p",[t._v('There must be one additional sub-container "xxx_rotation" because you can use orientation and rotation in AE at the same time. It\'s important for 3D composition where you can rotate by two channels (rotation and orientation).')]),t._v(" "),r("media-image",{attrs:{name:"vizrt-layer-tree.png"}}),t._v(" "),r("h4",[t._v("More about camera animation")]),t._v(" "),r("p",[t._v("We can't animation vizrt-camera with a target. Thus, the script animate two sub-containers and you have to manually link them to your camera.")]),t._v(" "),r("media-image",{attrs:{name:"vizrt-cam-tree.png"}}),t._v(" "),r("h3",[t._v("4a. Either setting up vizrt STATIC camera ...")]),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("As you could see, the objects move in the wrong directions. It is happening because (1) a camera in AE have another direction and (2) the zero points located in the top left corner. Let's correct it!")]),t._v(" "),t._m(7),t._v(" "),r("media-image",{attrs:{name:"camera-rotation.png"}}),t._v(" "),t._m(8),t._v(" "),r("p",[t._v('Set "Measure film size" to the "Vertically" and copy the "Angle of view".')]),t._v(" "),r("media-image",{attrs:{name:"ae-camera-settings.png"}}),t._v(" "),r("p",[t._v('Paste the value to the "Zoom" in your scene:')]),t._v(" "),r("media-image",{attrs:{name:"vizrt-camera-settings.png"}}),t._v(" "),r("h3",[t._v("4b. ... or import camera animation to vizrt scene")]),t._v(" "),r("p",[t._v('You can use one of two camera types — one-node and two-node. One-node is a kind of "free camera". Two-node is a camera with target point. Target ("Point of Interest") is added as an extra parameter in a layer:')]),t._v(" "),r("media-image",{attrs:{name:"ae-type-cam.png"}}),t._v(" "),r("p",[t._v("When you import animation you have to consider the camera type.")]),t._v(" "),t._m(9),t._v(" "),r("media-image",{attrs:{name:"vizrt-one-node-cam.png"}}),t._v(" "),t._m(10),t._v(" "),r("media-image",{attrs:{name:"vizrt-two-node-cam.png"}}),t._v(" "),t._m(11),t._v(" "),r("h3",[t._v("5. Rotate containers")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("the First script is for storing (layer or camera) keyframe data from Adobe After Effects to *.txt file.")]),this._v(" "),e("li",[this._v("Two another are for re-store animation data from *.txt to Vizrt scene:\n"),e("ul",[e("li",[this._v("for container")]),this._v(" "),e("li",[this._v("for a camera (free or targeting)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Thumb — X")]),this._v(" "),e("li",[this._v("Index — Y")]),this._v(" "),e("li",[this._v("Middle — Z")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("strong",[t._v("screen center")]),t._v(": on top left corner in AE / at center in Vizrt")]),t._v(" "),r("li",[r("strong",[t._v("default camera look")]),t._v(": to positive direction in AE / to negative in Vizrt")]),t._v(" "),r("li",[r("strong",[t._v("default vertical camera angle")]),t._v(": 29.9 degree in AE / 45 degree in Vizrt")]),t._v(" "),r("li",[r("strong",[t._v("scale")]),t._v(": 100.0 AE = 1.0 Vizrt")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("My scripts are very manual way to transfer animation, but it's convenient to control what exactly you want to transfer.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("It can be regular layer and camera.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v('Click on "Create sub-containers". '),e("em",[this._v("(only for the first time)")])]),this._v(" "),e("li",[this._v("Select file with data. Write the name of the layer. "),e("em",[this._v("(only for the first try or if the filename was changed)")])]),this._v(" "),e("li",[this._v('Push "Import animation" on the script.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("If you don't have any camera in AE composition, you have to create one for synchronizing field of view between AE and Vizrt.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("You have to rotate the camera or root-container 180 degrees on the X-axis:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v('Consider the angle of view. AE vertical angle of the camera is the "Zoom" of "Lens" in vizrt scene.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For "),e("strong",[this._v("one-node camera")]),this._v(" you enough have only one container and just drop it into both tracking dropzones:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For "),e("strong",[this._v("two-node camera")]),this._v(" you have to create two sub-containers (just click the button in the script) and set up camera like this:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Don't forget to set "),e("strong",[this._v("Twist")]),this._v(' to 180 before set "Direction tracking"!')])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Rotate your objects as you need — face sides to the camera. Most likely it would be 180 degrees on the X-axis. "),e("em",[this._v("It's need because in vizrt object is created with face to another direction in the space compared with AE.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Download example AE file "),e("a",{attrs:{href:"/assets/scripts/vizartist/ae-to-vizrt/ae-to-vizrt-test-cc2019.aep"}},[this._v("ae-to-vizrt-test-cc2019.aep")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Download example Vizrt scene "),e("a",{attrs:{href:"/assets/scripts/vizartist/ae-to-vizrt/ae-to-vizrt-test.via"}},[this._v("ae-to-vizrt-test.via")])])}]};t.exports={attributes:{title:"AE to Vizrt",description:"Scripts for manual transfering animation from Adobe After Effects to Vizrt.",category:"animation",path:"dudin-animation/ae-to-vizrt"},meta:{resourcePath:"/Users/dmitrydudin/vizrt/dudin.tv/content/scripts/ae-to-vizrt.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}}}]);