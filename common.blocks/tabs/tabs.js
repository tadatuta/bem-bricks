modules.define('tabs', [
    'i-bem-dom', 'radio-group'
], function(provide, bemDom, RadioGroup) {
    const Tabs = bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited() {
                    const params = this.params;

                    this._radioGroup = this.findChildElem('tabs-group').findChildBlock(RadioGroup);
                    this._prevQuery = '';
                    this._panes = this.findChildElems('pane');
                    this._urls = params.urls;
                }
            }
        },

        getActive() {
            return this._elem({ elem: 'pane', modName: 'active', modVal: true });
        },

        setActive(index) {
            return this._changeTab(index);
        },

        _onRadioGroupChange() {
            const currentIndex = this._radioGroup.getVal();

            return this._changeTab(currentIndex);
        },

        _changeTab(index) {
            const currentQuery = this._prevQuery;
            const activePane = this._elem({ elem: 'pane', modName: 'active', modVal: true });

            this._prevQuery = location.search;

            activePane && activePane.delMod('active');
            this._panes.get(index).setMod('active');

            this._emit('change');
        }
    }, {
        lazyInit: true,

        onInit() {
            this._events(RadioGroup).on('change', this.prototype._onRadioGroupChange);
        }
    });

    provide(Tabs);
});
