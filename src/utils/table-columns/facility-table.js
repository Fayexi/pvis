export const FACILITY_TABLE_COLUMNS = [
  {
    name: "code",
    label: "Code",
    align: "left",
    field: ( row ) => row.code,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: "facility",
    label: "Facility",
    align: "center",
    field: ( row ) => row.facility,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: "action",
    label: "ACTION",
    align: "left",
    sortable: false,
  },
];

export const RECOMMENDATIONS_TABLE_COLUMNS = [
  {
    name: "rec_code",
    label: "Code",
    align: "left",
    field: ( row ) => row.rec_code,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: "recom",
    label: "Recommendations",
    align: "center",
    field: ( row ) => row.recom,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: "action",
    label: "ACTION",
    align: "left",
    sortable: false,
  },
];
