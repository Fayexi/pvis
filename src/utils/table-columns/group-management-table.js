export const GROUP_MANAGEMENT_TABLE_COLUMNS = [
    {
        name: 'names',
        label: 'Name',
        align: 'left',
        sortable: false,
        field: ( row ) => row.names,
        format: ( val ) => `${ val || "" }`,
    },
    {
        name: 'short_name',
        label: 'Short Name',
        align: 'left',
        sortable: false,
        field: ( row ) => row.short_name,
        format: ( val ) => `${ val || "" }`,
    },
    {
        name: 'description',
        label: 'Description',
        align: 'left',
        sortable: false,
        field: ( row ) => row.description,
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
