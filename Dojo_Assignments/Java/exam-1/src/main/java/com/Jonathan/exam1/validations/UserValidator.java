package com.Jonathan.exam1.validations;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import com.Jonathan.exam1.models.User;
@Component
public class UserValidator implements Validator {
    
    // 1
    @Override
    public boolean supports(Class<?> clazz) {
        return User.class.equals(clazz);
    }
    
    // 2
    @Override
    public void validate(Object target, Errors errors) {
        User user = (User) target;
        
        if (!user.getPasswordConfirmation().equals(user.getPassword())) {
            // 3
            errors.rejectValue("passwordConfirmation", "Match", "Password Confirmation must match Password");
        }  
//        if (user.getPassword().length() < 8) {
//            errors.rejectValue("password", "Length", "Password must be greater than 7 characters");
//        }
    }
}