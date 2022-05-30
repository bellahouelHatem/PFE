package com.example.app.services;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
@AllArgsConstructor
public class EmailService{// implements EmailSender {

    private final static Logger LOGGER = LoggerFactory.getLogger(EmailService.class);

    @Autowired
    private final JavaMailSender mailSender;

//    @Override
//    @Async
    public void sendEmail(String toEmail, String body){//String to, String email) {
try {


//            MimeMessage mimeMessage = mailSender.createMimeMessage();
//            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
//            helper.setText(email, true);
//            helper.setTo(to);
//            helper.setSubject("Confirm your email");
//            helper.setFrom("dogguimohamedhabib@gmail.com");
//            mailSender.send(mimeMessage);
            MimeMessage mimeMessage = mailSender.createMimeMessage();
           MimeMessageHelper message = new MimeMessageHelper(mimeMessage, "utf-8");
            //SimpleMailMessage message =new SimpleMailMessage();
            message.setFrom("emailpfe1@gmail.com");
            message.setTo(toEmail);
            message.setText(body,true);
            message.setSubject("Confirmation mail");
            mailSender.send(mimeMessage);
}catch (Exception e){

}

    }
}
