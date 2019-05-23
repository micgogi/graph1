package com.micgogi.mishthi.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/graph")
public class GraphController {

	
	@GetMapping
	public ResponseEntity<List> getData(){
		List<Integer> l = new ArrayList<Integer>();
		for(int i=0;i<10;i++){
			double random = Math.random() * 9 + 1;
			int random1=(int) random;
			if(random1==7){
				l.add(random1);
				break;
				
			}else{
				l.add(random1);
			}
			
		}
		
		return new ResponseEntity<List>(l,HttpStatus.OK);
	}
}
