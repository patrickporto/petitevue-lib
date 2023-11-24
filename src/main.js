import { createApp, reactive, nextTick } from "petite-vue"
import { CANONICAL_NAME, MODULE_NAME } from "./constants.js";

const api = {
    createApp,
    reactive,
    nextTick,
}

Hooks.on('init', async () => {
    console.log(`${MODULE_NAME} | Initializing ${MODULE_NAME}`);
    game.modules.get(CANONICAL_NAME).api = api
    Hooks.callAll(`${CANONICAL_NAME}.init`, api);
});

Hooks.on('ready', async () => {
    console.log(`${MODULE_NAME} | Ready`);
    Hooks.callAll(`${CANONICAL_NAME}.ready`, api);
})
