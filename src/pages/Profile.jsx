import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 200px;
`;
const Left = styled.div`
  flex: 1;
`;
const LeftTop = styled.div`
  margin-bottom: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  background-color: #b2d8d8;
`;
const SmallImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid teal;
  margin-right: 20px; ;
`;
const ShortInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const Fullname = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: teal;
`;
const LeftBottom = styled.div`
  padding: 20px 0px;
  border: none;
  border-radius: 5px;
  background-color: #b2d8d8;
`;

const List = styled.ul`
  padding: 0 40px;
  list-style: none;
`;
const ListItem = styled.li`
  cursor: pointer;
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 15px;
  color: teal;
`;
const Hr = styled.hr`
  background-color: gray;
`;
const Logout = styled.button`
  width: 100px;
  cursor: pointer;
  margin-left: 40px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 300;
  border-radius: 5px;
  border: none;
  padding: 5px;
`;
const Right = styled.div`
  flex: 3;
  margin-left: 40px;
  border-radius: 5px;
  -webkit-box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.4);
`;
const RightTop = styled.div`
  padding: 40px 40px;
`;
const Title = styled.h1`
  color: teal;
`;
const RightCenter = styled.div`
  border-top: 0.5px solid gray;
  border-bottom: 0.5px solid gray;
  display: flex;
`;
const InfoContainer = styled.div`
  flex: 2;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  border-right: 0.5px solid gray;
`;
const InfoItem = styled.div`
  display: flex;
  font-size: 21px;
  margin-bottom: 25px;
`;
const InfoKey = styled.span`
  flex: 1;
  color: gray;
  font-weight: 300;
`;
const InfoValue = styled.input`
  flex: 2;
  font-weight: 500;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 21px;
  background-color: white;
  color: teal;

  &:focus {
    outline: none;
  }
`;

const ChangePasswordButton = styled.button`
  cursor: pointer;
  padding: 10px;
  width: 200px;
  font-size: 16px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid teal;
`;

const ImgContainer = styled.div`
  flex: 1;
  padding: 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ImgTitle = styled.span`
  font-size: 18px;
  color: gray;
  font-weight: 300;
  text-align: center;
`;
const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  margin: 20px 0;
  border-radius: 50%;
  object-fit: cover;
`;
const UploadImgButton = styled.button`
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid teal;
`;
const RightBottom = styled.div`
  padding: 20px 0 40px 0;
  display: flex;
  justify-content: flex-end;
`;
const MemberContainer = styled.div`
  flex: 2;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
`;
const MemberTitle = styled.span`
  font-size: 21px;
  font-weight: 500;
  color: teal;
`;
const MemberName = styled.span`
  font-size: 16px;
  font-weight: 300;
`;
const EditContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 80px;
`;
const EditButton = styled.button`
  cursor: pointer;
  width: 100px;
  padding: 10px;
  font-size: 16px;
  background-color: white;
  border-radius: 5px;
  background-color: tomato;
  color: darkred;
  font-weight: 500;
  border: none;
`;

const Profile = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Left>
          <LeftTop>
            <SmallImg
              src="https://firebasestorage.googleapis.com/v0/b/shop-2edcf.appspot.com/o/163664544026275519312_2575922042638572_6888852351344443392_n.jpg?alt=media&token=26bc9b04-1554-4fef-9c7b-9ea30c2d3775"
              alt=""
            />
            <ShortInfo>
              <Fullname>Thang Nguyen</Fullname>
              <MemberName>Gold Member</MemberName>
            </ShortInfo>
          </LeftTop>
          <LeftBottom>
            <List>
              <ListItem>My Orders</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Notifications</ListItem>
              <ListItem>Settings</ListItem>
            </List>
            <Hr />
            <Logout>Log out</Logout>
          </LeftBottom>
        </Left>
        <Right>
          <RightTop>
            <Title>Customer Profile</Title>
          </RightTop>
          <RightCenter>
            <InfoContainer>
              <InfoItem>
                <InfoKey>First Name</InfoKey>
                <InfoValue type="text" value="Thang" />
              </InfoItem>
              <InfoItem>
                <InfoKey>Last Name</InfoKey>
                <InfoValue type="text" value="Nguyen" />
              </InfoItem>
              <InfoItem>
                <InfoKey>Email</InfoKey>
                <InfoValue type="text" value="ndth4ng@gmail.com" disabled />
              </InfoItem>
              <InfoItem>
                <InfoKey>Birthday</InfoKey>
                <InfoValue type="date" value="2000-07-19" />
              </InfoItem>
              <ChangePasswordButton>Change Password</ChangePasswordButton>
            </InfoContainer>
            <ImgContainer>
              <ImgTitle>Profile Image</ImgTitle>
              <ProfileImg
                src="https://firebasestorage.googleapis.com/v0/b/shop-2edcf.appspot.com/o/163664544026275519312_2575922042638572_6888852351344443392_n.jpg?alt=media&token=26bc9b04-1554-4fef-9c7b-9ea30c2d3775"
                alt=""
              />
              <UploadImgButton>Upload New</UploadImgButton>
            </ImgContainer>
          </RightCenter>
          <RightBottom>
            <MemberContainer>
              <MemberTitle>Member</MemberTitle>
              <MemberName>Gold Member</MemberName>
            </MemberContainer>
            <EditContainer>
              <EditButton>Edit Profile</EditButton>
            </EditContainer>
          </RightBottom>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Profile;
