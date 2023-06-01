export default {
    title: 'Users',
    edit: 'Edit Server Users',
    stringSeparationHint: 'Value should be a list of steam ID with a unique value per row',
    admin: {
        title: 'Admin List',
        size: '({size} admin defined) | ({size} admins defined)',
        empty: 'No Admin have been defined on the server !',
        diffModal: {
            title: 'Admin list changed !',
            text: 'There are {size} not applied changes in the admin list, you must restart the server to apply them !'
        }
    },
    ban: {
        title: 'Ban List',
        size: '({size} user banned) | ({size} users banned)',
        empty: 'No user have been banned !',
        diffModal: {
            title: 'Ban list changed !',
            text: 'There are {size} not applied changes in the ban list, you must restart the server to apply them !'
        }
    }
}
