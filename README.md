# Petite Vue Lib

![](https://img.shields.io/badge/Foundry-v11-informational)
[![Donate via Ko-Fi](https://img.shields.io/badge/donate-ko--fi-red.svg?logo=ko-fi)](https://ko-fi.com/darkmoor) [![Latest Version](https://img.shields.io/github/v/tag/patrickporto/petitevue-lib?label=version)](https://github.com/patrickporto/petitevue-lib/releases) [![Download Count](https://img.shields.io/github/downloads/patrickporto/petitevue-lib/latest/petitevue-lib.zip)](https://github.com/patrickporto/petitevue-lib/releases)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fpetitevue-lib&colorB=4aa94a)

## About

Petite Vue Lib is a library for [Foundry VTT](https://foundryvtt.com/) that allows you to create web components for your [system](https://foundryvtt.com/article/systems/) or [module](https://foundryvtt.com/article/modules/) using [Petite Vue](https://github.com/vuejs/petite-vue).

## Usage

### Check if the module is installed

```javascript
if (!game.modules.get("petitevue-lib")?.active) {
    ui.notifications.error("PetiteVue is not installed or not active. Please install and activate it to use this module.")
    return
}
```

### Get the API

```javascript
const petiteVue = await game.modules.get('petitevue-lib').api

petiteVue.createApp({
    // exposed to all expressions
    count: 0,
    // getters
    get plusOne() {
        return this.count + 1
    },
    // methods
    increment() {
        this.count++
    }
}).mount(".sheet.custom")

<!-- v-scope value can be omitted -->
<div class="sheet custom" v-scope>
  <p>{{ count }}</p>
  <p>{{ plusOne }}</p>
  <button @click="increment">increment</button>
</div>
```

### Add the library to your module

Add the following to your `module.json` file:

```json
"relationships": {
    "requires": [
        {
            "id": "petitevue-lib",
            "type": "module",
            "manifest": "https://github.com/patrickporto/petitevue-lib/releases/download/11.0.0/module.json",
            "compatibility": {
                "verified": "11.0.0"
            }
        }
    ]
},
```
