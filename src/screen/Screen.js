
import AddContact from '../components/AddContact'
import MainContact from '../components/MainContact'
import EditContact from '../components/EditContact'

export const SCREENS = {
    Main: {
        key: "mainAppScreen", //key de goi chuyen man hinh
        component: MainContact, //ten file da khai bao
        hiveNavBar: true
    },
    addContact: {
        key: "addContactScreen",
        component: AddContact,
        hiveNavBar: true
    },
    editContact: {
        key: "editContactScreen",
        component: EditContact,
        hiveNavBar: true
    },
}
export default SCREENS;