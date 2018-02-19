webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var problem_list_component_1 = __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.ts");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
var problem_detail_component_1 = __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.ts");
var app_routes_1 = __webpack_require__("../../../../../src/app/app.routes.ts");
var new_problem_component_1 = __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.ts");
var navbar_component_1 = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
var editor_component_1 = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
var collaboration_service_1 = __webpack_require__("../../../../../src/app/services/collaboration.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                problem_list_component_1.ProblemListComponent,
                problem_detail_component_1.ProblemDetailComponent,
                new_problem_component_1.NewProblemComponent,
                navbar_component_1.NavbarComponent,
                editor_component_1.EditorComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routings,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [
                data_service_1.DataService,
                collaboration_service_1.CollaborationService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var problem_list_component_1 = __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.ts");
var problem_detail_component_1 = __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.ts");
var new_problem_component_1 = __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.ts");
var routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'problems',
        component: problem_list_component_1.ProblemListComponent
    },
    {
        path: 'problems/newProblem',
        component: new_problem_component_1.NewProblemComponent
    },
    {
        path: 'problems/:id',
        component: problem_detail_component_1.ProblemDetailComponent
    },
    {
        path: '**',
        redirectTo: 'problems'
    }
];
exports.routings = router_1.RouterModule.forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen {\n    #editor {\n      height: 600px;     \n    }\n    .lang-select {\n      width: 100px;\n      margin-right: 10px;\n    }\n    header .btn {\n      margin: 0 5px;\n    }\n    footer .btn {\n      margin: 0 5px;\n    }\n    .editor-footer, .editor-header {\n      margin: 10px 0;\n    }\n    .cursor {\n      /*position:absolute;*/\n      background: rgba(0, 250, 0, 0.5);\n      z-index: 40;\n      width: 2px !important;\n    }\n    .space {\n        margin-top: 100px;\n    }\n   }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <header class=\"editor-header\">\n    <select class=\"form-control pull-left lang-select\" name=\"language\"\n     [(ngModel)]=\"language\" (change)=\"setLanguage(language)\">\n     <option *ngFor=\"let language of languages\" [value]=\"language\">\n       {{language}}\n     </option>\n    </select>\n    \n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n      Reset\n    </button>\n\n    <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Are you sure</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            You will lose current code in the editor, are you sure?\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n            (click)=\"resetEditor()\">Reset</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n  <div class=\"row\">\n    <div id=\"editor\">\n    </div>\n    <div>\n      {{output}}\n    </div>\n  </div><!-- This is the body -->\n  <footer class=\"editor-footer\">\n      <button type=\"button\" class=\"btn btn-success pull-right\" \n      (click)=\"submit()\">Submit Solution</button>\n  </footer>\n  <div class=\"space\"></div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var collaboration_service_1 = __webpack_require__("../../../../../src/app/services/collaboration.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
var EditorComponent = /** @class */ (function () {
    function EditorComponent(collabration, route, dataService) {
        this.collabration = collabration;
        this.route = route;
        this.dataService = dataService;
        // Supporting java and python.
        this.languages = ['Java', 'Python'];
        this.language = 'Java';
        this.output = '';
        // Define the default content for java and python in editor;
        this.defaultContent = {
            'Java': "public class Example {\n      public static void main(String[] args) {\n        // Type your Java code here.\n      }\n    }",
            'Python': "class Solution:\n      def example():\n        # write your python code here.\n    "
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the session id
        this.route.params
            .subscribe(function (params) {
            _this.sessionId = params['id'];
            _this.initEditor();
            // When start the editor, restore buffer
            _this.collabration.restoreBuffer();
        });
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        // Initialize editor;
        this.editor = ace.edit("editor");
        this.editor.setTheme("ace/theme/eclipse");
        this.editor.setFontSize(20);
        this.resetEditor();
        // Set up collabration socket;
        this.collabration.init(this.editor, this.sessionId);
        this.editor.lastAppliedChange = null;
        this.editor.on("change", function (e) {
            if (_this.editor.lastAppliedChange != e) {
                _this.collabration.change(JSON.stringify(e));
            }
        });
    };
    // Reset the editor;
    EditorComponent.prototype.resetEditor = function () {
        this.editor.setValue(this.defaultContent[this.language]);
        this.editor.getSession().setMode("ace/mode/" + this.language.toLocaleLowerCase());
    };
    // Choose programming language;
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    // Submit the code;
    EditorComponent.prototype.submit = function () {
        var _this = this;
        var user_code = this.editor.getValue();
        console.log(user_code);
        var data = {
            user_code: user_code,
            lang: this.language.toLocaleLowerCase()
        };
        this.dataService.buildAndRun(data)
            .then(function (res) { return _this.output = res; });
    };
    EditorComponent = __decorate([
        core_1.Component({
            selector: 'app-editor',
            template: __webpack_require__("../../../../../src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [collaboration_service_1.CollaborationService,
            router_1.ActivatedRoute,
            data_service_1.DataService])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;


/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top navbar-extra\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/problems\">FLAGCode</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/problems\">Problem List</a></li>\n        <li><a [routerLink]=\"['/problems', 'newProblem']\">Add Problem</a></li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a href=\"#\">Sign in</a>\n        </li>\n        <li>\n          <a href=\"#\">Sign up</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    padding-top: 80px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<body>\n<div class=\"container\" ng-controller=\"PopoverDempCtrl\">\n    \n    <form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label for=\"problemName\">*Problem Name:</label>\n            <input name=\"problemName\" id=\"problemName\" required type=\"text\"\n             class=\"form-control\" placeholder=\"Please input problem name\"\n             [(ngModel)]=\"newProblem.name\" #nameRequired=\"ngModel\">\n\n             <div [hidden]=\"nameRequired.valid || nameRequired.pristine\"\n              class=\"alert alert-danger\">\n              Name is required.\n             </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"problemDesc\">*Problem Description:</label>\n            <textarea name=\"problemDesc\" id=\"problemDesc\" required class=\"form-control\"\n             placeholder=\"Please input problem description\" rows=\"3\"\n             [(ngModel)]=\"newProblem.desc\" #descRequired=\"ngModel\">\n            </textarea>\n            <div [hidden]=\"descRequired.valid || descRequired.pristine\"\n              class=\"alert alert-danger\">\n              Description is required.\n             </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"difficulty\">Problem Difficulty:</label>\n            <select name=\"difficulty\" id=\"difficulty\" class=\"form-control\"\n             [(ngModel)]=\"newProblem.difficulty\">\n            <option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty\">\n                {{difficulty}}\n            </option>\n            </select>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-primary pull-right\" \n                 type=\"submit\" \n                 \n                 [disabled]=\"!formRef.valid\">\n                 Submit Problem\n                </button>\n            </div>\n        </div>\n    </form>\n</div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: null,
    desc: '',
    difficulty: 'medium'
});
var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
        this.difficulties = ["easy", "medium", "hard", "super"];
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.onSubmit = function () {
        this.dataService.addProblem(this.newProblem);
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
        alert("Successfully add new Problem.\rPlease check the problem list.");
        this.router.navigate(['/problems']);
    };
    NewProblemComponent = __decorate([
        core_1.Component({
            selector: 'app-new-problem',
            template: __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
    ], NewProblemComponent);
    return NewProblemComponent;
}());
exports.NewProblemComponent = NewProblemComponent;


/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar></app-navbar>\n  <div class=\"jumbotron\" *ngIf=\"problem\">\n    <h1 class=\"display-4\">\n      {{problem.id}}. {{problem.name}}\n    </h1>\n    <hr class=\"my-4\">\n    <p>\n      {{problem.desc}}\n    </p>\n  </div>\n  <div class=\"hidden-xs col-sm-12 col-md-12 col-lg-12\">\n    <app-editor></app-editor>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ProblemDetailComponent = /** @class */ (function () {
    function ProblemDetailComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dataService.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; });
        });
    };
    ProblemDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-detail',
            template: __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, data_service_1.DataService])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());
exports.ProblemDetailComponent = ProblemDetailComponent;


/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .difficulty {\n    min-width: 65px;\n    margin-right: 10px;\n  }\n  \n  .label.difficulty {\n    padding-top: 0.6em;\n    color: #fbfdfa;\n    font-size: 12px;\n  }\n  \n  .title {\n    font-size: 1.2em;\n  }\n  \n  .diff-easy {\n    background-color: #42ebf4;\n  }\n  \n  .diff-medium {\n    background-color: #92cf5c;\n  }\n  \n  .diff-hard {\n    background-color: #dd0d1e;\n  }\n  \n  .diff-super {\n    background-color: #8d16e2;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar></app-navbar>\n  <br><br><br>\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\"let problem of problems\" [routerLink]=\"['/problems', problem.id]\">\n      <span class=\"{{'pull-left label difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">\n        {{problem.difficulty}}\n      </span>\n      <strong class=\"title\">{{problem.id}}. {{problem.name}} </strong>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(dataService) {
        this.dataService = dataService;
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
    };
    ProblemListComponent.prototype.ngOnDestroy = function () {
        this.subscriptionProblems.unsubscribe();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.subscriptionProblems = this.dataService.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-list',
            template: __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], ProblemListComponent);
    return ProblemListComponent;
}());
exports.ProblemListComponent = ProblemListComponent;


/***/ }),

/***/ "../../../../../src/app/services/collaboration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var CollaborationService = /** @class */ (function () {
    function CollaborationService() {
    }
    CollaborationService.prototype.init = function (editor, sessionId) {
        // Build the connection to server;
        this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId });
        // Receive data from server;
        this.collaborationSocket.on("change", function (delta) {
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
    };
    // Emit event to tell what changes to other collabrators and server
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit("change", delta);
    };
    // Emit event to restore buffer
    CollaborationService.prototype.restoreBuffer = function () {
        this.collaborationSocket.emit("restoreBuffer");
    };
    CollaborationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CollaborationService);
    return CollaborationService;
}());
exports.CollaborationService = CollaborationService;


/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
        this._problemSource = new BehaviorSubject_1.BehaviorSubject([]);
    }
    //get the problem list;
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.httpClient.get('api/v1/problems')
            .toPromise()
            .then(function (res) {
            _this._problemSource.next(res);
        })
            .catch(this.handleError);
        return this._problemSource.asObservable();
    };
    //get a specific problem using problem id;
    DataService.prototype.getProblem = function (id) {
        return this.httpClient.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    //add new problems, using json as content type;
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        var option = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.httpClient.post('api/v1/problems/newProblem', problem, option)
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            return res;
        })
            .catch(this.handleError);
    };
    //build and run the code that user submit
    DataService.prototype.buildAndRun = function (data) {
        var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.httpClient.post('api/v1/build_and_run', data, options)
            .toPromise()
            .then(function (res) {
            console.log(res);
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        return Promise.reject(error.body || error);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map