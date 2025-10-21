import {z} from 'zod';
import type {UserDto} from "../../../client";

export const EditedUserSchema = z.object({
    id: z.number().nonoptional(),
    name: z.string().nonempty(),
    lastName: z.string().nonempty(),
    cardId: z.string().nonempty(),
    readDateTime: z.string().optional()
});

export type EditedUserFormData = z.infer<typeof EditedUserSchema>;

export function getEditedUserFromUserDto(userDto: UserDto): EditedUserFormData {
    return {
        id: userDto.id!,
        name: userDto.name || '',
        lastName: userDto.lastName || '',
        cardId: userDto.cardId || '',
        readDateTime: userDto.readDateTime || ''
    }
}