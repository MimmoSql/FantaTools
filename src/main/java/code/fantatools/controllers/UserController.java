package code.fantatools.controllers;

import code.fantatools.entities.User;
import code.fantatools.services.UserService;
import code.fantatools.support.exceptions.TeamAlreadyExsistsException;
import code.fantatools.support.exceptions.UserAlreadyExistsException;
import net.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/add")
    public ResponseEntity add(@RequestBody User user){
        try {
            userService.add(user);
        }catch (UserAlreadyExistsException e){

            return new ResponseEntity<>("User already exist", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("user added successfully",HttpStatus.OK);
    }

    @GetMapping("/showUser")
    public ResponseEntity<User> getUser(@RequestParam String email){
        return new ResponseEntity<User>(userService.getUser(email),HttpStatus.OK);
    }

    @PostMapping("/addTeam")
    public ResponseEntity<User> setName(@RequestParam String email, String name){
        User u = userService.setNameTeam(email,name);
        return new ResponseEntity<User>(u,HttpStatus.OK);
    }

}
