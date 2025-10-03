package pl.gatomek.backend.users.model;

import java.util.UUID;

public record User(String name, String lastName, String cardId) {

    public static User of(String name, String lastName) {
        Long n = UUID.randomUUID().getMostSignificantBits();
        String cardId = Long.toHexString(n);
        return new User(name, lastName, cardId);
    }

    public static User of(String name, String lastName, String cardId) {
        return new User(name, lastName, cardId);
    }
}
