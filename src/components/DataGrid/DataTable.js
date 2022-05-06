import { DataGrid as MUIDataGrid } from "@mui/x-data-grid";

import CircularProgressWithLabel from "./CircularProgressWithLabel";
import CustomFooter from "./CustomDataTableFooter";

import "./DataTable.scss";
import StatusCell from "./StatusCell";

const columns = [
  {
    field: "name",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
  },
  {
    field: "role",
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
    field: "date",
    headerName: "Due Date",
    flex: 1,
  },
];

const styles = {
  backgroundColor: "#1062A0",
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

export default function DataTable({ data }) {
  return (
    <div className="DataTable">
      <MUIDataGrid
        sx={styles}
        autoHeight
        rows={data}
        columns={columns}
        checkboxSelection
        components={{
          Footer: CustomFooter,
        }}
      />
    </div>
  );
}
