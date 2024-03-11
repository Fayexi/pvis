
const routes = [
  {
    path: '/',
    component: () => import( 'layouts/MainLayout.vue' ),
    children: [
      { path: '', name: 'login', component: () => import( 'pages/auth/LoginPage.vue' ) }
    ]
  },
  {
    path: '/app',
    component: () => import( 'layouts/PageLayout.vue' ),
    children: [
      {
        path: 'dashboard-main',
        name: 'dashboard-main',
        component: () => import( 'pages/application/DashboardMain.vue' ),
        meta: { middleware: "auth", userRole: [ "FOCAL", "RD", "DIRECTOR", "PMO", "ED", "STAFF", "OIC", "CHAIRPERSON", "VT_LEADER", "CI", "DC", "OIC_PC" ] },
      },
      {
        path: 'visitation-plan',
        name: 'visitation-plan',
        component: () => import( 'pages/application/VisitationPlan.vue' ),
        meta: { middleware: "auth", userRole: [ "FOCAL", "RD", "DIRECTOR", "ED", "STAFF", "OIC" ] },
      },
      {
        path: 'visitation-plan/view-visitation-plan',
        name: 'view-visitation-plan',
        component: () => import( 'pages/application/VisitationPlan/ViewForm.vue' ),
        meta: { middleware: "auth", userRole: [ "FOCAL", "RD", "DIRECTOR", "ED", "STAFF", "OIC"] },
      },
      {
        path: 'collated-pod-plan',
        name: 'collated-pod-plan',
        component: () => import( 'pages/application/ConsolidatedVisitationPlan.vue' ),
        meta: { middleware: "auth", userRole: [ "DIRECTOR", "STAFF", "PMO", "ED", "OIC", "CHAIRPERSON" ] },
      },
      {
        path: 'collated-pod-plan/view-collated-pod-plan/:status',
        name: 'view-collated-pod-plan',
        component: () => import( 'pages/application/VisitationPlan/ViewCollated.vue' ),
        meta: { middleware: "auth", userRole: [ "DIRECTOR", "STAFF", "PMO", "ED", "OIC", "CHAIRPERSON" ] },
      },
      {
        path: 'approved-pod-plan',
        name: 'approved-pod-plan',
        component: () => import( 'pages/application/ApprovedVisitation.vue' ),
        meta: { middleware: "auth", userRole: [ "DIRECTOR", "STAFF", "OIC" ] },
      },
      {
        path: 'approved-pod-plan/view-approved-pod-plan',
        name: 'view-approved-pod-plan',
        component: () => import( 'pages/application/VisitationPlan/ViewForm.vue' ),
        meta: { middleware: "auth", userRole: [ "DIRECTOR", "STAFF", "OIC" ] },
      },
      {
        path: 'mission-order',
        name: 'mission-order',
        component: () => import( 'pages/application/MissionOrder.vue' )
      },
      {
        path: 'mission-order-view',
        name: 'mission-order-view',
        component: () => import( 'pages/application/missionOrderView.vue' )
      },
      {
        path: 'travel-order-view',
        name: 'travel-order-view',
        component: () => import( 'pages/application/TravelOrderView.vue' )
      },
      {
        path: 'monitoring-tools',
        name: 'monitoring-tools',
        component: () => import( 'pages/application/MonitoringTools.vue' ),
        meta: { middleware: "auth", userRole: [ "FOCAL", "RD", "DIRECTOR", "ED", "STAFF", "OIC"] },
      },
      {
        path: 'monitoring-tools-dashboard',
        name: 'monitoring-tools-dashboard',
        component: () => import( 'pages/application/DashboardMonitoringTools.vue' ),
        meta: { middleware: "auth", userRole: [ "FOCAL", "RD", "DIRECTOR", "ED", "STAFF", "OIC"] },
      },
      {
        path: 'monitoring-tools-used',
        name: 'monitoring-tools-used',
        component: () => import( 'pages/application/MonitoringToolsUse.vue' ),
        meta: { middleware: "auth", userRole: [ "FOCAL", "RD", "DIRECTOR", "ED", "STAFF", "OIC"] },
      },
      {
        path: 'monitoring-tools-used/view-monitoring-tools-used',
        name: 'view-monitoring-tools-used',
        component: () => import( 'pages/application/MonitoringTools/ViewMonitoringTools.vue' ),
        meta: { middleware: "auth", userRole: [ "FOCAL", "RD", "DIRECTOR", "ED", "STAFF", "OIC"] },
      },
      {
        path: 'pod-visitation-report',
        name: 'pod-visitation-report',
        component: () => import( 'pages/application/VisitationReport.vue' ),
        meta: { middleware: "auth", userRole: [ "FOCAL", "VT_LEADER", "CI", "DC", "OIC_PC", "RD", "DIRECTOR", "STAFF", "OIC" ] }
      },
      {
        path: 'pod-visitation-report/create-pod-visitation-report',
        name: 'create-pod-visitation-report',
        component: () => import( 'pages/application/VisitationReport/ReportForm.vue' ),
        meta: { middleware: "auth", userRole: [ "FOCAL", "VT_LEADER", "RD", "CI", "OIC_PC", "DC", "RD", "DIRECTOR", "STAFF", "OIC", "PMO", "ED" ] }
      },
      {
        path: 'pod-visitation-report/view-pod-visitation-report',
        name: 'view-pod-visitation-report',
        component: () => import( 'pages/application/VisitationReport/ViewPodForm.vue' ),
        meta: { middleware: "auth", userRole: [ "FOCAL", "VT_LEADER", "CI", "DC", "OIC_PC", "RD", "DIRECTOR", "STAFF", "OIC", "PMO", "ED" ] },
      },
      {
        path: 'mhf-visitation-report',
        name: 'mhf-visitation-report',
        component: () => import( 'pages/application/MhfVisitationReport.vue' ),
        meta: { middleware: "auth", userRole: [ "FOCAL", "VT_LEADER", "CI", "DC", "OIC_PC", "RD", "DIRECTOR", "STAFF", "OIC", "PMO", "ED" ] },
      },
      {
        path: 'mhf-visitation-report/create-mhf-visitation-report',
        name: 'create-mhf-visitation-report',
        component: () => import( 'pages/application/VisitationReport/MhfReportForm.vue' ),
        meta: { middleware: "auth", userRole: [ "FOCAL", "VT_LEADER", "CI", "DC", "OIC_PC", "RD", "DIRECTOR", "STAFF", "OIC", "PMO", "ED" ] },
      },
      {
        path: 'mhf-visitation-report/view-mhf-visitation-report',
        name: 'view-mhf-visitation-report',
        component: () => import( 'pages/application/VisitationReport/ViewMhfForm.vue' ),
        meta: { middleware: "auth", userRole: [ "FOCAL", "VT_LEADER", "CI", "DC", "OIC_PC", "RD", "DIRECTOR", "STAFF", "OIC", "PMO", "ED" ] },
      },
      {
        path: 'letter-communication',
        name: 'letter-communication',
        component: () => import( 'pages/application/LetterOfCommunication.vue' )
      },
      {
        path: 'letter-communication/view-letter-communication/:letterType',
        name: 'view-letter-communication',
        component: () => import( 'pages/application/LetterOfCommunication/ViewLetterOfCommunicationForm.vue' )
      },
      {
        path: 'letter-communication/create-letter-communication',
        name: 'create-letter-communication',
        component: () => import( 'pages/application/LetterOfCommunication/CreateLetterOfCommunication.vue' )
      },
      {
        path: 'monitoring-matrix',
        name: 'monitoring-matrix',
        component: () => import( 'pages/application/MonitoringMatrix.vue' )
      },
      {
        path: 'monitoring-matrix/view-monitoring-matrix',
        name: 'view-monitoring-matrix',
        component: () => import( 'pages/application/MonitoringMatrix/ViewMonitoringMatrix.vue' )
      },
      {
        path: 'form-9745',
        name: 'form-9745',
        component: () => import( 'pages/application/FormNsff.vue' ),
      },
      {
        path: 'role-management',
        name: 'role-management',
        component: () => import( 'pages/application/RoleManagement.vue' )
      },
      {
        path: 'group-management',
        name: 'group-management',
        component: () => import( 'pages/application/GroupManagement.vue' )
      },
      {
        path: 'user-management',
        name: 'user-management',
        component: () => import( 'pages/application/UserManagement.vue' )
      },
      {
        path: 'findings-view',
        name: 'findings-view',
        component: () => import( 'pages/application/FindingsView.vue' )
      },
      {
        path: 'recom-view',
        name: 'recom-view',
        component: () => import( 'pages/application/RecommendationView.vue' )
      },
      {
        path: 'agency-view',
        name: 'agency-view',
        component: () => import( 'pages/application/AgencyView.vue' )
      },
      {
        path: 'facility-view',
        name: 'facility-view',
        component: () => import( 'pages/application/FacilityView.vue' )
      },
      {
        path: 'audit-logs',
        name: 'audit-logs',
        component: () => import( 'pages/application/AuditLogs.vue' )
      },
      {
        path: 'user-profile',
        name: 'user-profile',
        component: () => import( 'pages/application/UserProfile.vue' )
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/404',
    component: () => import( 'pages/ErrorNotFound.vue' )
  }
]

export default routes
