# tabs

Simple tabs switcher

## Modifiers

| Modifier | Possible values | Usage | Description |
| ----------- | ------------------- | -------------------- | -------- |
| type | <code>'button'</code>, <code>'line'</code> | <code>BEMJSON</code> | Radiogroup switcher type. |
| theme | <code>'islands'</code> | <code>BEMJSON</code> | Style theme. |
| size | <code>'m'</code>, <code>'l'</code>  | <code>BEMJSON</code> | Radiogroup switcher size. Is used only with theme islands. |

## Elements
### tabs-group

Contains `radio-group` tabs switcher.

### pane

Switchable contant.

*active* modifier is used for current selected pane.

## Fields
### tabs

The field is responsible for tabs appearence.
Takes an array of objects with following fields:
*   `<String> text` - text on a button
*   `<Boolean> active` - flag for selected tab

## Usage

```javascript
{
    block: 'tabs',
    mods: { theme: 'islands', type: 'button', size: 'm' },
    tabs: [
        {
            text: 'tab1',
            active: true
        },
        {
            text: 'tab2'
        }
    ],
    content: [
        {
            elem: 'pane',
            elemMods: { active: true },
            content: 'my tab content'
        },
        {
            elem: 'pane',
            content: 'my second tab'
        }
    ]
}
```
