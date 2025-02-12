import {z} from 'zod';

export const ItemData = z.object({
  id: z.number().nonnegative(),
  name: z.string(),
  service_interval: z.string(),
  serviced_on: z.string(),
});

export const ItemDataArray = z.array(ItemData);

export type ItemDataType = z.infer<typeof ItemData>;
export type ItemDataArrayType = z.infer<typeof ItemDataArray>;
