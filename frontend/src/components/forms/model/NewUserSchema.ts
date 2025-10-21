import {z} from 'zod';

export const NewUserSchema = z.object( {
    name: z.string().nonempty(),
    lastName: z.string().nonempty(),
    cardId: z.string().nonempty(),
});

export type NewUserFormData = z.infer<typeof NewUserSchema>;
