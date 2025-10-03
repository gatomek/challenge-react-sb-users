package pl.gatomek.backend.users.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.gatomek.backend.users.db.IUserDataBase;
import pl.gatomek.backend.users.model.UserDto;

import java.util.List;

@RequiredArgsConstructor
@Service
class UserService implements IUserService {

	private final IUserDataBase db;

	@Override
	public List<UserDto> getUsers() {
		return db.getUsers();
	}

	@Override
	public UserDto addUser(UserDto userDto) {
		return db.addUser(userDto);
	}

	@Override
	public UserDto updateUser(UserDto userDto) {
		return db.updateUser(userDto);
	}

	@Override
	public void deleteUser(int id) {
		db.deleteUser(id);
	}
}
