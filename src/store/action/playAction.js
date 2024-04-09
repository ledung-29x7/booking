import { ISSHOWING } from "./constants"

export const Modal = (isShowing) => {
    return {
        type : ISSHOWING,
        isShowing
    }
}