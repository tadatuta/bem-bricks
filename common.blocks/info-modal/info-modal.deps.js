({
    mustDeps: [
        'i-bem-dom'
    ],
    shouldDeps: [
        'next-tick',
        {
            block: 'modal',
            mods: { autoclosable: true }
        }
    ]
});
