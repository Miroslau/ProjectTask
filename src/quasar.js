import Vue from 'vue'
import {
    Quasar,
    QDialog,
    ClosePopup
} from 'quasar'

Vue.use(Quasar, {
    components: {
        QDialog
    },
    directives: {
        ClosePopup
    }
})