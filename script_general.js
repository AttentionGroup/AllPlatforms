(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","children":["this.MainViewer","this.Container_3BFC70DC_2C94_2AE0_41AD_127679CE1A10"],"backgroundColor":["#FFFFFF"],"class":"Player","data":{"defaultLocale":"en","locales":{"en":"locale/en.txt"},"history":{},"name":"Player2435","textToSpeechConfig":{"speechOnTooltip":false,"rate":1,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"pitch":1,"speechOnQuizQuestion":false}},"backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"scrollBarColor":"#000000","watermark":false,"gap":10,"layout":"absolute","height":"100%","width":"100%","scrollBarMargin":2,"minHeight":0,"hash": "f8f6314c3e9d6f4fad3ed014ad23f9d2d759abf4920e59a1e51671951adddb59", "definitions": [{"id":"panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD","label":trans('panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD.label'),"class":"Panorama","adjacentPanoramas":[{"yaw":178.56,"distance":6.05,"backwardYaw":-135.37,"panorama":"this.panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B","class":"AdjacentPanorama","data":{"overlayID":"overlay_357B4E54_2D94_59E0_41C4_0B5F231B0BDB"},"select":"this.overlay_357B4E54_2D94_59E0_41C4_0B5F231B0BDB.get('areas').forEach(function(a){ a.trigger('click') })"}],"data":{"label":"HubCam04_Interoperability"},"frames":[{"cube":{"levels":[{"tags":"ondemand","height":2048,"rowCount":4,"url":"media/panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_0/{face}/0/{row}_{column}.avif","class":"TiledImageResourceLevel","colCount":24,"width":12288},{"tags":"ondemand","height":1024,"rowCount":2,"url":"media/panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_0/{face}/1/{row}_{column}.avif","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"tags":["ondemand","preload"],"height":512,"rowCount":1,"url":"media/panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_0/{face}/2/{row}_{column}.avif","class":"TiledImageResourceLevel","colCount":6,"width":3072},{"tags":"mobilevr2gen","height":2048,"rowCount":1,"url":"media/panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_0/{face}/vr2gen/0.avif","class":"TiledImageResourceLevel","colCount":6,"width":12288}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_t.avif"}],"hfovMax":130,"hfovMin":"135%","thumbnailUrl":"media/panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_t.avif","hfov":360,"overlays":["this.overlay_35A12AF3_2D94_3EA0_41C1_C5599E524B23","this.overlay_357B4E54_2D94_59E0_41C4_0B5F231B0BDB"],"vfov":180},{"id":"panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B","label":trans('panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B.label'),"class":"Panorama","adjacentPanoramas":[{"yaw":-135.37,"distance":6.33,"backwardYaw":178.56,"panorama":"this.panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD","class":"AdjacentPanorama","data":{"overlayID":"overlay_3AF7FA13_2D9C_D960_4188_628E59920225"},"select":"this.overlay_3AF7FA13_2D9C_D960_4188_628E59920225.get('areas').forEach(function(a){ a.trigger('click') })"}],"data":{"label":"HubCam01_Interoperability"},"frames":[{"cube":{"levels":[{"tags":"ondemand","height":2048,"rowCount":4,"url":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_0/{face}/0/{row}_{column}.avif","class":"TiledImageResourceLevel","colCount":24,"width":12288},{"tags":"ondemand","height":1024,"rowCount":2,"url":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_0/{face}/1/{row}_{column}.avif","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"tags":["ondemand","preload"],"height":512,"rowCount":1,"url":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_0/{face}/2/{row}_{column}.avif","class":"TiledImageResourceLevel","colCount":6,"width":3072},{"tags":"mobilevr2gen","height":2048,"rowCount":1,"url":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_0/{face}/vr2gen/0.avif","class":"TiledImageResourceLevel","colCount":6,"width":12288}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_t.jpg"}],"hfovMax":130,"hfovMin":"135%","thumbnailUrl":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_t.jpg","hfov":360,"overlays":["this.overlay_3B0B9E45_2CB4_F9E1_41B0_5D70E1077F5C","this.overlay_3A581142_2CB4_6BE0_41A3_13172D636FDB","this.overlay_349D52F6_2CB3_EEA0_41BD_24A02DC23097","this.overlay_3B75277A_2C8C_D7A0_41BD_98BA3FB44DDD","this.overlay_3AF7FA13_2D9C_D960_4188_628E59920225"],"vfov":180},{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"end":"this.trigger('tourEnded')","camera":"this.panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}]},{"id":"panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"enterPointingToHorizon":true,"class":"PanoramaCamera"},{"id":"effect_3C37BEBF_2D9D_7BC8_41C4_C98BA340DA5E","duration":500,"class":"FadeInEffect"},{"id":"Image_216449E6_2D8E_B978_41C3_A05917CBB831","class":"Image","scaleMode":"fit_inside","horizontalAlign":"center","url":trans('Image_216449E6_2D8E_B978_41C3_A05917CBB831.url'),"propagateClick":false,"verticalAlign":"middle","data":{"name":"instructionsImage"},"top":"0.39%","width":"97.055%","height":"95.465%","backgroundOpacity":0,"minHeight":1,"minWidth":1,"left":"1.15%"},{"id":"Container_228C4E24_2D8A_DAF8_41C1_86ADF67FF085","backgroundColor":["#FFFFFF","#FFFFFF"],"class":"Container","right":"4.1%","backgroundColorRatios":[0,1],"propagateClick":false,"data":{"name":"CloseAction"},"scrollBarColor":"#000000","bottom":"69.93%","gap":10,"layout":"absolute","height":"24.821%","width":"18.95%","scrollBarMargin":2,"backgroundOpacity":0.01,"minHeight":20,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_235A26E0_2D85_AB78_41BA_75784807235F, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_2122F49A_2D86_EFC8_41B1_27C386644C19)","minWidth":20,"overflow":"scroll"},{"id":"Image_3A0437F4_2C94_36A0_41C0_004C19B36722","class":"Image","right":"2.47%","scaleMode":"fit_inside","horizontalAlign":"center","url":trans('Image_3A0437F4_2C94_36A0_41C0_004C19B36722.url'),"propagateClick":false,"verticalAlign":"middle","data":{"name":"Logo"},"bottom":"3.78%","width":"7.597%","height":"10.609%","backgroundOpacity":0,"minHeight":1,"minWidth":1},{"id":"MainViewer","playbackBarBackgroundOpacity":1,"class":"ViewerArea","firstTransitionDuration":0,"vrPointerColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarHeadShadowColor":"#000000","playbackBarBorderSize":0,"subtitlesBackgroundColor":"#000000","toolTipFontColor":"#606060","subtitlesTextShadowOpacity":1,"toolTipPaddingTop":4,"playbackBarRight":0,"playbackBarHeadWidth":6,"playbackBarHeadBackgroundColorRatios":[0,1],"displayTooltipInSurfaceSelection":false,"subtitlesFontColor":"#FFFFFF","height":"100%","width":"100%","playbackBarProgressBackgroundColorRatios":[0],"toolTipFontSize":"1.11vmin","minHeight":50,"toolTipBorderColor":"#767676","playbackBarProgressBorderRadius":0,"progressBackgroundColorRatios":[0],"minWidth":100,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBottom":50,"playbackBarBorderRadius":0,"playbackBarHeadBorderRadius":0,"progressRight":"33%","playbackBarProgressBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","subtitlesTop":0,"progressBarBorderColor":"#000000","subtitlesTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"subtitlesTextShadowVerticalLength":1,"progressOpacity":0.7,"toolTipPaddingRight":6,"vrPointerSelectionColor":"#FF6600","surfaceReticleColor":"#FFFFFF","subtitlesFontSize":"3vmin","progressBorderColor":"#000000","vrPointerSelectionTime":2000,"subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColor":["#3399FF"],"toolTipPaddingBottom":4,"playbackBarHeight":10,"subtitlesBorderColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","progressBottom":10,"toolTipFontFamily":"Arial","propagateClick":false,"toolTipPaddingLeft":6,"progressHeight":2,"playbackBarHeadBorderSize":0,"progressBorderSize":0,"toolTipShadowColor":"#333138","playbackBarLeft":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBorderSize":0,"subtitlesFontFamily":"Arial","progressBackgroundColor":["#000000"],"subtitlesTextShadowHorizontalLength":1,"surfaceReticleSelectionColor":"#FF0000","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipTextShadowColor":"#000000","playbackBarProgressBorderSize":0,"progressBarBorderRadius":2,"playbackBarBorderColor":"#FFFFFF","progressBorderRadius":2,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadHeight":15,"playbackBarHeadShadow":true,"progressLeft":"33%","playbackBarHeadShadowBlurRadius":3,"subtitlesGap":0,"playbackBarBottom":5,"playbackBarHeadBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical"},{"id":"Container_3BFC70DC_2C94_2AE0_41AD_127679CE1A10","class":"Container","right":"0%","propagateClick":false,"scrollBarColor":"#000000","data":{"name":"ImageContainer"},"bottom":"0%","gap":10,"layout":"absolute","height":"99.686%","width":"99.687%","scrollBarMargin":2,"backgroundOpacity":0,"minHeight":20,"children":["this.Image_3A0437F4_2C94_36A0_41C0_004C19B36722","this.Container_2122F49A_2D86_EFC8_41B1_27C386644C19","this.Button_235145D6_2D9B_6958_41C0_4A42A37EC8A8"],"minWidth":20,"overflow":"scroll"},{"id":"panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"enterPointingToHorizon":true,"class":"PanoramaCamera"},{"id":"effect_23EDC429_2D8B_EEC8_41C3_896EF4A0148D","duration":500,"class":"FadeInEffect"},{"id":"Container_2122F49A_2D86_EFC8_41B1_27C386644C19","class":"Container","right":"24.76%","scrollBarColor":"#000000","propagateClick":false,"data":{"name":"InstructionsContainer"},"top":"24.79%","gap":10,"layout":"absolute","height":"44%","init":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_23EDC429_2D8B_EEC8_41C3_896EF4A0148D, 'showEffect', false)}.bind(this); visibleFunc(this.Container_2122F49A_2D86_EFC8_41B1_27C386644C19)","scrollBarMargin":2,"backgroundOpacity":0,"minHeight":20,"visible":false,"children":["this.Image_216449E6_2D8E_B978_41C3_A05917CBB831","this.Container_228C4E24_2D8A_DAF8_41C1_86ADF67FF085"],"minWidth":20,"overflow":"scroll","width":"49%"},{"id":"effect_235A26E0_2D85_AB78_41BA_75784807235F","duration":500,"class":"FadeOutEffect"},{"id":"Button_235145D6_2D9B_6958_41C0_4A42A37EC8A8","backgroundColor":["#000000"],"class":"Button","right":"3.94%","rollOverBackgroundOpacity":0.8,"fontSize":"1.256544502617801vmin","paddingLeft":0,"paddingTop":0,"horizontalAlign":"center","iconWidth":0,"paddingBottom":0,"backgroundColorRatios":[0],"paddingRight":0,"propagateClick":false,"fontColor":"#FFFFFF","data":{"name":"Button house info"},"verticalAlign":"middle","top":"3.89%","pressedBackgroundColor":["#666666"],"borderColor":"#000000","fontWeight":"bold","pressedBackgroundOpacity":1,"rollOverBackgroundColorRatios":[0],"pressedBackgroundColorRatios":[0],"rollOverShadow":false,"label":trans('Button_235145D6_2D9B_6958_41C0_4A42A37EC8A8.label'),"width":110,"height":40,"backgroundOpacity":0.28,"layout":"horizontal","minHeight":1,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_3C37BEBF_2D9D_7BC8_41C4_C98BA340DA5E, 'showEffect', false)}.bind(this); visibleFunc(this.Container_2122F49A_2D86_EFC8_41B1_27C386644C19)","iconHeight":0,"minWidth":1,"fontFamily":"Segoe UI Bold","rollOverBackgroundColor":["#0000FF"]},{"id":"MainViewerPanoramaPlayer","mode":"quality","aaEnabled":true,"class":"PanoramaPlayer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","surfaceSelectionEnabled":true,"arrowKeysAction":"translate","adjacentPanoramaPositionsEnabled":true,"viewerArea":"this.MainViewer"},{"rollOverDisplay":true,"id":"overlay_35A12AF3_2D94_3EA0_41C1_C5599E524B23","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_35CE1B02_2D94_3F60_41B5_F5ED826B40C2"],"items":[{"distance":50,"class":"HotspotPanoramaOverlayImage","pitch":1.33,"hfov":10.06,"yaw":-0.46,"data":{"label":"Polygon"},"image":{"levels":[{"height":149,"url":"media/panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_HS_o45an4p1.avif","class":"ImageResourceLevel","width":170}],"class":"ImageResource"},"vfov":8.84}],"data":{"label":"Polygon"},"maps":[],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay"},{"id":"overlay_357B4E54_2D94_59E0_41C4_0B5F231B0BDB","enabledInSurfaceSelection":false,"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_35C1FE67_2D94_59A0_41AF_08F4A4FF5171"],"items":[{"distance":100,"hfov":31.44,"class":"HotspotPanoramaOverlayImage","pitch":-15.69,"data":{"label":"Circle Point 03"},"yaw":178.56,"image":"this.AnimatedImageResource_3CBE562C_2D9E_AAC8_41C0_370D02D7F5C6","rotationX":-75.19,"vfov":45.02,"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","data":{"label":"Circle Point 03","hasPanoramaAction":true},"maps":[],"enabledInCardboard":true},{"rollOverDisplay":true,"id":"overlay_3B0B9E45_2CB4_F9E1_41B0_5D70E1077F5C","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_3B29EE61_2CB4_F9A0_418B_54A7172781B4"],"items":[{"distance":50,"class":"HotspotPanoramaOverlayImage","pitch":-0.21,"hfov":7.88,"yaw":-135.1,"data":{"label":"Polygon"},"image":{"levels":[{"height":114,"url":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_HS_35qiovmt.avif","class":"ImageResourceLevel","width":133}],"class":"ImageResource"},"vfov":6.75}],"data":{"label":"Polygon"},"maps":[],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay"},{"rollOverDisplay":true,"id":"overlay_3A581142_2CB4_6BE0_41A3_13172D636FDB","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_3A506143_2CB4_6BE0_4198_7A2D1FB5A2E3"],"items":[{"distance":50,"class":"HotspotPanoramaOverlayImage","pitch":-0.19,"hfov":8.03,"yaw":-45.09,"data":{"label":"Polygon"},"image":{"levels":[{"height":117,"url":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_HS_lzln7uqa.avif","class":"ImageResourceLevel","width":135}],"class":"ImageResource"},"vfov":6.96}],"data":{"label":"Polygon"},"maps":[],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay"},{"rollOverDisplay":true,"id":"overlay_349D52F6_2CB3_EEA0_41BD_24A02DC23097","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_349B82F9_2CB3_EEA0_41A8_DB0B6B1FE116"],"items":[{"distance":50,"class":"HotspotPanoramaOverlayImage","pitch":-0.18,"hfov":7.87,"yaw":44.95,"data":{"label":"Polygon"},"image":{"levels":[{"height":116,"url":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_HS_grshjkus.avif","class":"ImageResourceLevel","width":133}],"class":"ImageResource"},"vfov":6.9}],"data":{"label":"Polygon"},"maps":[],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay"},{"rollOverDisplay":true,"id":"overlay_3B75277A_2C8C_D7A0_41BD_98BA3FB44DDD","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_3B77B77D_2C8C_D7A0_4190_9E9D6DED994D"],"items":[{"distance":50,"class":"HotspotPanoramaOverlayImage","pitch":-0.19,"hfov":7.72,"yaw":134.98,"data":{"label":"Polygon"},"image":{"levels":[{"height":114,"url":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_HS_nm8qzgwo.avif","class":"ImageResourceLevel","width":130}],"class":"ImageResource"},"vfov":6.76}],"data":{"label":"Polygon"},"maps":[],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay"},{"id":"overlay_3AF7FA13_2D9C_D960_4188_628E59920225","enabledInSurfaceSelection":false,"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_3567AA8A_2D9C_D960_4198_B00FDA26D7E0"],"items":[{"distance":100,"hfov":10.73,"class":"HotspotPanoramaOverlayImage","pitch":-15.03,"data":{"label":"Circle Point 03"},"yaw":-135.37,"image":"this.AnimatedImageResource_3CBD162C_2D9E_AAC8_41C4_9203DF213028","rotationX":-77.27,"vfov":12.25,"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","data":{"label":"Circle Point 03","hasPanoramaAction":true},"maps":[],"enabledInCardboard":true},{"id":"HotspotPanoramaOverlayArea_35CE1B02_2D94_3F60_41B5_F5ED826B40C2","mapColor":"image","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_35CBB9D2_2D94_3AE0_41C3_FC82CE219F24.source'), '_blank')"},{"id":"HotspotPanoramaOverlayArea_35C1FE67_2D94_59A0_41AF_08F4A4FF5171","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"id":"AnimatedImageResource_3CBE562C_2D9E_AAC8_41C0_370D02D7F5C6","colCount":4,"class":"AnimatedImageResource","frameDuration":41,"frameCount":24,"levels":[{"height":1380,"url":"media/res_34067717_2D94_5761_4196_BDA8A2BA617B_0.avif","class":"ImageResourceLevel","width":920}],"finalFrame":"first","rowCount":6},{"id":"HotspotPanoramaOverlayArea_3B29EE61_2CB4_F9A0_418B_54A7172781B4","mapColor":"image","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_34044F4D_2CB4_57E0_41C3_BD6C54F7AA00.source'), '_blank')"},{"id":"HotspotPanoramaOverlayArea_3A506143_2CB4_6BE0_4198_7A2D1FB5A2E3","mapColor":"image","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_3B8B68F7_2CB4_3AA0_4194_88D84AB0E6FA.source'), '_blank')"},{"id":"HotspotPanoramaOverlayArea_349B82F9_2CB3_EEA0_41A8_DB0B6B1FE116","mapColor":"image","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_3B569055_2C8C_69E0_41C6_28BA78C94729.source'), '_blank')"},{"id":"HotspotPanoramaOverlayArea_3B77B77D_2C8C_D7A0_4190_9E9D6DED994D","mapColor":"image","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_3B6CBC25_2C8C_39A0_41B6_15097B1BF2D5.source'), '_blank')"},{"id":"HotspotPanoramaOverlayArea_3567AA8A_2D9C_D960_4198_B00FDA26D7E0","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"id":"AnimatedImageResource_3CBD162C_2D9E_AAC8_41C4_9203DF213028","colCount":4,"class":"AnimatedImageResource","frameDuration":41,"frameCount":24,"levels":[{"height":1380,"url":"media/res_34067717_2D94_5761_4196_BDA8A2BA617B_0.avif","class":"ImageResourceLevel","width":920}],"finalFrame":"first","rowCount":6}],"minWidth":0,"scripts":{"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"shareSocial":TDV.Tour.Script.shareSocial,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"createTween":TDV.Tour.Script.createTween,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizFinish":TDV.Tour.Script.quizFinish,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"translate":TDV.Tour.Script.translate,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"init":TDV.Tour.Script.init,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getKey":TDV.Tour.Script.getKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"downloadFile":TDV.Tour.Script.downloadFile,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setLocale":TDV.Tour.Script.setLocale,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"clone":TDV.Tour.Script.clone,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"mixObject":TDV.Tour.Script.mixObject,"textToSpeech":TDV.Tour.Script.textToSpeech,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"startMeasurement":TDV.Tour.Script.startMeasurement,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"executeJS":TDV.Tour.Script.executeJS,"initQuiz":TDV.Tour.Script.initQuiz,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"historyGoForward":TDV.Tour.Script.historyGoForward,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMainViewer":TDV.Tour.Script.getMainViewer,"setValue":TDV.Tour.Script.setValue,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlays":TDV.Tour.Script.getOverlays,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMediaByName":TDV.Tour.Script.getMediaByName,"isPanorama":TDV.Tour.Script.isPanorama,"showWindow":TDV.Tour.Script.showWindow,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"playAudioList":TDV.Tour.Script.playAudioList,"openLink":TDV.Tour.Script.openLink,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"existsKey":TDV.Tour.Script.existsKey,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"registerKey":TDV.Tour.Script.registerKey,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"unregisterKey":TDV.Tour.Script.unregisterKey,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"quizStart":TDV.Tour.Script.quizStart,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getComponentByName":TDV.Tour.Script.getComponentByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPixels":TDV.Tour.Script.getPixels,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer},"start":"this.get('data').surfaceSelectionHotspotMode = 'circleEnabled'; this.init()"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.1.js.map
})();
//Generated with v2023.0.1, Wed Mar 29 2023