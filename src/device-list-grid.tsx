import {
    DataGridPro,
    GridColDef,
    GridCallbackDetails,
    GridRowParams,
    MuiEvent,
    GridValidRowModel,
    GridRowId,
} from "@mui/x-data-grid-pro";
import { ItemDataType } from "item";

const columns: GridColDef[] = [
    {
        field: "name",
        headerName: "Name",
        width: 200,
    },
    {
        field: "serviced_on",
        headerName: "Serviced on",
        width: 100,
    },
    {
        field: "service_interval",
        headerName: "Next Service",
        width: 100,
    },
];

interface DeviceListGridProps {
    data: ItemDataType[] | undefined;
    setItems: (items: ItemDataType[]) => void;
    deviceListRef: any;
}

export default function DeviceListGrid({
    data,
    setItems,
    deviceListRef,
}: DeviceListGridProps) {

    const onRowClick = (
        params: GridRowParams,
        event: MuiEvent,
        details: GridCallbackDetails,
    ): void => {
        const rows = deviceListRef.current.getSelectedRows();
        let rowIds: ItemDataType[] = [];
        rows.forEach((value: Record<GridRowId, ItemDataType>) => rowIds.push(value[1]));
        setItems(rowIds);
    };

    const getRowId = (row: GridValidRowModel) => {
        return row.id;
    };

    return (
        <>
            {data === undefined ? (
                <DataGridPro rows={[]} columns={columns} />
            ) : (
                <DataGridPro
                    apiRef={deviceListRef}
                    rowHeight={25}
                    rows={data}
                    columns={columns}
                    density="compact"
                    onRowClick={onRowClick}
                    getRowId={getRowId}
                    ignoreDiacritics={true}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 50 } },
                        columns: {
                            columnVisibilityModel: {
                                id: false,
                            },
                        },
                        sorting: {
                            sortModel: [{ field: "eb_id", sort: "asc" }],
                        },
                    }}
                    sx={{
                        "& .name-cell-free-available": {
                            backgroundColor: "lime",
                            color: "black",
                            fontStyle: "normal",
                        },
                        "& .name-cell-blocked-available": {
                            backgroundColor: "black",
                            color: "white",
                            fontStyle: "normal",
                        },
                        "& .name-cell-1-available": {
                            backgroundColor: "greenyellow",
                            color: "black",
                            fontStyle: "normal",
                        },
                        "& .name-cell-2-available": {
                            backgroundColor: "yellow",
                            color: "black",
                            fontStyle: "normal",
                        },
                        "& .name-cell-3-available": {
                            backgroundColor: "orange",
                            color: "black",
                            fontStyle: "normal",
                        },
                        "& .name-cell-4-available": {
                            backgroundColor: "red",
                            color: "black",
                            fontStyle: "normal",
                        },
                        "& .name-cell-free-not-available": {
                            backgroundColor: "lime",
                            color: "grey",
                            fontStyle: "italic",
                        },
                        "& .name-cell-blocked-not-available": {
                            backgroundColor: "black",
                            color: "white",
                            fontStyle: "italic",
                        },
                        "& .name-cell-1-not-available": {
                            backgroundColor: "greenyellow",
                            color: "grey",
                            fontStyle: "italic",
                        },
                        "& .name-cell-2-not-available": {
                            backgroundColor: "yellow",
                            color: "grey",
                            fontStyle: "italic",
                        },
                        "& .name-cell-3-not-available": {
                            backgroundColor: "orange",
                            color: "grey",
                            fontStyle: "italic",
                        },
                        "& .name-cell-4-not-available": {
                            backgroundColor: "red",
                            color: "grey",
                            fontStyle: "italic",
                        },
                    }}
                />
            )}
        </>
    );
}
