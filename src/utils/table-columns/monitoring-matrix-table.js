export const MONITORING_MATRIX_TABLE_COLUMNS = [
  {
    name: "region",
    label: "Region",
    align: "center",
    field: ( row ) => row.region,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: "date_visited",
    label: "Date Visited",
    align: "left",
    field: ( row ) => row.date_visited,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: "created_by",
    label: "Created By",
    align: "center",
    field: ( row ) => row.created_by,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: "action",
    label: "Action",
    align: "left",
    sortable: false,
  },
];

