"use strict";
(self["webpackChunkgolden_layout_ng_app"] = self["webpackChunkgolden_layout_ng_app"] || []).push([["main"],{

/***/ 9550:
/*!******************************************!*\
  !*** ./src/app/StartDialog.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartDialog": () => (/* binding */ StartDialog)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);


/**
 * @title Dialog with header, scrollable content and actions ---
 */
class StartDialog {
    constructor() { }
}
StartDialog.ɵfac = function StartDialog_Factory(t) { return new (t || StartDialog)(); };
StartDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartDialog, selectors: [["app-dialog"]], decls: 20, vars: 1, consts: [["id", "instruction-dialog-container"], ["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function StartDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bevor sie starten... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Herzlich willkommen zum Prototypen der \"Multi-Tabbing\"-Anwendung.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Auf der linken Seite finden Sie drei Tabs, welche Unterwasserkameras anzeigen. Auf der rechten Seite im oberen Bereich sind zwei Tabs verf\u00FCgbar, die Ihnen bei der Identifizierung von Tierarten behilflich sein k\u00F6nnen. Im unteren Bereich befindet sich ein weiterer Tab, der es Ihnen erm\u00F6glicht, Notizen zu speichern.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Nutzen Sie die M\u00F6glichkeit, die Tabs der drei Kameras zu verschieben, um eine optimale Arbeitsumgebung zu schaffen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Falls Probleme bei der Nutzung auftreten, empfehlen wir Ihnen, die Seite neu zu laden.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Wenn Sie Tierarten identifizieren, haben Sie die M\u00F6glichkeit, diese in den Notizen festzuhalten. Wir bitten Sie, im Fragebogen Ihre identifizierten Tierarten anzugeben. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p")(15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bitte denken Sie daran, vor dem Schlie\u00DFen der Webseite Ihre Notizen zu kopieren.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-dialog-actions", 3)(18, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ich habe verstanden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], encapsulation: 2 });


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! golden-layout */ 3869);
/* harmony import */ var _StartDialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StartDialog.component */ 9550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_docking_services_docking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/docking/services/docking.service */ 4470);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _widgets_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/nav.component */ 9420);
/* harmony import */ var _docking_dockingLayout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../docking/dockingLayout.component */ 3814);







const _c0 = ["goldenLayoutHost"];
class AppComponent {
    constructor(dockingService, dialog) {
        this.dockingService = dockingService;
        this.dialog = dialog;
        this.title = 'prototype-iq2';
        this.example = {
            "root": {
                "type": "row",
                "content": [
                    {
                        "type": "stack",
                        "content": [
                            {
                                "type": "component",
                                "content": [],
                                "size": 1,
                                "sizeUnit": "fr",
                                "minSizeUnit": "px",
                                "id": "",
                                "maximised": false,
                                "showPopoutIcon": false,
                                "isClosable": true,
                                "reorderEnabled": true,
                                "title": "Pazifik Kamera",
                                "componentType": "vid",
                                "componentState": {
                                    "id": "a7016cf2-c776-61e6-aaf4-c4c11286bf22"
                                }
                            }
                        ],
                        "size": 15.86497677373964,
                        "sizeUnit": "%",
                        "minSizeUnit": "px",
                        "id": "",
                        "isClosable": true,
                        "maximised": false,
                        "activeItemIndex": 0
                    },
                    {
                        "type": "stack",
                        "content": [
                            {
                                "type": "component",
                                "content": [],
                                "size": 1,
                                "sizeUnit": "fr",
                                "minSizeUnit": "px",
                                "id": "",
                                "showPopoutIcon": false,
                                "maximised": false,
                                "isClosable": true,
                                "reorderEnabled": true,
                                "title": "Cayman Reef Süd Kamera",
                                "componentType": "vid",
                                "componentState": {
                                    "id": "ea74a320-bd21-4c5d-abb6-051281fb6399"
                                }
                            }
                        ],
                        "size": 16.00353552285527,
                        "sizeUnit": "%",
                        "minSizeUnit": "px",
                        "id": "",
                        "isClosable": true,
                        "maximised": false,
                        "activeItemIndex": 0
                    },
                    {
                        "type": "stack",
                        "content": [
                            {
                                "type": "component",
                                "content": [],
                                "size": 1,
                                "sizeUnit": "fr",
                                "minSizeUnit": "px",
                                "id": "",
                                "maximised": false,
                                "isClosable": true,
                                "reorderEnabled": true,
                                "title": "Indischer Ozean Kamera",
                                "componentType": "vid",
                                "componentState": {
                                    "id": "8fc80a51-a9e8-561d-9dd8-623339f5a9c7"
                                }
                            }
                        ],
                        "size": 15.679955418502596,
                        "sizeUnit": "%",
                        "minSizeUnit": "px",
                        "id": "",
                        "isClosable": true,
                        "maximised": false,
                        "activeItemIndex": 0
                    },
                    {
                        "type": "column",
                        "content": [
                            {
                                "type": "stack",
                                "content": [
                                    {
                                        "type": "component",
                                        "content": [],
                                        "size": 1,
                                        "sizeUnit": "fr",
                                        "minSizeUnit": "px",
                                        "id": "",
                                        "showPopoutIcon": false,
                                        "maximised": false,
                                        "isClosable": false,
                                        "reorderEnabled": false,
                                        "title": "Karibische Fische",
                                        "componentType": "test",
                                        "componentState": {
                                            "id": "54c26490-390b-1157-1ae5-c52f29acb82d",
                                            "componentName": "test",
                                            "title": "my Tab",
                                            "componentData": {
                                                "myValue": "https://www.wikipedia.org"
                                            }
                                        }
                                    },
                                    {
                                        "type": "component",
                                        "content": [],
                                        "size": 1,
                                        "sizeUnit": "fr",
                                        "minSizeUnit": "px",
                                        "id": "",
                                        "maximised": false,
                                        "isClosable": false,
                                        "reorderEnabled": false,
                                        "title": "Indischer Ozean Lexikon",
                                        "componentType": "test",
                                        "componentState": {
                                            "id": "22be6a6e-d978-c3b6-b63b-b61ece4882c3",
                                            "componentName": "test",
                                            "title": "my Tab",
                                            "componentData": {
                                                "myValue": "https://www.wikipedia.org"
                                            }
                                        }
                                    }
                                ],
                                "size": 50,
                                "sizeUnit": "%",
                                "minSizeUnit": "px",
                                "id": "",
                                "isClosable": false,
                                "maximised": false,
                                "activeItemIndex": 0
                            },
                            {
                                "type": "stack",
                                "content": [
                                    {
                                        "type": "component",
                                        "content": [],
                                        "size": 1,
                                        "sizeUnit": "fr",
                                        "minSizeUnit": "px",
                                        "id": "",
                                        "maximised": false,
                                        "isClosable": false,
                                        "reorderEnabled": false,
                                        "title": "Online Notizblock",
                                        "componentType": "test",
                                        "componentState": {
                                            "id": "eea2d6f1-f39a-eb1d-388a-f63af24b8356",
                                            "componentName": "test",
                                            "title": "my Tab",
                                            "componentData": {
                                                "myValue": "https://golden-layout.com/"
                                            }
                                        }
                                    }
                                ],
                                "size": 50,
                                "sizeUnit": "%",
                                "minSizeUnit": "px",
                                "id": "",
                                "isClosable": true,
                                "maximised": false,
                                "activeItemIndex": 0
                            }
                        ],
                        "size": 52.45153228490249,
                        "sizeUnit": "%",
                        "minSizeUnit": "px",
                        "id": "",
                        "isClosable": true
                    }
                ],
                "size": 1,
                "sizeUnit": "fr",
                "minSizeUnit": "px",
                "id": "",
                "isClosable": true
            },
            "openPopouts": [],
            "settings": {
                "constrainDragToContainer": true,
                "reorderEnabled": true,
                "popoutWholeStack": false,
                "blockedPopoutsThrowError": true,
                "closePopoutsOnUnload": true,
                "responsiveMode": "none",
                "tabOverlapAllowance": 0,
                "reorderOnTabMenuClick": true,
                "tabControlOffset": 10,
                "popInOnClose": false
            },
            "dimensions": {
                "borderWidth": 5,
                "borderGrabWidth": 5,
                "defaultMinItemHeight": 0,
                "defaultMinItemHeightUnit": "px",
                "defaultMinItemWidth": 10,
                "defaultMinItemWidthUnit": "px",
                "headerHeight": 20,
                "dragProxyWidth": 300,
                "dragProxyHeight": 200
            },
            "header": {
                "show": "top",
                "popout": "open in new window",
                "dock": "dock",
                "close": "close",
                "maximise": "maximise",
                "minimise": "minimise",
                "tabDropdown": "additional tabs"
            },
            "resolved": true
        };
    }
    ngAfterViewInit() {
        this.openDialog();
        setTimeout(() => {
            this._goldenLayoutHostComponent.initialise();
            this._goldenLayoutHostComponent.setVirtualActive(false);
            this.dockingService.setCurrentDockingLayout(this._goldenLayoutHostComponent);
            let layout;
            layout = golden_layout__WEBPACK_IMPORTED_MODULE_4__.LayoutConfig.fromResolved(this.example);
            this.dockingService.getCurrentDockingLayout().loadLayout(layout);
            this.dockingService;
        }, 0);
    }
    openDialog() {
        const dialogRef = this.dialog.open(_StartDialog_component__WEBPACK_IMPORTED_MODULE_0__.StartDialog);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_docking_services_docking_service__WEBPACK_IMPORTED_MODULE_1__.DockingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._goldenLayoutHostComponent = _t.first);
    } }, decls: 4, vars: 0, consts: [["goldenLayoutHost", ""], ["id", "opaqueOverlay", 2, "width", "100vw", "height", "100vh", "position", "fixed", "top", "0px", "left", "0px", "background", "black", "opacity", "0", "display", "none"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-navigation")(1, "app-golden-layout-host", null, 0)(3, "div", 1);
    } }, directives: [_widgets_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent, _docking_dockingLayout_component__WEBPACK_IMPORTED_MODULE_3__.DockingLayoutComponent], styles: ["[_nghost-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _widgets_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/nav.component */ 9420);
/* harmony import */ var _docking_dockingLayout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../docking/dockingLayout.component */ 3814);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ 1311);
/* harmony import */ var src_docking_dockingWidgets_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/docking/dockingWidgets/test.component */ 5860);
/* harmony import */ var src_docking_services_docking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/docking/services/docking.service */ 4470);
/* harmony import */ var src_docking_dockingWidgets_empty_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/docking/dockingWidgets/empty.component */ 1994);
/* harmony import */ var src_docking_dockingWidgets_test2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/docking/dockingWidgets/test2.component */ 9893);
/* harmony import */ var src_docking_dockingWidgets_video_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/docking/dockingWidgets/video.component */ 9700);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _StartDialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StartDialog.component */ 9550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);





















// It is required to have JQuery as global in the window object.
window['$'] = jquery__WEBPACK_IMPORTED_MODULE_0__;
/**
 * Define our components.
 */
const COMPONENTS = [
    _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
    _widgets_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent,
    src_docking_dockingWidgets_test_component__WEBPACK_IMPORTED_MODULE_5__.TestComponent,
    src_docking_dockingWidgets_test2_component__WEBPACK_IMPORTED_MODULE_8__.TestComponent2,
    _docking_dockingLayout_component__WEBPACK_IMPORTED_MODULE_3__.DockingLayoutComponent,
    src_docking_dockingWidgets_empty_component__WEBPACK_IMPORTED_MODULE_7__.EmptyComponent,
    src_docking_dockingWidgets_video_component__WEBPACK_IMPORTED_MODULE_9__.VideoComponent,
    _StartDialog_component__WEBPACK_IMPORTED_MODULE_10__.StartDialog
];
/**
 * Is required for golden layout.
 * Define here all types that you want to include in the golden layout.
 */
// const componentTypes: ComponentType[] = [{
//   name: 'test',
//   type: TestComponent
// },
// {
//   name: 'loading',
//   type: LoadingComponent
// }
// ];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [src_docking_services_docking_service__WEBPACK_IMPORTED_MODULE_6__.DockingService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinnerModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forRoot(_routes__WEBPACK_IMPORTED_MODULE_4__.appRoutes)
            // VgCoreModule,
            // VgControlsModule,
            // VgOverlayPlayModule,
            // VgBufferingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _widgets_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent,
        src_docking_dockingWidgets_test_component__WEBPACK_IMPORTED_MODULE_5__.TestComponent,
        src_docking_dockingWidgets_test2_component__WEBPACK_IMPORTED_MODULE_8__.TestComponent2,
        _docking_dockingLayout_component__WEBPACK_IMPORTED_MODULE_3__.DockingLayoutComponent,
        src_docking_dockingWidgets_empty_component__WEBPACK_IMPORTED_MODULE_7__.EmptyComponent,
        src_docking_dockingWidgets_video_component__WEBPACK_IMPORTED_MODULE_9__.VideoComponent,
        _StartDialog_component__WEBPACK_IMPORTED_MODULE_10__.StartDialog], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinnerModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule], exports: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _widgets_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent,
        src_docking_dockingWidgets_test_component__WEBPACK_IMPORTED_MODULE_5__.TestComponent,
        src_docking_dockingWidgets_test2_component__WEBPACK_IMPORTED_MODULE_8__.TestComponent2,
        _docking_dockingLayout_component__WEBPACK_IMPORTED_MODULE_3__.DockingLayoutComponent,
        src_docking_dockingWidgets_empty_component__WEBPACK_IMPORTED_MODULE_7__.EmptyComponent,
        src_docking_dockingWidgets_video_component__WEBPACK_IMPORTED_MODULE_9__.VideoComponent,
        _StartDialog_component__WEBPACK_IMPORTED_MODULE_10__.StartDialog] }); })();


/***/ }),

/***/ 5738:
/*!*********************************************!*\
  !*** ./src/app/base-component.directive.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponentDirective": () => (/* binding */ BaseComponentDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class BaseComponentDirective {
    constructor(rootHtmlElement) {
        this.rootHtmlElement = rootHtmlElement;
    }
    setPositionAndSize(left, top, width, height) {
        this.rootHtmlElement.style.left = this.numberToPixels(left);
        this.rootHtmlElement.style.top = this.numberToPixels(top);
        this.rootHtmlElement.style.width = this.numberToPixels(width);
        this.rootHtmlElement.style.height = this.numberToPixels(height);
    }
    setVisibility(visible) {
        if (visible) {
            this.rootHtmlElement.style.display = '';
        }
        else {
            this.rootHtmlElement.style.display = 'none';
        }
    }
    setZIndex(value) {
        this.rootHtmlElement.style.zIndex = value;
    }
    numberToPixels(value) {
        return value.toString(10) + 'px';
    }
}
BaseComponentDirective.ɵfac = function BaseComponentDirective_Factory(t) { return new (t || BaseComponentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](HTMLElement)); };
BaseComponentDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BaseComponentDirective });
(function (BaseComponentDirective) {
    const GoldenLayoutContainerTokenName = 'GoldenLayoutContainer';
    BaseComponentDirective.GoldenLayoutContainerInjectionToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(GoldenLayoutContainerTokenName);
})(BaseComponentDirective || (BaseComponentDirective = {}));


/***/ }),

/***/ 1311:
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appRoutes": () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _docking_dockingLayout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../docking/dockingLayout.component */ 3814);

/**
 * Angular Routes
 */
const appRoutes = [
    { path: 'dashboard', component: _docking_dockingLayout_component__WEBPACK_IMPORTED_MODULE_0__.DockingLayoutComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full', data: { id: 'Main' } },
];


/***/ }),

/***/ 8586:
/*!******************************************!*\
  !*** ./src/dataServices/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _localData_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localData.service */ 5070);
/* harmony import */ var _globalData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalData.service */ 2759);



/**
 * Enum to declare which data service we use.
 */
var DataFlag;
(function (DataFlag) {
    DataFlag[DataFlag["LOCAL"] = 0] = "LOCAL";
    DataFlag[DataFlag["GLOBAL"] = 1] = "GLOBAL";
})(DataFlag || (DataFlag = {}));
/**
 * A service that is responsible for getting data from the right data service.
 */
class DataService {
    constructor(localDataService, globalDataService) {
        this.localDataService = localDataService;
        this.globalDataService = globalDataService;
        // TODO set this in UI
        this.setDataFlag(DataFlag.LOCAL);
    }
    /**
     * Set [[dataFlag]] and depending on the flag set the correct DataService to [[currentDataService]].
     * @parm myDataFlag the [[DataFlag]].
     */
    setDataFlag(myDataFlag) {
        this.dataFlag = myDataFlag;
        if (this.dataFlag === DataFlag.LOCAL) {
            this.currentDataService = this.localDataService;
        }
        else {
            this.currentDataService = this.globalDataService;
        }
    }
    /**
     * Get [[IDockingLayoutConfig]] by Id.
     * Call getLayoutConfigJsonById from [[currentDataService]].
     * @parm myId Id as string.
     * @returns myIDockingLayoutConfig the matching IDockingLayoutConfig.
     */
    getIDockingLayoutConfigById(myId) {
        const myDockingLayoutJSON = this.currentDataService.getLayoutConfigJsonById(myId);
        const myIDockingLayoutConfig = myDockingLayoutJSON;
        return myIDockingLayoutConfig;
    }
    /**
     * Get [[IDockingLayoutConfig]] by Title.
     * Call getLayoutConfigJsonByTitle from [[currentDataService]].
     * @parm myTitle title as string.
     * @returns myIDockingLayoutConfig the matching IDockingLayoutConfig
     */
    getIDockingLayoutConfigByTitle(myTitle) {
        const myDockingLayoutJSON = this.currentDataService.getLayoutConfigJsonByTitle(myTitle);
        const myIDockingLayoutConfig = myDockingLayoutJSON;
        return myIDockingLayoutConfig;
    }
    /**
     * Save a single [[IDockingLayoutConfig]].
     * Call saveLayoutConfig from [[currentDataService]].
     * @parm myLayoutConfig [[IDockingLayoutConfig]].
     */
    saveIDockingLayoutConfig(myLayoutConfig) {
        const myDockingLayoutJSON = myLayoutConfig;
        this.currentDataService.saveLayoutConfigJson(myDockingLayoutJSON);
    }
    /**
     * Get [[IDockingComponentConfig]] by id.
     * Call getComponentConfigJsonByTitle from [[currentDataService]].
     * @parm myId as string.
     * @returns myIDockingComponentConfig the matching IDockingComponentConfig
     */
    getIDockingComponentConfigById(myId) {
        const myDockingComponentJSON = this.currentDataService.getComponentConfigJsonById(myId);
        const myDockingComponentConfig = myDockingComponentJSON;
        return myDockingComponentConfig;
    }
    /**
     * Get DockingComponentName by id.
     * Call getDockingComponentNameById from [[currentDataService]].
     * @parm myId as string.
     * @returns componentName the name of the component we need to add it to golden layout.
     */
    getIDockingComponentNameById(myId) {
        return this.currentDataService.getDockingComponentNameById(myId);
    }
    /**
     * Save a single [[IDockingComponentConfig]].
     * Call saveComponentConfigJson from [[currentDataService]].
     * @parm myComponentConfig [[IDockingComponentConfig]].
     */
    saveIDockingComponentConfig(myComponentConfig) {
        const myComponentJSON = myComponentConfig;
        this.currentDataService.saveComponentConfigJson(myComponentJSON);
    }
    /**
     * Save a single [[IDockingComponentConfig]].
     * Call saveComponentConfigJson from [[currentDataService]].
     * This function returns a promise,
     * so you can be sure that the given IDockingComponentConfig is saved before you continue.
     * @parm myComponentConfig [[IDockingComponentConfig]].
     * @return promise
     */
    saveIDockingComponentConfigAsync(myComponentConfig) {
        const promise = new Promise((resolve, reject) => {
            const myComponentJSON = myComponentConfig;
            this.currentDataService.saveComponentConfigJson(myComponentJSON);
            resolve();
        });
        return promise;
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_localData_service__WEBPACK_IMPORTED_MODULE_0__.LocalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_globalData_service__WEBPACK_IMPORTED_MODULE_1__.GlobalDataService)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2759:
/*!************************************************!*\
  !*** ./src/dataServices/globalData.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalDataService": () => (/* binding */ GlobalDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

/**
 * Service class that is responsible for handling the data flow at global level.
 */
class GlobalDataService {
}
GlobalDataService.ɵfac = function GlobalDataService_Factory(t) { return new (t || GlobalDataService)(); };
GlobalDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalDataService, factory: GlobalDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5070:
/*!***********************************************!*\
  !*** ./src/dataServices/localData.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalDataService": () => (/* binding */ LocalDataService)
/* harmony export */ });
/* harmony import */ var _assets_dockingComponents_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/dockingComponents.json */ 756);
/* harmony import */ var _assets_dockingLayouts_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/dockingLayouts.json */ 8387);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);





/**
 * Service class that is responsible for handling the data flow at local level.
 */
class LocalDataService {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        /**
         * Json file which stores the information about every DockingComponent.
         */
        // @ts-ignore
        this.componentsJson = _assets_dockingComponents_json__WEBPACK_IMPORTED_MODULE_0__;
        /**
         * Json file which stores the information about every LayoutComponent.
         */
        // @ts-ignore
        this.layoutsJson = _assets_dockingLayouts_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    /**
     * Load a DockingLayoutConfig by Id.
     * @param myId id of the DockingLayout
     * @returns JSON the IDockingLayoutConfig as JSON file
     */
    getLayoutConfigJsonById(myId) {
        for (const layout of this.layoutsJson) {
            if (layout.id === myId) {
                return layout;
            }
        }
        return null;
    }
    /**
     * Load a DockingLayoutConfig by Title.
     * @param myTitle title of the DockingLayout
     * @returns JSON the IDockingLayoutConfig as JSON file
     */
    getLayoutConfigJsonByTitle(myTitle) {
        for (const layout of this.layoutsJson) {
            if (layout.title === myTitle) {
                return layout;
            }
        }
        return null;
    }
    /**
     * Save a DockingLayout.
     * @param myLayout IDockingLayoutConfig as JSON
     */
    saveLayoutConfigJson(myLayout) {
        for (const index in this.layoutsJson) {
            if (this.layoutsJson[index].id === myLayout.id) {
                this.layoutsJson[index] = myLayout;
                return;
            }
        }
        this.layoutsJson.push(myLayout);
    }
    /**
     * Load a DockingComponentConfig by Id.
     * @param myId id of the DockingComponent
     * @returns JSON the IDockingComponentConfig as JSON file
     */
    getComponentConfigJsonById(myId) {
        for (const component of this.componentsJson) {
            if (component.id === myId) {
                return component;
            }
        }
        return null;
    }
    /**
     * Save a DockingComponet.
     * @param myComponent IDockingComponentConfig as JSON
     */
    saveComponentConfigJson(myComponent) {
        for (const index in this.componentsJson) {
            if (this.componentsJson[index].id === myComponent.id) {
                this.componentsJson[index] = myComponent;
                return;
            }
        }
        this.componentsJson.push(myComponent);
    }
    /**
     * get the componentName by Id
     * @param myId id of the DockingComponent
     */
    getDockingComponentNameById(myId) {
        for (const component of this.componentsJson) {
            if (component.id === myId) {
                return component.componentName;
            }
        }
    }
    /**
     * Save the IDockingComponentConfig to a JSON file and download it
     */
    saveComponentConfigsToFile() {
        const file = new Blob([JSON.stringify(this.componentsJson)], { type: 'data:text/json;charset=UTF-8' });
        file_saver__WEBPACK_IMPORTED_MODULE_2__(file, 'dockingComponents.json');
    }
    /**
     * Save the IDockingLayoutConfig to a JSON file and download it
     */
    saveLayoutsConfigsToFile() {
        const file = new Blob([JSON.stringify(this.layoutsJson)], { type: 'data:text/json;charset=UTF-8' });
        file_saver__WEBPACK_IMPORTED_MODULE_2__(file, 'dockingLayouts.json');
    }
}
LocalDataService.ɵfac = function LocalDataService_Factory(t) { return new (t || LocalDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer)); };
LocalDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LocalDataService, factory: LocalDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6643:
/*!*****************************************!*\
  !*** ./src/docking/DockingComponent.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DockingComponent": () => (/* binding */ DockingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


/**
 * An abstract class which represents a component that can be added to [[dockingLayout.component]].
 */
let DockingComponent = class DockingComponent {
    /**
     *
     * @param myState GoldenLayoutComponentState, here it saves the id of this component.
     *                Used to pass the id from goldenlayout to this component.
     *                Optional because a DockingComponent dont have to be docked in goldenlayout.
     * @param myContainer GoldenLayoutContainer used to change goldenlayout tab title from this component.
     *                    Optional because a DockingComponent dont have to be docked in goldenlayout.
     * @param myDataService DataService to get the IDockingComponentConfig from the given id.
     */
    constructor(myDataService, container, elRef) {
        this.myDataService = myDataService;
        this.container = container;
        /** An [[IDockingComponentConfig]] that defines all attributes to add this component to the [[dockingLayout.component]].
         * If you want to pass own attributes to your component add them to this componentConfig.componentData
         */
        this.componentConfig = {
            id: '0',
            componentName: 'test',
            title: 'defaultTitle',
            componentData: {}
        };
        this.rootHtmlElement = elRef.nativeElement;
    }
    /**
     * Saves the IDockingComponentConfig with the help of the DataService to a local file or webserver.
     */
    saveCurrentComponentConfig() {
        this.myDataService.saveIDockingComponentConfig(this.getCurrentComponentConfig());
    }
    /**
     * Setter for the id in [[componentConfig]].
     */
    setId(myId) {
        this.componentConfig.id = myId;
    }
    /**
     * Getter for the id in [[componentConfig]].
     */
    getId() {
        return this.componentConfig.id;
    }
    /**
     * Getter for the state passed by goldenlayout.
     */
    getStateFromGoldenLayout() {
        //return this.myState;
    }
    setPositionAndSize(left, top, width, height) {
        this.rootHtmlElement.style.left = this.numberToPixels(left);
        this.rootHtmlElement.style.top = this.numberToPixels(top);
        this.rootHtmlElement.style.width = this.numberToPixels(width);
        this.rootHtmlElement.style.height = this.numberToPixels(height);
    }
    setVisibility(visible) {
        if (visible) {
            this.rootHtmlElement.style.display = '';
        }
        else {
            this.rootHtmlElement.style.display = 'none';
        }
    }
    setZIndex(value) {
        this.rootHtmlElement.style.zIndex = value;
    }
    numberToPixels(value) {
        return value.toString(10) + 'px';
    }
};
DockingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)(DockingComponent.GoldenLayoutContainerInjectionToken))
], DockingComponent);

(function (DockingComponent) {
    const GoldenLayoutContainerTokenName = 'GoldenLayoutContainer';
    DockingComponent.GoldenLayoutContainerInjectionToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(GoldenLayoutContainerTokenName);
})(DockingComponent || (DockingComponent = {}));


/***/ }),

/***/ 3814:
/*!************************************************!*\
  !*** ./src/docking/dockingLayout.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DockingLayoutComponent": () => (/* binding */ DockingLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! golden-layout */ 237);
/* harmony import */ var _dockingWidgets_empty_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dockingWidgets/empty.component */ 1994);
/* harmony import */ var _dockingWidgets_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dockingWidgets/test.component */ 5860);
/* harmony import */ var _dockingWidgets_test2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dockingWidgets/test2.component */ 9893);
/* harmony import */ var _dockingWidgets_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dockingWidgets/video.component */ 9700);
/* harmony import */ var _services_docking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/docking.service */ 4470);








const _c0 = ["componentViewContainer"];
function DockingLayoutComponent_ng_template_0_Template(rf, ctx) { }
class DockingLayoutComponent {
    constructor(_appRef, _elRef, dockingService) {
        this._appRef = _appRef;
        this._elRef = _elRef;
        this.dockingService = dockingService;
        this._virtualActive = true;
        this._viewContainerRefActive = false;
        this._componentRefMap = new Map();
        this._goldenLayoutBoundingClientRect = new DOMRect();
        this._goldenLayoutBindComponentEventListener = (container, itemConfig) => this.handleBindComponentEvent(container, itemConfig);
        this._goldenLayoutUnbindComponentEventListener = (container) => this.handleUnbindComponentEvent(container);
        this._goldenLayoutElement = this._elRef.nativeElement;
        this.dockingService.registerComponentType("test", _dockingWidgets_test_component__WEBPACK_IMPORTED_MODULE_1__.TestComponent);
        this.dockingService.registerComponentType("test2", _dockingWidgets_test2_component__WEBPACK_IMPORTED_MODULE_2__.TestComponent2);
        this.dockingService.registerComponentType("Empty", _dockingWidgets_empty_component__WEBPACK_IMPORTED_MODULE_0__.EmptyComponent);
        this.dockingService.registerComponentType("vid", _dockingWidgets_video_component__WEBPACK_IMPORTED_MODULE_3__.VideoComponent);
    }
    get goldenLayout() { return this._goldenLayout; }
    get virtualActive() { return this._virtualActive; }
    get viewContainerRefActive() { return this._viewContainerRefActive; }
    get isGoldenLayoutSubWindow() { return this._goldenLayout.isSubWindow; }
    ngOnDestroy() {
        this._goldenLayout.destroy();
    }
    initialise() {
        this._goldenLayout = new golden_layout__WEBPACK_IMPORTED_MODULE_5__.GoldenLayout(this._goldenLayoutElement, this._goldenLayoutBindComponentEventListener, this._goldenLayoutUnbindComponentEventListener);
        this._goldenLayout.resizeWithContainerAutomatically = true;
        this._goldenLayout.beforeVirtualRectingEvent = (count) => this.handleBeforeVirtualRectingEvent(count);
        if (this._goldenLayout.isSubWindow) {
            this._goldenLayout.checkAddDefaultPopinButton();
        }
        console.log(this._goldenLayout.layoutConfig.settings);
    }
    setVirtualActive(value) {
        this._goldenLayout.clear();
        this._virtualActive = value;
        if (!this._virtualActive) {
            this._viewContainerRefActive = false;
        }
    }
    setViewContainerRefActive(value) {
        this._goldenLayout.clear();
        if (value && !this.virtualActive) {
            throw new Error('ViewContainerRef active only possible if VirtualActive');
        }
        this._viewContainerRefActive = value;
    }
    setSize(width, height) {
        this._goldenLayout.setSize(width, height);
    }
    getComponentRef(container) {
        return this._componentRefMap.get(container);
    }
    handleBindComponentEvent(container, itemConfig) {
        const componentType = itemConfig.componentType;
        const componentRef = this.dockingService.createComponent(componentType, container);
        const component = componentRef.instance;
        this._componentRefMap.set(container, componentRef);
        if (this._virtualActive) {
            container.virtualRectingRequiredEvent = (container, width, height) => this.handleContainerVirtualRectingRequiredEvent(container, width, height);
            container.virtualVisibilityChangeRequiredEvent = (container, visible) => this.handleContainerVisibilityChangeRequiredEvent(container, visible);
            container.virtualZIndexChangeRequiredEvent = (container, logicalZIndex, defaultZIndex) => this.handleContainerVirtualZIndexChangeRequiredEvent(container, logicalZIndex, defaultZIndex);
            if (this._viewContainerRefActive) {
                this._componentViewContainerRef.insert(componentRef.hostView);
            }
            else {
                this._appRef.attachView(componentRef.hostView);
                const componentRootElement = component.rootHtmlElement;
                this._goldenLayoutElement.appendChild(componentRootElement);
            }
        }
        else {
            this._appRef.attachView(componentRef.hostView);
            const domElem = componentRef.hostView.rootNodes[0];
            container.element.appendChild(domElem);
        }
        return {
            component,
            virtual: this._virtualActive,
        };
    }
    handleUnbindComponentEvent(container) {
        const componentRef = this._componentRefMap.get(container);
        if (componentRef === undefined) {
            throw new Error('Could not unbind component. Container not found');
        }
        this._componentRefMap.delete(container);
        const hostView = componentRef.hostView;
        if (container.virtual) {
            if (this._viewContainerRefActive) {
                const viewRefIndex = this._componentViewContainerRef.indexOf(hostView);
                if (viewRefIndex < 0) {
                    throw new Error('Could not unbind component. ViewRef not found');
                }
                this._componentViewContainerRef.remove(viewRefIndex);
            }
            else {
                const component = componentRef.instance;
                const componentRootElement = component.rootHtmlElement;
                this._goldenLayoutElement.removeChild(componentRootElement);
                this._appRef.detachView(hostView);
            }
        }
        else {
            const component = componentRef.instance;
            const componentRootElement = component.rootHtmlElement;
            container.element.removeChild(componentRootElement);
            this._appRef.detachView(hostView);
        }
        componentRef.destroy();
    }
    handleBeforeVirtualRectingEvent(count) {
        this._goldenLayoutBoundingClientRect = this._goldenLayoutElement.getBoundingClientRect();
    }
    handleContainerVirtualRectingRequiredEvent(container, width, height) {
        const containerBoundingClientRect = container.element.getBoundingClientRect();
        const left = containerBoundingClientRect.left - this._goldenLayoutBoundingClientRect.left;
        const top = containerBoundingClientRect.top - this._goldenLayoutBoundingClientRect.top;
        const componentRef = this._componentRefMap.get(container);
        if (componentRef === undefined) {
            throw new Error('handleContainerVirtualRectingRequiredEvent: ComponentRef not found');
        }
        const component = componentRef.instance;
        component.setPositionAndSize(left, top, width, height);
    }
    handleContainerVisibilityChangeRequiredEvent(container, visible) {
        const componentRef = this._componentRefMap.get(container);
        if (componentRef === undefined) {
            throw new Error('handleContainerVisibilityChangeRequiredEvent: ComponentRef not found');
        }
        const component = componentRef.instance;
        component.setVisibility(visible);
    }
    handleContainerVirtualZIndexChangeRequiredEvent(container, logicalZIndex, defaultZIndex) {
        const componentRef = this._componentRefMap.get(container);
        if (componentRef === undefined) {
            throw new Error('handleContainerVirtualZIndexChangeRequiredEvent: ComponentRef not found');
        }
        const component = componentRef.instance;
        component.setZIndex(defaultZIndex);
    }
    ngAfterViewInit() {
    }
}
DockingLayoutComponent.ɵfac = function DockingLayoutComponent_Factory(t) { return new (t || DockingLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_docking_service__WEBPACK_IMPORTED_MODULE_4__.DockingService)); };
DockingLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DockingLayoutComponent, selectors: [["app-golden-layout-host"]], viewQuery: function DockingLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._componentViewContainerRef = _t.first);
    } }, decls: 2, vars: 0, consts: [["componentViewContainer", ""]], template: function DockingLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, DockingLayoutComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } }, styles: ["[_nghost-%COMP%] {\n      height: 100%;\n      width: 100%;\n      padding: 0;\n      position: relative;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY2tpbmdMYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLFlBQVk7TUFDWixXQUFXO01BQ1gsVUFBVTtNQUNWLGtCQUFrQjtJQUNwQiIsImZpbGUiOiJkb2NraW5nTGF5b3V0LmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0IHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgIl19 */"] });


/***/ }),

/***/ 1994:
/*!*******************************************************!*\
  !*** ./src/docking/dockingWidgets/empty.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyComponent": () => (/* binding */ EmptyComponent)
/* harmony export */ });
/* harmony import */ var src_docking_DockingComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/docking/DockingComponent */ 6643);
/* harmony import */ var src_app_base_component_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base-component.directive */ 5738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_dataServices_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/dataServices/data.service */ 8586);





/**
 * TestComponent to show functionality. sync
 * Extends DcokingComponent so it can be docked in DockingLayoutComponnet.
 */
class EmptyComponent extends src_docking_DockingComponent__WEBPACK_IMPORTED_MODULE_0__.DockingComponent {
    constructor(dataService, container, elRef) {
        super(dataService, container, elRef.nativeElement);
        this.dataService = dataService;
        this.container = container;
        /**
         * Default initialization.
         * Adds myValue to componentData
         */
        this.componentConfig = {
            id: '0',
            componentName: 'test',
            title: 'defaultTitle',
            componentData: {
                myValue: 'None'
            }
        };
        if (this.container.state !== null) {
            // get IDockingComponentConfig by th given id in goldenlayout state
            this.componentConfig = dataService.getIDockingComponentConfigById(container.state["id"].toString());
            // init
            this.initInLayout(this.componentConfig);
            // set title
            //this.container.setTitle(this.componentConfig.title);
        }
    }
    initInLayout(myComponentConfig) {
        this.componentConfig = myComponentConfig;
    }
    ngAfterViewInit() {
        // this.iframe.nativeElement.style.width = this.container.width + "px";
        // this.iframe.nativeElement.style.height = this.container.height + "px";
    }
    getCurrentComponentConfig() {
        return this.componentConfig;
    }
}
EmptyComponent.ɵfac = function EmptyComponent_Factory(t) { return new (t || EmptyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_dataServices_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_base_component_directive__WEBPACK_IMPORTED_MODULE_1__.BaseComponentDirective.GoldenLayoutContainerInjectionToken), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef)); };
EmptyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EmptyComponent, selectors: [["app-empty"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [[2, "overflow", "hidden", "width", "100%", "height", "100%"], ["src", "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 2, "position", "relative", "left", "50%", "top", "50%", "transform", "translate(-50%, -50%)"]], template: function EmptyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 5860:
/*!******************************************************!*\
  !*** ./src/docking/dockingWidgets/test.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestComponent": () => (/* binding */ TestComponent)
/* harmony export */ });
/* harmony import */ var src_docking_DockingComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/docking/DockingComponent */ 6643);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_dataServices_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/dataServices/data.service */ 8586);





const _c0 = ["iframe"];
window["$"] = jquery__WEBPACK_IMPORTED_MODULE_1__;
/**
 * TestComponent to show functionality.
 * Extends DcokingComponent so it can be docked in DockingLayoutComponnet.
 */
class TestComponent extends src_docking_DockingComponent__WEBPACK_IMPORTED_MODULE_0__.DockingComponent {
    constructor(dataService, container, elRef) {
        super(dataService, container, elRef);
        this.dataService = dataService;
        this.container = container;
        this.isDisabled = true;
        /**
         * Default initialization.
         * Adds myValue to componentData
         */
        this.componentConfig = {
            id: '0',
            componentName: 'test',
            title: 'defaultTitle',
            componentData: {
                myValue: 'None'
            }
        };
        this.mouseDown = false;
        console.log(this.container);
        if (this.container.state !== null) {
            // get IDockingComponentConfig by th given id in goldenlayout state
            this.componentConfig = dataService.getIDockingComponentConfigById(container.state["id"].toString());
            this.container.setTitle(this.componentConfig.title);
            // init
            this.initInLayout(this.componentConfig);
            // set title
            //this.container.setTitle(this.componentConfig.title);
        }
    }
    initInLayout(myComponentConfig) {
        this.componentConfig = myComponentConfig;
    }
    ngAfterViewInit() {
        // Make sure that - as long as the mouse is pressed on the drag handles - the overlay does not get toggled
        jquery__WEBPACK_IMPORTED_MODULE_1__(document.body).on("mousedown", ".lm_drag_handle", (event) => {
            // console.log("Down");
            this.mouseDown = true;
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__(document.body).on("mouseup", ".lm_drag_handle", (event) => {
            // console.log("Up");
            this.mouseDown = false;
        });
        // Activate the overlay, when entering the drag handles
        jquery__WEBPACK_IMPORTED_MODULE_1__(document.body).on("mouseenter", ".lm_drag_handle", (event) => {
            if (this.mouseDown === false) {
                // console.log("Entering");
                document.getElementById("opaqueOverlay").style.display = "block";
            }
        });
        // Deactivate the overlay, when leaving the drag handles
        jquery__WEBPACK_IMPORTED_MODULE_1__(document.body).on("mouseleave", ".lm_drag_handle", (event) => {
            if (this.mouseDown === false) {
                // console.log("Leaving");
                document.getElementById("opaqueOverlay").style.display = "none";
            }
        });
        console.log(this.iframe.nativeElement);
        console.log(this.iframe);
        this.iframe.nativeElement.src = this.componentConfig.componentData.myValue;
        // this.container.on('__all', () => {
        //   const elements = document.querySelectorAll('.lm_drag_handle');
        //   for (let i = 0; i < elements.length; i++) {
        //     const element = elements[i];
        //     // do something with the element
        //     element.addEventListener('mouseenter', (event) => {
        //       // your code here
        //       // console.log("hover über drag handle")
        //       // this.iframe.nativeElement.src = null;
        //       console.log("Entering");
        //       document.getElementById("opaqueOverlay").style.display = "block";
        //     });
        //     element.addEventListener('mouseleave', (event) => {
        //       // your code here
        //       // console.log("hover über drag handle")
        //       // this.iframe.nativeElement.src = null;
        //       console.log("Leaving");
        //       document.getElementById("opaqueOverlay").style.display = "none";
        //     });
        //   }
        // });
        // this.container.on('resize', () => {
        //   // console.log("RESIZE");
        //   // // this.iframe.nativeElement.src = this.componentConfig.componentData.myValue;
        //   // document.getElementById("opaqueOverlay").style.display = "none";
        // });
    }
    getCurrentComponentConfig() {
        return this.componentConfig;
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_dataServices_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_docking_DockingComponent__WEBPACK_IMPORTED_MODULE_0__.DockingComponent.GoldenLayoutContainerInjectionToken), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef)); };
TestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], viewQuery: function TestComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.iframe = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [[2, "height", "100%", "width", "100%"], ["height", "100%", "width", "100%"], ["iframe", ""]], template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "iframe", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx.isDisabled);
    } }, encapsulation: 2 });


/***/ }),

/***/ 9893:
/*!*******************************************************!*\
  !*** ./src/docking/dockingWidgets/test2.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestComponent2": () => (/* binding */ TestComponent2)
/* harmony export */ });
/* harmony import */ var src_docking_DockingComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/docking/DockingComponent */ 6643);
/* harmony import */ var _test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.component */ 5860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_dataServices_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/dataServices/data.service */ 8586);





const _c0 = ["iframe"];
/**
 * TestComponent to show functionality.
 * Extends DcokingComponent so it can be docked in DockingLayoutComponnet.
 */
class TestComponent2 extends _test_component__WEBPACK_IMPORTED_MODULE_1__.TestComponent {
    constructor(dataService, container, elRef) {
        super(dataService, container, elRef);
        this.dataService = dataService;
        this.container = container;
        this.isDisabled = true;
        /**
         * Default initialization.
         * Adds myValue to componentData
         */
        this.componentConfig = {
            id: '0',
            componentName: 'test',
            title: 'defaultTitle',
            componentData: {
                myValue: 'None'
            }
        };
        TestComponent2.componentTypeName = 'test2';
        if (this.container.state !== null) {
            // get IDockingComponentConfig by th given id in goldenlayout state
            this.componentConfig = dataService.getIDockingComponentConfigById(container.state["id"].toString());
            // init
            this.initInLayout(this.componentConfig);
            // set title
            //this.container.setTitle(this.componentConfig.title);
        }
    }
    initInLayout(myComponentConfig) {
        this.componentConfig = myComponentConfig;
    }
    ngAfterViewInit() {
        console.log(this.iframe.nativeElement);
        console.log(this.iframe);
        this.iframe.nativeElement.src = this.componentConfig.componentData.myValue;
        this.container.on('__all', () => {
            const elements = document.querySelectorAll('.lm_drag_handle');
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                // do something with the element
                element.addEventListener('mouseover', (event) => {
                    // your code here
                    console.log("hover über drag handle");
                    this.iframe.nativeElement.src = null;
                });
            }
        });
        this.container.on('resize', () => {
            this.iframe.nativeElement.src = this.componentConfig.componentData.myValue;
        });
    }
    getCurrentComponentConfig() {
        return this.componentConfig;
    }
}
TestComponent2.ɵfac = function TestComponent2_Factory(t) { return new (t || TestComponent2)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_dataServices_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_docking_DockingComponent__WEBPACK_IMPORTED_MODULE_0__.DockingComponent.GoldenLayoutContainerInjectionToken), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef)); };
TestComponent2.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TestComponent2, selectors: [["app-test2"]], viewQuery: function TestComponent2_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.iframe = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [[2, "height", "100%", "width", "100%"], ["height", "100%", "width", "100%"], ["iframe", ""]], template: function TestComponent2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "iframe", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx.isDisabled);
    } }, encapsulation: 2 });


/***/ }),

/***/ 9700:
/*!*******************************************************!*\
  !*** ./src/docking/dockingWidgets/video.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoComponent": () => (/* binding */ VideoComponent)
/* harmony export */ });
/* harmony import */ var src_docking_DockingComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/docking/DockingComponent */ 6643);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_dataServices_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/dataServices/data.service */ 8586);





window["$"] = jquery__WEBPACK_IMPORTED_MODULE_1__;
/**
 * TestComponent to show functionality.
 * Extends DcokingComponent so it can be docked in DockingLayoutComponnet.
 */
class VideoComponent extends src_docking_DockingComponent__WEBPACK_IMPORTED_MODULE_0__.DockingComponent {
    constructor(dataService, container, elRef) {
        super(dataService, container, elRef);
        this.dataService = dataService;
        this.container = container;
        this.isDisabled = true;
        /**
         * Default initialization.
         * Adds myValue to componentData
         */
        this.componentConfig = {
            id: '0',
            componentName: 'test',
            title: 'defaultTitle',
            componentData: {
                myValue: 'None'
            }
        };
        this.mouseDown = false;
        console.log(this.container);
        if (this.container.state !== null) {
            // get IDockingComponentConfig by th given id in goldenlayout state
            this.componentConfig = dataService.getIDockingComponentConfigById(container.state["id"].toString());
            // init
            this.initInLayout(this.componentConfig);
            this.container.setTitle(this.componentConfig.title);
            // set title
            //this.container.setTitle(this.componentConfig.title);
        }
    }
    initInLayout(myComponentConfig) {
        this.componentConfig = myComponentConfig;
        this.src = this.componentConfig.componentData.myValue;
        console.log(this.container); //.controlsContainer.find( '.lm_popout').hide();
    }
    ngAfterViewInit() {
        // Make sure that - as long as the mouse is pressed on the drag handles - the overlay does not get toggled
        jquery__WEBPACK_IMPORTED_MODULE_1__(document.body).on("mousedown", ".lm_drag_handle", (event) => {
            // console.log("Down");
            this.mouseDown = true;
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__(document.body).on("mouseup", ".lm_drag_handle", (event) => {
            // console.log("Up");
            this.mouseDown = false;
        });
        // Activate the overlay, when entering the drag handles
        jquery__WEBPACK_IMPORTED_MODULE_1__(document.body).on("mouseenter", ".lm_drag_handle", (event) => {
            if (this.mouseDown === false) {
                // console.log("Entering");
                document.getElementById("opaqueOverlay").style.display = "block";
            }
        });
        // Deactivate the overlay, when leaving the drag handles
        jquery__WEBPACK_IMPORTED_MODULE_1__(document.body).on("mouseleave", ".lm_drag_handle", (event) => {
            if (this.mouseDown === false) {
                // console.log("Leaving");
                document.getElementById("opaqueOverlay").style.display = "none";
            }
        });
    }
    getCurrentComponentConfig() {
        return this.componentConfig;
    }
    // Instantiate a Video.js player OnInit
    ngOnInit() {
        // this.player = videojs(this.videoPlayerRef.nativeElement, this.options, function onPlayerReady() {
        //   console.log('onPlayerReady', this);
        // });
    }
    ngOnDestroy() {
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_dataServices_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_docking_DockingComponent__WEBPACK_IMPORTED_MODULE_0__.DockingComponent.GoldenLayoutContainerInjectionToken), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef)); };
VideoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-vid"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 2, consts: [[2, "height", "100%", "width", "100%"], ["autoplay", "", "loop", "", 2, "width", "100%", "height", "100%", 3, "muted"], ["type", "video/mp4", 3, "src"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Browser not supported ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("muted", "muted");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    } }, encapsulation: 2 });


/***/ }),

/***/ 6512:
/*!*********************************************************!*\
  !*** ./src/docking/services/componentConfig.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentConfigService": () => (/* binding */ ComponentConfigService)
/* harmony export */ });
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! guid-typescript */ 9846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


/**
 * Service which is responsible for ComponentConfig.
 */
class ComponentConfigService {
    /**
     * generate a GUID.
     * @returns a GUID as string.
     */
    generateId() {
        return guid_typescript__WEBPACK_IMPORTED_MODULE_0__.Guid.create().toString();
    }
}
ComponentConfigService.ɵfac = function ComponentConfigService_Factory(t) { return new (t || ComponentConfigService)(); };
ComponentConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ComponentConfigService, factory: ComponentConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4470:
/*!*************************************************!*\
  !*** ./src/docking/services/docking.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DockingService": () => (/* binding */ DockingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _DockingComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DockingComponent */ 6643);
/* harmony import */ var _componentConfig_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentConfig.service */ 6512);
/* harmony import */ var _dataServices_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataServices/data.service */ 8586);





/**
 * A service that is responsible for interaction with the docking layout.
 */
class DockingService {
    constructor(componentConfigService, dataService, componentFactoryResolver) {
        this.componentConfigService = componentConfigService;
        this.dataService = dataService;
        this.componentFactoryResolver = componentFactoryResolver;
        this._componentTypeMap = new Map();
    }
    registerComponentType(name, componentType) {
        this._componentTypeMap.set(name, componentType);
        console.log(this._componentTypeMap);
    }
    createComponent(componentTypeJsonValue, container) {
        console.log(componentTypeJsonValue);
        console.log(this._componentTypeMap);
        const componentType = this._componentTypeMap.get(componentTypeJsonValue);
        if (componentType === undefined) {
            throw new Error('Unknown component type');
        }
        else {
            const provider = { provide: _DockingComponent__WEBPACK_IMPORTED_MODULE_0__.DockingComponent.GoldenLayoutContainerInjectionToken, useValue: container };
            const injector = _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector.create({
                providers: [provider]
            });
            const componentFactoryRef = this.componentFactoryResolver.resolveComponentFactory(componentType);
            return componentFactoryRef.create(injector);
        }
    }
    getRegisteredComponentTypeNames() {
        const count = this._componentTypeMap.size;
        const result = new Array(count);
        let idx = 0;
        for (let [key, value] of this._componentTypeMap) {
            result[idx++] = key;
        }
        return result;
    }
    /**
     * Save the given IDockingLayoutConfig with help of DataService.
     */
    saveDockingLayoutConfig(myDockingLayoutConfig) {
        this.dataService.saveIDockingLayoutConfig(myDockingLayoutConfig);
    }
    /**
     * Get the IDockingLayoutConfig with the given myId with help of DataService.
     */
    getDockingLayoutConfigById(myId) {
        return this.dataService.getIDockingLayoutConfigById(myId);
    }
    /**
     * Get the IDockingLayoutConfig with the given myTitle with help of DataService.
     */
    getDockingLayoutConfigByTitle(myTitle) {
        return this.dataService.getIDockingLayoutConfigByTitle(myTitle);
    }
    /**
     * Set the current loaded DockingLayoutComponent.
     */
    setCurrentDockingLayout(myDockingLayout) {
        this.currentdockingLayout = myDockingLayout;
    }
    /**
     * Get the current loaded DockingLayoutComponent.
     */
    getCurrentDockingLayout() {
        return this.currentdockingLayout.goldenLayout;
    }
    /**
     * Create the [[DockingComponent]] which is defined by myComponentConfig, in the [[currentDockingLayout]].
     * @param myComponentConfig the [[IDockingComponentConfig]] of the DockingComponent we want to create.
     * This function will call the [[saveIDockingComponentConfigAsync]] of [[DataService]].
     * First we save the IDockingComponentConfig with DataService.
     * Then we create an unfilled golden layout container with the Id given in IDockingComponentConfig.
     * The generated DockingComponent will fetch the data transferred from dataservice in the first step to initialize.
     * Step 1: Save data.
     * Step 2: Create empty DockingComponent with Id.
     * Step 3 (In DockingComponent): Get data from step 1.
     */
    createComponentInCurrentDockingLayout(myComponentConfig) {
        // generate new GUID if id is '0'
        if (myComponentConfig.id === '0') {
            myComponentConfig.id = this.componentConfigService.generateId();
        }
        // async call to save data (step 1)
        this.dataService.saveIDockingComponentConfigAsync(myComponentConfig).then(
        // then addComponent in currentDockingLayout with the given id (step 2)
        () => this.getCurrentDockingLayout().newComponent("test", myComponentConfig, "test-Title")); //newComponent(myComponentConfig.id, myComponentConfig.componentName));
    }
    /**
     * Load a DockingComponent into the currentDockingLayout.
     * @param myId the Id of the DockingComponent we want to load.
     * @param myComponentName name of the DockingComponent, optional:
     * if not given it will fetch it from DataService.
     * It will only add an empty DockingComponent to the DockingLayout, the DockingComponent will load its data itself.
     */
    loadComponentInCurrentDockingLayout(myId, myComponentName = 'NoName') {
        if (myComponentName === 'NoName') {
            myComponentName = this.dataService.getIDockingComponentNameById(myId);
        }
        let state = {};
        state.id = myId;
        //this.getCurrentDockingLayout().addComponent(myId, myComponentName);
        this.getCurrentDockingLayout().newComponent(myComponentName, state, "");
    }
}
DockingService.ɵfac = function DockingService_Factory(t) { return new (t || DockingService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_componentConfig_service__WEBPACK_IMPORTED_MODULE_1__.ComponentConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_dataServices_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ComponentFactoryResolver)); };
DockingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DockingService, factory: DockingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 9420:
/*!**************************************!*\
  !*** ./src/widgets/nav.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! golden-layout */ 3869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_docking_services_docking_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/docking/services/docking.service */ 4470);
/* harmony import */ var src_dataServices_localData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/dataServices/localData.service */ 5070);





/**
 * Only mockup
 */
class NavComponent {
    constructor(router, dockingService, testService) {
        this.router = router;
        this.dockingService = dockingService;
        this.testService = testService;
        this.example = {
            "root": {
                "type": "row",
                "content": [
                    {
                        "type": "stack",
                        "content": [
                            {
                                "type": "component",
                                "content": [],
                                "size": 1,
                                "sizeUnit": "fr",
                                "minSizeUnit": "px",
                                "id": "",
                                "maximised": false,
                                "isClosable": true,
                                "reorderEnabled": true,
                                "title": "test-Title",
                                "componentType": "test",
                                "componentState": {
                                    "id": "a7016cf2-c776-61e6-aaf4-c4c11286bf22",
                                    "componentName": "test",
                                    "title": "my Tab",
                                    "componentData": {
                                        "myValue": "https://www.openstreetmap.de/karte/"
                                    }
                                }
                            }
                        ],
                        "size": 50,
                        "sizeUnit": "%",
                        "minSizeUnit": "px",
                        "id": "",
                        "isClosable": true,
                        "maximised": false,
                        "activeItemIndex": 0
                    },
                    {
                        "type": "stack",
                        "content": [
                            {
                                "type": "component",
                                "content": [],
                                "size": 1,
                                "sizeUnit": "fr",
                                "minSizeUnit": "px",
                                "id": "",
                                "maximised": false,
                                "isClosable": true,
                                "reorderEnabled": true,
                                "title": "test-Title",
                                "componentType": "test",
                                "componentState": {
                                    "id": "a89de9b1-9432-f338-c113-1c36ba31a2a6",
                                    "componentName": "test",
                                    "title": "my Tab",
                                    "componentData": {
                                        "myValue": "https://www.openstreetmap.de/karte/"
                                    }
                                }
                            }
                        ],
                        "size": 50,
                        "sizeUnit": "%",
                        "minSizeUnit": "px",
                        "id": "",
                        "isClosable": true,
                        "maximised": false,
                        "activeItemIndex": 0
                    }
                ],
                "size": 1,
                "sizeUnit": "fr",
                "minSizeUnit": "px",
                "id": "",
                "isClosable": true
            },
            "openPopouts": [],
            "settings": {
                "constrainDragToContainer": true,
                "reorderEnabled": true,
                "popoutWholeStack": false,
                "blockedPopoutsThrowError": true,
                "closePopoutsOnUnload": true,
                "responsiveMode": "none",
                "tabOverlapAllowance": 0,
                "reorderOnTabMenuClick": true,
                "tabControlOffset": 10,
                "popInOnClose": false
            },
            "dimensions": {
                "borderWidth": 5,
                "borderGrabWidth": 5,
                "defaultMinItemHeight": 0,
                "defaultMinItemHeightUnit": "px",
                "defaultMinItemWidth": 10,
                "defaultMinItemWidthUnit": "px",
                "headerHeight": 20,
                "dragProxyWidth": 300,
                "dragProxyHeight": 200
            },
            "header": {
                "show": "top",
                "popout": "open in new window",
                "dock": "dock",
                "close": "close",
                "maximise": "maximise",
                "minimise": "minimise",
                "tabDropdown": "additional tabs"
            },
            "resolved": true
        };
    }
    showSettings() {
        this.router.navigate(['settings']);
    }
    showDashboard() {
        this.router.navigate(['dashboard'], { queryParams: { title: 'main' } });
    }
    addTab(link) {
        const testComponentConfig = {
            id: '0',
            componentName: 'test',
            title: 'my Tab',
            componentData: {
                myValue: link
            }
        };
        this.dockingService.createComponentInCurrentDockingLayout(testComponentConfig);
    }
    addEmptyTab() {
        const testComponentConfig = {
            id: '0',
            componentName: 'empty',
            title: 'my Tab',
            componentData: {}
        };
        this.dockingService.createComponentInCurrentDockingLayout(testComponentConfig);
    }
    openTab() {
        this.dockingService.loadComponentInCurrentDockingLayout('4711', 'test');
    }
    saveDockingLayout() {
        //this.dockingService.getCurrentDockingLayout().saveDockingLayoutConfig();
        // this.testService.saveComponentConfigsToFile();
        // this.testService.saveLayoutsConfigsToFile();
        //let layout = LayoutConfig.fromResolved(this.dockingService.getCurrentDockingLayout().saveLayout());
        let layout = this.dockingService.getCurrentDockingLayout().saveLayout();
        console.log(layout);
        layout = golden_layout__WEBPACK_IMPORTED_MODULE_2__.LayoutConfig.fromResolved(this.example);
        this.dockingService.getCurrentDockingLayout().loadLayout(layout);
        //console.log(layout.saveLayout());
        //this.dockingService.getCurrentDockingLayout().loadLayout(layout);
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_docking_services_docking_service__WEBPACK_IMPORTED_MODULE_0__.DockingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_dataServices_localData_service__WEBPACK_IMPORTED_MODULE_1__.LocalDataService)); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-navigation"]], decls: 0, vars: 0, template: function NavComponent_Template(rf, ctx) { }, styles: ["a.menu_links[_ngcontent-%COMP%] {\n            cursor: pointer;\n          }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7WUFDVyxlQUFlO1VBQ2pCIiwiZmlsZSI6Im5hdi5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyIgYS5tZW51X2xpbmtzIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9Il19 */"] });


/***/ }),

/***/ 756:
/*!*******************************************!*\
  !*** ./src/assets/dockingComponents.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"ea74a320-bd21-4c5d-abb6-051281fb6399","componentName":"vid","title":"Kamera - 2","componentData":{"myValue":"../../assets/vids/AtlanticGruntCaymanReef.mp4"}},{"id":"1f8e4760-b661-cf59-20b2-9bdcf1a5fc60","componentName":"vid","title":"Cayman Reef Nord Kamera","componentData":{"myValue":"../../assets/vids/BarracudaCaymanReef.mp4"}},{"id":"8fc80a51-a9e8-561d-9dd8-623339f5a9c7","componentName":"vid","title":"Kamera - 3","componentData":{"myValue":"../../assets/vids/MantaRay.mp4"}},{"id":"f408374b-c07d-a176-bc16-c6e9af8e02be","componentName":"test","title":"4","componentData":{"myValue":"https://www.openstreetmap.de/karte/"}},{"id":"afc2ae2c-79a6-5122-83a2-8b551dcc936c","componentName":"test","title":"Meerwasser Lexikon","componentData":{"myValue":"https://www.meerwasser-lexikon.de/"}},{"id":"22be6a6e-d978-c3b6-b63b-b61ece4882c3","componentName":"test","title":"Mittelmeerfische Wiki","componentData":{"myValue":"https://de.wikipedia.org/wiki/Liste_der_Mittelmeerfische"}},{"id":"54c26490-390b-1157-1ae5-c52f29acb82d","componentName":"test","title":"Karibische Fische","componentData":{"myValue":"https://www.inaturalist.org/projects/marine-fishes-of-the-caribbean?tab=species"}},{"id":"eea2d6f1-f39a-eb1d-388a-f63af24b8356","componentName":"test","title":"Notizblock","componentData":{"myValue":"https://onlinenotizen.de/"}},{"id":"a7016cf2-c776-61e6-aaf4-c4c11286bf22","componentName":"vid","title":"Kamera - 1","componentData":{"myValue":"../../assets/vids/pacificOctopus.mp4"}}]');

/***/ }),

/***/ 8387:
/*!****************************************!*\
  !*** ./src/assets/dockingLayouts.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"0","title":"main","layoutConfig":{"settings":{"hasHeaders":true,"constrainDragToContainer":true,"reorderEnabled":true,"selectionEnabled":false,"popoutWholeStack":false,"blockedPopoutsThrowError":true,"closePopoutsOnUnload":true,"showPopoutIcon":true,"showMaximiseIcon":true,"showCloseIcon":true,"responsiveMode":"onload","tabOverlapAllowance":0,"reorderOnTabMenuClick":true,"tabControlOffset":10},"dimensions":{"borderWidth":5,"borderGrabWidth":15,"minItemHeight":10,"minItemWidth":10,"headerHeight":20,"dragProxyWidth":300,"dragProxyHeight":200},"labels":{"close":"close","maximise":"maximise","minimise":"minimise","popout":"open in new window","popin":"pop in","tabDropdown":"additional tabs"},"content":[{"type":"row","isClosable":true,"reorderEnabled":true,"title":"","content":[{"type":"stack","width":18.163804491413472,"isClosable":true,"reorderEnabled":true,"title":"","activeItemIndex":0,"content":[{"type":"component","componentName":"test","title":"4711 Tab","componentState":{"id":"4711"},"isClosable":true,"reorderEnabled":true,"id":"a5af98d4-8d49-42bf-a3c5-661c39bc9bf8"}]},{"type":"column","isClosable":true,"reorderEnabled":true,"title":"","width":81.83619550858653,"content":[{"type":"stack","header":{},"isClosable":true,"reorderEnabled":true,"title":"","activeItemIndex":0,"width":81.83619550858653,"height":70.81481481481482,"content":[{"componentName":"test","type":"component","title":"my Tab","componentState":{"id":"f07067a6-1673-2ff7-0c92-b19d5279fcdc"},"isClosable":true,"reorderEnabled":true,"id":"a949ff7d-1960-4ac5-8cf9-6c27e23421c6"}]},{"type":"stack","header":{},"isClosable":true,"reorderEnabled":true,"title":"","activeItemIndex":0,"height":29.18518518518518,"content":[{"componentName":"test","type":"component","title":"my Tab","componentState":{"id":"tjuioya6-8673-iff7-dc9h-sd9d5272tcdf"},"isClosable":true,"reorderEnabled":true,"id":"dc7d5b8c-ad7c-4f11-b8a3-77cdc974c423"}]}]}]}],"isClosable":true,"reorderEnabled":true,"title":"","openPopouts":[],"maximisedItemId":null}}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map