//https://leetcode.com/problems/check-if-object-instance-of-class/description/?utm_campaign=PostD25&utm_medium=Post&utm_source=Post&gio_link_id=qPkbxBwR
function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    return obj != null && typeof classFunction === 'function' && Object(obj) instanceof classFunction
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */