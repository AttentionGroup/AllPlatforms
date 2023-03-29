(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
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
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
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
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
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
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"id":"rootPlayer","hash": "5c4b426f7b582b08448319736eb561066b126a2346cd89cd062cc45034bb80c5", "definitions": [{"id":"Container_3BFC70DC_2C94_2AE0_41AD_127679CE1A10","overflow":"scroll","class":"Container","right":"0%","data":{"name":"ImageContainer"},"propagateClick":false,"scrollBarColor":"#000000","layout":"absolute","bottom":"0%","gap":10,"backgroundOpacity":0,"width":"8.511%","height":"13.508%","minHeight":20,"children":["this.Image_3A0437F4_2C94_36A0_41C0_004C19B36722"],"minWidth":20,"scrollBarMargin":2},{"id":"panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera","enterPointingToHorizon":true},{"id":"Image_3A0437F4_2C94_36A0_41C0_004C19B36722","class":"Image","right":"8.37%","scaleMode":"fit_inside","data":{"name":"Logo"},"url":trans('Image_3A0437F4_2C94_36A0_41C0_004C19B36722.url'),"propagateClick":false,"verticalAlign":"middle","bottom":"12.5%","backgroundOpacity":0,"width":"81.627%","height":"79.864%","minHeight":1,"horizontalAlign":"center","minWidth":1},{"id":"panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B","label":trans('panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B.label'),"adjacentPanoramas":[{"yaw":-135.37,"backwardYaw":178.56,"panorama":"this.panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD","class":"AdjacentPanorama","data":{"overlayID":"overlay_3AF7FA13_2D9C_D960_4188_628E59920225"},"distance":6.33,"select":"this.overlay_3AF7FA13_2D9C_D960_4188_628E59920225.get('areas').forEach(function(a){ a.trigger('click') })"}],"overlays":["this.overlay_3B0B9E45_2CB4_F9E1_41B0_5D70E1077F5C","this.overlay_3A581142_2CB4_6BE0_41A3_13172D636FDB","this.overlay_349D52F6_2CB3_EEA0_41BD_24A02DC23097","this.overlay_3B75277A_2C8C_D7A0_41BD_98BA3FB44DDD","this.overlay_3AF7FA13_2D9C_D960_4188_628E59920225"],"class":"Panorama","hfovMax":130,"data":{"label":"HubCam01_Interoperability"},"hfovMin":"135%","frames":[{"cube":{"levels":[{"height":2048,"colCount":24,"url":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_0/{face}/0/{row}_{column}.avif","class":"TiledImageResourceLevel","rowCount":4,"width":12288,"tags":"ondemand"},{"height":1024,"colCount":12,"url":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_0/{face}/1/{row}_{column}.avif","class":"TiledImageResourceLevel","rowCount":2,"width":6144,"tags":"ondemand"},{"height":512,"colCount":6,"url":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_0/{face}/2/{row}_{column}.avif","class":"TiledImageResourceLevel","rowCount":1,"width":3072,"tags":["ondemand","preload"]},{"height":2048,"colCount":6,"url":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_0/{face}/vr2gen/0.avif","class":"TiledImageResourceLevel","rowCount":1,"width":12288,"tags":"mobilevr2gen"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_t.jpg"}],"hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_t.jpg"},{"id":"MainViewerPanoramaPlayer","aaEnabled":true,"mode":"quality","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","adjacentPanoramaPositionsEnabled":true,"class":"PanoramaPlayer","surfaceSelectionEnabled":true,"arrowKeysAction":"translate"},{"id":"panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera","enterPointingToHorizon":true},{"id":"mainPlayList","class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_camera","media":"this.panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","camera":"this.panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_camera","media":"this.panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}]},{"id":"MainViewer","playbackBarHeadShadowColor":"#000000","class":"ViewerArea","subtitlesTextShadowOpacity":1,"data":{"name":"Main Viewer"},"firstTransitionDuration":0,"displayTooltipInSurfaceSelection":false,"playbackBarHeadShadowOpacity":0.7,"toolTipTextShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","toolTipShadowColor":"#333138","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipPaddingBottom":4,"playbackBarProgressBorderSize":0,"playbackBarBorderColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"toolTipBorderColor":"#767676","progressBackgroundColorRatios":[0],"subtitlesBottom":50,"height":"100%","playbackBarBackgroundColorDirection":"vertical","minHeight":50,"width":"100%","playbackBarBorderRadius":0,"progressOpacity":0.7,"toolTipFontSize":"1.11vmin","progressBarBackgroundColorDirection":"horizontal","subtitlesTextShadowVerticalLength":1,"playbackBarRight":0,"playbackBarBackgroundOpacity":1,"progressBarBorderColor":"#000000","progressRight":"33%","playbackBarProgressBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"subtitlesTop":0,"playbackBarHeadBorderRadius":0,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"vrPointerSelectionColor":"#FF6600","minWidth":100,"subtitlesFontSize":"3vmin","playbackBarHeadWidth":6,"progressBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"playbackBarProgressBackgroundColorRatios":[0],"progressBackgroundColor":["#000000"],"surfaceReticleColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","progressBottom":10,"playbackBarLeft":0,"propagateClick":false,"subtitlesTextShadowHorizontalLength":1,"surfaceReticleSelectionColor":"#FF0000","progressHeight":2,"playbackBarHeadBorderSize":0,"toolTipPaddingTop":4,"progressBorderSize":0,"playbackBarProgressBorderRadius":0,"progressBarBorderRadius":2,"subtitlesFontFamily":"Arial","toolTipPaddingRight":6,"toolTipFontColor":"#606060","progressBarBorderSize":0,"subtitlesBorderColor":"#FFFFFF","toolTipPaddingLeft":6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"toolTipFontFamily":"Arial","vrPointerSelectionTime":2000,"progressBorderRadius":2,"playbackBarHeadBorderColor":"#000000","progressLeft":"33%","subtitlesGap":0,"playbackBarHeadShadow":true,"playbackBarHeadHeight":15,"vrPointerColor":"#FFFFFF","playbackBarBorderSize":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000"},{"id":"panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD","label":trans('panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD.label'),"adjacentPanoramas":[{"yaw":178.56,"backwardYaw":-135.37,"panorama":"this.panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B","class":"AdjacentPanorama","data":{"overlayID":"overlay_357B4E54_2D94_59E0_41C4_0B5F231B0BDB"},"distance":6.05,"select":"this.overlay_357B4E54_2D94_59E0_41C4_0B5F231B0BDB.get('areas').forEach(function(a){ a.trigger('click') })"}],"overlays":["this.overlay_35A12AF3_2D94_3EA0_41C1_C5599E524B23","this.overlay_357B4E54_2D94_59E0_41C4_0B5F231B0BDB"],"class":"Panorama","hfovMax":130,"data":{"label":"HubCam04_Interoperability"},"hfovMin":"135%","frames":[{"cube":{"levels":[{"height":2048,"colCount":24,"url":"media/panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_0/{face}/0/{row}_{column}.avif","class":"TiledImageResourceLevel","rowCount":4,"width":12288,"tags":"ondemand"},{"height":1024,"colCount":12,"url":"media/panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_0/{face}/1/{row}_{column}.avif","class":"TiledImageResourceLevel","rowCount":2,"width":6144,"tags":"ondemand"},{"height":512,"colCount":6,"url":"media/panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_0/{face}/2/{row}_{column}.avif","class":"TiledImageResourceLevel","rowCount":1,"width":3072,"tags":["ondemand","preload"]},{"height":2048,"colCount":6,"url":"media/panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_0/{face}/vr2gen/0.avif","class":"TiledImageResourceLevel","rowCount":1,"width":12288,"tags":"mobilevr2gen"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_t.avif"}],"hfov":360,"vfov":180,"thumbnailUrl":"media/panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_t.avif"},{"id":"overlay_3B0B9E45_2CB4_F9E1_41B0_5D70E1077F5C","enabledInCardboard":true,"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"vfov":6.75,"class":"HotspotPanoramaOverlayImage","pitch":-0.21,"yaw":-135.1,"image":{"class":"ImageResource","levels":[{"height":114,"url":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_HS_35qiovmt.avif","class":"ImageResourceLevel","width":133}]},"hfov":7.88,"data":{"label":"Polygon"}}],"data":{"label":"Polygon"},"rollOverDisplay":true,"areas":["this.HotspotPanoramaOverlayArea_3B29EE61_2CB4_F9A0_418B_54A7172781B4"]},{"id":"overlay_3A581142_2CB4_6BE0_41A3_13172D636FDB","enabledInCardboard":true,"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"vfov":6.96,"class":"HotspotPanoramaOverlayImage","pitch":-0.19,"yaw":-45.09,"image":{"class":"ImageResource","levels":[{"height":117,"url":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_HS_lzln7uqa.avif","class":"ImageResourceLevel","width":135}]},"hfov":8.03,"data":{"label":"Polygon"}}],"data":{"label":"Polygon"},"rollOverDisplay":true,"areas":["this.HotspotPanoramaOverlayArea_3A506143_2CB4_6BE0_4198_7A2D1FB5A2E3"]},{"id":"overlay_349D52F6_2CB3_EEA0_41BD_24A02DC23097","enabledInCardboard":true,"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"vfov":6.9,"class":"HotspotPanoramaOverlayImage","pitch":-0.18,"yaw":44.95,"image":{"class":"ImageResource","levels":[{"height":116,"url":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_HS_grshjkus.avif","class":"ImageResourceLevel","width":133}]},"hfov":7.87,"data":{"label":"Polygon"}}],"data":{"label":"Polygon"},"rollOverDisplay":true,"areas":["this.HotspotPanoramaOverlayArea_349B82F9_2CB3_EEA0_41A8_DB0B6B1FE116"]},{"id":"overlay_3B75277A_2C8C_D7A0_41BD_98BA3FB44DDD","enabledInCardboard":true,"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"vfov":6.76,"class":"HotspotPanoramaOverlayImage","pitch":-0.19,"yaw":134.98,"image":{"class":"ImageResource","levels":[{"height":114,"url":"media/panorama_39DA8955_2CBC_7BE0_41AA_23A18E2A138B_HS_nm8qzgwo.avif","class":"ImageResourceLevel","width":130}]},"hfov":7.72,"data":{"label":"Polygon"}}],"data":{"label":"Polygon"},"rollOverDisplay":true,"areas":["this.HotspotPanoramaOverlayArea_3B77B77D_2C8C_D7A0_4190_9E9D6DED994D"]},{"id":"overlay_3AF7FA13_2D9C_D960_4188_628E59920225","enabledInCardboard":true,"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":100,"rotationX":-77.27,"vfov":12.25,"class":"HotspotPanoramaOverlayImage","pitch":-15.03,"yaw":-135.37,"image":"this.AnimatedImageResource_3663CDD5_2D8D_DAE0_41C0_D187660D94F1","hfov":10.73,"data":{"label":"Circle Point 03"},"scaleMode":"fit_inside"}],"enabledInSurfaceSelection":false,"data":{"label":"Circle Point 03","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_3567AA8A_2D9C_D960_4198_B00FDA26D7E0"]},{"id":"overlay_35A12AF3_2D94_3EA0_41C1_C5599E524B23","enabledInCardboard":true,"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"vfov":8.84,"class":"HotspotPanoramaOverlayImage","pitch":1.33,"yaw":-0.46,"image":{"class":"ImageResource","levels":[{"height":149,"url":"media/panorama_3A565626_2D9C_69A0_41B1_0A3805BF65DD_HS_o45an4p1.avif","class":"ImageResourceLevel","width":170}]},"hfov":10.06,"data":{"label":"Polygon"}}],"data":{"label":"Polygon"},"rollOverDisplay":true,"areas":["this.HotspotPanoramaOverlayArea_35CE1B02_2D94_3F60_41B5_F5ED826B40C2"]},{"id":"overlay_357B4E54_2D94_59E0_41C4_0B5F231B0BDB","enabledInCardboard":true,"maps":[],"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":100,"rotationX":-75.19,"vfov":45.02,"class":"HotspotPanoramaOverlayImage","pitch":-15.69,"yaw":178.56,"image":"this.AnimatedImageResource_36638DD7_2D8D_DAE0_41BB_0CCE7026D6BA","hfov":31.44,"data":{"label":"Circle Point 03"},"scaleMode":"fit_inside"}],"enabledInSurfaceSelection":false,"data":{"label":"Circle Point 03","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_35C1FE67_2D94_59A0_41AF_08F4A4FF5171"]},{"id":"HotspotPanoramaOverlayArea_3B29EE61_2CB4_F9A0_418B_54A7172781B4","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_34044F4D_2CB4_57E0_41C3_BD6C54F7AA00.source'), '_blank')","mapColor":"image"},{"id":"HotspotPanoramaOverlayArea_3A506143_2CB4_6BE0_4198_7A2D1FB5A2E3","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_3B8B68F7_2CB4_3AA0_4194_88D84AB0E6FA.source'), '_blank')","mapColor":"image"},{"id":"HotspotPanoramaOverlayArea_349B82F9_2CB3_EEA0_41A8_DB0B6B1FE116","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_3B569055_2C8C_69E0_41C6_28BA78C94729.source'), '_blank')","mapColor":"image"},{"id":"HotspotPanoramaOverlayArea_3B77B77D_2C8C_D7A0_4190_9E9D6DED994D","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_3B6CBC25_2C8C_39A0_41B6_15097B1BF2D5.source'), '_blank')","mapColor":"image"},{"id":"AnimatedImageResource_3663CDD5_2D8D_DAE0_41C0_D187660D94F1","colCount":4,"levels":[{"height":1380,"url":"media/res_34067717_2D94_5761_4196_BDA8A2BA617B_0.avif","class":"ImageResourceLevel","width":920}],"frameCount":24,"finalFrame":"first","rowCount":6,"frameDuration":41,"class":"AnimatedImageResource"},{"id":"HotspotPanoramaOverlayArea_3567AA8A_2D9C_D960_4198_B00FDA26D7E0","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any"},{"id":"HotspotPanoramaOverlayArea_35CE1B02_2D94_3F60_41B5_F5ED826B40C2","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.openLink(this.translate('LinkBehaviour_35CBB9D2_2D94_3AE0_41C3_FC82CE219F24.source'), '_blank')","mapColor":"image"},{"id":"AnimatedImageResource_36638DD7_2D8D_DAE0_41BB_0CCE7026D6BA","colCount":4,"levels":[{"height":1380,"url":"media/res_34067717_2D94_5761_4196_BDA8A2BA617B_0.avif","class":"ImageResourceLevel","width":920}],"frameCount":24,"finalFrame":"first","rowCount":6,"frameDuration":41,"class":"AnimatedImageResource"},{"id":"HotspotPanoramaOverlayArea_35C1FE67_2D94_59A0_41AF_08F4A4FF5171","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any"}],"backgroundColor":["#FFFFFF"],"defaultMenu":["fullscreen","mute","rotation"],"start":"this.get('data').surfaceSelectionHotspotMode = 'circleEnabled'; this.init()","class":"Player","data":{"textToSpeechConfig":{"speechOnTooltip":false,"rate":1,"speechOnQuizQuestion":false,"pitch":1,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false},"locales":{"en":"locale/en.txt"},"defaultLocale":"en","name":"Player2435","history":{}},"backgroundColorRatios":[0],"watermark":false,"scrollBarMargin":2,"children":["this.MainViewer","this.Container_3BFC70DC_2C94_2AE0_41AD_127679CE1A10"],"propagateClick":false,"layout":"absolute","scripts":{"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPixels":TDV.Tour.Script.getPixels,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"unregisterKey":TDV.Tour.Script.unregisterKey,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"initQuiz":TDV.Tour.Script.initQuiz,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"cloneBindings":TDV.Tour.Script.cloneBindings,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"createTween":TDV.Tour.Script.createTween,"getMediaByName":TDV.Tour.Script.getMediaByName,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"existsKey":TDV.Tour.Script.existsKey,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"shareSocial":TDV.Tour.Script.shareSocial,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"translate":TDV.Tour.Script.translate,"isPanorama":TDV.Tour.Script.isPanorama,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizStart":TDV.Tour.Script.quizStart,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"init":TDV.Tour.Script.init,"downloadFile":TDV.Tour.Script.downloadFile,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getKey":TDV.Tour.Script.getKey,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"resumePlayers":TDV.Tour.Script.resumePlayers,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setLocale":TDV.Tour.Script.setLocale,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"executeJS":TDV.Tour.Script.executeJS,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showWindow":TDV.Tour.Script.showWindow,"clone":TDV.Tour.Script.clone,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"mixObject":TDV.Tour.Script.mixObject,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"showPopupImage":TDV.Tour.Script.showPopupImage,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizFinish":TDV.Tour.Script.quizFinish,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setValue":TDV.Tour.Script.setValue,"startMeasurement":TDV.Tour.Script.startMeasurement,"getMainViewer":TDV.Tour.Script.getMainViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"historyGoForward":TDV.Tour.Script.historyGoForward,"getOverlays":TDV.Tour.Script.getOverlays,"playAudioList":TDV.Tour.Script.playAudioList,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"openLink":TDV.Tour.Script.openLink,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"textToSpeech":TDV.Tour.Script.textToSpeech,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"initAnalytics":TDV.Tour.Script.initAnalytics,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getComponentByName":TDV.Tour.Script.getComponentByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay},"gap":10,"width":"100%","scrollBarColor":"#000000","height":"100%","minHeight":0,"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.0.js.map
})();
//Generated with v2023.0.0, Wed Mar 29 2023