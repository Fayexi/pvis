export const FINDINGS_TABLE_COLUMNS = [
  {
    name: "code",
    label: "Code",
    align: "left",
    field: ( row ) => row.code,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: "findings",
    label: "Findings",
    align: "center",
    field: ( row ) => row.findings,
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
    name: "code",
    label: "Code",
    align: "left",
    field: ( row ) => row.code,
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
