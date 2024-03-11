export const VISITATION_PLAN_TABLE_COLUMNS = [
  {
    name: 'region',
    label: 'Region',
    align: 'left',
    sortable: false,
    field: ( row ) => row.region,
    format: ( val ) => `${ val || "" }`,
  },
  // {
  //   name: 'pod_type',
  //   label: 'Type of POD',
  //   align: 'left',
  //   sortable: false,
  //   field: ( row ) => row.pod_type,
  //   format: ( val ) => `${ val || "" }`,
  // },
  // {
  //   name: 'agency',
  //   label: 'Agency',
  //   align: 'left',
  //   sortable: false,
  //   field: ( row ) => row.agency,
  //   format: ( val ) => `${ val || "" }`,
  // },
  {
    name: 'date_created',
    label: 'Target Date of visit (Week and Month)',
    align: 'center',
    sortable: false,
    field: ( row ) => row.date_created,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: 'status',
    label: 'Status',
    align: 'left',
    sortable: false,
    field: ( row ) => row.status,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: 'action',
    label: 'Action',
    align: 'center',
    sortable: false,
    field: ( row ) => row.action,
    format: ( val ) => `${ val || "" }`,
  },
];

export const VISITATION_PLAN_VIEW_TABLE_COLUMNS = [
  {
    name: 'no',
    label: 'No.',
    align: 'center',
    field: ( row ) => row.no,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: 'pod',
    label: 'Place of deprivation of liberty to be visited',
    align: 'left',
    field: ( row ) => row.pod,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: 'pod_type',
    label: 'Type of POD',
    align: 'center',
    field: ( row ) => row.pod_type,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: 'agency',
    label: 'Agency',
    align: 'center',
    field: ( row ) => row.agency,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: 'target_date',
    label: 'Target Date of visit (Week and Month)',
    align: 'center',
    field: ( row ) => row.target_date,
    format: ( val ) => `${ val || "" }`,
  },
];

export const COLLATED_VISITATION_TABLE_COLUMNS = [
  {
    name: 'prepared_by',
    label: 'Prepared By',
    align: 'left',
    sortable: false,
    field: ( row ) => row.prepared_by,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: 'region',
    label: 'Year',
    align: 'left',
    sortable: false,
    field: ( row ) => row.region,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: 'status',
    label: 'Status',
    align: 'center',
    sortable: false,
    field: ( row ) => row.status,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: 'action',
    label: 'Action',
    align: 'center',
    sortable: false,
    field: ( row ) => row.action,
    format: ( val ) => `${ val || "" }`,
  },
];

export const COLLATED_VISITATION_VIEW_TABLE_COLUMNS = [
  {
    name: 'no',
    label: 'NO',
    align: 'center',
    sortable: false,
    field: ( row ) => row.no,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: 'pod_visitation',
    label: 'PLACE OF DEPROVATION OF LIBERTY TO BE VISITED',
    align: 'center',
    sortable: false,
    field: ( row ) => row.pod_visitation,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: 'pod_type',
    label: 'TYPE',
    align: 'center',
    sortable: false,
    field: ( row ) => row.pod_type,
    format: ( val ) => `${ val || "" }`,
  },

  {
    name: 'agency',
    label: 'AGENCY',
    align: 'center',
    sortable: false,
    field: ( row ) => row.agency,
    format: ( val ) => `${ val || "" }`,
  },
];
