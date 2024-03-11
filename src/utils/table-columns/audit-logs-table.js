export const AUDIT_LOGS_TABLE_COLUMNS = [
  {
    name: "date_conducted",
    label: "Date",
    align: "left",
    field: (row) => row.date_conducted,
    format: (val) => `${val || ""}`,
  },
  {
    name: "time",
    label: "Time",
    align: "center",
    field: (row) => row.time,
    format: (val) => `${val || ""}`,
  },
  {
    name: "employee_name",
    label: "Employee Name",
    align: "left",
    field: (row) => row.employee_name,
    format: (val) => `${val || ""}`,
  },
  {
    name: "module",
    label: "Module",
    align: "center",
    field: (row) => row.module,
    format: (val) => `${val || ""}`,
  },
  {
    name: "activity",
    label: "Activity",
    align: "center",
    field: (row) => row.activity,
    format: (val) => `${val || ""}`,
  },
  {
    name: "action",
    label: "ACTION",
    align: "left",
    sortable: false,
},
];
