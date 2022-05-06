import { DataGrid as MUIDataGrid } from "@mui/x-data-grid";

import CircularProgressWithLabel from "./CircularProgressWithLabel";
import CustomFooter from "./CustomDataTableFooter";

import "./DataTable.scss";
import StatusCell from "./StatusCell";

const columns = [
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    flex: 1,
  },
  {
    field: "jobRole",
    headerName: "Job Role",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params) => {
      return (
        <StatusCell progress={params.row.progress} status={params.row.status} />
      );
    },
    flex: 1,
  },
  {
    field: "progress",
    headerName: "Progress",
    renderCell: (params) => {
      console.log(params.row.progress);
      return <CircularProgressWithLabel value={params.row.progress} />;
    },
    flex: 1,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    jobRole: "King of the North",
    status: "New",
    progress: 15,
    dueDate: "11 October 2022",
  },
  {
    id: 2,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    jobRole: "King of the North",
    status: "Pending",
    progress: 75,
    dueDate: "11 October 2022",
  },
  {
    id: 3,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    jobRole: "King of the North",
    status: "New",
    progress: 90,
    dueDate: "11 October 2022",
  },
  {
    id: 4,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    jobRole: "King of the North",
    status: "New",
    progress: 50,
    dueDate: "11 October 2022",
  },
];

const styles = {
  backgroundColor: "#1062A0",
  height: "100%",
  width: "100%",
  color: "white",
  border: "none",
  "& .MuiDataGrid-row:hover": { backgroundColor: "#1E88BC" },
  borderRadius: "15px",
  "& .MuiDataGrid-cellContent": {
    fontWeight: "300",
  },
  "& .MuiDataGrid-cell, .MuiDataGrid-columnHeaders": {
    borderBottom: "2px solid #1E88BC",
  },
};

export default function DataTable() {
  return (
    <div className="DataTable">
      <MUIDataGrid
        sx={styles}
        rows={rows}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        checkboxSelection
        components={{
          Footer: CustomFooter,
        }}
      />
    </div>
  );
}
