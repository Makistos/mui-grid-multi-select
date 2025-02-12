import { ItemDataType } from "item";
import { ItemInfo} from "@/item-info";

interface DeviceDetailsProps {
    items: ItemDataType[];
    onItemUpdated: (items: ItemDataType[]) => void;
}

export default function DeviceDetails({ items, onItemUpdated }: DeviceDetailsProps) {
    if (items.length === 0) {
        return <></>;
    }

    // Below in the real app has a number of tabs.
    return (
        <ItemInfo items={items} update={onItemUpdated} />
    );
}
