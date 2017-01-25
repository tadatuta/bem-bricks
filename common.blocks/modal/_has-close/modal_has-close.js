modules.define('modal', ['i-bem-dom'], function(provide, bemDom, Modal) {

    Modal.declMod({ modName: 'has-close', modVal: true }, {
        setContent(content) {
            const initialContents = this.elem('content').contents().not(this.elem('close'));

            initialContents.length ?
                bemDom.replace(initialContents, content) :
                bemDom.append(this.elem('content'), content);

            return this;
        }
    });

    provide(Modal);

});
