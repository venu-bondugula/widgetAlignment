    var Browser = new kony.ui.Browser({
        "detectTelNumber": true,
        "enableZoom": false,
        "id": "wid1",
        "isVisible": true,
        "requestURLConfig": {
            "URL": "http://stargate.konylabs.net/testpages/form.html",
            "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
        },
        "screenLevelWidget": false,
        "text": "Browser"
    }, {
        "containerHeight": null,
        "containerWeight": 16,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    
    var Button = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "wid1",
        "isVisible": true,
        "skin": "btnNormal",
        "text": "Button"
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var Camera = new kony.ui.Camera({
        "compressionLevel": 0,
        "focusSkin": "camFocus",
        "id": "wid1",
        "isVisible": true,
        "scaleFactor": 80,
        "skin": "camNormal",
        "text": "camera1"
    }, {
        "containerWeight": 8,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "overlayConfig": {
            "tapAnywhere": false
        }
    });
       var CheckBoxGroup = new kony.ui.CheckBoxGroup({
        "focusSkin": "cbxFocus",
        "id": "wid1",
        "isVisible": true,
        "masterData": [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"]
        ],
        "selectedKeys": [],
        "skin": "cbxNormal"
    }, {
        "containerWeight": 4,
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "tickedImage": null,
        "untickedImage": null
    });

    var ComboBox = new kony.ui.ComboBox({
        "focusSkin": "cboxFocus",
        "id": "wid1",
        "isVisible": true,
        "masterData": [
            ["one", "one"],
            ["two", "two"],
            ["three", "three"]
        ],
        "skin": "cboxNormal"
    }, {
        "containerWeight": 5,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "popupTitle": null
    });
 	
 	var DataGrid = new kony.ui.DataGrid({
        "columnHeadersConfig": [{
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnOnClick": null,
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnID": "A",
            "isColumnSortable": false,
            "columnWidthInPercentage": 0,
            "columnHeaderText": "A"
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnOnClick": null,
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnID": "B",
            "isColumnSortable": false,
            "columnWidthInPercentage": 0,
            "columnHeaderText": "B"
        }, {
            "columnContentAlignment": constants.CONTENT_ALIGN_CENTER,
            "columnOnClick": null,
            "columnType": constants.DATAGRID_COLUMN_TYPE_TEXT,
            "columnID": "C",
            "isColumnSortable": false,
            "columnWidthInPercentage": 0,
            "columnHeaderText": "C"
        }],
        "data": [{
            "A": "1",
            "B": "4",
            "C": "7"
        }, {
            "A": "2",
            "B": "5",
            "C": "8"
        }, {
            "A": "3",
            "B": "6",
            "C": "9"
        }],
        "headerSkin": "dgHead",
        "id": "wid1",
        "info": {},
        "isMultiSelect": false,
        "isVisible": true,
        "rowAlternateSkin": "dgRow",
        "rowFocusSkin": "dgFocus",
        "rowNormalSkin": "dgRow",
        "showColumnHeaders": true
    }, {
        "containerWeight": 26,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "gridlineColor": "5c5c5c00"
    });
    
    
    var button181322389717088 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button181322389717088",
        "isVisible": true,
        "skin": "btnNormal",
        "text": "Button"
    }, {
        "containerWeight": 40,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var HBox = new kony.ui.Box({
        "id": "wid1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 11,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    HBox.add(
    button181322389717088);
    
    var HzImageStrip = new kony.ui.HorizontalImageStrip2({
        "data": [
            [{
                "iurl": "smallimage.png"
            }, {
                "iurl": "smallimage.png"
            }, {
                "iurl": "smallimage.png"
            }], "iurl"],
        "focusSkin": "hStrip2Focus",
        "id": "wid1",
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "isVisible": true,
        "showArrows": false,
        "showScrollbars": false,
        "skin": "hStrip2Normal",
        "spaceBetweenImages": 0,
        "viewConfig": {
            "stripviewConfig": {
                "enableScrollBounce": true
            }
        },
        "viewType": constants.HORIZONTAL_IMAGESTRIP_VIEW_TYPE_STRIPVIEW
    }, {
        "containerWeight": 9,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 50,
        "referenceWidth": 50,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    
    var Image = new kony.ui.Image2({
        "id": "wid1",
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "isVisible": true,
        "src": "img4.png"
    }, {
        "containerWeight": 6,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": null,
        "referenceWidth": null,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    
    
    var Label = new kony.ui.Label({
        "id": "wid1",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "Label"
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
  	
  	var Line = new kony.ui.Line({
        "id": "wid1",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "thickness": 1
    }, {});
    
    var Link = new kony.ui.Link({
        "id": "wid1",
        "isVisible": true,
        "skin": "skinblue",
        "text": "Link"
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
   
   var ListBox = new kony.ui.ListBox({
        "focusSkin": "listboxFocus",
        "id": "wid1",
        "isVisible": true,
        "masterData": [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"]
        ],
        "skin": "listboxNormal"
    }, {
        "containerWeight": 7,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "applySkinsToPopup": true,
        "dropDownImage": null,
        "placeholder": null,
        "popupIcon": null,
        "popupTitle": null,
        "tickedImage": null,
        "untickedImage": null,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    
    var Phone = new kony.ui.Button({
        "focusSkin": "phoneFocus",
        "id": "wid1",
        "isVisible": true,
        "skin": "phoneNormal",
        "text": "Phone1"
    }, {
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    
    var wid1box = new kony.ui.Box({
        "id": "wid1box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 34
    }, {});
    var Segment = new kony.ui.SegmentedUI2({
        "data": [{
            "label181322389713097": "label1"
        }, {
            "label181322389713097": "label2"
        }, {
            "label181322389713097": "label3"
        }],
        "groupCells": false,
        "id": "wid1",
        "isVisible": true,
        "layoutType": null,
        "Location": "[1,1]",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": wid1box,
        "screenLevelWidget": false,
        "sectionHeaderSkin": "seg2Header",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "label181322389713097": "label181322389713097"
        }
    }, {
        "containerHeight": null,
        "containerWeight": 34,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    
    var Map;
    var Switch;
    var label181322389713097 = new kony.ui.Label({
        "id": "label181322389713097",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "containerWeight": 18,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    wid1box.add(
    label181322389713097);
    
    
    var PickerView = new kony.ui.PickerView({
        "id": "wid1",
        "isVisible": true,
        "masterData": [
            [
                ["A", "A"],
                ["B", "B"],
                ["C", "C"],
                ["D", "D"], 0],
            [
                ["1", "1"],
                ["2", "2"],
                ["3", "3"],
                ["4", "4"], 100]
        ]
    }, {
        "containerWeight": 17,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    
    var RadioButton = new kony.ui.RadioButtonGroup({
        "focusSkin": "radioFocus",
        "id": "wid1",
        "isVisible": true,
        "masterData": [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"]
        ],
        "skin": "radioNormal"
    }, {
        "containerWeight": 4,
        "hExpand": true,
        "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "tickedImage": null,
        "untickedImage": null
    });
    
    var RichText = new kony.ui.RichText({
        "id": "1",
        "isVisible": true,
        "skin": "richNormal",
        "text": "Text"
    }, {
        "containerWeight": 10,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    
    var button181322389719561 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button181322389719561",
        "isVisible": true,
        "skin": "btnNormal",
        "text": "Button"
    }, {
        "containerWeight": 40,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var ScrollBox = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "wid1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "showScrollbars": true
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {});
    ScrollBox.add(
    button181322389719561);
  
  
  var Slider = new kony.ui.Slider({
        "focusThumbImage": null,
        "id": "wid1",
        "isVisible": true,
        "max": 100,
        "min": 0,
        "selectedValue": null,
        "step": 1,
        "thumbImage": null
    }, {
        "containerWeight": 6,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "maxLabel": null,
        "minLabel": null,
        "thickness": null
    });
    
    var TabPane = new kony.ui.TabPane({
        "activeFocusSkin": "tabFocus",
        "activeSkin": "tabActive",
        "activeTabs": null,
        "id": "wid1",
        "inactiveSkin": "tabInactive",
        "isVisible": true,
        "screenLevelWidget": false,
        "viewConfig": {
            "collapsibleViewConfig": {
                "toggleTabs": false,
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT
            },
            "pageViewConfig": {
                "needPageIndicator": true,
                "pageOffDotImage": "",
                "pageOnDotImage": ""
            },
            "panoramaViewConfig": {
                "panoramaTitle": "",
                "panoramaImage": "",
                "panoramaTitleImage": ""
            },
            "tabViewConfig": {
                "headerPosition": constants.TAB_HEADER_POSITION_TOP
            }
        },
        "viewType": constants.TABPANE_VIEW_TYPE_TABVIEW
    }, {
        "containerHeight": null,
        "containerWeight": 23,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "tabHeaderHeight": 64
    });
    var wid3 = new kony.ui.Box({
        "id": "wid3",
        "isVisible": true,
        "layoutType": null,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "tabName": "Tab",
        "widgetDirection": 1
    }, {
        "containerWeight": 86,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "image": null
    });
    var button181322389719565 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button181322389719565",
        "isVisible": true,
        "skin": "btnNormal",
        "text": "Button"
    }, {
        "containerWeight": 32,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    wid3.add(
    button181322389719565);
    TabPane.addTab("wid3", "Tab", null, wid3, null);
    
    var TextArea = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txt2Focus",
        "id": "wid1",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "maxTextLength": null,
        "numberOfVisibleLines": 2,
        "placeholder": null,
        "skin": "txt2Normal",
        "text": "TextArea2",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY
    }, {
        "containerWeight": 10,
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    
    
    var TextBox = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "tbx2Focus",
        "id": "wid1",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "secureTextEntry": false,
        "skin": "tbx2Normal",
        "text": "TextBox2",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerWeight": 6,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
   
var button181322389719567 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button181322389719567",
        "isVisible": true,
        "skin": "btnNormal",
        "text": "Button"
    }, {
        "containerWeight": 57,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var vbox1 = new kony.ui.Box({
        "id": "vbox1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox1.add(
    button181322389719567);
    var vbox = new kony.ui.Box({
        "id": "wid1",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 11,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vbox.add(
    vbox1);
  
  