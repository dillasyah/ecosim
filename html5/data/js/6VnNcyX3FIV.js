window.globalProvideData('slide', '{"title":"5. Terakhir, buatlah kesimpulan berdasarkan simulasi yang telah anda lakukan!","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":6,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide6","width":720,"height":405,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6VnNcyX3FIV","actionGroups":{"ReviewInt_5ouPiqJALGn":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6pM3dBYWBzg"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5ouPiqJALGn","typea":"var","valueb":"6C7KnzXNNbg","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"}]}]},"ReviewIntCorrectIncorrect_5ouPiqJALGn":{"kind":"actiongroup","actions":[]},"AnsweredInt_5ouPiqJALGn":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5ouPiqJALGn"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_5ouPiqJALGn":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6pM3dBYWBzg"},"enabled":{"type":"boolean","value":false}}]},"5ouPiqJALGn_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6BtnvqcA2Zq.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5ouPiqJALGn"}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_6VnNcyX3FIV":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6bxooLKq7pv"}}]},"NavigationRestrictionPreviousSlide_6VnNcyX3FIV":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5Yy4j91xe8J","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5Yy4j91xe8J","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5ouPiqJALGn","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5ouPiqJALGn"}],"elseActions":[{"kind":"exe_actiongroup","id":"5ouPiqJALGn_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5ouPiqJALGn","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5ouPiqJALGn","typea":"var","valueb":"6C7KnzXNNbg","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6C7KnzXNNbg"},"completed_slide_ref":{"type":"string","value":"_player.6FrqYKvTyvr.6bxooLKq7pv"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5ouPiqJALGn","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5ouPiqJALGn","typea":"var","valueb":"6C7KnzXNNbg","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6C7KnzXNNbg"},"completed_slide_ref":{"type":"string","value":"_player.6FrqYKvTyvr.6bxooLKq7pv"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6VnNcyX3FIV"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6VnNcyX3FIV"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5k9AmIFI2IT"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5bm9jX2RE2U"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6pM3dBYWBzg"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6UPuwVZoBcg"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5oaYMLo47Eq"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6n7XQwTUswF"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5o7bKLAPyCj"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6FCSHPKNCEl"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":22,"id":"01","url":"story_content/6qXWE2FTtKD_80_DX1440_DY1440.swf","type":"normal","altText":"Copy of Storyboard (50).png","width":1440,"height":810,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":202.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":405,"altText":"Copy of Storyboard (50).png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":405,"strokewidth":0}},"width":720,"height":405,"resume":true,"useHandCursor":true,"id":"5k9AmIFI2IT"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":248,"yPos":66,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":216,"rotateYPos":132,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-4,"top":-4,"right":435,"bottom":267,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":131}},"html5data":{"xPos":0,"yPos":0,"width":432,"height":264,"strokewidth":5}},"width":432,"height":264,"resume":true,"useHandCursor":true,"id":"5bm9jX2RE2U"},{"kind":"textinput","bindto":"_player.TextEntry14","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":true,"maxchars":5000,"placeholder":"Ketik jawabanmu disini ….","fontsize":14,"textcolor":"0x000000","bold":false,"italic":true,"font":"Open SansItalic CItalicC6FA076B","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":264,"yPos":138,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":199.5,"rotateYPos":83.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6pM3dBYWBzg","linkId":"","type":"vectortext","xPos":10,"yPos":5,"width":380,"height":168,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":154,"bottom":19,"pngfb":false,"pr":{"l":"Lib","i":133}}},"html5data":{"xPos":0,"yPos":0,"width":400,"height":168,"strokewidth":1}},"width":400,"height":168,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":401,"bottom":169,"altText":"Ketik jawabanmu disini ….","pngfb":false,"pr":{"l":"Lib","i":132}}},"id":"6pM3dBYWBzg","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry14","operator":"set","value":{"type":"property","value":"$Text"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6UPuwVZoBcg_822568066","id":"01","linkId":"txt__default_6UPuwVZoBcg","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":394,"bottom":44,"pngfb":false,"pr":{"l":"Lib","i":154}}}],"shapemaskId":"","xPos":264,"yPos":82,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":200,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":400,"bottom":48,"altText":"5. Terakhir, buatlah kesimpulan berdasarkan simulasi yang telah anda lakukan!","pngfb":false,"pr":{"l":"Lib","i":134}},"html5data":{"xPos":0,"yPos":0,"width":400,"height":48,"strokewidth":0}},"width":400,"height":48,"resume":true,"useHandCursor":true,"id":"6UPuwVZoBcg"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":600,"yPos":346,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":36,"rotateYPos":16,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":136}},"html5data":{"xPos":0,"yPos":0,"width":72,"height":32,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":136}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":137}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":136}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":136}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":137}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":138}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":138}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":137}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":138}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":136}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 1","pngfb":false,"pr":{"l":"Lib","i":137}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}}],"width":72,"height":32,"resume":true,"useHandCursor":true,"id":"5oaYMLo47Eq","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6FrqYKvTyvr.6bxooLKq7pv"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6n7XQwTUswF_269377846","id":"01","linkId":"txt__default_6n7XQwTUswF","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":209,"bottom":78,"pngfb":false,"pr":{"l":"Lib","i":140}}}],"shapemaskId":"","xPos":24,"yPos":90,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":108,"rotateYPos":41,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":217,"bottom":83,"altText":"Hebat! Kamu telah menyelesaikan simulasi dengan sangat baik. Sekarang, silakan isi pertanyaan berikut untuk menguji pemahamanmu tentang apa yang telah dipelajari.\\"","pngfb":false,"pr":{"l":"Lib","i":139}},"html5data":{"xPos":0,"yPos":0,"width":216,"height":82,"strokewidth":2}},"width":216,"height":82,"resume":true,"useHandCursor":true,"id":"6n7XQwTUswF"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":23,"id":"01","url":"story_content/693Q276VERt_80_DX496_DY496.swf","type":"normal","altText":"Your paragraph text (12).png","width":360,"height":495,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":50,"yPos":186,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":78.5,"rotateYPos":108,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":157,"bottom":216,"altText":"Your paragraph text (12).png","pngfb":false,"pr":{"l":"Lib","i":141}},"html5data":{"xPos":0,"yPos":0,"width":157,"height":216,"strokewidth":0}},"width":157,"height":216,"resume":true,"useHandCursor":true,"id":"5o7bKLAPyCj"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":512,"yPos":346,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":36,"rotateYPos":16,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 3","pngfb":false,"pr":{"l":"Lib","i":142}},"html5data":{"xPos":0,"yPos":0,"width":72,"height":32,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":142}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":143}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":142}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":142}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":143}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":144}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":144}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":143}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":144}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":144}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":74,"bottom":34,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":143}},"html5data":{"xPos":-3,"yPos":-3,"width":77,"height":37,"strokewidth":3}}}],"width":72,"height":32,"resume":true,"useHandCursor":true,"id":"6FCSHPKNCEl","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6FrqYKvTyvr.5bN3OeB9Ivg"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5ouPiqJALGn_CorrectReview","id":"01","linkId":"5ouPiqJALGn_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":146}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":145}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5ouPiqJALGn_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5ouPiqJALGn_IncorrectReview","id":"01","linkId":"5ouPiqJALGn_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":148}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":147}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5ouPiqJALGn_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');