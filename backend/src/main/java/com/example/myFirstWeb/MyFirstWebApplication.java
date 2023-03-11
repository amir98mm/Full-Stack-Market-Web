package com.example.myFirstWeb;

import com.example.myFirstWeb.beans.User;
import com.example.myFirstWeb.bl.UserBL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Scanner;

@SpringBootApplication
public class MyFirstWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyFirstWebApplication.class, args);
	}

//	@Override
//	public void run(String... args) throws Exception
//	{
//		addUser();
//	}
//
//	public void addUser(){
//		Scanner scanner = new Scanner(System.in);
//
//		scanner = new Scanner(System.in);
//		System.out.println("Enter username:");
//		String name = scanner.nextLine();
//
//		scanner = new Scanner(System.in);
//		System.out.println("Enter password:");
//		String password = scanner.nextLine();
//
//		scanner = new Scanner(System.in);
//		System.out.println("Enter email:");
//		String email = scanner.nextLine();
//
//		User user = new User(name,password,email);
//		userBL.addUser(user);
//	}

}
