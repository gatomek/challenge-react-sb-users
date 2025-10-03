package pl.gatomek.backend.users.db;

import org.springframework.stereotype.Repository;
import pl.gatomek.backend.users.model.User;
import pl.gatomek.backend.users.model.UserDto;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Repository
class UserDataBase implements IUserDataBase {

    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
    private final Map<Integer, User> db = new HashMap<>();

    public UserDataBase() {
        db.put(calcNewId(), User.of("Barrett", "Hamilton"));
        db.put(calcNewId(), User.of("Logan", "Bright"));
    }

    private Integer calcNewId() {
        int max = db.keySet().stream().mapToInt(v -> v).max().orElse(0);
        return ++max;
    }

    @Override
    public List<UserDto> getUsers() {
        String readDateTime = LocalDateTime.now().format(formatter);

        return db.entrySet().stream().sorted(Comparator.comparingInt(Map.Entry<Integer, User>::getKey)).map(entry -> {
            User u = entry.getValue();
            return UserDto.of(entry.getKey(), u.name(), u.lastName(), u.cardId(), readDateTime);
        }).toList();
    }

    @Override
    public UserDto addUser(UserDto userDto) {
        User user = User.of(userDto.name(), userDto.lastName(), userDto.cardId());
        int id = calcNewId();
        db.put(id, user);

        String readDateTime = LocalDateTime.now().format(formatter);
        return new UserDto(id, user.name(), user.lastName(), user.cardId(), readDateTime);
    }

    @Override
    public UserDto updateUser(UserDto userDto) {
        int id = userDto.id();

        Optional.ofNullable(db.get(id)).orElseThrow(() -> new NoSuchElementException("User Not Found"));
        User user = new User(userDto.name(), userDto.lastName(), userDto.cardId());
        db.put(id, user);

        String readDateTime = LocalDateTime.now().format(formatter);
        return new UserDto(id, user.name(), user.lastName(), user.cardId(), readDateTime);
    }

    @Override
    public void deleteUser(int id) {
        db.remove(id);
    }
}
