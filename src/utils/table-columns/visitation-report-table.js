export const VISITATION_REPORT_TABLE_COLUMNS = [
  {
    name: "report_id",
    label: "Report ID",
    align: "left",
    field: (row) => row.report_id,
    format: (val) => `${val || ""}`,
  },
  {
    name: "date_conducted",
    label: "Date Conducted",
    align: "center",
    field: (row) => row.date_conducted,
    format: (val) => `${val || ""}`,
  },
  {
    name: "actual_capacity",
    label: "Actual Capacity",
    align: "left",
    field: (row) => row.actual_capacity,
    format: (val) => `${val || ""}`,
  },
  {
    name: "total_pod_personnel",
    label: "Total POD Personnel",
    align: "center",
    field: (row) => row.total_pod_personnel,
    format: (val) => `${val || ""}`,
  },
  {
    name: "status",
    label: "Status",
    align: "center",
    field: (row) => row.status,
    format: (val) => `${val || ""}`,
  },
  {
    name: "action",
    label: "ACTION",
    align: "left",
    sortable: false,
},
];
