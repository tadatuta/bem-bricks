modules.define('modal__close', ['i-bem-dom'], function(provide, bemDom) {

    const ModalClose = bemDom.declElem('modal', 'close', {}, {
        lazyInit: true,

        onInit() {

            this._domEvents().on('click', function() {
                this._block().delMod('visible');
            });
        }
    });

    provide(ModalClose);

});
