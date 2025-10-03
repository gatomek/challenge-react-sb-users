package pl.gatomek.backend.users.rest;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import pl.gatomek.backend.users.model.UserDto;
import pl.gatomek.backend.users.rest.model.UserRequest;
import pl.gatomek.backend.users.service.IUserService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class UserRestController {

	private final IUserService userService;

	@CrossOrigin
	@GetMapping( "/users")
	public List<UserDto> getUsers() {
		return userService.getUsers();
	}

	@CrossOrigin
	@PostMapping( value = "/users", consumes = "application/json")
	@ResponseStatus( HttpStatus.CREATED)
	public UserDto addUser( @RequestBody UserRequest req) {
		UserDto userDto = UserDto.of( req.getName(), req.getLastName(), req.getCardId());
		return userService.addUser( userDto);
	}

	@CrossOrigin
	@PutMapping(value = "/users/{id}", consumes = "application/json")
	public UserDto updateUser( @PathVariable int id, @RequestBody UserRequest req) {
		UserDto userDto = UserDto.of( id, req.getName(), req.getLastName(), req.getCardId());
		return userService.updateUser( userDto);
	}

	@CrossOrigin
	@DeleteMapping(value = "/users/{id}")
	public void deleteUser( @PathVariable int id) {
		userService.deleteUser( id);
	}
}
