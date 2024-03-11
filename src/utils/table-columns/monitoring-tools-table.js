export const MONITORING_TOOLS_TABLE_COLUMNS = [
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
    name: "tool_used",
    label: "Tools Used",
    align: "center",
    field: ( row ) => row.tool_used,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: "gender",
    label: "Gender",
    align: "center",
    field: ( row ) => row.gender,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: "action",
    label: "Action",
    align: "left",
    sortable: false,
  },
];

