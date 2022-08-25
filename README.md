# Dev_Notes

Stuff I have learned :rocket::rocket:

Similar repos:
* [@charliegerard](https://github.com/charliegerard/dev-notes)
* [@jbranchaud](https://github.com/jbranchaud/til)
* [@thoughtbot](https://github.com/thoughtbot/til)

---

Currently: &nbsp; **292** Dev_Notes

---

# Categories

* [Algorithms and Data Structures](#algorithms-and-data-structures)
* [Angular](#angular)
  - [Directives and Components](#directives-and-components)
  - [Forms](#forms)
  - [NgRx](#ngrx)
  - [Pipes](#pipes)
  - [Angular Routing](#angular-routing)
  - [HTTP](#http)
* [Bash Apps](#bash-apps)
* [CSS](#css)
  - [Scss](#scss)
* [Design Patterns](#design-patterns)
* [Docker](#docker)
* [Errors](#errors)
* [Express.js](#expressjs)
* [Firebase](#firebase)
* [Formulas](#formulas)
* [Git](#git)
* [GraphQL](#graphql)
* [HTML](#html)
* [HTML5 APIs](#html5-apis)
* [JavaScript](#javascript)
  - [ES6+](#es6)
  - [DOM](#dom)
  - [PWA](#pwa)
  - [RegExp](#regexp)
  - [OOP](#oop)
  - [FP](#fp)
  - [Exotics](#exotics)
  - [JS Lab](#js-lab)
* [Nest.js](#nestjs)
* [Node](#node)
* [PHP](#php)
* [Python](#python)
* [React](#react)
  - [react-router](#react-router)
* [Redux](#redux)
* [REST API](#rest-api)
* [RxJS](#rxjs)
* [SQL](#sql)
* [SVG](#svg)
  - [SVG + JavaScript](#svg--javascript)
* [TDD](#tdd)
* [Tools](#tools)
* [TypeScript](#typescript)
  - [Types From Types](#types-from-types)
* [UI](#ui)
* [Vue](#vue)
* [Webpack](#webpack)
* [WordPress](#wordpress)

# Algorithms and Data Structures

* [Abstract Syntax Tree](algorithms-and-data-structures/ast.md)
* [Decoding JWT Token](algorithms-and-data-structures/decode-jwt-token.md)
* [Abstract Data Types](algorithms-and-data-structures/abstract-data-types.md)
* [Algorithms](algorithms-and-data-structures/algorithms.md)
* [Bubble Sort](algorithms-and-data-structures/bubble-sort.md)
* [Fibonacci Generator](algorithms-and-data-structures/fibonacci-generator.md)
* [Priority Queue on Max Heap](algorithms-and-data-structures/priority-queue-on-max-heap.md)

# Angular

* [Resolving path, e.g., `@interface/Readable`](angular/resolve-path.md)
* [RxJS Imports](angular/rxjs-imports.md)
* [Interfaces](angular/interfaces.md)
* [Lifecycle Hooks](angular/hooks.md)
* [`@ContentChildren` vs `@ViewChildren` and Detecting Changes](angular/content-and-view-children.md)
* [Custom Service](angular/custom-service.md)
* [Service Provider](angular/service-provider.md)
* [Local Service Providers](angular/local-service-providers.md)
* [Angular Modules](angular/modules.md)
* [Animations](angular/animations.md)
* [Animation Details](angular/animation-details.md)

## Directives and Components

* [Multiple `<ng-content>`](angular/multiple-ng-content.md)
* [The `*ngIf` Directive](angular/ngif-directive.md)
* [Component Event with `@Output`](angular/component-event.md)
* [Structural Directive with Context](angular/struct-directive-context.md)
* [Structural Directive Using `for..of` Expression](angular/structural-directive-using-forof.md)
* [Assignment vs. `as` in Structural Directive](angular/assignment-as-in-structural-directive.md)
* [Structural Directive: One \*Attribute instead of [Two]](angular/two-attrs-into-one.md)
* [`[ngTemplateOutlet]` vs. `*ngTemplateOutlet`](angular/ng-template-outlet.md)
* [`Renderer2`](angular/renderer2.md)
* [`ngIf` Implementation](angular/ngif-implementation.md)
* [`ngFor` Implementation](angular/ngfor-implementation.md)
* [Diff Monitoring: Array](angular/array-monitoring-tools.md)
* [Diff Monitoring: Object](angular/object-monitoring-tools.md)
* [Diff Monitoring: Map](angular/map-monitoring-tools.md)

## Forms

* [Conditional Validators](angular/forms/conditional-validators.md)
* [Custom Form Control](angular/forms/custom-form-control.md)

## NgRx

* [Counter Example with NgRx](angular/ngrx/counter-example.md)

## Pipes

* [Custom Pipe](angular/pipe.md)
* [More Complex Pipe](angular/custom-filter.md)
* [Impure Pipe](angular/impure-pipe.md)
* [`async` Pipe](angular/async-pipe.md)
* [Pipe Using Another Pipe](angular/pipe-using-pipe.md)

## Angular Routing

* [Adding a Router](angular/routing/root-router.md)
* [Redirect to Dynamic Path](angular/routing/redirect-to-dynamic-path.md)
* [Params of Route](angular/routing/route-params.md)
* [Parent Router Params](angular/routing/parent-router-params.md)
* [Optional Params vs. Query Params](angular/routing/optional-query-params.md)
* [Add Params to Current URL](angular/routing/add-params-to-current-url.md)
* [`Router` Properties and Methods](angular/routing/router-properties-and-methods.md)
* [Route Data](angular/routing/route-data.md)
* [Route Children](angular/routing/route-children.md)
* [Routing Guards](angular/routing/guards.md)
* [Resolvers](angular/routing/resolvers.md)
* [Named Outlets](angular/routing/named-outlets.md)
* [Highlight Active Route](angular/routing/highlight-active-route.md)
* [Lazy Loading a Module](angular/routing/lazy-loading-module.md)
* [Router Events](angular/routing/router-events.md)

## HTTP

* [`HttpRequest`](angular/http/http-request.md)
* [`HttpContext`](angular/http/http-context.md)
* [Interceptors](angular/http/interceptors.md)
* [Download File Returned from API with `file-saver`](angular/http/download-file-from-api-with-file-saver.md)

# Bash Apps

* [Count Particular Files Excluding a Particular Directory](bash-apps/count-particular-files-excluding-a-dir.md)
* [Searching Files: `find`](bash-apps/searching-files-find.md)
* [Functions](bash-apps/functions.md)
* [Flow Control](bash-apps/flow-control.md)
* [Examining Stuff: `test`](bash-apps/examining-stuff-test.md)
* [Text Processing: `cut`](bash-apps/text-processing-cut.md)
* [Text Processing: `tr`](bash-apps/text-processing-tr.md)
* [Text Processing: `wc`](bash-apps/text-processing-wc.md)
* [Brace Expansion](bash-apps/brace-expansion.md)
* [Formatting Output](bash-apps/formatting-output.md)
* [`PS1` Variable](bash-apps/ps1-variable.md)
* [Progress Bar](bash-apps/progress-bar.md)
* [Date: `date`](bash-apps/date.md)
* [[du] Disk Usage](bash-apps/du.md)
* [`cd /d` on Win10 / cmd](bash-apps/cdd-win10.md)
* [Pipe to `while`](bash-apps/pipe-to-while.md)
* [[ln] Symbolic and hard links](bash-apps/symbolic-and-hard-links.md)

# CSS

* [CSS Selectors](css/selectors.md)
* [Prevent Line-Break in a Table](css/prevent-line-break-in-table.md)
* [Ellipsis at the end of too long text](css/long-text-ellipsis.md)
* [Media Queries](css/media-queries.md)
* [`nth-child()`](css/nth-child.md)
* [`flex-grow`, `flex-shrink` and `flex-basis`](css/flex-grow-shrink.md)
* [Grid Coords](css/grid-coords.md)
* [Grid Named Lines and Areas](css/grid-lines-and-areas.md)
* [Paintlet](css/paintlet.md)

## Scss

* [`@each...in`](css/scss/each-in.md)
* [`@for` Loop](css/scss/for-loop.md)
* [`@while` Loop](css/scss/while-loop.md)
* [If Conditions](css/scss/if-conditions.md)
* [`switch` Function](css/scss/switch-function.md)
* [`@function` and `...`](css/scss/function-three-dots.md)
* [Recursive Functions](css/scss/recursive-functions.md)
* [RWD Mixins](css/scss/rwd-mixins.md)
* [SassScript Mixins](css/scss/sassscript-mixins.md)

# Design Patterns

* [List of Design Patterns](design-patterns/list.md)
* [Visitor](design-patterns/visitor.md)
* [Builder vs. Abstract Factory](design-patterns/builder-vs-abstract-factory.md)
* [Singleton](design-patterns/singleton.md)

# Docker

* [`Dockerfile` File](docker/dockerfile.md)
* [Formatting a list of images/containers](docker/formatting-images-containers-list.md)
* [Filtering a list of images/containers](docker/filtering-images-containers-list.md)
* [Deleting multiple images and containers](docker/deleting-images-containers.md)

# Errors

* [JavaScript heap out of memory](errors/js-heap-out-of-memory.md)
* [System limit for number of file watchers reached](errors/system-limit-of-file-watchers.md)
* [zsh: corrupt history file](errors/zsh-corrupt-history-file.md)

# Express.js

* [The `request` Object](expressjs/request-object.md)
* [The `response` Object](expressjs/response-object.md)
* [Settings](expressjs/settings.md)
* [Custom Middleware](expressjs/custom-middleware.md)
* [Modular Structure](expressjs/modular-structure.md)
* [Streaming](expressjs/streaming.md)
* [Streaming Video](expressjs/streaming-video.md)
* [Manual Streaming of Text](expressjs/manual-streaming-text.md)

# Firebase

* [Get Data from Firestore](firebase/get-data-from-firestore.md)
* [Firebase Realtime Database: Observing a Value](firebase/realtime-database-observing-value.md)
* [Firebase Realtime Database: Observing a Collection](firebase/realtime-database-observing-collection.md)
* [Upload File to Bucket](firebase/upload-file-to-bucket.md)

# Formulas

* [Distance Between 2 Coords](formulas/distance-between-two-coords.md)
* [Distribute Items Equally on a Circle](ui/distribute-items-equally-on-circle.md)

# Git

* [Generate and Add SSH Key](git/generate-and-add-ssh-key.md)
* [Add SSH identity](git/add-ssh-identity.md)
* [Assume Unchanged](git/assume-unchanged.md)
* [Empty commit](git/empty-commit.md)
* [Update last commit](git/update-last-commit.md)
* [Renaming Branch](git/rename-branch.md)
* [Comparing Files from 2 Different Branches](git/diff-different-branches.md)
* [Find the commit a bug has been introduced in](git/find-commit-introducing-bug.md)

# GraphQL

* [Query](graphql/query.md)
* [Query Arguments](graphql/query-arguments.md)
* [Aliases](graphql/aliases.md)
* [Multiple Resources Request](graphql/multiple-resources-request.md)
* [Fragments](graphql/fragments.md)

# HTML

* [Placeholder for `<input type="date" />`](html/placeholder-for-input-type-date.md)
* [Values of the `autocomplete` Attribute](html/autocomplete-values.md)
* [Suggest New Password on Password Control](html/suggest-new-password.md)

# HTML5 APIs

* [Detect Tab Change](html5-apis/detect-tab-change.md)
* [Download Textarea Content with `URL.createObjectURL()`](html5-apis/download-textarea-with-createobjecturl.md)
* [Generating Dynamic Files with `FileReader`](html5-apis/generate-dynamic-file.md)
* [Web Worker](html5-apis/web-worker.md)
* [Custom Video Controls](html5-apis/custom-video-controls.md)
* [`URL`](html5-apis/url.md)
* [`URLSearchParams`](html5-apis/url-search-params.md)
* [Display Browser Modal to Save Credentials](html5-apis/display-browser-modal-to-save-pass.md)

# JavaScript

* [`mouseenter`, `mouseover`, `mousemove`, `mouseleave` and `mouseout`](javascript/mouse-events.md)
* [Disable Shortcuts or Context Menu](javascript/disable-shortcuts-or-contextmenu.md)
* [`reduce()` Uses](javascript/reduce-uses.md)
* [Deep Clone of Object](javascript/deep-clone.md)
* [Enumerating Properties](javascript/enumerating-properties.md)
* [`this` reference](javascript/this-reference.md)
* [`BigInt`](javascript/bigint.md)

## ES6+

* [Iterators](javascript/es6/iterators.md)
* [`Symbol.asyncIterator` and `Symbol.iterator`](javascript/es6/asynciterator-iterator.md)
* [Generator Member Shorthand](javascript/es6/generator-member-shorthand.md)
* [Object Descriptors](javascript/es6/object-descriptors.md)
* [`preventExtensions()`, `seal()` and `freeze()`](javascript/es6/freeze-seal-preventextensions.md)
* [[Weak]Map vs. [Weak]Set](javascript/es6/maps-vs-sets.md)
* [export and import](javascript/es6/export-and-import.md)
* [Typed Arrays](javascript/es6/typed-arrays.md)
* [Proxy Traps](javascript/es6/proxy-traps.md)
* [`Symbol.match`](javascript/es6/symbol-match.md)
* [`Symbol.search`](javascript/es6/symbol-search.md)
* [`Symbol.replace`](javascript/es6/symbol-replace.md)
* [`Symbol.split`](javascript/es6/symbol-split.md)

## DOM

* [DOM Traversing Methods](javascript/dom/traverse-methods.md)
* [`insertAdjacent*()`](javascript/dom/insert-adjacent.md)

## PWA

* [Battery Events](javascript/pwa/battery-events.md)

## RegExp

* [RegExp: named captured groups](javascript/es6/re-named-groups.md)
* [`match()` vs. `exec()` and RegExp with/without the `g` Flag](javascript/match-vs-exec-g.md)
* [RegExp _Sticky_ Flag](javascript/re-sticky-flag.md)
* [`$` in the `replace()` Function](javascript/regexp-dollar-in-replace.md)
* [RegExp Related Symbols](javascript/regexp-related-symbols.md)

## OOP

* [Abstract and Final Classes](javascript/oop/abstract-final-class.md)
* [Inheritance](javascript/oop/inheritance.md)

## FP

* [`compose`](javascript/fp/compose.md)
* [Recursive Accumulator](javascript/fp/recursive-accumulator.md)

## Exotics

* [Dynamic Object Destructuring Assignment](javascript/exotics/dynamic-object-destructuring-assignment.md)
* [`(...[,param2]) => ...`](javascript/exotics/func-params-rest-second-param.md)
* [Two-Way Maps](javascript/exotics/two-way-maps.md)
* [8 Variants of the `for` Loop](javascript/exotics/eight-for-variants.md)
* [Swap Variables](javascript/exotics/swap-variables.md)

## JS Lab

* [`this` in Static Methods](javascript/js-lab/this-in-static-methods.md)

# Nest.js

* [Decorators](nestjs/decorators.md)

# Node

* [Implementation of a Readable Stream](node/readable-stream-implementation.md)
* [Set Environment Variable When Running App](node/set-env-when-running.md)
* [`btoa()` and `atob()` in Node](node/btoa-and-atob.md)
* [NPM Script Working with Files](node/npm-script-working-with-files.md)
* [`dgram` Socket](node/dgram-socket.md)

# PHP

* [Closure](php/closure.md)
* [Generator](php/generator.md)
* [Namespaces](php/namespaces.md)
* [Late Static Bindings](php/late-static-bindings.md)
* [`const` vs `define`](php/const-vs-define.md)

# Python

* [ES-Like Expressions](python/es-like-expressions.md)
* [Array Sequentially Assignment](python/array-sequentially-assignment.md)
* [Comprehensions](python/comprehensions.md)

# React

* [Lifecycle Methods](react/lifecycle-methods.md)
* [Axios + RxJS](react/axios-rxjs.md)
* [`React.forwardRef()`](react/forward-ref.md)
* [Hooks: `useState()`](react/hooks-usestate.md)
* [Hooks: `useEffect()`](react/hooks-useeffect.md)
* [Hooks: `useContext()`](react/hooks-usecontext.md)
* [Hooks: `useMemo()` and `useCallback()`](react/hooks-usememo-and-usecallback.md)
* [Hooks: `useRef()`](react/hooks-useref.md)
* [Hooks FAQ](react/hooks-faq.md)

## react-router

* [Link Passing Additional Data](react/react-router/link-passing-additional-data.md)

# Redux

* [Pure Redux](redux/pure-redux.md)
* [Passing State: `Provider`, `ReactReduxContext` and `connect()`](redux/passing-state.md)
* [Component Being Container for Itself](redux/component-being-container-for-itself.md)
* [`useDispatch()` and `useSelector()`](redux/useselector-usedispatch.md)
* [Custom Middleware](redux/custom-middleware.md)
* [Multiple Stores](redux/multiple-stores.md)
* [Extra Argument of Thunk](redux/thunk-extra-argument.md)

# REST API

* [HTTP Codes](rest-api/http-codes.md)
* [Request Headers](rest-api/request-headers.md)
* [Response Headers](rest-api/response-headers.md)

# RxJS

* [Custom Observable](rxjs/custom-observable.md)
* [`Subject`](rxjs/subject.md)
* [Built-in Observables](rxjs/builtin-observables.md)
* [Join of Observables](rxjs/join-of-observables.md)
* [Join Operators](rxjs/join-operators.md)
* [Filtering Operators](rxjs/filtering-operators.md)
* [Transformation Operators](rxjs/transformation-operators.md)
* [Error Handling Operators](rxjs/error-handling-operators.md)
* [Conditional and Boolean Operators](rxjs/conditional-and-boolean-operators.md)
* [Mathematical and Aggregation Operators](rxjs/math-stat.md)
* [Utility Operators](rxjs/utility-operators.md)
* [Multicasting Operators](rxjs/multicasting-operators.md)

# SQL

* [`SELECT`](sql/select.md)
* [`INSERT`/`UPDATE`/`DELETE`](sql/insert-update-delete.md)
* [`UNION`](sql/union.md)
* [Types of Join](sql/types-of-join.md)
* [`CREATE TABLE`](sql/create-table.md)
* [Stored Function](sql/stored-function.md)
* [Stored Procedure](sql/stored-procedure.md)
* [Cursors in Stored Procedure](sql/cursors.md)
* [Triggers](sql/triggers.md)
* [Create table with a struct of another - `CREATE TABLE...LIKE`](sql/create-table-like-another.md)
* [Create table with a query - `CREATE TABLE...SELECT`](sql/create-table-with-query.md)

# SVG

* [SVG Markup](svg/markup.md)
* [Styling SVG](svg/styling.md)
* [Lines and Polygons](svg/lines-and-polygons.md)
* [Basic Shapes](svg/basic-shapes.md)
* [Paths](svg/paths.md)
* [Texts](svg/texts.md)
* [Grouping Elements](svg/groups.md)
* [Transformations](svg/transformations.md)
* [Reusing Elements](svg/reusing-elements.md)
* [Patterns and Imaged Backgrounds](svg/patterns.md)
* [Gradients](svg/gradients.md)

## SVG + JavaScript

* [Dynamic Polyline](svg/js/dynamic-polyline.md)

# TDD

* [Testing Gulp Plugin](tdd/testing-gulp-plugin.md)

# Tools

* [vim commands](tools/vim-commands.md)
* [Sublime shortcuts](tools/sublime-shortcuts.md)

# TypeScript

* [Property Auto-Asignment within Constructor](typescript/auto-assignment.md)
* [Iteration Types](typescript/iteration-types.md)
* [Generics](typescript/generics.md)
* [Advanced Generics](typescript/advanced-generics.md)
* [`Lowercase<T>`, `Uppercase<T>`, `Capitalize<T>` and `Uncapitalize<T>`](typescript/lowercase-uppercase-etc.md)
* [`Extract` and `Exclude` with Template Literals](typescript/extract-exclude-template-literal.md)
* [Utility Types](typescript/utility-types.md)
* [Advanced Types](typescript/advanced-types.md)
* [Decorators](typescript/decorators.md)
* [The `infer` Keyword](typescript/infer.md)
* [Type Being Props Selector](typescript/type-being-props-selector.md)
* [Building Object Type from Array](typescript/build-object-type-from-array.md)
* [Bivariance Hack](typescript/bivariance-hack.md)

## Types From Types

* [Numeral System](typescript/types-from-types/numeral-system.md)
* [`If<C, T, F>`, `Equal<Str, S>`, `Like<Str, P>` and String Matchers](typescript/types-from-types/if-equal-like-string-matchers.md)
* [`StrLength<Str>` and `ArrLength<Arr>`](typescript/types-from-types/strlen-arrlen.md)
* [`Replace<Str, S, E>`](typescript/types-from-types/replace.md)
* [`Repeat<Str, N>`](typescript/types-from-types/repeat.md)
* [`ReverseStr<Str>` and `ReverseArr<Arr>`](typescript/types-from-types/reversestr-reversearr.md)
* [`Join<Arr>` and `Split<Str>`](typescript/types-from-types/join-split.md)
* [`TrimLeft<Str>`, `TrimRight<Str>` and `Trim<Str>`](typescript/types-from-types/trim-left-right.md)
* [`CamelCase<Str>` and `KebabCase<Str>`](typescript/types-from-types/camelcase-kebabcase.md)
* [`Getterize<T>` and `Degetterize<T>`](typescript/types-from-types/getterize-and-degetterize.md)

# UI

* [Distribute Items Equally on a Circle](ui/distribute-items-equally-on-circle.md)

# Vue

* [Features Preview with Counter Example](vue/counter-example.md)
* [Template Syntax](vue/template-syntax.md)
* [Classes and Styles](vue/classes-and-styles.md)
* [Events](vue/events.md)
* [The `v-if` Directive](vue/v-if.md)
* [The `v-for` Directive](vue/v-for.md)
* [Form Inputs and `v-model`](vue/form-inputs-and-v-model.md)

# Webpack

* [Resolve Extensions (Other Than `.js`)](webpack/resolve-extensions.md)
* [Resolve Shorthand Module](webpack/resolve-shorthand-module.md)
* [Multiple Outputs](webpack/multiple-outputs.md)

# WordPress

* [Attaching Assets](wordpress/attaching-assets.md)
* [WordPress Hooks](wordpress/hooks.md)
* [WordPress Filters](wordpress/filters.md)
* [Adding a favicon](wordpress/adding-favicon.md)
* [Adding thumbnail metabox to posts](wordpress/thumbnail-support.md)
* [AJAX Requests](wordpress/ajax-requests.md)
* [Generating a custom menu](wordpress/generating-custom-menu.md)
