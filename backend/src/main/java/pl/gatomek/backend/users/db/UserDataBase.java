package pl.gatomek.backend.users.db;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Repository;
import pl.gatomek.backend.users.model.Person;
import pl.gatomek.backend.users.model.User;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Getter
@Setter
@Repository
class UserDataBase implements IUserDataBase {

    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
    private Map<String, Person> db = new HashMap<>();

    //TODO: initialize the database from a CSV file at application startup
    public UserDataBase() {
        Person person0 = new Person("0", "Abcde", "Fghijklmnop");
        db.put(person0.getPesel(), person0);

        Person person1 = new Person("1", "Rstuwxyz", "Acdefghijklmnop");
        db.put(person1.getPesel(), person1);
    }

    @Override
    public List<User> getUsers() {
        List<Person> personList = db.values().stream().toList();
        return toUsers(personList);
    }

    @Override
    public List<User> toUsers(List<Person> personList) {
        String rdt = LocalDateTime.now().format(formatter);
        return personList.stream().map(p -> new User(p.getPesel(), p.getName(), p.getLastName(), rdt)).toList();
    }
}
