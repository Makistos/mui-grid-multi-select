import React, { useState } from "react";
import {
    Box,
    Stack,
} from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid-pro";
import DeviceDetails from "device-details";
import DeviceListGrid from "device-list-grid";
import { ItemDataType } from "item";

const data: ItemDataType[] = [
    {id: 1,
     "name": "Item 1",
     "serviced_on": "2023-01-01",
     "service_interval": "24"},
    {id: 2,
     "name": "Item 2",
     "serviced_on": "2024-01-01",
     "service_interval": "24"},
    {id: 3,
     "name": "Item 3",
     "serviced_on": "2024-06-01",
     "service_interval": "12"},
];

const getMultipleItems = (ids: number[]): ItemDataType[] => {

    return data.filter((item) => ids.includes(item["id"]));
}

const getItem = (id: number): ItemDataType => {
    return data.filter((item) => id === item["id"])[0];
}

export default function MainWindow() {
    const [items, setItems] = useState<ItemDataType[]>([]);
    const deviceListRef = useGridApiRef();

    const setItemCb = (selectedItems: ItemDataType[]) => {
        const items = getMultipleItems(selectedItems.map((item) => item.id));
        setItems(items);
    };

    const handleItemUpdated = (newItems: ItemDataType[]) => {
        const itm = newItems;
        setItems(itm);
        for (var i = 0; i < newItems.length; i++) {
            const item = getItem(newItems[i].id);
            // Do nothing as there is no edit option
                // This is what should really happen here:
                // .then((newCompactItem: ItemDataType) => {
                    // if (newCompactItem) {
                    //     queryClient.setQueryData(
                    //         ["items"],
                    //         (oldData: CompactItemDataType[] | undefined) => {
                    //             if (oldData !== undefined) {
                    //                 if (oldData.find((i) => i.id === newCompactItem.id)) {
                    //                     return oldData.map((i) =>
                    //                         i.id !== newCompactItem.id ? i : newCompactItem,
                    //                     );
                    //                 } else {
                    //                     return [...oldData, newCompactItem];
                    //                 }
                    //             } else {
                    //                 return undefined;
                    //             }
                    //         },
                    //     );
                    // }
        }
    };

    return (
        <>
                <Box display="flex" flexDirection="column">
                    <Stack>
                        <Box height="40vh">
                            <DeviceListGrid
                                data={data}
                                setItems={setItemCb}
                                deviceListRef={deviceListRef}
                            />
                        </Box>
                        <Box>
                            <DeviceDetails items={items} onItemUpdated={handleItemUpdated} />
                        </Box>
                    </Stack>
                </Box>
        </>
    );
}
