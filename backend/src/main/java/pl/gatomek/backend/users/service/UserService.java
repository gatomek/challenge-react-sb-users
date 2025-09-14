package pl.gatomek.backend.users.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.gatomek.backend.users.db.IUserDataBase;
import pl.gatomek.backend.users.model.User;

import java.util.List;

@RequiredArgsConstructor
@Service
class UserService implements IUserService {

	private final IUserDataBase db;

    @Override
	public List<User> getUsers() {
		return db.getUsers();
	}
}
