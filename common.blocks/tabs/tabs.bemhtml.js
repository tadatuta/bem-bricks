block('tabs')(
    js()(node => {
        const tabs = node.ctx.tabs || [];

        return { urls: tabs.map(item => item.url) };
    }),

    content()(node => {
        const tabs = node.ctx.tabs;

        let activeTabIdx = tabs.findIndex(tab => tab.active);

        activeTabIdx === -1 && (activeTabIdx = 0);

        return [
            {
                elem: 'tabs-group',
                content: {
                    block: 'radio-group',
                    val: activeTabIdx,
                    mods: node.mods,
                    options: tabs.map((item, index) => ({
                        val: index,
                        text: item.text,
                        disabled: item.disabled,
                        icon: item.icon
                    }))
                }
            },
            applyNext()
        ];
    })
);
