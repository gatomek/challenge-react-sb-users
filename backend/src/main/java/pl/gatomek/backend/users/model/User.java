package pl.gatomek.backend.users.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class User {
	private String pesel;
	private String name;
	private String lastName;
	private String readDateTime;
}
