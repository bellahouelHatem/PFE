package com.example.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

@Table(name = "AUTH_AUTHORITY")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Authority implements GrantedAuthority {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "ROLE_CODE")
	private String roleCode;
	
	@Column(name = "ROLE_DESCRIPTION")
	private String roleDescription;
	
	

	@Override
	public String getAuthority() {
		// TODO Auto-generated method stub
		return roleCode;
	}



	
	
}
