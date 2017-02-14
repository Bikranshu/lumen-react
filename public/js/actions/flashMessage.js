// Import constants
import { FLASH_MESSAGE } from '../constants/actionType';

/**
 * These are the actions dispatched whenever the API is used
 */

export function flashMessage(type, text) {
    return {
        type: FLASH_MESSAGE,
        message:{
            type,
            text
        }
    }
}