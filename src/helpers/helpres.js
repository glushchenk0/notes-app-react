export default class Helper {
    static parseDate = (str) => {
        const reg = /(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g;
        const m = str.match(reg);
        return m ? m.join(', ') : null;
    };
}
