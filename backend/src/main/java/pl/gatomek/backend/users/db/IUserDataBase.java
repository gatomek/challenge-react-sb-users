package pl.gatomek.backend.users.db;

import pl.gatomek.backend.users.model.UserDto;

import java.util.List;

public interface IUserDataBase {
    List<UserDto> getUsers();
	UserDto addUser( UserDto userDto);
	UserDto updateUser( UserDto userDto);
	void deleteUser( int id);
}
