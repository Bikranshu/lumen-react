// Import constants
import {ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE} from '../constants/actionType';

/**
 * These are the actions dispatched whenever the API is used
 */

export function addFlashMessage(type, text) {
    return {
        type: ADD_FLASH_MESSAGE,
        message: {
            type,
            text
        }
    }
}

export function removeFlashMessage() {
    return {
        type: REMOVE_FLASH_MESSAGE
    }
}