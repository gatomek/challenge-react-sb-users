import {z} from 'zod';

export const EditedUserSchema = z.object( {
    id: z.number().nonoptional(),
    name: z.string().nonempty(),
    lastName: z.string().nonempty(),
    cardId: z.string().nonempty(),
    readDateTime: z.string().optional()
});

export type EditedUserFormData = z.infer<typeof EditedUserSchema>;
