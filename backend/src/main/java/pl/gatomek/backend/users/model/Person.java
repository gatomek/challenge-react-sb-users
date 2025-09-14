package pl.gatomek.backend.users.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class Person {
	private String pesel;
	private String name;
	private String lastName;
}
