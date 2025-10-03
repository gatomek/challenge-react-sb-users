package pl.gatomek.backend.users.model;

public record UserDto( Integer id, String name, String lastName, String cardId, String readDateTime) {

	public static UserDto of( String name, String lastName, String cardId) {
		return new UserDto( null, name, lastName, cardId, null);
	}

	public static UserDto of( int id, String name, String lastName, String cardId) {
		return new UserDto( id, name, lastName, cardId, null);
	}

	public static UserDto of( int id, String name, String lastName, String cardId, String readDateTime) {
		return new UserDto( id, name, lastName, cardId, readDateTime);
	}
}

