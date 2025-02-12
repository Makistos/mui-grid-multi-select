import React, { useState } from "react";
import { useGridApiRef } from "@mui/x-data-grid-pro";
import { ItemDataType } from "item";
import DeviceDetails from "device-details";
import DeviceListGrid from "device-list-grid"
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const data: ItemDataType[] = [

]
const getMultipleItems = (ids: number[]) => {
    return data.filter((item) => ids.includes(item['id']))
}

const getItem = (id: number) => {
    return data.filter((item) => id === item['id'])[0]

}

export default function MainWindow() {
    const [items, setItems] = useState<ItemDataType[]>([]);
    const deviceListRef = useGridApiRef();

    const setItemCb = (selectedItems: ItemDataType[]) => {
        // In the real app data is read from the database here
        const items = getMultipleItems(selectedItems.map((item) => item.id));
        setItems(items);
    };

    const handleItemUpdated = (newItems: ItemDataType[]) => {
        for (var i = 0; i < newItems.length; i++) {
            const item: ItemDataType = getItem(newItems[i].id);
            // In the real app updating the grid happens like this:
                // .then((newCompactItem) => {
                //     if (newCompactItem) {
                //         queryClient.setQueryData(
                //             ["items"],
                //             (oldData: CompactItemDataType[] | undefined) => {
                //                 if (oldData !== undefined) {
                //                     if (oldData.find((i) => i.id === newCompactItem.id)) {
                //                         return oldData.map((i) =>
                //                             i.id !== newCompactItem.id ? i : newCompactItem,
                //                         );
                //                     } else {
                //                         return [...oldData, newCompactItem];
                //                     }
                //                 } else {
                //                     return undefined;
                //                 }
                //             },
                //         );
                //     }
                // })
                // .catch((reason: string) => {
                //     alert(reason);
                // });
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
