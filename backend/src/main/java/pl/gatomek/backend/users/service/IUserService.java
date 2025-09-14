package pl.gatomek.backend.users.service;

import pl.gatomek.backend.users.model.User;

import java.util.List;

public interface IUserService{
    List<User> getUsers();
}
