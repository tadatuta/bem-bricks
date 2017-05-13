modules.define('form', [
    'i-bem-dom', 'events', 'button', 'select', 'checkbox', 'input'
], function(provide, bemDom, events, Button, Select, Checkbox, Input) {
    const Form = bemDom.declBlock(this.name, {

        serializeToJson: function() {
            return this.__self.serializeToJson(this.domElem);
        },

        clearSelect: function() {
            this.findChildBlocks(Select).forEach(select => {
                select.setVal(select.getMod('mode') === 'check' ? [] : undefined);
            });
        },

        clearCheckbox: function() {
            this.findChildBlocks(Checkbox).delMod('checked');
        },

        clearInput: function() {
            this.findChildBlocks(Input).forEach(input => input.setVal(''));
        },

        _onSubmit: function(e) {
            const event = new events.Event('submit');

            this._emit(event);
            event.isDefaultPrevented() && e.preventDefault();
        },

        _onClear: function() {
            const event = new events.Event('clear');

            this._emit(event);

            if (event.isDefaultPrevented()) return;

            this.clearSelect();
            this.clearCheckbox();
            this.clearInput();
        }
    }, {
        lazyInit: true,
        onInit: function() {
            this.__base.apply(this, arguments);

            this._domEvents().on('submit', this.prototype._onSubmit);
            this._events(Button).on('form-clear', this.prototype._onClear);
        },

        serializeToJson: function(formElem) {
            const queryArr = formElem.serializeArray();

            return queryArr.reduce((res, pair) => {
                const { name, value } = pair;

                if (!res.hasOwnProperty(name)) {
                    res[name] = value;
                } else if (Array.isArray(res[name])) {
                    res[name].push(value);
                } else {
                    res[name] = [res[name], value];
                }

                return res;
            }, {});
        }
    });

    provide(Form);
});
