block('form')(
    tag()('form'),

    js()(true),

    attrs()(function() {
        const ctx = this.ctx;

        return {
            method: ctx.method,
            action: ctx.action
        };
    })
);
