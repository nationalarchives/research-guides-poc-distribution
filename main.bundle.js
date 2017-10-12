webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/aToZItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AToZItem; });
var AToZItem = (function () {
    function AToZItem() {
    }
    return AToZItem;
}());

//# sourceMappingURL=aToZItem.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app_app_component__ = __webpack_require__("../../../../../src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_guides_guides_component__ = __webpack_require__("../../../../../src/app/components/guides/guides.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_guide_details_guide_details_component__ = __webpack_require__("../../../../../src/app/components/guide-details/guide-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_name_search_name_search_component__ = __webpack_require__("../../../../../src/app/components/name-search/name-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__name_search_pipe__ = __webpack_require__("../../../../../src/app/name-search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__name_search_number_found_pipe__ = __webpack_require__("../../../../../src/app/name-search-number-found.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_keywords_keywords_component__ = __webpack_require__("../../../../../src/app/components/keywords/keywords.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__keyword_starting_letter_pipe__ = __webpack_require__("../../../../../src/app/keyword-starting-letter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guides_with_keyword_pipe__ = __webpack_require__("../../../../../src/app/guides-with-keyword.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_subjects_subjects_component__ = __webpack_require__("../../../../../src/app/components/subjects/subjects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__parent_subject_pipe__ = __webpack_require__("../../../../../src/app/parent-subject.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__no_parents_pipe__ = __webpack_require__("../../../../../src/app/no-parents.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guides_for_subject_pipe__ = __webpack_require__("../../../../../src/app/guides-for-subject.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__recommended_first_pipe__ = __webpack_require__("../../../../../src/app/recommended-first.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_multiple_subjects_multiple_subjects_component__ = __webpack_require__("../../../../../src/app/components/multiple-subjects/multiple-subjects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__selected_categories_pipe__ = __webpack_require__("../../../../../src/app/selected-categories.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_guides_guides_component__["a" /* GuidesComponent */] },
    { path: 'keywords', component: __WEBPACK_IMPORTED_MODULE_10__components_keywords_keywords_component__["a" /* KeywordsComponent */] },
    { path: 'keywords/:startingLetter', component: __WEBPACK_IMPORTED_MODULE_10__components_keywords_keywords_component__["a" /* KeywordsComponent */] },
    { path: 'keywords/:startingLetter/:keyword', component: __WEBPACK_IMPORTED_MODULE_10__components_keywords_keywords_component__["a" /* KeywordsComponent */] },
    { path: 'subject', component: __WEBPACK_IMPORTED_MODULE_13__components_subjects_subjects_component__["a" /* SubjectsComponent */] },
    { path: 'subject/:key', component: __WEBPACK_IMPORTED_MODULE_13__components_subjects_subjects_component__["a" /* SubjectsComponent */] },
    { path: 'multiple-subjects', component: __WEBPACK_IMPORTED_MODULE_18__components_multiple_subjects_multiple_subjects_component__["a" /* MultipleSubjectsComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__components_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_guides_guides_component__["a" /* GuidesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_guide_details_guide_details_component__["a" /* GuideDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_name_search_name_search_component__["a" /* NameSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_8__name_search_pipe__["a" /* NameSearchPipe */],
            __WEBPACK_IMPORTED_MODULE_9__name_search_number_found_pipe__["a" /* NameSearchNumberFoundPipe */],
            __WEBPACK_IMPORTED_MODULE_11__keyword_starting_letter_pipe__["a" /* KeywordStartingLetterPipe */],
            __WEBPACK_IMPORTED_MODULE_12__guides_with_keyword_pipe__["a" /* GuidesWithKeywordPipe */],
            __WEBPACK_IMPORTED_MODULE_13__components_subjects_subjects_component__["a" /* SubjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__parent_subject_pipe__["a" /* ParentSubjectPipe */],
            __WEBPACK_IMPORTED_MODULE_15__no_parents_pipe__["a" /* NoParentsPipe */],
            __WEBPACK_IMPORTED_MODULE_16__guides_for_subject_pipe__["a" /* GuidesForSubjectPipe */],
            __WEBPACK_IMPORTED_MODULE_10__components_keywords_keywords_component__["a" /* KeywordsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__recommended_first_pipe__["a" /* RecommendedFirstPipe */],
            __WEBPACK_IMPORTED_MODULE_18__components_multiple_subjects_multiple_subjects_component__["a" /* MultipleSubjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__selected_categories_pipe__["a" /* SelectedCategoriesPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__components_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin-none\">\n    <div class=\"col starts-at-full box clr margin-none \">\n        <div class=\"heading-holding-banner clr\">\n            <h1><span><span>{{ title }}</span></span></h1>\n            <div class=\"utilities float-left-to-right pad-small hue-grey-lightest\">\n                <ul class=\"text-small\">\n                    <li class=\"text-blue\">\n                        <a routerLink=\"/\">Search guides by title</a>\n                    </li>\n                    <li class=\"text-blue\">\n                        <a routerLink=\"/subject\">Browse by single subject</a>\n                    </li>\n                    <li class=\"text-blue\">\n                        <a routerLink=\"/multiple-subjects\">Browse by multiple subjects</a>\n                    </li>\n                    <li class=\"text-blue\">\n                        <a routerLink=\"/keywords\">Browse by associated keywords</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_guide_service__ = __webpack_require__("../../../../../src/app/services/guide.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_subject_service__ = __webpack_require__("../../../../../src/app/services/subject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_keyword_service__ = __webpack_require__("../../../../../src/app/services/keyword.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_multiple_subjects_service__ = __webpack_require__("../../../../../src/app/services/multiple-subjects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Research guides';
    }
    AppComponent.prototype.ngOnInit = function () {
        // This is a rudimentary implementation for prototype purposes only. The actual tests
        // would need to ensure that Angular, not just JS, was available.
        var progressivelyEnhancedContent = document.getElementById('progressively-enhanced');
        progressivelyEnhancedContent.style.display = 'none';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_guide_service__["a" /* GuideService */], __WEBPACK_IMPORTED_MODULE_2__services_subject_service__["a" /* SubjectService */], __WEBPACK_IMPORTED_MODULE_3__services_keyword_service__["a" /* KeywordService */], __WEBPACK_IMPORTED_MODULE_4__services_multiple_subjects_service__["a" /* MultipleSubjectsService */]]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/guide-details/guide-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".guide-heading {\n    font-size: 1.25em;\n}\n\n.guide-detail {\n    position: relative;\n}\n\n.provider-label {\n    border: 0;\n    position: absolute;\n    top: 0;\n    right: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/guide-details/guide-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"guide-detail\" [ngClass]=\"{'rg-recommended': (guide.recommended_for_subject !== 'false')}\">\n    <span *ngIf=\"(guide.recommended_for_subject !== 'false')\"\n          class=\"rg-recommended-label\">Recommended guide</span>\n    <a href=\"{{guide.guide_href}}\" class=\"guide-heading\">{{guide.name}}</a><br>\n    <span class=\"text-smallest \">Keywords: </span>\n    <span class=\"tag\" *ngFor=\"let keyword of guide.keywords\"><a\n            [routerLink]=\"['/keywords/' + keyword[0] + '/', keyword]\" [routerLinkActive]=\"['hue-50-yellow']\">{{ keyword }}</a></span>\n    <br>\n    <span class=\"text-smallest\">Subjects:</span>\n    <span class=\"tag\" *ngFor=\"let subject of guide.subjects\"> <a [routerLinkActive]=\"['hue-50-yellow']\"\n                                                                 [routerLink]=\"['/subjects', subject]\">{{ subject }}</a></span>\n    <div *ngIf=\"guide.data_available_on_partner\" class=\"provider-label text-smallest\">Available on:<br><div class=\"{{ guide.data_available_on_partner }}\" title=\"These records are available on {{ guide.data_available_on_partner.split('-').join('') }}.co.uk\"></div></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/guide-details/guide-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuideDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guide__ = __webpack_require__("../../../../../src/app/guide.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GuideDetailsComponent = (function () {
    function GuideDetailsComponent() {
    }
    GuideDetailsComponent.prototype.recommendedForCurrentSubject = function (subject_one, subject_two) {
        return (subject_one === subject_two);
    };
    return GuideDetailsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__guide__["a" /* Guide */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__guide__["a" /* Guide */]) === "function" && _a || Object)
], GuideDetailsComponent.prototype, "guide", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], GuideDetailsComponent.prototype, "selectedSubject", void 0);
GuideDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-guide-detail',
        template: __webpack_require__("../../../../../src/app/components/guide-details/guide-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/guide-details/guide-details.component.css")]
    })
], GuideDetailsComponent);

var _a;
//# sourceMappingURL=guide-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/guides/guides.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/guides/guides.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-starts-at-full box clr\">\n        <div class=\"two-thirds pad-horizontal-large margin-none margin-bottom-large\">\n            <div class=\"pad-top-medium pad-bottom-large\">\n                <p>\n                    Our research guides can help you uncover the history of a place, a person or explore a particular\n                    historical subject. Each guide tells you where you can find, access and understand the relevant\n                    records.\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <!-- START LOCAL FILTERS -->\n    <div class=\"col starts-at-full ends-at-one-third bg-light-grey clr\">\n        <div class=\"category-filter\">\n            <div class=\"breather pad-top-medium\">\n                <h2>\n                    Filter guides by name </h2>\n                <span>Enter a term below</span>\n            </div><!-- end breather -->\n        </div><!-- end category-filter -->\n        <div id=\"toggle-container\" class=\"hue-grey-light pad-bottom-large\">\n            <div class=\"category-filter-footer\"></div>\n            <div class=\"pad-horizontal-large\">\n                <div id=\"research-guidance-subcategories\">\n                    <div class=\"filter-container clr\">\n                        <app-name-search (searchStringUpdated)=\"onSearchStringUpdate($event)\"></app-name-search>\n                    </div><!-- end filter-container -->\n                </div><!-- end research-guidance-subcategories -->\n            </div><!-- end breather -->\n        </div>\n        <!-- end toggle container -->\n    </div><!-- end col -->\n    <!-- END LOCAL FILTERS -->\n    <!-- START RESULTS -->\n    <div id=\"reload-marker\" class=\"col starts-at-full ends-at-two-thirds box margin-none clr\">\n        <div class=\"heading-holding-banner\">\n            <h2>\n                <span>\n                    <span>\n                        <span [ngPlural]=\"(researchGuides | nameSearchNumberFound: nameSearch)\">\n                            <ng-template ngPluralCase=\"=0\">No guides available</ng-template>\n                            <ng-template ngPluralCase=\"=1\">{{ researchGuides | nameSearchNumberFound: nameSearch }} guide available</ng-template>\n                            <ng-template ngPluralCase=\"other\">{{ researchGuides | nameSearchNumberFound: nameSearch }} guides available</ng-template>\n                        </span>\n                        <span *ngIf=\"nameSearch.length > 0\">{{ 'with \"' + nameSearch + '\" in the title'}}</span>\n                    </span>\n                </span>\n            </h2>\n        </div><!-- end heading-holding-banner -->\n        <div class=\"breather\">\n            <h3 class=\"margin-none float-left width-full-to-auto\">How to look for records of...</h3>\n            <div class=\"resource-results clr\">\n                <!-- results go here -->\n                <ul>\n                    <li *ngFor=\"let researchGuide of (researchGuides | nameSearchPipe: nameSearch | recommendedFirst)\">\n                        <app-guide-detail [guide]=\"researchGuide\"></app-guide-detail>\n                    </li>\n                </ul>\n            </div><!-- end resource-results -->\n        </div><!-- end breather -->\n    </div><!-- end col -->\n    <!-- END RESULTS -->\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/guides/guides.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_guide_service__ = __webpack_require__("../../../../../src/app/services/guide.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GuidesComponent = (function () {
    function GuidesComponent(guideService) {
        this.guideService = guideService;
        this.nameSearch = '';
        this.getGuides();
    }
    GuidesComponent.prototype.onSearchStringUpdate = function (searchString) {
        this.nameSearch = searchString;
    };
    GuidesComponent.prototype.getGuides = function () {
        this.researchGuides = this.guideService.getGuides();
    };
    return GuidesComponent;
}());
GuidesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-guides',
        template: __webpack_require__("../../../../../src/app/components/guides/guides.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/guides/guides.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_guide_service__["a" /* GuideService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_guide_service__["a" /* GuideService */]) === "function" && _a || Object])
], GuidesComponent);

var _a;
//# sourceMappingURL=guides.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/keywords/keywords.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/keywords/keywords.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box\"><!-- PAGE HEADING and INTRODUCTION -->\n  <div class=\"breather\">\n    <h2 class=\"increase margin-bottom-medium\">A-Z index</h2>\n  </div><!-- end breather -->\n\n  <!-- STEP 1 - A-Z -->\n  <div class=\"width-full margin-none hue-grey-light clr\">\n    <div class=\"breather\">\n      <h3 class=\"margin-none pad-large\">Step 1 - Select a letter to browse keywords</h3>\n      <div class=\"disc-container\">\n        <ul id=\"menu-disc\">\n          <li *ngFor=\"let aToZItem of aToZ\">\n            <a *ngIf=\"aToZItem.available\" [routerLinkActive]=\"['selected']\" [routerLink]=\"['/keywords', aToZItem.letter]\">{{ aToZItem.letter | uppercase }}</a>\n            <span *ngIf=\"!aToZItem.available\" class=\"disabled\">{{ aToZItem.letter | uppercase }}</span>\n          </li>\n        </ul>\n      </div><!-- end disc-container -->\n    </div><!-- end breather -->\n  </div><!-- end width-full -->\n  <div *ngIf=\"selectedKeywordStartingLetter\" id=\"step-two\" class=\"width-full bg-blue margin-none step-two\">\n    <h3 class=\"margin-none pad-large pad-bottom-none\">Step 2 - Select a keyword starting with {{ selectedKeywordStartingLetter | uppercase }}</h3>\n    <div class=\"breather clr\">\n      <div id=\"desktop-keywords\">\n        <ul class=\"no-bullet border-none keywords-selectable clr\">\n          <li *ngFor=\"let keyword of keywords | keywordStartingLetter: selectedKeywordStartingLetter\">\n            <a [routerLink]=\"[('/keywords/' + selectedKeywordStartingLetter), keyword]\">{{ keyword }}</a>\n          </li>\n        </ul>\n      </div><!-- end desktop-keywords -->\n      <!-- end mobile-keywords -->\n    </div><!-- end breather -->\n\n  </div>\n  <div *ngIf=\"selectedKeywordStartingLetter && selectedKeyword\" class=\"breather\">\n    <h3 class=\"margin-none float-left width-full-to-auto\">How to look for records of...</h3>\n    <div class=\"resource-results clr\">\n      <!-- results go here -->\n      <ul>\n        <li *ngFor=\"let researchGuide of (researchGuides | guidesWithKeyword: selectedKeyword | recommendedFirst)\">\n          <app-guide-detail [guide]=\"researchGuide\"></app-guide-detail>\n        </li>\n      </ul>\n    </div><!-- end resource-results -->\n  </div><!-- end breather -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/keywords/keywords.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeywordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_guide_service__ = __webpack_require__("../../../../../src/app/services/guide.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_keyword_service__ = __webpack_require__("../../../../../src/app/services/keyword.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aToZItem__ = __webpack_require__("../../../../../src/app/aToZItem.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KeywordsComponent = (function () {
    function KeywordsComponent(guideService, keywordService, route, router) {
        this.guideService = guideService;
        this.keywordService = keywordService;
        this.route = route;
        this.router = router;
        this.aToZ = [];
        this.getGuides();
        this.getKeywords();
        this.setAToZ();
    }
    KeywordsComponent.prototype.getGuides = function () {
        this.researchGuides = this.guideService.getGuides();
    };
    KeywordsComponent.prototype.getKeywords = function () {
        this.keywords = this.keywordService.getKeywords();
    };
    KeywordsComponent.prototype.setAToZ = function () {
        var _this = this;
        var availableKeywords = this.keywordService.getAvailableKeywordStartingLetters();
        'abcdefghijklmnopqrstuvwxyz'.split('').forEach(function (i) {
            var item = new __WEBPACK_IMPORTED_MODULE_5__aToZItem__["a" /* AToZItem */]();
            item.available = (availableKeywords.indexOf(i) === -1) ? false : true;
            item.letter = i;
            _this.aToZ.push(item);
        });
    };
    KeywordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubscriber = this.route.params.subscribe(function (params) {
            _this.selectedKeywordStartingLetter = params['startingLetter'];
            _this.selectedKeyword = params['keyword'];
        });
    };
    KeywordsComponent.prototype.ngOnDestroy = function () {
        this.routeSubscriber.unsubscribe();
    };
    return KeywordsComponent;
}());
KeywordsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-keywords',
        template: __webpack_require__("../../../../../src/app/components/keywords/keywords.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/keywords/keywords.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_guide_service__["a" /* GuideService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_guide_service__["a" /* GuideService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_keyword_service__["a" /* KeywordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_keyword_service__["a" /* KeywordService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], KeywordsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=keywords.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/multiple-subjects/multiple-subjects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".category-checkboxes {\n    font-size: 0.8em;\n    background-color: #fff;\n    padding-top: 1.5em;\n}\n\n.category-checkboxes li {\n    list-style: none;\n    display: inline-block;\n    margin-right: 0.2em;\n}\n\n.category-checkboxes input {\n    display: none;\n}\n\n.category-checkboxes label {\n    padding: 0.2em 0.6em;\n    background-color: #EEE;\n}\n\n.category-checkboxes label:hover {\n    cursor: pointer;\n}\n\n.category-checkboxes input:checked + label {\n    background-color: #008484;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/multiple-subjects/multiple-subjects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-starts-at-full box clr\">\n        <div class=\"two-thirds pad-horizontal-large margin-none margin-bottom-large\">\n            <div class=\"pad-top-medium pad-bottom-large\">\n                <p>\n                    Our research guides can help you uncover the history of a place, a person or explore a particular\n                    historical subject. Each guide tells you where you can find, access and understand the relevant\n                    records.\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <!-- START LOCAL FILTERS -->\n    <div class=\"col starts-at-full ends-at-one-third bg-light-grey clr\">\n        <div class=\"category-filter\">\n            <div class=\"breather pad-top-medium\">\n                <h2>\n                    Browse guides by subjects</h2>\n            </div><!-- end breather -->\n        </div><!-- end category-filter -->\n        <div id=\"toggle-container\" class=\"hue-grey-light pad-bottom-large\">\n            <div class=\"category-filter-footer\"></div>\n            <div class=\"pad-horizontal-large\">\n                <ul class=\"category-checkboxes\">\n                    <li *ngFor=\"let category of categories\">\n                        <input type=\"checkbox\"\n                               name=\"categories\"\n                               value=\"{{category.key}}\"\n                               id=\"{{category.key}}\"\n                               (change)=\"updateCategoryCheckedStatus(category, $event)\">\n                        <label for=\"{{category.key}}\">{{category.name.split('-').join(' ')}}</label>\n                    </li>\n                </ul>\n            </div><!-- end breather -->\n        </div>\n        <!-- end toggle container -->\n    </div><!-- end col -->\n    <!-- END LOCAL FILTERS -->\n    <!-- START RESULTS -->\n    <div id=\"reload-marker\" class=\"col starts-at-full ends-at-two-thirds box margin-none clr\">\n        <!-- end heading-holding-banner -->\n        <div class=\"breather\">\n            <h3 class=\"margin-none float-left width-full-to-auto\">How to look for records of...</h3>\n            <div class=\"resource-results clr\">\n                <ul>\n                    <li *ngFor=\"let researchGuide of (researchGuides | recommendedFirst | selectedCategories: selectedCategories())\">\n                        <app-guide-detail [guide]=\"researchGuide\"></app-guide-detail>\n                    </li>\n                </ul>\n            </div><!-- end resource-results -->\n        </div><!-- end breather -->\n    </div><!-- end col -->\n    <!-- END RESULTS -->\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/multiple-subjects/multiple-subjects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleSubjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_multiple_subjects_service__ = __webpack_require__("../../../../../src/app/services/multiple-subjects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_guide_service__ = __webpack_require__("../../../../../src/app/services/guide.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MultipleSubjectsComponent = (function () {
    function MultipleSubjectsComponent(categoryService, guideService) {
        this.categoryService = categoryService;
        this.guideService = guideService;
        this.getGuides();
        this.getCategories();
    }
    MultipleSubjectsComponent.prototype.selectedCategories = function () {
        var selectedCategories = [];
        this.categories.forEach(function (i) {
            if (i.checked) {
                selectedCategories.push(i.key);
            }
        });
        return selectedCategories;
    };
    MultipleSubjectsComponent.prototype.updateCategoryCheckedStatus = function (category, $event) {
        category.checked = $event.srcElement.checked;
    };
    MultipleSubjectsComponent.prototype.getGuides = function () {
        this.researchGuides = this.guideService.getGuides();
    };
    MultipleSubjectsComponent.prototype.getCategories = function () {
        this.categories = this.categoryService.getCategories();
    };
    MultipleSubjectsComponent.prototype.ngOnInit = function () {
    };
    return MultipleSubjectsComponent;
}());
MultipleSubjectsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-categories',
        template: __webpack_require__("../../../../../src/app/components/multiple-subjects/multiple-subjects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/multiple-subjects/multiple-subjects.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_multiple_subjects_service__["a" /* MultipleSubjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_multiple_subjects_service__["a" /* MultipleSubjectsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_guide_service__["a" /* GuideService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_guide_service__["a" /* GuideService */]) === "function" && _b || Object])
], MultipleSubjectsComponent);

var _a, _b;
//# sourceMappingURL=multiple-subjects.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/name-search/name-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n    border: none;\n    width: 100%\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/name-search/name-search.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" id=\"nameSearch\" placeholder=\"Enter 'Military' or 'Register'\" (keyup)=\"changeSearchString($event)\">"

/***/ }),

/***/ "../../../../../src/app/components/name-search/name-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NameSearchComponent = (function () {
    function NameSearchComponent() {
        this.searchStringUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    NameSearchComponent.prototype.changeSearchString = function (event) {
        var value = event.srcElement.value;
        this.searchStringUpdated.emit(value);
    };
    return NameSearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], NameSearchComponent.prototype, "searchStringUpdated", void 0);
NameSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-name-search',
        template: __webpack_require__("../../../../../src/app/components/name-search/name-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/name-search/name-search.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NameSearchComponent);

//# sourceMappingURL=name-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/subjects/subjects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nested-subjects {\n    padding: 1em;\n}\n\n.nested-subjects > ul {\n    margin-top: 0em;\n    margin-bottom: 1em;\n    padding-left: 0;\n}\n\n.nested-subjects li {\n    padding-top: 0em;\n    list-style: none;\n}\n\n.active {\n    color: black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/subjects/subjects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-starts-at-full box clr\">\n        <div class=\"two-thirds pad-horizontal-large margin-none margin-bottom-large\">\n            <div class=\"pad-top-medium pad-bottom-large\">\n                <p>\n                    Our research guides can help you uncover the history of a place, a person or explore a particular\n                    historical subject. Each guide tells you where you can find, access and understand the relevant\n                    records.\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <!-- START LOCAL FILTERS -->\n    <div class=\"col starts-at-full ends-at-one-third bg-light-grey clr\">\n        <div class=\"category-filter\">\n            <div class=\"breather pad-top-medium\">\n                <h2>\n                    Browse guides by subject</h2>\n            </div><!-- end breather -->\n        </div><!-- end category-filter -->\n        <div id=\"toggle-container\" class=\"hue-grey-light pad-bottom-large\">\n            <div class=\"category-filter-footer\"></div>\n            <div class=\"pad-horizontal-large\">\n                <div id=\"research-guidance-subcategories\">\n                    <a *ngIf=\"selectedSubject\" [routerLink]=\"['/subjects']\" class=\"filter-button-secondary float-right\">Clear</a>\n                    <div class=\"filter-container clr nested-subjects\">\n                        <ul>\n                            <li *ngFor=\"let subject of (subjects | noParents) \">\n                                <a class=\"btn\" [routerLinkActive]=\"['active']\"\n                                   [routerLink]=\"['/subject', subject.key]\">{{ subject.name }}</a>\n                                <ul>\n                                    <li *ngFor=\"let child_subject of (subjects | parentSubject: subject.key)\"><a\n                                            [routerLinkActive]=\"['active']\"\n                                            [routerLink]=\"['/subject', child_subject.key]\">{{ child_subject.name }}</a>\n                                    </li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div><!-- end filter-container -->\n                </div><!-- end research-guidance-subcategories -->\n            </div><!-- end breather -->\n        </div>\n        <!-- end toggle container -->\n    </div><!-- end col -->\n    <!-- END LOCAL FILTERS -->\n    <!-- START RESULTS -->\n    <div id=\"reload-marker\" class=\"col starts-at-full ends-at-two-thirds box margin-none clr\">\n        <div class=\"heading-holding-banner\">\n            <h2>\n                <span>\n                    <span *ngIf=\"!selectedSubject\">Guides by subject</span>\n                    <span *ngIf=\"selectedSubject\">Guides related to {{ getSubject(selectedSubject)}}</span>\n                </span>\n            </h2>\n        </div><!-- end heading-holding-banner -->\n        <div class=\"breather\">\n            <h3 class=\"margin-none float-left width-full-to-auto\">How to look for records of...</h3>\n            <div class=\"resource-results clr\">\n                <ul>\n                    <li *ngFor=\"let researchGuide of (researchGuides | guidesForSubject: selectedSubject | recommendedFirst)\">\n                        <app-guide-detail [guide]=\"researchGuide\" [selectedSubject]=\"selectedSubject\"></app-guide-detail>\n                    </li>\n                </ul>\n            </div><!-- end resource-results -->\n        </div><!-- end breather -->\n    </div><!-- end col -->\n    <!-- END RESULTS -->\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/subjects/subjects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_subject_service__ = __webpack_require__("../../../../../src/app/services/subject.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_guide_service__ = __webpack_require__("../../../../../src/app/services/guide.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubjectsComponent = (function () {
    function SubjectsComponent(guideService, subjectService, route, router) {
        this.guideService = guideService;
        this.subjectService = subjectService;
        this.route = route;
        this.router = router;
        this.getSubjects();
        this.getGuides();
    }
    SubjectsComponent.prototype.getSubjects = function () {
        this.subjects = this.subjectService.getSubjects();
    };
    SubjectsComponent.prototype.getSubject = function (key) {
        return this.subjectService.getSubject(key);
    };
    SubjectsComponent.prototype.getGuides = function () {
        this.researchGuides = this.guideService.getGuides();
    };
    SubjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubscriber = this.route.params.subscribe(function (params) {
            _this.selectedSubject = params['key'];
        });
    };
    SubjectsComponent.prototype.ngOnDestroy = function () {
        this.routeSubscriber.unsubscribe();
    };
    return SubjectsComponent;
}());
SubjectsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-subjects',
        template: __webpack_require__("../../../../../src/app/components/subjects/subjects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/subjects/subjects.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_guide_service__["a" /* GuideService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_guide_service__["a" /* GuideService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_subject_service__["a" /* SubjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_subject_service__["a" /* SubjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], SubjectsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=subjects.component.js.map

/***/ }),

/***/ "../../../../../src/app/guide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guide; });
var Guide = (function () {
    function Guide() {
    }
    return Guide;
}());

//# sourceMappingURL=guide.js.map

/***/ }),

/***/ "../../../../../src/app/guides-for-subject.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidesForSubjectPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GuidesForSubjectPipe = (function () {
    function GuidesForSubjectPipe() {
    }
    GuidesForSubjectPipe.prototype.transform = function (allGuides, subject) {
        var guides = allGuides.filter(function (guide) {
            if (subject === undefined) {
                return guide;
            }
            if (guide.subjects.indexOf(subject) !== -1) {
                return guide;
            }
        });
        return guides;
    };
    return GuidesForSubjectPipe;
}());
GuidesForSubjectPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'guidesForSubject'
    })
], GuidesForSubjectPipe);

//# sourceMappingURL=guides-for-subject.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/guides-with-keyword.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidesWithKeywordPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GuidesWithKeywordPipe = (function () {
    function GuidesWithKeywordPipe() {
    }
    GuidesWithKeywordPipe.prototype.transform = function (allGuides, keyword) {
        return allGuides.filter(function (guide) {
            if (keyword === undefined) {
                return guide;
            }
            var keywordAsKey = keyword.split(' ').join('-');
            if (guide.keywords.indexOf(keywordAsKey) !== -1) {
                return guide;
            }
        });
    };
    return GuidesWithKeywordPipe;
}());
GuidesWithKeywordPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'guidesWithKeyword'
    })
], GuidesWithKeywordPipe);

//# sourceMappingURL=guides-with-keyword.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/keyword-starting-letter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeywordStartingLetterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeywordStartingLetterPipe = (function () {
    function KeywordStartingLetterPipe() {
    }
    KeywordStartingLetterPipe.prototype.transform = function (keywords, startingLetter) {
        return keywords.filter(function (keyword) {
            if (keyword[0] === startingLetter.toLowerCase()) {
                return keyword;
            }
        });
    };
    return KeywordStartingLetterPipe;
}());
KeywordStartingLetterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'keywordStartingLetter'
    })
], KeywordStartingLetterPipe);

//# sourceMappingURL=keyword-starting-letter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/name-search-number-found.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameSearchNumberFoundPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NameSearchNumberFoundPipe = (function () {
    function NameSearchNumberFoundPipe() {
    }
    NameSearchNumberFoundPipe.prototype.transform = function (allGuides, searchText) {
        var numberOfMatchingGuides = allGuides.filter(function (guide) {
            if (searchText === '') {
                return guide;
            }
            var guideNameNoSpacesLowerCase = guide.name.split(' ').join('').toLowerCase(), filterTextNoSpacesLowerCase = searchText.split(' ').join('').toLowerCase();
            if (guideNameNoSpacesLowerCase.indexOf(filterTextNoSpacesLowerCase) !== -1) {
                return guide;
            }
        });
        return numberOfMatchingGuides.length;
    };
    return NameSearchNumberFoundPipe;
}());
NameSearchNumberFoundPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'nameSearchNumberFound'
    })
], NameSearchNumberFoundPipe);

//# sourceMappingURL=name-search-number-found.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/name-search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NameSearchPipe = (function () {
    function NameSearchPipe() {
    }
    NameSearchPipe.prototype.transform = function (allGuides, searchText) {
        return allGuides.filter(function (guide) {
            if (searchText === '') {
                return guide;
            }
            var guideNameNoSpacesLowerCase = guide.name.split(' ').join('').toLowerCase(), filterTextNoSpacesLowerCase = searchText.split(' ').join('').toLowerCase();
            if (guideNameNoSpacesLowerCase.indexOf(filterTextNoSpacesLowerCase) !== -1) {
                return guide;
            }
        });
    };
    return NameSearchPipe;
}());
NameSearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'nameSearchPipe' })
], NameSearchPipe);

//# sourceMappingURL=name-search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/no-parents.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoParentsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NoParentsPipe = (function () {
    function NoParentsPipe() {
    }
    NoParentsPipe.prototype.transform = function (allSubjects) {
        return allSubjects.filter(function (subject) {
            if (!!subject.parent) {
                return subject;
            }
        });
    };
    return NoParentsPipe;
}());
NoParentsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'noParents'
    })
], NoParentsPipe);

//# sourceMappingURL=no-parents.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/parent-subject.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentSubjectPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ParentSubjectPipe = (function () {
    function ParentSubjectPipe() {
    }
    ParentSubjectPipe.prototype.transform = function (allSubjects, parentKey) {
        return allSubjects.filter(function (subject) {
            if (parentKey === '') {
                return subject;
            }
            if (subject.parent === parentKey) {
                return subject;
            }
        });
    };
    return ParentSubjectPipe;
}());
ParentSubjectPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'parentSubject'
    })
], ParentSubjectPipe);

//# sourceMappingURL=parent-subject.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/recommended-first.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendedFirstPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RecommendedFirstPipe = (function () {
    function RecommendedFirstPipe() {
    }
    RecommendedFirstPipe.prototype.transform = function (allGuides, subject) {
        var guides = allGuides.sort(function (a, b) {
            var a_recommended = (a.recommended_for_subject === 'true') ? 0 : 1;
            var b_recommended = (b.recommended_for_subject === 'true') ? 0 : 1;
            return a_recommended - b_recommended;
        });
        return guides;
    };
    return RecommendedFirstPipe;
}());
RecommendedFirstPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'recommendedFirst'
    })
], RecommendedFirstPipe);

//# sourceMappingURL=recommended-first.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/selected-categories.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedCategoriesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SelectedCategoriesPipe = (function () {
    function SelectedCategoriesPipe() {
    }
    SelectedCategoriesPipe.prototype.transform = function (allGuides, selectedCategories) {
        var guidesToReturn = [];
        allGuides.forEach(function (i) {
            var allFound = selectedCategories.every(function (value) {
                return (i.subjects.indexOf(value) !== -1);
            });
            if (allFound) {
                guidesToReturn.push(i);
            }
            console.log(selectedCategories);
            console.log(i.subjects);
        });
        return guidesToReturn;
    };
    return SelectedCategoriesPipe;
}());
SelectedCategoriesPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'selectedCategories'
    })
], SelectedCategoriesPipe);

//# sourceMappingURL=selected-categories.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/guide.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuideService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__research_guides_from_dom__ = __webpack_require__("../../../../../src/app/services/research-guides-from-dom.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GuideService = (function () {
    function GuideService() {
    }
    GuideService.prototype.getGuides = function () {
        var ALL_GUIDES = new __WEBPACK_IMPORTED_MODULE_1__research_guides_from_dom__["a" /* ResearchGuidesFromDOM */]('.research-guide-links', 'li[class="research-guide"]');
        return ALL_GUIDES.getGuides();
    };
    return GuideService;
}());
GuideService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], GuideService);

//# sourceMappingURL=guide.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/keyword.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeywordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__research_guides_from_dom__ = __webpack_require__("../../../../../src/app/services/research-guides-from-dom.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeywordService = (function () {
    function KeywordService() {
        var ALL_GUIDES = new __WEBPACK_IMPORTED_MODULE_1__research_guides_from_dom__["a" /* ResearchGuidesFromDOM */]('.research-guide-links', 'li[class="research-guide"]');
        this.research_guides = ALL_GUIDES.getGuides();
    }
    KeywordService.prototype.getKeywords = function () {
        var keywords = [];
        this.research_guides.forEach(function (guide) {
            guide.keywords.forEach(function (keyword) {
                if (keywords.indexOf(keyword) === -1) {
                    keywords.push(keyword);
                }
            });
        });
        return keywords.sort();
    };
    KeywordService.prototype.getAvailableKeywordStartingLetters = function () {
        var availableKeywordStartingLetters = [];
        this.getKeywords().forEach(function (word) {
            var letter = word[0];
            if (availableKeywordStartingLetters.indexOf(letter) === -1) {
                availableKeywordStartingLetters.push(letter);
            }
        });
        return availableKeywordStartingLetters.sort();
    };
    return KeywordService;
}());
KeywordService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], KeywordService);

//# sourceMappingURL=keyword.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/multiple-subjects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleSubjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__research_guides_from_dom__ = __webpack_require__("../../../../../src/app/services/research-guides-from-dom.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultipleSubjectsService = (function () {
    function MultipleSubjectsService() {
        var ALL_CATEGORIES = new __WEBPACK_IMPORTED_MODULE_1__research_guides_from_dom__["a" /* ResearchGuidesFromDOM */]('.research-guide-links', 'li[class="research-guide"]');
        this.categories = ALL_CATEGORIES.getCategories();
    }
    MultipleSubjectsService.prototype.getCategories = function () {
        return this.categories;
    };
    return MultipleSubjectsService;
}());
MultipleSubjectsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MultipleSubjectsService);

//# sourceMappingURL=multiple-subjects.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/research-guides-from-dom.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearchGuidesFromDOM; });
var ResearchGuidesFromDOM = (function () {
    function ResearchGuidesFromDOM(subjectSelector, guidesSelector) {
        this.categories = [];
        this.setSubjects(subjectSelector);
        this.setGuides(guidesSelector);
        this.setCategories(guidesSelector);
    }
    ResearchGuidesFromDOM.prototype.populateCategories = function (guides) {
        var allCategoriesWithDuplicates = [];
        for (var i = 0; i < guides.length; i++) {
            var categories = guides[i].getAttribute('data-categories');
            var categoriesAsArray = categories.split(' ');
            allCategoriesWithDuplicates = allCategoriesWithDuplicates.concat(categoriesAsArray);
        }
        var allCategoriesDeDuplicated = new Set(allCategoriesWithDuplicates);
        for (var _i = 0, _a = Array.from(allCategoriesDeDuplicated.values()); _i < _a.length; _i++) {
            var category = _a[_i];
            if (category !== '') {
                this.categories.push({
                    name: category,
                    key: category,
                    checked: false
                });
            }
        }
    };
    ResearchGuidesFromDOM.prototype.populateSubjects = function (items, JSONOutput, subCategories) {
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            JSONOutput.push({
                name: item.getElementsByTagName('a')[0].innerText,
                key: item.getElementsByTagName('a')[0].href.split('#')[1],
                parent: false
            });
            subCategories = item.querySelectorAll('li');
            for (var j = 0; j < subCategories.length; j++) {
                var subcategory = subCategories[j];
                JSONOutput.push({
                    name: subcategory.innerText,
                    key: subcategory.getElementsByTagName('a')[0].href.split('#')[1],
                    parent: item.getElementsByTagName('a')[0].href.split('#')[1]
                });
            }
        }
    };
    ResearchGuidesFromDOM.prototype.populateGuides = function (items, JSONOutput) {
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            JSONOutput.push({
                name: item.getAttribute('data-name'),
                subjects: item.getAttribute('data-categories').split(' '),
                recommended_for_subject: item.getAttribute('data-recommended-guide-for-category'),
                keywords: item.getAttribute('data-keywords').split(' '),
                all_records_available_online: item.getAttribute('data-all-records-available-online'),
                guide_href: item.getAttribute('data-guide-href'),
                data_available_on_partner: (item.getAttribute('data-available-on-partner') === 'false') ? false : item.getAttribute('data-available-on-partner'),
                id: item.getAttribute('id')
            });
        }
    };
    ResearchGuidesFromDOM.prototype.getCategories = function () {
        return this.categories;
    };
    ResearchGuidesFromDOM.prototype.getSubjects = function () {
        return this.subjects;
    };
    ResearchGuidesFromDOM.prototype.getGuides = function () {
        return this.guides;
    };
    ResearchGuidesFromDOM.prototype.setSubjects = function (subjectSelector) {
        this.selector = subjectSelector;
        this.selectorMatchInDOM = document.querySelectorAll(this.selector + ' > li');
        this.subjects = [];
        this.selectorChildren = [];
        this.populateSubjects(this.selectorMatchInDOM, this.subjects, this.selectorChildren);
    };
    ResearchGuidesFromDOM.prototype.setGuides = function (guidesSelector) {
        this.selectorGuides = guidesSelector;
        this.selectorGuidesMatchInDOM = document.querySelectorAll(this.selectorGuides);
        this.guides = [];
        this.populateGuides(this.selectorGuidesMatchInDOM, this.guides);
    };
    ResearchGuidesFromDOM.prototype.setCategories = function (guidesSelector) {
        this.selectorGuides = guidesSelector;
        this.selectorGuidesMatchInDOM = document.querySelectorAll(this.selectorGuides);
        this.populateCategories(this.selectorGuidesMatchInDOM);
    };
    return ResearchGuidesFromDOM;
}());

//# sourceMappingURL=research-guides-from-dom.js.map

/***/ }),

/***/ "../../../../../src/app/services/subject.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__research_guides_from_dom__ = __webpack_require__("../../../../../src/app/services/research-guides-from-dom.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubjectService = (function () {
    function SubjectService() {
        var ALL_GUIDES = new __WEBPACK_IMPORTED_MODULE_1__research_guides_from_dom__["a" /* ResearchGuidesFromDOM */]('.research-guide-links', 'li[class="research-guide"]');
        this.subjects = ALL_GUIDES.getSubjects();
    }
    SubjectService.prototype.getSubjects = function () {
        return this.subjects;
    };
    SubjectService.prototype.getSubject = function (key) {
        var subject;
        this.subjects.forEach(function (i) {
            if (i.key === key) {
                subject = i.name;
            }
        });
        return subject;
    };
    return SubjectService;
}());
SubjectService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SubjectService);

//# sourceMappingURL=subject.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map