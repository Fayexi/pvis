export const LETTER_TABLE_COLUMNS = [
  {
    name: "date_created",
    label: "Date Created",
    align: "left",
    field: ( row ) => row.date_created,
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
    name: "letter_type",
    label: "Type of Letter",
    align: "center",
    field: ( row ) => row.letter_type,
    format: ( val ) => `${ val || "" }`,
  },
  {
    name: "action",
    label: "ACTION",
    align: "left",
    sortable: false,
  },
];

