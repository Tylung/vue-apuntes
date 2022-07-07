

export default {

    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/*webpackChunkName: "daybokok-no-entry"*/ '@/modules/daybook/views/NoEntrySelected.vue'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/*webpackChunkName: "daybokok-no-entry"*/ '@/modules/daybook/views/Entry-View.vue'),
        }
    ]

}

