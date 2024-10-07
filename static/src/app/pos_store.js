/** @odoo-module */

import { patch } from "@web/core/utils/patch";
import { PosStore } from "@point_of_sale/app/store/pos_store";
import { useService } from "@web/core/utils/hooks";


patch(PosStore.prototype, {
    
    async _processData(loadedData) {
        await super._processData(loadedData);
        this.sessions_list = loadedData['custom_sessions']
    },
    
});