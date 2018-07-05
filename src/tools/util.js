/**
 * Created by pdd on 2018/7/6.
 */


export function isPoneAvailable(str) {
    const myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(str)) {
        return false;
    } else {
        return true;
    }
}

export function isNull( str ){
    if ( str === "" ) return true;
    const regu = "^[ ]+$";
    const re = new RegExp(regu);
    return re.test(str);
}