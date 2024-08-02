import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    /* 메인 페이지 */
    {
        path: '/',
        name: 'Main',
        component : () => import('@/layouts/PageLayout'),
        children : [
            {
                path:'',
                name:'mainPage',
                component: () => import('@/view/Main'),
            }
        ]
    },
    {
        path: '/main',
        name: 'Login',
        component : () => import('@/layouts/PageLayout'),
        children : [
            {
                path:'',
                name:'loginPage',
                component: () => import('@/view/Main'),
            }
        ]
    },
    /* 제도소개 */
    {
        path: '/intro',
        name: 'introPage',
        component : () => import('@/layouts/PageLayout'),
        children : [
            {
                path:'definition',
                name:'definition',
                component: () => import('@/view/intro/definition'),
            },
            {
                path:'feature',
                name:'feature',
                component: () => import('@/view/intro/feature'),
            },
            {
                path:'service',
                name:'service',
                component: () => import('@/view/intro/service'),
            },
            {
                path:'changepoint',
                name:'changepoint',
                component: () => import('@/view/intro/changepoint'),
            },
            {
                path:'changepointspeed',
                name:'changepointspeed',
                component: () => import('@/view/intro/changepointspeed'),
            },
            {
                path:'changepointsla',
                name:'changepointsla',
                component: () => import('@/view/intro/changepointsla'),
            },
            {
                path:'changepointdis',
                name:'changepointdis',
                component: () => import('@/view/intro/changepointdis'),
            },            
            {
                path:'counsel',
                name:'counsel',
                component: () => import('@/view/intro/counsel'),
            },
            {
                path:'propulsion',
                name:'propulsion',
                component: () => import('@/view/intro/propulsion'),
            }
        ]
    },
    /* kt 그룹서비스 */
    {
        path: '/service',
        name: 'servicePage',
        component : () => import('@/layouts/PageLayout'),
        children : [
            {
                path:'ktservice',
                name:'ktservice',
                component: () => import('@/view/service/ktservice'),
                props : true
            },
            {
                path:'leased_basic',
                name:'leased_basic',
                component: () => import('@/view/service/leased_basic'),
            },
            {
                path:'leased_backbone',
                name:'leased_backbone',
                component: () => import('@/view/service/leased_backbone'),
            },
            {
                path:'leasedline_infra',
                name:'leasedline_infra',
                component: () => import('@/view/service/leasedline_infra'),
            },
            {
                path:'ipservice_internet',
                name:'ipservice_internet',
                component: () => import('@/view/service/ipservice_internet'),
            },
            {
                path:'ipservice_infra',
                name:'ipservice_infra',
                component: () => import('@/view/service/ipservice_infra'),
            },
            {
                path:'ipservice_soip',
                name:'ipservice_soip',
                component: () => import('@/view/service/ipservice_soip'),
            },
            {
                path:'wireless_m_internetphone',
                name:'wireless_m_internetphone',
                component: () => import('@/view/service/wireless_m_internetphone'),
            },
            {
                path:'ipservice_soip_infra',
                name:'ipservice_soip_infra',
                component: () => import('@/view/service/ipservice_soip_infra'),
            },
            {
                path:'wireless_m_internetphone_infra',
                name:'wireless_m_internetphone_infra',
                component: () => import('@/view/service/wireless_m_internetphone_infra'),
            },
            {
                path:'wireless_data',
                name:'wireless_data',
                component: () => import('@/view/service/wireless_data'),
            },
            {
                path:'iot_service',
                name:'iot_service',
                component: () => import('@/view/service/iot_service'),
            },
            {
                path:'wireless_infra',
                name:'wireless_infra',
                component: () => import('@/view/service/wireless_infra'),
            },
            {
                path:'iot_infra',
                name:'iot_infra',
                component: () => import('@/view/service/iot_infra'),
            },
            {
                path:'leased_cctv',
                name:'leased_cctv',
                component: () => import('@/view/service/leased_cctv'),
            }
        ]
    },
    /* 이용안내 */
    {
        path: '/guide',
        name: 'guidePage',
        component : () => import('@/layouts/PageLayout'),
        children : [
            {
                path:'procedure',
                name:'procedure',
                component: () => import('@/view/guide/procedure'),
            },
            {
                path:'procedure1',
                name:'procedure1',
                component: () => import('@/view/guide/procedure1'),
            },
            {
                path:'charges',
                name:'charges',
                component: () => import('@/view/guide/charges'),
            },
            {
                path:'area',
                name:'area',
                component: () => import('@/view/guide/area'),
            },
            {
                path:'counsel',
                name:'counsel',
                component: () => import('@/view/guide/counsel'),
            },
            {
                path:'kt_merit',
                name:'kt_merit',
                component: () => import('@/view/guide/kt_merit'),
            },
            {
                path:'ktsat_merit',
                name:'ktsat_merit',
                component: () => import('@/view/guide/ktsat_merit'),
            },
            {
                path:'ktsat_wi',
                name:'ktsat_wi',
                component: () => import('@/view/guide/ktsat_wi'),
            },
            {
                path:'formation',
                name:'formation',
                component: () => import('@/view/guide/formation'),
            },
            {
                path:'hindrance',
                name:'hindrance',
                component: () => import('@/view/guide/hindrance'),
            },
            {
                path:'control',
                name:'control',
                component: () => import('@/view/guide/control'),
            }
        ]
    },
    /* 고객지원 */    
    {
        path: '/support',
        name: 'supportPage',
        component : () => import('@/layouts/PageLayout'),
        children : [
            {
                path:'faq',
                name:'faq',
                component: () => import('@/view/support/faq'),
            },
            {
                path:'agreement',
                name:'agreement',
                component: () => import('@/view/support/agreement'),
            },
            {
                path:'personal',
                name:'personal',
                component: () => import('@/view/support/personal'),
            }
        ]
    },
    /* 오류 페이지 */
    {
        path : '/:pathMatch(.*)*',
        name:'notFound',
        component : () => import('@/layouts/PageLayout'),
        children : [
            {
                path:'',
                name:'errorPage',
                component: () => import('@/view/errorPages/error'),
            }
        ]
    }   
       
]

const router = new createRouter({
    history: createWebHistory(),
    routes
});

export default router
