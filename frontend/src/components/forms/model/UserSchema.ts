import {z} from 'zod';
import type {UserDto} from "../../../client";

export const UserSchema = z.object({
    name: z.string().nonempty(),
    lastName: z.string().nonempty(),
    cardId: z.string().nonempty(),
});

export type UserFormData = z.infer<typeof UserSchema>;

export function getDefaultUser(): UserFormData {
    return {
        name: '',
        lastName: '',
        cardId: ''
    }
}

export function getUserFromUserDto(userDto: UserDto): UserFormData {
    return {
        name: userDto.name || '',
        lastName: userDto.lastName || '',
        cardId: userDto.cardId || ''
    }
}
