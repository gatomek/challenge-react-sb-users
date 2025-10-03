package pl.gatomek.backend.users.service;

import pl.gatomek.backend.users.model.UserDto;

import java.util.List;

public interface IUserService {

	List<UserDto> getUsers();
	UserDto addUser(UserDto userDto);
	UserDto updateUser(UserDto userDto);
	void deleteUser(int id);
}
