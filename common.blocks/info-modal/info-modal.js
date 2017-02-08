modules.define('info-modal', ['i-bem-dom', 'modal', 'next-tick'], function(provide, bemDom, Modal, nextTick) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                if (this.__self.getModal()) return;

                this.__self._modal = this.findChildBlock(Modal);
            }
        }
    }
}, {
    _show: function(content) {
        return this.getModal()
            .setContent(content)
            .setMod('visible');

        return this;
    },
    show: function(content) {
        if (this.getModal()) return this._show(content);

        var _this = this;
        nextTick(function() {
            _this._show(content);
        });

        return this;
    },

    hide: function() {
        this.getModal().delMod('visible');

        return this;
    },
    toggle: function() {
        this.getModal().toggleMod('visible');

        return this;
    },
    getModal: function() {
        return this._modal;
    }
}));

});
