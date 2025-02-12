import { ItemDataType } from "./item";

interface ItemInfoProps {
    items: ItemDataType[],
    update: (items: ItemDataType[]) => void;
}
export const ItemInfo = ({items, update}: ItemInfoProps) => {
    // This would have a button for adding and editing item(s). When the form is
    // is submitted and data saved, update() is called to update the contents of
    // the grid as well. There are multiple tabs in the real application dealing
    // with things like reservations and attachments.
    return (
        <div>
            { items.map((item: ItemDataType) => {
                return (
                <p>
                <b>Id: </b>{item.id}<br/>
                <b>Name: </b> {item.name}<br/>
                <b>Serviced on: </b>{item.serviced_on}<br/>
                <b>Service interval: </b>{item.service_interval}<br/>
                </p>
                )
            })
            }
        </div>
    );
}