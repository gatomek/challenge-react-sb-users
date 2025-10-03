package pl.gatomek.backend.users.rest.model;

import lombok.Value;

@Value
public class UserRequest {
	String name;
	String lastName;
	String cardId;
}
