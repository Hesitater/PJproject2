package com.pj.mapper.user;

import java.util.List;

import com.pj.domain.community.CommunityFreeBoardVO;
import com.pj.domain.food.FoodVO;
import com.pj.domain.resell.ResellBoardVO;
import com.pj.domain.user.UserVO;

public interface UserMapper {

	public String getUserInfo();

	public List<UserVO> getUserList();
	
	public int insert(UserVO vo);

	public UserVO getUserEmail(String email);

	public UserVO checkEmail(String email);

	public int deleteUserEmail(String emailInfo);

	public boolean update(UserVO vo);

	public List<FoodVO> getFoodListByUserId(int id);

	public List<ResellBoardVO> getResllListByUserId(int id);

	public List<CommunityFreeBoardVO> getCMListByUserId(int id);
	
//	public List<FoodVO> getFoodList();
//
//	public List<ResellBoardVO> getResellList();
//
//	public List<CommunityFreeBoardVO> getCMList();
}
