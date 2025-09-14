package pl.gatomek.backend.users.db;

import pl.gatomek.backend.users.model.Person;
import pl.gatomek.backend.users.model.User;

import java.util.List;

public interface IUserDataBase {
    List<User> getUsers();
    List<User> toUsers( List<Person> personList);
}
