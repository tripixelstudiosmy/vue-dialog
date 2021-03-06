module.exports = function(t) {
    var e = {};

    function i(o) { if (e[o]) return e[o].exports; var n = e[o] = { i: o, l: !1, exports: {} }; return t[o].call(n.exports, n, n.exports, i), n.l = !0, n.exports }
    return i.m = t, i.c = e, i.d = function(t, e, o) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o }) }, i.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (i.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var n in t) i.d(o, n, function(e) { return t[e] }.bind(null, n));
        return o
    }, i.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return i.d(e, "a", e), e }, i.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, i.p = "/", i(i.s = 4)
}([function(t, e, i) {}, function(t, e, i) {
    "use strict";
    i.r(e);

    function o(t, e, i, o, n, s, a, l) {
        var r, c = "function" == typeof t ? t.options : t;
        if (e && (c.render = e, c.staticRenderFns = i, c._compiled = !0), o && (c.functional = !0), s && (c._scopeId = "data-v-" + s), a ? (r = function(t) {
                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), n && n.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a)
            }, c._ssrRegister = r) : n && (r = l ? function() { n.call(this, this.$root.$options.shadowRoot) } : n), r)
            if (c.functional) {
                c._injectStyles = r;
                var u = c.render;
                c.render = function(t, e) { return r.call(e), u(t, e) }
            } else {
                var d = c.beforeCreate;
                c.beforeCreate = d ? [].concat(d, r) : [r]
            }
        return { exports: t, options: c }
    }
    var n = o({ props: { value: [Number, String] }, computed: { model: { get: function() { return this.value }, set: function(t) { this.$emit("input", t) } } }, methods: { isValid: function() { return Boolean(String(this.model).trim()) } }, mounted: function() { this.$el.focus() } }, function() {
            var t = this,
                e = t.$createElement;
            return (t._self._c || e)("input", { directives: [{ name: "model", rawName: "v-model", value: t.model, expression: "model" }], domProps: { value: t.model }, on: { input: function(e) { e.target.composing || (t.model = e.target.value) } } })
        }, [], !1, null, null, null).exports,
        s = {
            props: { item: { type: Object, required: !0 }, show: { type: Boolean, default: !1 } },
            data: function() { return { valid: this.isValid() } },
            methods: {
                isValid: function() { return !this.item.prompt || this.$refs.prompt && this.$refs.prompt.isValid() },
                onPrompt: function() {
                    var t = this;
                    setTimeout(function() { t.valid = t.isValid() })
                },
                onClose: function(t) { this.$emit("close", this.item, t) },
                onOk: function() { this.valid && this.onClose(!0) }
            }
        },
        a = (i(3), o({
            components: {
                VDialog: o(s, function() {
                    var t, e = this,
                        i = e.$createElement,
                        o = e._self._c || i;
                    return o("div", { staticClass: "v-dialog", class: (t = { active: e.show }, t["v-dialog-" + e.item.size] = e.item.size, t) }, [o("div", { staticClass: "v-dialog-overlay", on: { click: function(t) { e.onClose() } } }), o("div", { staticClass: "v-dialog-container" }, [o("div", { staticClass: "v-dialog-header" }, [o("a", { staticClass: "v-dialog-btn v-dialog-btn-close", attrs: { "aria-label": "Fechar" }, on: { click: function(t) { e.onClose() } } }), e.item.title ? o("div", { staticClass: "v-dialog-title" }, [e._v(e._s(e.item.title))]) : e._e()]), o("div", { staticClass: "v-dialog-body" }, [o("div", { staticClass: "content" }, [o("div", [e._v(e._s(e.item.message))]), e.item.prompt ? o("form", { on: { submit: function(t) { return t.preventDefault(), e.onOk(t) } } }, [o(e.item.prompt.component, { ref: "prompt", tag: "div", staticClass: "v-dialog-input", on: { input: e.onPrompt }, model: { value: e.item.prompt.value, callback: function(t) { e.$set(e.item.prompt, "value", t) }, expression: "item.prompt.value" } }), e.valid ? e._e() : o("div", { staticClass: "prompt-error-message" }, [e._v(e._s(e.item.prompt.invalidMessage))])]) : e._e()])]), o("div", { staticClass: "v-dialog-footer" }, [e.item.cancelLabel ? o("a", { staticClass: "v-dialog-btn v-dialog-btn-danger", on: { click: function(t) { e.onClose(!1) } } }, [e._v(e._s(e.item.cancelLabel))]) : e._e(), o("a", { staticClass: "v-dialog-btn success", class: { disabled: !e.valid }, attrs: { disabled: !e.valid }, on: { click: e.onOk } }, [e._v(e._s(e.item.okLabel))])])])])
                }, [], !1, null, null, null).exports
            },
            data: function() { return { items: [] } },
            methods: {
                open: function(t, e) {
                    var i = this,
                        o = e.title,
                        n = e.cancelLabel,
                        s = e.prompt,
                        a = e.size,
                        l = e.okLabel,
                        r = void 0 === l ? "OK" : l;
                    return this.$parent || (this.$mount(), document.body.appendChild(this.$el)), new Promise(function(e) {
                        var l = { key: "".concat(Date.now(), "-").concat(Math.random()), show: !0, message: t, title: o, cancelLabel: n, okLabel: r, prompt: s, size: a, resolve: e };
                        i.items.push(l)
                    })
                },
                alert: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = e.title,
                        o = e.okLabel,
                        n = void 0 === o ? "OK" : o,
                        s = e.size;
                    return this.open(t, { title: i, okLabel: n, size: s })
                },
                confirm: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = e.title,
                        o = e.cancelLabel,
                        n = void 0 === o ? "Cancel" : o,
                        s = e.okLabel,
                        a = void 0 === s ? "OK" : s,
                        l = e.size;
                    return this.open(t, { title: i, cancelLabel: n, okLabel: a, size: l })
                },
                prompt: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = e.title,
                        o = e.okLabel,
                        s = void 0 === o ? "OK" : o,
                        a = e.size,
                        l = e.prompt;
                    return l = Object.assign({ value: "", invalidMessage: "invalid!", component: n }, l), this.open(t, { title: i, okLabel: s, prompt: l, size: a })
                },
                remove: function(t) {
                    var e = this.items.indexOf(t);
                    e >= 0 && this.items.splice(e, 1)
                },
                onClose: function(t, e) {
                    var i = { ok: e };
                    t.prompt && (i.value = t.prompt.value), t.resolve(i), t.show = !1, this.remove(t)
                },
                keyUp: function(t) { "Escape" === t.key && this.items.length > 0 && this.onClose(this.items[this.items.length - 1]) }
            },
            created: function() { window.addEventListener("keyup", this.keyUp) }
        }, function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", { staticClass: "v-dialogs" }, t._l(t.items, function(e) { return i("v-dialog", { key: e.key, attrs: { show: e.show, item: e }, on: { close: t.onClose } }) }))
        }, [], !1, null, null, null).exports);
    a.install = function(t, e) { t.prototype.$dialogs = new(t.extend(a))({ propsData: e }), t.dialogs = t.prototype.$dialogs };
    e.default = a
}, , function(t, e, i) {
    "use strict";
    var o = i(0);
    i.n(o).a
}, function(t, e, i) { t.exports = i(1) }]);