package code.fantatools.controllers;

import code.fantatools.entities.User;
import code.fantatools.repositories.UserRepository;
import code.fantatools.services.UserService;
import code.fantatools.support.exceptions.UserAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import javax.validation.Valid;
import java.util.List;
import java.util.Objects;

@Controller
@RequestMapping("/l")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserRepository userRepository, UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public List<User> getAll(){return userService.showAll();}

    @GetMapping("/login")
    public ModelAndView login(){
        ModelAndView mav = new ModelAndView("login");
        mav.addObject("user", new User());
        return mav;
    }

    @EnableWebSecurity
    class SecurityConfigurer extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.cors().and().csrf().disable();
        }
    }


    @PostMapping("/login")
    public String login(@RequestParam String username, String password){
        User user = new User(username, password);
        User oauthUser = userService.login(user.getUsername(), user.getPassword());
        System.out.println(oauthUser);
        if(Objects.nonNull(oauthUser))
            return "redirect:http://localhost:4200/login";
        else
            return "redirect://localhost:4200/team";
    }

    @PostMapping("/addUser")
    public ResponseEntity add(@RequestBody @Valid User user){
        try {
            userService.addUser(user);
        }catch (UserAlreadyExistsException e){
            return new ResponseEntity<>("User already exist", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("USer added successfully",HttpStatus.OK);
    }

}