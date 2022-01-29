import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Footer from "../components/Footer";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const TableWrapper = styled.div`
  width: 70%;
  padding: 20px;
`;

// const DeleteButton = styled(DeleteOutlineIcon)`
//   color: red;
//   cursor: pointer;
// `;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

// const AddToCartButton = styled.button`
//   cursor: pointer;
//   width: 200px;
//   background-color: teal;
//   color: white;
//   border-radius: 20px;
//   border: none;
//   padding: 5px;
// `;

const Wishlist = () => {
  // const wishlistProducts = useSelector((state) => state.wishlist.products);
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   fetchWishlist(dispatch, currentUser._id);
  // }, [dispatch, currentUser._id]);

  // const handleDelete = (productId) => {
  //   deleteProductFromWishList(dispatch, currentUser._id, productId);
  // };

  // const handleClick = (productId) => {
  //   navigate(`/product/${productId}`);
  // };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>MY WISHLIST</Title>
        <TableWrapper></TableWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Wishlist;
