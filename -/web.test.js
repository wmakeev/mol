var $;
(function ($) {
    $.$mol_test({
        'must be false': function () {
            $.$mol_assert_not(0);
        },
        'must be true': function () {
            $.$mol_assert_ok(1);
        },
        'must be equal': function () {
            $.$mol_assert_equal(2, 2);
        },
        'must be unique': function () {
            $.$mol_assert_unique([3], [3]);
        },
    });
})($ || ($ = {}));
//assert.test.js.map
;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var $;
(function ($) {
    $.$mol_test({
        'init with overload': function () {
            var X = (function (_super) {
                __extends(X, _super);
                function X() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                X.prototype.foo = function () {
                    return 1;
                };
                return X;
            }($.$mol_object));
            var x = X.make({
                foo: function () { return 2; },
            });
            $.$mol_assert_equal(x.foo(), 2);
        },
        'object path generation': function () {
            var x = new $.$mol_object;
            $.$mol_assert_equal("" + x, '');
            x.object_field('foo()');
            $.$mol_assert_equal("" + x, '.foo()');
            x.object_field('bar()');
            $.$mol_assert_equal("" + x, '.foo()');
        },
    });
})($ || ($ = {}));
//object.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'caching': function () {
            var random = new $.$mol_atom('random', function () { return Math.random(); });
            $.$mol_assert_equal(random.get(), random.get());
        },
        'lazyness': function () {
            var value = 0;
            var prop = new $.$mol_atom('prop', function () { return value = 1; });
            $.$mol_defer.run();
            $.$mol_assert_equal(value, 0);
        },
        'instant actualization': function () {
            var source = new $.$mol_atom('source', function (next) { return next || 1; });
            var middle = new $.$mol_atom('middle', function () { return source.get() + 1; });
            var target = new $.$mol_atom('target', function () { return middle.get() + 1; });
            $.$mol_assert_equal(target.get(), 3);
            source.set(2);
            $.$mol_assert_equal(target.get(), 4);
        },
        'do not actualize when masters not changed': function () {
            var target_updates = 0;
            var source = new $.$mol_atom('source', function (next) { return next || 1; });
            var middle = new $.$mol_atom('middle', function () { return Math.abs(source.get()); });
            var target = new $.$mol_atom('target', function () {
                ++target_updates;
                return middle.get();
            });
            target.get();
            $.$mol_assert_equal(target_updates, 1);
            source.set(-1);
            target.get();
            $.$mol_assert_equal(target_updates, 1);
        },
        'obsolete atoms actualized in initial order': function () {
            var actualizations = '';
            var source = new $.$mol_atom('source', function (next) { return next || 1; });
            var middle = new $.$mol_atom('middle', function () {
                actualizations += 'M';
                return source.get();
            });
            var target = new $.$mol_atom('target', function () {
                actualizations += 'T';
                source.get();
                return middle.get();
            });
            target.get();
            $.$mol_assert_equal(actualizations, 'TM');
            source.set(2);
            $.$mol_defer.run();
            $.$mol_assert_equal(actualizations, 'TMTM');
        },
        'automatic deferred restart': function () {
            var targetValue;
            var source = new $.$mol_atom('source', function (next) { return next || 1; });
            var middle = new $.$mol_atom('middle', function () { return source.get() + 1; });
            var target = new $.$mol_atom('target', function () { return targetValue = middle.get() + 1; });
            target.get();
            $.$mol_assert_equal(targetValue, 3);
            source.set(2);
            $.$mol_assert_equal(targetValue, 3);
            $.$mol_defer.run();
            $.$mol_assert_equal(targetValue, 4);
        },
        'Right reactive change of source': function () {
            var targetValue;
            var test_counter = new $.$mol_atom('test_counter', function (next) {
                new $.$mol_defer(function () {
                    test_counter.push(next || 1);
                });
                throw new $.$mol_atom_wait;
            });
            var slave = new $.$mol_atom('slave', function (next) { return test_counter.get(); });
            slave.actualize();
            var res = [];
            var error = new Error('test error');
            var test_task = new $.$mol_atom('test_task')
                .then(function () { return test_counter.get() + 1; })
                .then(function (next) { return test_counter.set(next); })
                .then(function (next) {
                test_counter.set(next + 1);
                throw error;
            })
                .catch(function (error) { return [error]; })
                .then(function (next) { return res = next; });
            $.$mol_defer.run();
            $.$mol_assert_equal(test_counter.get(), 3);
            $.$mol_assert_equal(res[0], error);
            slave.destroyed(true);
        },
        'error handling': function () {
            var source = new $.$mol_atom('source', function (next) {
                var error = new Error('Test error');
                error['$mol_atom_catched'] = true;
                throw error;
            });
            var middle = new $.$mol_atom('middle', function () { return source.get() + 1; });
            var target = new $.$mol_atom('target', function () { return middle.get() + 1; });
            $.$mol_assert_fail(function () { return target.get().valueOf(); });
        },
    });
})($ || ($ = {}));
//atom.test.js.map
;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    $.$mol_test({
        'cached property with simple key': function () {
            var X = (function (_super) {
                __extends(X, _super);
                function X() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                X.prototype.foo = function (id, next) {
                    if (next == null)
                        return new Number(123);
                    return new Number(next);
                };
                __decorate([
                    $.$mol_mem_key()
                ], X.prototype, "foo", null);
                return X;
            }($.$mol_object));
            var x = new X;
            $.$mol_assert_equal(x.foo(0).valueOf(), 123);
            $.$mol_assert_equal(x.foo(0), x.foo(0));
            $.$mol_assert_unique(x.foo(0), x.foo(1));
            x.foo(0, 321);
            $.$mol_assert_equal(x.foo(0).valueOf(), 321);
            x.foo(0, null);
            $.$mol_assert_equal(x.foo(0).valueOf(), 123);
        },
        'cached property with complex key': function () {
            var X = (function (_super) {
                __extends(X, _super);
                function X() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                X.prototype.foo = function (ids) {
                    return Math.random();
                };
                __decorate([
                    $.$mol_mem_key()
                ], X.prototype, "foo", null);
                return X;
            }($.$mol_object));
            var x = new X;
            $.$mol_assert_equal(x.foo([0, 1]), x.foo([0, 1]));
            $.$mol_assert_unique(x.foo([0, 1]), x.foo([0, 2]));
        },
        'auto sync of properties': function () {
            var X = (function (_super) {
                __extends(X, _super);
                function X() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                X.prototype.foo = function (next) {
                    return next || 1;
                };
                X.prototype.bar = function () {
                    return this.foo() + 1;
                };
                X.prototype.xxx = function () {
                    return this.bar() + 1;
                };
                __decorate([
                    $.$mol_mem()
                ], X.prototype, "foo", null);
                __decorate([
                    $.$mol_mem()
                ], X.prototype, "bar", null);
                __decorate([
                    $.$mol_mem()
                ], X.prototype, "xxx", null);
                return X;
            }($.$mol_object));
            var x = new X;
            $.$mol_assert_equal(x.bar(), 2);
            $.$mol_assert_equal(x.xxx(), 3);
            x.foo(5);
            $.$mol_assert_equal(x.xxx(), 7);
        },
        'must be deferred destroyed when no longer referenced': function () {
            var foo;
            var B = (function (_super) {
                __extends(B, _super);
                function B() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                B.prototype.showing = function (next) {
                    if (next === void 0)
                        return true;
                    return next;
                };
                B.prototype.foo = function () {
                    return foo = new $.$mol_object;
                };
                B.prototype.bar = function () {
                    return this.showing() ? this.foo() : null;
                };
                __decorate([
                    $.$mol_mem()
                ], B.prototype, "showing", null);
                __decorate([
                    $.$mol_mem()
                ], B.prototype, "foo", null);
                __decorate([
                    $.$mol_mem()
                ], B.prototype, "bar", null);
                return B;
            }($.$mol_object));
            var b = new B;
            var bar = b.bar();
            $.$mol_assert_ok(bar);
            b.showing(false);
            b.bar();
            $.$mol_defer.run();
            $.$mol_assert_ok(foo.destroyed());
            $.$mol_assert_ok(bar.destroyed());
            $.$mol_assert_not(b.bar());
            b.showing(true);
            $.$mol_defer.run();
            $.$mol_assert_unique(b.bar(), bar);
        },
        'wait for data': function () {
            var Test = (function (_super) {
                __extends(Test, _super);
                function Test() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Test.prototype.source = function (next, force) {
                    var _this = this;
                    new $.$mol_defer(function () {
                        _this.source('Jin', $.$mol_atom_force);
                    });
                    throw new $.$mol_atom_wait('Wait for data!');
                };
                Test.prototype.middle = function () {
                    return this.source();
                };
                Test.prototype.target = function () {
                    return this.middle();
                };
                __decorate([
                    $.$mol_mem()
                ], Test.prototype, "source", null);
                __decorate([
                    $.$mol_mem()
                ], Test.prototype, "middle", null);
                __decorate([
                    $.$mol_mem()
                ], Test.prototype, "target", null);
                return Test;
            }($.$mol_object));
            var t = new Test;
            $.$mol_assert_fail(function () { return t.target().valueOf(); }, $.$mol_atom_wait);
            $.$mol_defer.run();
            $.$mol_assert_equal(t.target(), 'Jin');
        },
    });
})($ || ($ = {}));
//mem.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'Make html:span': function () {
            var dom = $.$mol_dom_make('$mol_dom_make_test');
            $.$mol_assert_equal(dom.outerHTML, '<span id="$mol_dom_make_test"></span>');
        },
        'Make svg:svg': function () {
            var dom = $.$mol_dom_make('$mol_dom_make_test', 'svg', 'http://www.w3.org/2000/svg');
            $.$mol_assert_equal(dom.outerHTML, '<svg id="$mol_dom_make_test"></svg>');
        },
        'Make to exists element': function () {
            var body = $.$mol_dom_context.document.body;
            var dom = $.$mol_dom_make('$mol_dom_make_test');
            try {
                body.appendChild(dom);
                $.$mol_assert_equal(dom, $.$mol_dom_make('$mol_dom_make_test'));
            }
            finally {
                body.removeChild(dom);
            }
        },
    });
})($ || ($ = {}));
//make.test.js.map
;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $;
(function ($) {
    $.$mol_test({
        'id auto generation': function () {
            var $mol_view_test_item = (function (_super) {
                __extends($mol_view_test_item, _super);
                function $mol_view_test_item() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return $mol_view_test_item;
            }($.$mol_view));
            var $mol_view_test_block = (function (_super) {
                __extends($mol_view_test_block, _super);
                function $mol_view_test_block() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                $mol_view_test_block.prototype.element = function (id) {
                    return new $mol_view_test_item();
                };
                __decorate([
                    $.$mol_mem_key()
                ], $mol_view_test_block.prototype, "element", null);
                return $mol_view_test_block;
            }($.$mol_view));
            var x = new $mol_view_test_block();
            $.$mol_assert_equal(x.dom_node().id, '');
            $.$mol_assert_equal(x.element(0).dom_node().id, '.element(0)');
        },
        'caching ref to dom node': function () {
            var $mol_view_test = (function (_super) {
                __extends($mol_view_test, _super);
                function $mol_view_test() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return $mol_view_test;
            }($.$mol_view));
            var x = new $mol_view_test();
            $.$mol_assert_equal(x.dom_node(), x.dom_node());
        },
        'content render': function () {
            var $mol_view_test = (function (_super) {
                __extends($mol_view_test, _super);
                function $mol_view_test() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                $mol_view_test.prototype.sub = function () {
                    return ['lol', 5];
                };
                return $mol_view_test;
            }($.$mol_view));
            var x = new $mol_view_test();
            var node = x.dom_tree();
            $.$mol_assert_equal(node.innerHTML, 'lol5');
        },
        'bem attributes generation': function () {
            var $mol_view_test_item = (function (_super) {
                __extends($mol_view_test_item, _super);
                function $mol_view_test_item() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return $mol_view_test_item;
            }($.$mol_view));
            var $mol_view_test_block = (function (_super) {
                __extends($mol_view_test_block, _super);
                function $mol_view_test_block() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                $mol_view_test_block.prototype.Element = function (id) {
                    return new $mol_view_test_item();
                };
                __decorate([
                    $.$mol_mem_key()
                ], $mol_view_test_block.prototype, "Element", null);
                return $mol_view_test_block;
            }($.$mol_view));
            var x = new $mol_view_test_block();
            $.$mol_assert_equal(x.dom_node().getAttribute('mol_view_test_block'), '');
            $.$mol_assert_equal(x.dom_node().getAttribute('mol_view'), '');
            $.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_block_element'), '');
            $.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_item'), '');
            $.$mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view'), '');
        },
        'render custom attributes': function () {
            var $mol_view_test = (function (_super) {
                __extends($mol_view_test, _super);
                function $mol_view_test() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                $mol_view_test.prototype.attr = function () {
                    return {
                        'href': '#haha',
                        'required': true,
                        'hidden': false,
                    };
                };
                return $mol_view_test;
            }($.$mol_view));
            var x = new $mol_view_test();
            var node = x.dom_tree();
            $.$mol_assert_equal(node.getAttribute('href'), '#haha');
            $.$mol_assert_equal(node.getAttribute('required'), 'true');
            $.$mol_assert_equal(node.getAttribute('hidden'), null);
        },
        'render custom fields': function () {
            var $mol_view_test = (function (_super) {
                __extends($mol_view_test, _super);
                function $mol_view_test() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                $mol_view_test.prototype.field = function () {
                    return {
                        'hidden': true
                    };
                };
                return $mol_view_test;
            }($.$mol_view));
            var x = new $mol_view_test();
            var node = x.dom_tree();
            $.$mol_assert_equal(node.hidden, true);
        },
        'attach event handlers': function () {
            var clicked = false;
            var $mol_view_test = (function (_super) {
                __extends($mol_view_test, _super);
                function $mol_view_test() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                $mol_view_test.prototype.event = function () {
                    var _this = this;
                    return {
                        'click': function (next) { return _this.event_click(next); }
                    };
                };
                $mol_view_test.prototype.event_click = function (next) {
                    clicked = true;
                };
                return $mol_view_test;
            }($.$mol_view));
            var x = new $mol_view_test();
            var node = x.dom_node();
            node.click();
            $.$mol_assert_ok(clicked);
        },
    });
})($ || ($ = {}));
//view.test.js.map
;
var $;
(function ($) {
    var $mol;
    (function ($mol) {
        $.$mol_test({
            'handle clicks by default': function () {
                var clicked = false;
                var clicker = $mol.$mol_button.make({
                    event_click: function (event) { clicked = true; },
                });
                var element = clicker.dom_tree();
                var event = $.$mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $.$mol_assert_ok(clicked);
            },
            'no handle clicks if disabled': function () {
                var clicked = false;
                var clicker = $mol.$mol_button.make({
                    event_click: function (event) { clicked = true; },
                    enabled: function () { return false; },
                });
                var element = clicker.dom_tree();
                var event = $.$mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $.$mol_assert_not(clicked);
            },
        });
    })($mol = $.$mol || ($.$mol = {}));
})($ || ($ = {}));
//button.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'null by default': function () {
            var key = String(Math.random());
            $.$mol_assert_equal($.$mol_state_session.value(key), null);
        },
        'storing': function () {
            var key = String(Math.random());
            $.$mol_state_session.value(key, '$mol_state_session_test');
            $.$mol_assert_equal($.$mol_state_session.value(key), '$mol_state_session_test');
            $.$mol_state_session.value(key, null);
            $.$mol_assert_equal($.$mol_state_session.value(key), null);
        },
    });
})($ || ($ = {}));
//session.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'local get set delete': function () {
            var key = '$mol_state_local_test:' + Math.random();
            $.$mol_assert_equal($.$mol_state_local.value(key), null);
            $.$mol_state_local.value(key, 123);
            $.$mol_assert_equal($.$mol_state_local.value(key), 123);
            $.$mol_state_local.value(key, null);
            $.$mol_assert_equal($.$mol_state_local.value(key), null);
        },
    });
})($ || ($ = {}));
//local.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'const returns stored value': function () {
            var foo = { bar: $.$mol_const(Math.random()) };
            $.$mol_assert_equal(foo.bar(), foo.bar());
            $.$mol_assert_equal(foo.bar(), foo.bar['()']);
        },
    });
})($ || ($ = {}));
//const.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'search numbers': function () {
            var syntax = new $.$mol_syntax({
                'number': /[+-]?\d+(?:\.\d+)?/
            });
            var serial = function (tokens) {
                return tokens.map(function (token) { return token.name + "=" + token.found; }).join('|');
            };
            $.$mol_assert_equal(serial(syntax.tokenize('')), '');
            $.$mol_assert_equal(serial(syntax.tokenize('foo')), '=foo');
            $.$mol_assert_equal(serial(syntax.tokenize('123')), 'number=123');
            $.$mol_assert_equal(serial(syntax.tokenize('foo123bar')), '=foo|number=123|=bar');
            $.$mol_assert_equal(serial(syntax.tokenize('foo123bar456')), '=foo|number=123|=bar|number=456');
            $.$mol_assert_equal(serial(syntax.tokenize('foo123\n\nbar456\n')), '=foo|number=123|=\n\nbar|number=456|=\n');
        }
    });
})($ || ($ = {}));
//syntax.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'only text': function () {
            var tokens = $.$mol_syntax_md_flow.tokenize('Hello,\nWorld..\r\n\r\n\nof Love!');
            $.$mol_assert_equal(tokens.map(function (token) { return token.found; }).join('|'), 'Hello,\nWorld..\r\n\r\n\n|of Love!');
        },
        'headers and text': function () {
            var tokens = $.$mol_syntax_md_flow.tokenize('# Header1\n\nHello!\n\n## Header2');
            $.$mol_assert_equal(tokens.length, 3);
            $.$mol_assert_equal(tokens[0].name, 'header');
            $.$mol_assert_equal(tokens[0].chunks.join('|'), '#| |Header1|\n\n');
            $.$mol_assert_equal(tokens[1].name, 'block');
            $.$mol_assert_equal(tokens[1].chunks.join('|'), 'Hello!|\n\n');
            $.$mol_assert_equal(tokens[2].name, 'header');
            $.$mol_assert_equal(tokens[2].found, '## Header2');
            $.$mol_assert_equal(tokens[2].chunks.join('|'), '##| |Header2|');
        },
        'codes and text': function () {
            var tokens = $.$mol_syntax_md_flow.tokenize('```\nstart()\n```\n\n```js\nrestart()\n```\n\nHello!\n\n```\nstop()\n```');
            $.$mol_assert_equal(tokens.length, 4);
            $.$mol_assert_equal(tokens[0].name, 'code');
            $.$mol_assert_equal(tokens[0].chunks.join('|'), '```||start()\n|```|\n\n');
            $.$mol_assert_equal(tokens[1].name, 'code');
            $.$mol_assert_equal(tokens[1].chunks.join('|'), '```|js|restart()\n|```|\n\n');
            $.$mol_assert_equal(tokens[2].name, 'block');
            $.$mol_assert_equal(tokens[2].chunks.join('|'), 'Hello!|\n\n');
            $.$mol_assert_equal(tokens[3].name, 'code');
            $.$mol_assert_equal(tokens[3].chunks.join('|'), '```||stop()\n|```|');
        },
        'table': function () {
            var tokens = $.$mol_syntax_md_flow.tokenize('| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n\n| Cell11 | Cell12\n| Cell21 | Cell22\n');
            $.$mol_assert_equal(tokens.length, 2);
            $.$mol_assert_equal(tokens[0].name, 'table');
            $.$mol_assert_equal(tokens[0].chunks[0], '| header1 | header2\n|----|----\n| Cell11 | Cell12\n| Cell21 | Cell22\n');
            $.$mol_assert_equal(tokens[1].name, 'table');
            $.$mol_assert_equal(tokens[1].chunks[0], '| Cell11 | Cell12\n| Cell21 | Cell22\n');
        }
    });
})($ || ($ = {}));
//md.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'Make empty div': function () {
            $.$mol_assert_equal(($.$mol_dom_jsx("div", null)).outerHTML, '<div></div>');
        },
        'Make input with id and value': function () {
            var dom = $.$mol_dom_jsx("input", { id: "$mol_dom_make_test", value: 123 });
            $.$mol_assert_equal(dom.outerHTML, '<input id="$mol_dom_make_test">');
            $.$mol_assert_equal(dom.value, '123');
        },
        'Make content': function () {
            var id = '$mol_dom_make_test';
            var dom = $.$mol_dom_jsx("div", null,
                "hello",
                $.$mol_dom_jsx("strong", null, "world"),
                "!");
            $.$mol_assert_equal(dom.outerHTML, '<div>' +
                'hello' +
                '<strong>world</strong>' +
                '!' +
                '</div>');
        },
        'Make to exists element': function () {
            var dom1 = $.$mol_dom_jsx("div", { id: "$mol_dom_make_test" });
            $.$mol_dom_context.document.body.appendChild(dom1);
            var dom2 = $.$mol_dom_jsx("div", { id: "$mol_dom_make_test" }, "hello");
            $.$mol_dom_context.document.body.removeChild(dom1);
            $.$mol_assert_equal(dom1, dom2);
            $.$mol_assert_equal(dom1.outerHTML, '<div id="$mol_dom_make_test">hello</div>');
        },
    });
})($ || ($ = {}));
//jsx.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'materialization': function () {
            var list = $.$mol_range_in({
                item: function (id) { return id * 2; },
                get length() { return 5; },
            });
            var list2 = list.valueOf();
            $.$mol_assert_equal(list2[2], 4);
            $.$mol_assert_equal(list2[5], void 0);
        },
        'lazy slicing': function () {
            var list = $.$mol_range_in({
                item: function (id) { return id * 2; },
                get length() { return Number.POSITIVE_INFINITY; },
            });
            list = list.slice(2, 5);
            $.$mol_assert_equal(list.join(), '4,6,8');
        },
        'lazy concatenation': function () {
            var list1 = $.$mol_range_in({
                item: function (id) { return id * 2; },
                get length() { return 3; },
            });
            var list2 = $.$mol_range_in({
                item: function (id) { return id * 3; },
                get length() { return 3; },
            });
            var list3 = $.$mol_range_in({
                item: function (id) { return id * 4; },
                get length() { return 3; },
            });
            $.$mol_assert_equal(list1.concat(list2, list3).join(), '0,2,4,0,3,6,0,4,8');
        },
        'every': function () {
            var list = $.$mol_range_in({
                item: function (id) { return id * 2; },
                get length() { return 3; }
            });
            $.$mol_assert_equal(list.every(function (v) { return v >= 0; }), true);
            $.$mol_assert_equal(list.every(function (v) { return v > 0; }), false);
        },
        'some': function () {
            var list = $.$mol_range_in({
                item: function (id) { return id * 2; },
                get length() { return 3; }
            });
            $.$mol_assert_equal(list.some(function (v) { return v > 100; }), false);
            $.$mol_assert_equal(list.some(function (v) { return v === 0; }), true);
        },
    });
})($ || ($ = {}));
//range.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'convertion to primitives': function () {
            var unit = new $.$mol_unit_money_usd(5);
            $.$mol_assert_equal(unit.valueOf(), 5);
            $.$mol_assert_equal(unit * 2, 10);
            $.$mol_assert_equal(unit + '', '5');
            $.$mol_assert_equal("" + unit, '5');
            $.$mol_assert_equal(unit.toString(), '$5');
            $.$mol_assert_equal(String(unit), '$5');
        },
        'arithmetic': function () {
            var usd1 = new $.$mol_unit_money_usd(5);
            var usd2 = new $.$mol_unit_money_usd(10);
            var rur = new $.$mol_unit_money_rur(5);
            $.$mol_assert_equal($.$mol_unit.summ(usd1, usd2).toString(), '$15');
            $.$mol_assert_equal(usd1.mult(2).toString(), '$10');
        },
    });
})($ || ($ = {}));
//unit.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'parse and serial': function () {
            $.$mol_assert_equal(new $.$mol_time_duration('P42.1Y').toString(), 'P42.1YT');
            $.$mol_assert_equal(new $.$mol_time_duration('P42.1M').toString(), 'P42.1MT');
            $.$mol_assert_equal(new $.$mol_time_duration('P42.1D').toString(), 'P42.1DT');
            $.$mol_assert_equal(new $.$mol_time_duration('PT42.1h').toString(), 'PT42.1H');
            $.$mol_assert_equal(new $.$mol_time_duration('PT42.1m').toString(), 'PT42.1M');
            $.$mol_assert_equal(new $.$mol_time_duration('PT42.1s').toString(), 'PT42.1S');
            $.$mol_assert_equal(new $.$mol_time_duration('P1Y2M3DT4h5m6.7s').toString(), 'P1Y2M3DT4H5M6.7S');
        },
        'format typed': function () {
            $.$mol_assert_equal(new $.$mol_time_duration('P1Y2M3DT4h5m6s').toString('P#Y#M#DT#h#m#s'), 'P1Y2M3DT4H5M6S');
        },
    });
})($ || ($ = {}));
//duration.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'parse and serial': function () {
            $.$mol_assert_equal(new $.$mol_time_moment('2014').toString(), '2014');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01').toString(), '2014-01');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').toString(), '2014-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03').toString(), '2014-01-02T03');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04').toString(), '2014-01-02T03:04');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05').toString(), '2014-01-02T03:04:05');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05.006').toString(), '2014-01-02T03:04:05.006');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05.006Z').toString(), '2014-01-02T03:04:05.006+00:00');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05.006+07:00').toString(), '2014-01-02T03:04:05.006+07:00');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04:05+07:08').toString(), '2014-01-02T03:04:05+07:08');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T03:04+07:08').toString(), '2014-01-02T03:04+07:08');
            $.$mol_assert_equal(new $.$mol_time_moment('T03:04+07:08').toString(), 'T03:04+07:08');
            $.$mol_assert_equal(new $.$mol_time_moment('T03:04:05').toString(), 'T03:04:05');
            $.$mol_assert_equal(new $.$mol_time_moment('T03:04').toString(), 'T03:04');
            $.$mol_assert_equal(new $.$mol_time_moment('T03').toString(), 'T03');
        },
        'format simple': function () {
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T01:02:03.000').toString('AD YY-M-D h:m:s'), '21 14-1-2 1:2:3');
        },
        'format padded': function () {
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T01:02:03.000').toString('YYYY-MM-DD hh:mm:ss'), '2014-01-02 01:02:03');
        },
        'format time zone': function () {
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02T01:02:03+05:00').toString('Z'), '+05:00');
        },
        'format names': function () {
            $.$mol_assert_ok(new $.$mol_time_moment('2014-01-02T01:02:03.000').toString('Month Mon | WeekDay WD'));
        },
        'shifting': function () {
            $.$mol_assert_equal(new $.$mol_time_moment('T15:54:58.243+03:00').shift({}).toString(), 'T15:54:58.243+03:00');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').shift('P1Y').toString(), '2015-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').shift('P12M').toString(), '2015-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').shift('P365D').toString(), '2015-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01-02').shift('PT8760h').toString(), '2015-01-02');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01').shift('PT8760h').toString(), '2015-01');
            $.$mol_assert_equal(new $.$mol_time_moment('2014-01').shift('PT-8760h').toString(), '2013-01');
        },
        'normalization': function () {
            $.$mol_assert_equal(new $.$mol_time_moment('2015-07-35').normal.toString(), '2015-08-04');
        },
    });
})($ || ($ = {}));
//moment.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'sorting must cut cycles at low priority edges': function () {
            var graph = new $.$mol_graph();
            graph.link('A', 'B', { priority: 0 });
            graph.link('B', 'C', { priority: -2 });
            graph.link('C', 'D', { priority: 0 });
            graph.link('D', 'A', { priority: -1 });
            $.$mol_assert_equal(graph.sorted(function (edge) { return edge.priority; }).join(''), 'BADC');
        }
    });
})($ || ($ = {}));
//graph.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'all cases of using maybe': function () {
            $.$mol_assert_equal($.$mol_maybe(0)[0], 0);
            $.$mol_assert_equal($.$mol_maybe(false)[0], false);
            $.$mol_assert_equal($.$mol_maybe(null)[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(void 0)[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(void 0).map(function (v) { return v.toString(); })[0], void 0);
            $.$mol_assert_equal($.$mol_maybe(0).map(function (v) { return v.toString(); })[0], '0');
        },
    });
})($ || ($ = {}));
//maybe.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'triplets': function () {
            $.$mol_assert_equal(new $.$mol_time_interval('2015-01-01/P1M').end.toString(), '2015-02-01');
            $.$mol_assert_equal(new $.$mol_time_interval('P1M/2015-02-01').start.toString(), '2015-01-01');
            $.$mol_assert_equal(new $.$mol_time_interval('2015-01-01/2015-02-01').duration.toString(), 'PT2678400S');
        }
    });
})($ || ($ = {}));
//interval.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'scalars': function () {
            $.$mol_assert_equal($.$mol_typeof(void 0), 'Undefined');
            $.$mol_assert_equal($.$mol_typeof(null), 'Null');
            $.$mol_assert_equal($.$mol_typeof(0), 'Number');
            $.$mol_assert_equal($.$mol_typeof(''), 'String');
            $.$mol_assert_equal($.$mol_typeof(false), 'Boolean');
        },
        'common objects': function () {
            $.$mol_assert_equal($.$mol_typeof({}), 'Object');
            $.$mol_assert_equal($.$mol_typeof([]), 'Array');
            $.$mol_assert_equal($.$mol_typeof(arguments), 'Arguments');
        },
        'special classes': function () {
            $.$mol_assert_equal($.$mol_typeof(new Date), 'Date');
            $.$mol_assert_equal($.$mol_typeof(new RegExp('')), 'RegExp');
        },
    });
})($ || ($ = {}));
//typeof.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'tree parsing': function () {
            $.$mol_assert_equal($.$mol_tree.fromString("foo\nbar\n").sub.length, 2);
            $.$mol_assert_equal($.$mol_tree.fromString("foo\nbar\n").sub[1].type, "bar");
            $.$mol_assert_equal($.$mol_tree.fromString("foo\n\n\n").sub.length, 1);
            $.$mol_assert_equal($.$mol_tree.fromString("=foo\n\\bar\n").sub.length, 2);
            $.$mol_assert_equal($.$mol_tree.fromString("=foo\n\\bar\n").sub[1].data, "bar");
            $.$mol_assert_equal($.$mol_tree.fromString("foo bar \\pol").sub[0].sub[0].sub[0].data, "pol");
            $.$mol_assert_equal($.$mol_tree.fromString("foo bar\n\t\\pol\n\t\\men").sub[0].sub[0].sub[1].data, "men");
            $.$mol_assert_equal($.$mol_tree.fromString('foo bar \\text\n').toString(), 'foo bar \\text\n');
        },
    });
})($ || ($ = {}));
//tree.test.js.map
;
var $;
(function ($) {
    $.$mol_test({
        'return result without errors': function () {
            $.$mol_assert_equal($.$mol_try(function () { return false; }), false);
        },
    });
})($ || ($ = {}));
//try.test.js.map
//# sourceMappingURL=web.test.js.map