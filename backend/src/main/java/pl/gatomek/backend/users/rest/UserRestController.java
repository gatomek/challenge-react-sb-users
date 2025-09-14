package pl.gatomek.backend.users.rest;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.gatomek.backend.users.model.User;
import pl.gatomek.backend.users.service.IUserService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class UserRestController {

	private final IUserService userService;

	@CrossOrigin
	@GetMapping( "/users")
	List<User> getUsers() {
		return userService.getUsers();
	}
}
